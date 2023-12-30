const operationReg = /[+*%\/]/;
const allOperations = /[\+\-\*%\/]/;

function hasValidDot(str: string): boolean {
  if (str.startsWith('0')) {
    return false;
  }

  const hasDot = str.match(/\./g);
  const countDot = hasDot ? hasDot.length : 0;

  return countDot <= 1;
}

function hasValidOperations(str: string, toAdd: string): boolean {
  const hasLastOperation = allOperations.test(str[str.length - 1]);
  const isOperation = allOperations.test(toAdd);

  return !(hasLastOperation && isOperation);
}

function isValidFirstCharacter(str: string, value: string): boolean {
  const isEmpty = str.length === 0;
  if (isEmpty && operationReg.test(value)) {
    return false;
  }

  if (isEmpty && value === '-') {
    return true;
  }

  return true;
}

export const isValidDisplay = (
  display: string,
  value: string
): boolean | null => {
  const isValidDots = hasValidDot(display + value);
  const isValidOperation = hasValidOperations(display, value);
  const isInvalidFirst = isValidFirstCharacter(display, value);

  return isValidDots && isValidOperation && isInvalidFirst;
};

export const isValidToShowResult = (str: string): boolean => {
  return !operationReg.test(str[str.length - 1]);
};
