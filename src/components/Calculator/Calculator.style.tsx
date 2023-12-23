import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  height: auto;
  width: 100%;
`;

export const CalculatorContainer = styled.div`
  max-width: 20rem;
  height: 35rem;
  margin: ${({ theme }) => theme.spacing.large} auto;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.bg.main};
  box-shadow: 4px 4px 7px rgb(118 117 117 / 25%);
  display: flex;
  flex-direction: column;
  color: white;
  border: 1px solid rgb(128 128 128 / 75%);
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ThreeButtonsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1;

  button:first-child {
    width: 50%;
  }
  button {
    width: 25%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
