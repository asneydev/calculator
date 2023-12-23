import Button from '../Button';
import { NumbersWrapper } from './NumbersSection.style';

const numers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const NumbersSection = ({
  handleButtonClick,
}: {
  handleButtonClick: (number: string) => void;
}) => {
  return (
    <NumbersWrapper>
      {numers.map((number) => (
        <Button
          key={number}
          bg="default"
          onClick={() => handleButtonClick(number.toString())}
        >
          {number}
        </Button>
      ))}
    </NumbersWrapper>
  );
};

export default NumbersSection;
