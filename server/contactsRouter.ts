import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/contacts", (req: Request, res: Response): void => {
  try {
    res.status(200).send("All contacts");
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

router.post("/api/contacts", (req: Request, res: Response): void => {
  try {
    res.status(200).send("New contact");
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

router.put("/api/contacts/:id", (req: Request, res: Response): void => {
  try {
    res.status(200).send(`Changed contact: ${req.params.id}`);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

router.delete("/api/contacts/:id", (req: Request, res: Response): void => {
  try {
    res.status(200).send(`Deleted contact: ${req.params.id}`);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

export default router;
