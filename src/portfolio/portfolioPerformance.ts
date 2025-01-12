interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;

  const percentageChange = (profitOrLoss / initialInvestment) * 100;

  let performanceLevel;
  switch (true) {
    case percentageChange > 20:
      performanceLevel = "gained significantly";
      break;
    case percentageChange >= 10:
      performanceLevel = "gained moderately";
      break;
    case percentageChange > 0:
      performanceLevel = "gained slightly";
      break;
    case percentageChange === 0:
      performanceLevel = "no change";
      break;
    case percentageChange >= -10:
      performanceLevel = "lost slightly";
      break;
    case percentageChange >= -20:
      performanceLevel = "lost moderately";
      break;
    default:
      performanceLevel = "lost significantly";
  }

  let performanceSummary = `The portfolio has ${performanceLevel} with a profit of $${profitOrLoss}.`;

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}
