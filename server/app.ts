import express, { Request, Response } from "express";

import contactsRouter from "./contactsRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(contactsRouter);

/* app.get("*", (req: Request, res: Response): void => {
  res.send("API response");
}); */

export default app;
