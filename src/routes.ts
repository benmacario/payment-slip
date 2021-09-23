import express, { Request, Response } from "express";

const router = express.Router();

interface IResponse {
  barCode: string;
  amount?: string;
  expirationDate?: string;
}

router.get("/boleto/:barCode", (req: Request, res: Response) => {
  const { barCode } = req.params;

  const validateBarCode = /^[\d]+$/.test(barCode);

  if (!validateBarCode) {
    return res.status(400).json({
      error: "As informações passadas como linha digitável não é um número",
    });
  }

  const result: IResponse = {
    barCode,
    amount: "20.00",
    expirationDate: "2021-09-22",
  };

  return res.json(result);
});

export default router;
