export interface Asset {
  name: string;
  value: number;
  // percantage is an optional attribute
  percentage?: number;
}

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

export function findLargestHolding(arr: Asset[]): Asset[] {
  const largestHoldings: Asset[] = [];
  if (arr.length === 0) {
    throw new Error("There is empty portfolio input.");
  }

  let currentMaxValue = 0;
  arr.forEach((asset) => {
    if (asset.value > currentMaxValue) {
      currentMaxValue = asset.value;
      // clear the largestHoldings
      largestHoldings.length = 0;
      // reset the largestHoldings
      largestHoldings.push(asset);
    } else if (asset.value == currentMaxValue) {
      // add another the largestHoldings
      largestHoldings.push(asset);
    }
  });

  // return the largest holdings
  return largestHoldings;
}

export function assetAllocationPercentage(arr: Asset[]): void {
  if (arr.length === 0) {
    throw new Error("There is empty portfolio input.");
  }

  // get the total value of the portfolio
  const totalValue: number = arr.reduce((acc, asset) => acc + asset.value, 0);

  arr.forEach((asset) => {
    asset.percentage = parseFloat(
      ((asset.value / totalValue) * 100).toFixed(2)
    );
  });
}

// const arr = [
//   { name: "real estate", value: 100 },
//   { name: "bonds", value: 1200 },
//   { name: "stocks", value: 1200 },
// ];
// assetAllocationPercentage(arr);
// console.log(findLargestHolding(arr));

// console.log(arr);
