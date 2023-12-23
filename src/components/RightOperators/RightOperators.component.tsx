import { RightOperatosWrapper } from './RightOperatos.style';
import Button from '../Button';

const operators = ['*', '-', '+'];

const RightOperators = ({
  handleButtonClick,
}: {
  handleButtonClick: (number: string) => void;
}) => {
  return (
    <RightOperatosWrapper>
      {operators.map((op) => (
        <Button key={op} bg="default" onClick={() => handleButtonClick(op)}>
          {op}
        </Button>
      ))}
    </RightOperatosWrapper>
  );
};

export default RightOperators;
