import { Router } from "express";
import validateCode from "src/middlewares/validateCode";
import barCode from "src/util/barCode";
import { getDateAndAmount } from "src/util/getDateAndAmount";

const router = Router();

interface IResponse {
  barCode: string;
  amount?: string;
  expirationDate?: string;
}

router.get("/boleto/:code", validateCode, (req, res) => {
  const { code } = req.params;

  const { amount, expirationDate } = getDateAndAmount({
    barCode: code,
  });

  const result: IResponse = {
    barCode: barCode(code),
    amount,
    expirationDate,
  };

  return res.json(result);
});

export default router;
