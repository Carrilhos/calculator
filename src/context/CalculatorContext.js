import { useState, createContext } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const values = {
    calc,
    setCalc,
  };

  return (
    <CalculatorContext.Provider value={values}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
