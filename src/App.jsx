import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results.jsx";
import { useState } from "react";

const initialValue = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 15,
  duration: 5,
};

function App() {
  const [currentValue, setCurrentValue] = useState(initialValue);

  function handleChange(valueIdentifier, newValue) {
    setCurrentValue((prevValue) => {
      return {
        ...prevValue,
        [valueIdentifier]: +newValue,
      };
    });
  }

  console.log(currentValue);

  return (
    <>
      <Header />
      <UserInput input={currentValue} onChange={handleChange} />
      <Results input="currentValue" />
    </>
  );
}

export default App;
