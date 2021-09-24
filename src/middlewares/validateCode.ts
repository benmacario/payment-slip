import { Request, Response, NextFunction } from "express";
import calcNumberVerification from "src/util/calcNumberVerification";

const validateCode = (
  req: Request,
  res: Response,
  next: NextFunction
): unknown => {
  const { code } = req.params;

  const validateCode = /^[\d]+$/.test(code);

  if (!validateCode) {
    return res.status(400).json({
      error: "As informações passadas como linha digitável não é um número",
    });
  }

  if (!calcNumberVerification(code)) {
    return res.status(400).json({
      error: "Aparentemente o codigo que você enviou não é valido!",
    });
  }

  return next();
};

export default validateCode;
