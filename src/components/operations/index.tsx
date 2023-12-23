import { isValidToShowResult } from "../../helpers/validations";

function equal(str: string): number {
  if(!isValidToShowResult(str)){
    return 0;
  }
  const reg = /[*/+-\^]/;
  if (str.match(reg)) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '+') {
        return parseFloat(temp) + equal(str.substring(i + 1));
      } else if (str[i] === '-' && i !== 0) {
        return parseFloat(temp) - equal(str.substring(i + 1));
      } else if (str[i] === '*') {
        return parseFloat(temp) * equal(str.substring(i + 1));
      } else if (str[i] === '/') {
        return parseFloat(temp) / equal(str.substring(i + 1));
      } else if (str[i] === '^') {
        return Math.sqrt(equal(str.substring(i + 1)));
      } else {
        temp += str[i];
      }
    }
  }

  return parseFloat(str);
}

function percent(str: string): number {
  const calc = equal(str);

  return (calc / 100);
}

export { equal, percent };
