import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import { ScreenContainer } from "./styles";

const Screen = () => {
  const { calc } = useContext(CalculatorContext);

  return (
    <ScreenContainer>
      <h1>{calc.num ? calc.num : calc.res}</h1>
    </ScreenContainer>
  );
};

export default Screen;
