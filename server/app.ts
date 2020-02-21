import express, { Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

import contactsRouter from "./contactsRouter";

dotenv.config();

export const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL
  }
});

db.schema
  .createTable("contacts", table => {
    table.increments("id");
    table.string("name");
    table.string("phonenumber");
    table.string("email");
  })
  .then(() =>
    db("contacts").insert([
      {
        name: "Tim Banana",
        phonenumber: "12345678",
        email: "timb@forscale.com"
      },
      { name: "Bob Builder", phonenumber: "87654321", email: "bob@builder.io" },
      { name: "Joe Schmoe", phonenumber: "24688642", email: "cheap@cheese.co" },
      {
        name: "Alice Whodafis",
        phonenumber: "13577531",
        email: "waiting@twentyfouryears.ok"
      }
    ])
  )
  .catch(error => {
    console.error(error.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(contactsRouter);

export default app;
