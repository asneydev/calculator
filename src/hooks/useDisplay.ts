import { useState } from 'react';
import { isValidDisplay } from '../helpers/validations';
import { equal, percent } from '../helpers/operations';

export const useDisplay = () => {
  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  function clear(): void {
    setDisplay('');
    setResult(0);
  }

  function backSpace() {
    const newDisplay = display.slice(0, display.length - 1);

    setDisplay(newDisplay);
  }

  function handleButtonClick(btnValue: string): void {
    if (isValidDisplay(display, btnValue)) {
      setDisplay((prevDisplay) => prevDisplay + btnValue);
    }
  }

  function getEqual(): void {
    const result = equal(display);
    setResult(result);
  }

  function getPercent() {
    if (isValidDisplay(display, '%')) {
      const result = percent(display);
      setDisplay(result.toString());
      setResult(result);
    }
  }

  function getSQRT() {
    const result = equal(display);
    const sqrt = Math.sqrt(result);

    setResult(sqrt);
  }

  return {
    display,
    result,
    backSpace,
    clear,
    handleButtonClick,
    getEqual,
    getPercent,
    getSQRT,
  };
};
