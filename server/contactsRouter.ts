import express, { Request, Response } from "express";
import { db } from "./app";

const router = express.Router();

router.get("/api/contacts", (req: Request, res: Response): void => {
  db.select("*")
    .from("contacts")
    .then(contacts => {
      res.status(200).send(contacts);
    })
    .catch(error => res.sendStatus(400).json(error.message));
});

router.post("/api/contacts", (req: Request, res: Response): void => {
  const { name, phonenumber, email } = req.body;

  db("contacts")
    .insert({ name, phonenumber, email })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => res.sendStatus(400).json(error.message));
});

router.put("/api/contacts", (req: Request, res: Response): void => {
  const { id, name, phonenumber, email } = req.body;

  db("contacts")
    .where({ id })
    .update({ name, phonenumber, email })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => res.sendStatus(400).json(error.message));
});

router.delete("/api/contacts", (req: Request, res: Response): void => {
  const { id } = req.body;

  db("contacts")
    .where({ id })
    .del()
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => res.sendStatus(400).json(error.message));
});

export default router;
