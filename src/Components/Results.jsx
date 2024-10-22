import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultValue = calculateInvestmentResults(input);

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Interest Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultValue.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            (yearData.annualInvestment * yearData.year +
              input.initialInvestment);

          const interestCapital =
            yearData.annualInvestment * yearData.year + input.initialInvestment;

          return (
            <tr className="center" key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(interestCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
