interface IContent {
  barCode: string;
}

interface IData {
  amount: string;
  expirationDate: string;
}

const format = (amount: string) => {
  const formatAmount = amount.replace(/([0-9]{2})$/, ".$1");
  if (formatAmount.length > 6) {
    formatAmount.replace(/([0-9]{3}),([0-9]{2}$)/, ".$1,$2");
  }
  return formatAmount;
};

const getDateAndAmount = ({ barCode }: IContent): IData => {
  const code = barCode.slice(33, barCode.length);
  const dateBase = new Date("1997/10/07");
  const expiryCode = parseInt(code.slice(0, 4), 10);

  dateBase.setTime(dateBase.getTime() + expiryCode * 24 * 60 * 60 * 1000);

  return {
    amount: format(parseInt(code.slice(4, code.length), 10).toString()),
    expirationDate:
      expiryCode < 1000
        ? "Boleto pode ser pago em qualquer data"
        : dateBase.toLocaleDateString(),
  };
};

export { getDateAndAmount };
