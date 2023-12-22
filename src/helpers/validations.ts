const operationReg = /[\+\-\*\/\%\^]/;
const invalidOperationToBegin = /[\+\*\/\%]/;

function hasValidDot(str: string): boolean {
  if (str.startsWith('0')) {
    return false;
  }

  const hasDot = str.match(/\./g);
  const countDot = hasDot ? hasDot.length : 0;

  return countDot <= 1;
}

function hasValidOperations(str: string, toAdd: string): boolean {
  const hasLastOperation = operationReg.test(str[str.length - 1]);
  const isOperation = operationReg.test(toAdd);

  return !(hasLastOperation && isOperation);
}

function isValidFirstCharacter(str: string, toAdd: string): boolean {
  return !(str === '' && invalidOperationToBegin.test(toAdd));
}

export const isValidDisplay = (display: string, toAdd: string): boolean => {
  const isValidDots = hasValidDot(display + toAdd);
  const isValidOperation = hasValidOperations(display, toAdd);
  const isInvalidFirst = isValidFirstCharacter(display, toAdd);

  console.log(
    isValidDots && isValidOperation && isInvalidFirst,
    '   ',
    isInvalidFirst
  );
  return isValidDots && isValidOperation && isInvalidFirst;
};

export const isValidToShowResult = (str: string): boolean => {
  return !operationReg.test(str[str.length - 1]);
};
