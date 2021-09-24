const verifyNumber = (number: number) => {
  if (number > 9) {
    const split = number.toString().split("");
    const result = parseInt(split[0], 10) + parseInt(split[1], 10);

    return result;
  }

  return number;
};

const isValide = (
  remaining1: number,
  remaining2: number,
  remaining3: number,
  digits: number[]
) => {
  const numbers = [
    parseInt(remaining1.toString().split("")[1], 10),
    parseInt(remaining2.toString().split("")[1], 10),
    parseInt(remaining3.toString().split("")[1], 10),
  ];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] !== digits[i]) {
      return false;
    }
  }

  return true;
};

const calcNumberVerification = (code: string): boolean => {
  if (code.length < 47 || code.length > 47) {
    return false;
  }

  const positions = [];
  const verifyingDigit: number[] = [];
  const resultPosition1 = [];
  const resultPosition2 = [];
  const resultPosition3 = [];

  positions.push(
    code.slice(0, 9).split("").reverse(),
    code.slice(10, 20).split("").reverse(),
    code.slice(21, 31).split("").reverse()
  );

  verifyingDigit.push(
    parseInt(code.slice(9, 10), 10),
    parseInt(code.slice(20, 21), 10),
    parseInt(code.slice(31, 32), 10)
  );

  positions.map((position: [], index: number) => {
    for (let i = 1; i <= position.length; i += 1) {
      if (index === 0) {
        if (i % 2 === 0) {
          const number = parseInt(position[i - 1], 10) * 1;
          resultPosition1.push(verifyNumber(number));
        } else {
          const number = parseInt(position[i - 1], 10) * 2;
          resultPosition1.push(verifyNumber(number));
        }
      }

      if (index === 1) {
        if (i % 2 === 0) {
          const number = parseInt(position[i - 1], 10) * 1;
          resultPosition2.push(verifyNumber(number));
        } else {
          const number = parseInt(position[i - 1], 10) * 2;
          resultPosition2.push(verifyNumber(number));
        }
      }

      if (index === 2) {
        if (i % 2 === 0) {
          const number = parseInt(position[i - 1], 10) * 1;
          resultPosition3.push(verifyNumber(number));
        } else {
          const number = parseInt(position[i - 1], 10) * 2;
          resultPosition3.push(verifyNumber(number));
        }
      }
    }
    return position;
  });

  const total1 = resultPosition1.reduce((total, valor) => total + valor);
  const total2 = resultPosition2.reduce((total, valor) => total + valor);
  const total3 = resultPosition3.reduce((total, valor) => total + valor);

  const remaining1 = Math.ceil(total1 / 10) * 10 - (total1 % 10);
  const remaining2 = Math.ceil(total2 / 10) * 10 - (total2 % 10);
  const remaining3 = Math.ceil(total3 / 10) * 10 - (total3 % 10);

  return isValide(remaining1, remaining2, remaining3, verifyingDigit);
};

export default calcNumberVerification;
