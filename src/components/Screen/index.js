import { useContext, useEffect } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import { ScreenContainer, Aux } from "./styles";

const Screen = () => {
  const { calc } = useContext(CalculatorContext);

  useEffect(() => {
    console.log("num", calc.num);
    console.log("res", calc.res);
    console.log("sign", calc.sign);
  }, [calc]);

  return (
    <ScreenContainer>
      <Aux>
        {calc.num !== 0 && !calc.res && <span> {calc.num} </span>}
        {calc.res !== 0 && <span> {calc.res} </span>}
        {calc.sign && <span> {calc.sign}</span>}
      </Aux>
      <h1>{calc.num ? calc.num : calc.res}</h1>
    </ScreenContainer>
  );
};

export default Screen;
