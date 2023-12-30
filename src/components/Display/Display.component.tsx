import { AreaDisplay, ResultDisplay, WrapperDisplay } from './Display.style';

interface DisplayType {
  data: string;
  result: number;
}

function Display({ data, result }: Readonly<DisplayType>) {
  return (
    <WrapperDisplay>
      <AreaDisplay>
        <textarea defaultValue={data} />
      </AreaDisplay>
      <ResultDisplay>
        <p>=</p>
        <p>{result}</p>
      </ResultDisplay>
    </WrapperDisplay>
  );
}

export default Display;
