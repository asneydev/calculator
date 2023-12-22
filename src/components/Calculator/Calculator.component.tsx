import { useState } from 'react';

import Button from '../Button';
import {
  Container,
  CalculatorContainer,
  ButtonsGroup,
  NumbersWrapper,
} from './Calculator.style';

import {
  equal,
  percent,
} from '../operations';
import Display from '../Display';
import { isValidDisplay, isValidToShowResult } from '../../helpers/validations';

function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  function handleButtonClick(btnValue: string) {
    if (isValidDisplay(displayValue, btnValue)) {
      const actualDisplay = displayValue + btnValue;
      setDisplayValue(actualDisplay);
    }
  }

  function getEqual(): void {
    if (isValidToShowResult(displayValue)) {
      const result = equal(displayValue).toString();
      setResult(result);
    }
  }

  function calculatePercent() {
    if (isValidDisplay(displayValue, '%')) {
      const result = percent(displayValue);
      setDisplayValue(result);
      setResult(result);
    }
  }

  function onClear(): void {
    setDisplayValue('');
    setResult('');
  }

  function goBack() {
    const newDisplay = displayValue.slice(0, displayValue.length - 1);

    setDisplayValue(newDisplay);
  }

  return (
    <Container>
      <CalculatorContainer>
        <Display data={displayValue} result={result} />
        <NumbersWrapper>
          <ButtonsGroup>
            <Button align={1} bg="dark" toDisplay={onClear}>
              Clear
            </Button>
            <Button align={1} bg="dark" toDisplay={goBack}>
              <i className="fa fa-angle-left"></i>
            </Button>
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={2}
              bg="dark"
              toDisplay={() => handleButtonClick('^')}
            >
              &#8730;
            </Button>
            <Button align={1} bg="dark" toDisplay={calculatePercent}>
              %
            </Button>
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('/')}
            >
              /
            </Button>
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('7')}
            >
              7
            </Button>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('8')}
            >
              8
            </Button>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('9')}
            >
              9
            </Button>
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('*')}
            >
              *
            </Button>
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('4')}
            >
              4
            </Button>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('5')}
            >
              5
            </Button>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('6')}
            >
              6
            </Button>
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('-')}
            >
              -
            </Button>
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('1')}
            >
              1
            </Button>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('2')}
            >
              2
            </Button>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('3')}
            >
              3
            </Button>
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('+')}
            >
              +
            </Button>
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={2}
              bg="default"
              toDisplay={() => handleButtonClick('0')}
            >
              0
            </Button>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('.')}
            >
              .
            </Button>
            <Button align={1} toDisplay={getEqual} bg="primary">
              =
            </Button>
          </ButtonsGroup>
        </NumbersWrapper>
      </CalculatorContainer>
    </Container>
  );
}

export default Calculator;
