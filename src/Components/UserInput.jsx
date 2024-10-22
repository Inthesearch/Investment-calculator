import { useState } from "react";

export default function UserInput() {
  const initialValue = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 15,
    duration: 5,
  };

  const [currentValue, setCurrentValue] = useState(initialValue);

  console.log(currentValue);

  function handleChange(valueIdentifier, newValue) {
    setCurrentValue((prevValue) => {
      return {
        ...prevValue,
        [valueIdentifier]: +newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
