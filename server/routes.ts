import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.status(201).json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, message: "Datos inválidos", errors: error.errors });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
      }
    }
  });

  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
  });

  return httpServer;
}