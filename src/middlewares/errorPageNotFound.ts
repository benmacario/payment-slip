import { Request, Response } from "express";

const errorPageNotFound = (req: Request, res: Response): Response => {
  return res.status(404).json({
    status: 404,
    error: "Aparentemente está rota não existe!",
  });
};

export default errorPageNotFound;
