import { useState } from 'react';

import Button from '../Button';
import {
  Container,
  CalculatorContainer,
  ButtonsGroup,
  NumbersWrapper,
  Section,
} from './Calculator.style';

import { equal, percent } from '../operations';
import Display from '../Display';
import { isValidDisplay } from '../../helpers/validations';
import NumbersSection from '../NumbersSection/NumbersSection.component';
import RightOperators from '../RightOperators/RightOperators.component';

function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  function handleButtonClick(btnValue: string): void {
    if (isValidDisplay(displayValue, btnValue)) {
      const actualDisplay = displayValue + btnValue;
      setDisplayValue(actualDisplay);
    }
  }

  function getEqual(): void {
    const result = equal(displayValue);
    setResult(result);
  }

  function calculatePercent() {
    if (isValidDisplay(displayValue, '%')) {
      const result = percent(displayValue);
      setDisplayValue(result.toString());
      setResult(result);
    }
  }

  function onClear(): void {
    setDisplayValue('');
    setResult(0);
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
            <Button align={1} bg="dark" onClick={onClear}>
              Clear
            </Button>
            <Button align={1} bg="dark" onClick={goBack}>
              <i className="fa fa-angle-left"></i>
            </Button>
          </ButtonsGroup>
          <ButtonsGroup>
            <Button align={2} bg="dark" onClick={() => handleButtonClick('^')}>
              &#8730;
            </Button>
            <Button align={1} bg="dark" onClick={calculatePercent}>
              %
            </Button>
            <Button align={1} bg="dark" onClick={() => handleButtonClick('/')}>
              /
            </Button>
          </ButtonsGroup>
          <Section>
            <NumbersSection handleButtonClick={handleButtonClick} />
            <RightOperators handleButtonClick={handleButtonClick} />
          </Section>

          <ButtonsGroup>
            <Button
              align={2}
              bg="default"
              onClick={() => handleButtonClick('0')}
            >
              0
            </Button>
            <Button
              align={1}
              bg="default"
              onClick={() => handleButtonClick('.')}
            >
              .
            </Button>
            <Button align={1} onClick={getEqual} bg="primary">
              =
            </Button>
          </ButtonsGroup>
        </NumbersWrapper>
      </CalculatorContainer>
    </Container>
  );
}

export default Calculator;
