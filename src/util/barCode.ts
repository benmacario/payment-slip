const barCode = (code: string): string => {
  const code1 = code.slice(0, 9).slice(0, 4);
  const code2 = code.slice(32, 33);

  const code3 = code.slice(33, code.length);
  const code4 = code.slice(4, 9);
  const code5 = code.slice(10, 20);
  const code6 = code.slice(21, 31);

  const barCodeFormat = `${code1 + code2 + code3 + code4 + code5 + code6}`;

  return barCodeFormat;
};

export default barCode;
