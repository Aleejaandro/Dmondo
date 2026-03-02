import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  app.use("/{*path}", (req, res) => {
    const cleanUrl = req.path.split("?")[0].split("#")[0];

    let htmlFile: string;
    if (cleanUrl === "/" || cleanUrl === "/index.html") {
      htmlFile = path.join(distPath, "index.html");
    } else if (cleanUrl.endsWith(".html")) {
      htmlFile = path.join(distPath, cleanUrl);
    } else if (cleanUrl.endsWith("/")) {
      htmlFile = path.join(distPath, cleanUrl, "index.html");
    } else {
      htmlFile = path.join(distPath, cleanUrl, "index.html");
      if (!fs.existsSync(htmlFile)) {
        htmlFile = path.join(distPath, cleanUrl + ".html");
      }
    }

    if (!fs.existsSync(htmlFile)) {
      htmlFile = path.join(distPath, "index.html");
    }

    res.sendFile(htmlFile);
  });
}