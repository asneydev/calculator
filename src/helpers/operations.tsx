import { isValidToShowResult } from './validations';

export const equal = (str: string): number => {
  if (!isValidToShowResult(str)) {
    return 0;
  }

  const exprecion = createExprecion(str);
  const result = calculteExprecion(exprecion);

  const round = parseFloat(result).toFixed(2);

  return parseFloat(round);
};

const calculteExprecion = (operations: string[]): string => {
  if (operations.length === 1) {
    return operations[0];
  }

  const hasFirstCalcs = operations.some((el) => el.match(/[*\/]/));

  let operationIndex = hasFirstCalcs
    ? operations.findIndex((el) => el.match(/[*\/]/))
    : operations.findIndex((el) => el.match(/[+-]/));

  if (operationIndex === 0) {
    operationIndex = 1;
  }

  const calc = operation(operations, operationIndex).toString();

  const firstArrSection = operations.slice(0, operationIndex - 1);
  const restSection = operations.slice(operationIndex + 2);
  const result = [...firstArrSection, calc, ...restSection];
  return calculteExprecion(result);
};

const operation = (arr: string[], index: number): number => {
  const x = arr[index - 1];
  const y = arr[index + 1];

  switch (arr[index]) {
    case '+': {
      return add(x, y);
    }
    case '-': {
      return sust(x, y);
    }
    case '*': {
      return multiplication(x, y);
    }
    case '/': {
      return division(x, y);
    }
    default: {
      return 0;
    }
  }
};

export const createExprecion = (str: string) => {
  let tempNum = str[0];
  const temp: string[] = [];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === '+') {
      temp.push(tempNum);
      temp.push('+');

      tempNum = '';
    } else if (str[i] === '-' && i !== 0) {
      temp.push(tempNum);
      temp.push('-');

      tempNum = '';
    } else if (str[i] === '*') {
      temp.push(tempNum);
      temp.push('*');

      tempNum = '';
    } else if (str[i] === '/') {
      temp.push(tempNum);
      temp.push('/');

      tempNum = '';
    } else {
      tempNum += str[i];

      if (i === str.length - 1) {
        temp.push(tempNum);
      }
    }
  }

  return temp;
};

const add = (num1: string, num2: string) => parseFloat(num1) + parseFloat(num2);
const sust = (num1: string, num2: string) =>
  parseFloat(num1) - parseFloat(num2);
const multiplication = (num1: string, num2: string) =>
  parseFloat(num1) * parseFloat(num2);
const division = (num1: string, num2: string) =>
  parseFloat(num1) / parseFloat(num2);

export const percent = (str: string): number => {
  const calc = equal(str);

  return calc / 100;
};
