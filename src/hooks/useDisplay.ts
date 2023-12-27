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
      const actualDisplay = display + btnValue;
      setDisplay(actualDisplay);
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

  return {
    display,
    result,
    backSpace,
    clear,
    handleButtonClick,
    getEqual,
    getPercent,
  };
};