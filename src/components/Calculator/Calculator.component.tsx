import Button from '../Button';
import {
  Container,
  CalculatorContainer,
  Section,
  ThreeButtonsSection,
  ButtonsWrapper,
} from './Calculator.style';

import Display from '../Display';
import NumbersSection from '../NumbersSection/NumbersSection.component';
import RightOperators from '../RightOperators/RightOperators.component';
import { useDisplay } from '../../hooks/useDisplay';

function Calculator() {
  const {
    display,
    result,
    backSpace,
    clear,
    handleButtonClick,
    getEqual,
    getPercent,
  } = useDisplay();

  return (
    <Container>
      <CalculatorContainer>
        <Display data={display} result={result} />
        <ButtonsWrapper>
          <Button bg="dark" onClick={clear}>
            Clear
          </Button>
          <Button bg="dark" onClick={backSpace}>
            <i className="fa fa-angle-left"></i>
          </Button>
        </ButtonsWrapper>
        <ThreeButtonsSection>
          <Button bg="dark" onClick={() => handleButtonClick('^')}>
            &#8730;
          </Button>
          <Button bg="dark" onClick={getPercent}>
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
