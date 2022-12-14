import Button from "./components/Button";
import ContainerButtons from "./components/Container";
import Screen from "./components/Screen";

import CalculatorProvider from "./context/CalculatorContext";
import { MainContainer, Center } from "./styles";

const buttonValues = [
  ["C", "apagar", "=", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0],
];

function App() {
  return (
    <CalculatorProvider>
      <Center>
        <MainContainer>
          <Screen />
          <ContainerButtons>
            {buttonValues.flat().map((item, i) => (
              <Button value={item} key={i} />
            ))}
          </ContainerButtons>
        </MainContainer>
      </Center>
    </CalculatorProvider>
  );
}

export default App;
