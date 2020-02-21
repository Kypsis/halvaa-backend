import express, { Request, Response } from "express";
import { db } from "./app";

const router = express.Router();

router.get("/api/contacts", (req: Request, res: Response): void => {
  db.select("*")
    .from("contacts")
    .then(contacts => {
      res.send(contacts);
    })
    .catch(error => res.status(400).json(error.message));
});

router.post("/api/contacts", (req: Request, res: Response): void => {
  const { name, phonenumber, email } = req.body;

  db("contacts")
    .insert({ name, phonenumber, email })
    .then(() => {
      res.end();
    })
    .catch(error => res.status(400).json(error.message));
});

router.put("/api/contacts", (req: Request, res: Response): void => {
  const { id, name, phonenumber, email } = req.body;

  db("contacts")
    .where({ id })
    .update({ name, phonenumber, email })
    .then(() => {
      res.end();
    })
    .catch(error => res.status(400).json(error.message));
});

router.delete("/api/contacts", (req: Request, res: Response): void => {
  const { id } = req.body;

  db("contacts")
    .where({ id })
    .del()
    .then(() => {
      res.end();
    })
    .catch(error => res.status(400).json(error.message));
});

export default router;
