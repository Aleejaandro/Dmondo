import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import fs from "fs";
import path from "path";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const viteConfig = (await import("../vite.config.js")).default;

  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientDir = path.resolve(import.meta.dirname, "..", "client");

      let htmlFile: string;
      const cleanUrl = url.split("?")[0].split("#")[0];

      if (cleanUrl === "/" || cleanUrl === "/index.html") {
        htmlFile = path.join(clientDir, "index.html");
      } else if (cleanUrl.endsWith(".html")) {
        htmlFile = path.join(clientDir, cleanUrl);
      } else if (cleanUrl.endsWith("/")) {
        htmlFile = path.join(clientDir, cleanUrl, "index.html");
      } else {
        htmlFile = path.join(clientDir, cleanUrl, "index.html");
        if (!fs.existsSync(htmlFile)) {
          htmlFile = path.join(clientDir, cleanUrl + ".html");
        }
      }

      if (!fs.existsSync(htmlFile)) {
        htmlFile = path.join(clientDir, "index.html");
      }

      let template = await fs.promises.readFile(htmlFile, "utf-8");
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}