import { useState } from 'react';

import Button from '../Button';
import {
  Container,
  CalculatorContainer,
  Section,
  ThreeButtonsSection,
  ButtonsWrapper,
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
        <ButtonsWrapper>
          <Button bg="dark" onClick={onClear}>
            Clear
          </Button>
          <Button bg="dark" onClick={goBack}>
            <i className="fa fa-angle-left"></i>
          </Button>
        </ButtonsWrapper>
        <ThreeButtonsSection>
          <Button bg="dark" onClick={() => handleButtonClick('^')}>
            &#8730;
          </Button>
          <Button bg="dark" onClick={calculatePercent}>
            %
          </Button>
          <Button bg="dark" onClick={() => handleButtonClick('/')}>
            /
          </Button>
        </ThreeButtonsSection>
        <Section>
          <NumbersSection handleButtonClick={handleButtonClick} />
          <RightOperators handleButtonClick={handleButtonClick} />
        </Section>
        <ThreeButtonsSection>
          <Button bg="default" onClick={() => handleButtonClick('0')}>
            0
          </Button>
          <Button bg="default" onClick={() => handleButtonClick('.')}>
            .
          </Button>
          <Button onClick={getEqual} bg="primary">
            =
          </Button>
        </ThreeButtonsSection>
      </CalculatorContainer>
    </Container>
  );
}

export default Calculator;
