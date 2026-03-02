import { type Contact, type InsertContact, contactSubmissions } from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { desc } from "drizzle-orm";
import pg from "pg";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contactSubmissions).values(contact).returning();
    return result;
  }

  async getContacts(): Promise<Contact[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }
}

export const storage = new DatabaseStorage();