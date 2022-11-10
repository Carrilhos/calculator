import { useContext } from "react";

import { CalculatorContext } from "../../context/CalculatorContext";

import { ButtonBase, Text } from "./styles";

const getClassName = (value) => {
  const className = {
    x: "operator",
    "-": "operator",
    "+": "operator",
    "/": "operator",
  };

  return className[value];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalculatorContext);

  const handleClickNumber = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const percentageClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };

  const deleteClick = () => {
    const stringNum = calc.num.toString();
    const stringDeleted = stringNum.substring(0, stringNum.length - 1);

    const number = Number(stringDeleted);

    setCalc({
      ...calc,
      num: number,
    });
  };

  const handleClick = () => {
    const results = {
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      ".": commaClick,
      "%": percentageClick,
      apagar: deleteClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickNumber();
    }
  };

  return (
    <ButtonBase onClick={handleClick} className={`${getClassName(value)}`}>
      <Text>{value}</Text>
    </ButtonBase>
  );
};

export default Button;
