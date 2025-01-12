import {
  Asset,
  findLargestHolding,
  assetAllocationPercentage,
  calculatePortfolioPerformance,
} from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  it("should return gained slightly performance", () => {
    const initialInvestment = 100;
    const currentValue = 106;
    const performanceLevel = "gained slightly";
    const performanceSummary = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );
    const regMatch = new RegExp(
      `${performanceLevel} with a profit of \\$${
        currentValue - initialInvestment
      }`,
      "i"
    );

    expect(performanceSummary.initialInvestment).toBe(initialInvestment);
    expect(performanceSummary.currentValue).toBe(currentValue);
    expect(performanceSummary.profitOrLoss).toBeCloseTo(
      currentValue - initialInvestment,
      4
    );
    expect(performanceSummary.percentageChange).toBeCloseTo(
      ((currentValue - initialInvestment) / initialInvestment) * 100,
      4
    );
    expect(performanceSummary.performanceSummary).toMatch(regMatch);
  });

  it("should return gained moderately performance", () => {
    const initialInvestment = 100;
    const currentValue = 116;
    const performanceLevel = "gained moderately";
    const performanceSummary = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );
    const regMatch = new RegExp(
      `${performanceLevel} with a profit of \\$${
        currentValue - initialInvestment
      }`,
      "i"
    );

    expect(performanceSummary.initialInvestment).toBe(initialInvestment);
    expect(performanceSummary.currentValue).toBe(currentValue);
    expect(performanceSummary.profitOrLoss).toBeCloseTo(
      currentValue - initialInvestment,
      4
    );
    expect(performanceSummary.percentageChange).toBeCloseTo(
      ((currentValue - initialInvestment) / initialInvestment) * 100,
      4
    );
    expect(performanceSummary.performanceSummary).toMatch(regMatch);
  });

  it("should return gained significantly performance", () => {
    const initialInvestment = 100;
    const currentValue = 130;
    const performanceLevel = "gained significantly";
    const performanceSummary = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );
    const regMatch = new RegExp(
      `${performanceLevel} with a profit of \\$${
        currentValue - initialInvestment
      }`,
      "i"
    );

    expect(performanceSummary.initialInvestment).toBe(initialInvestment);
    expect(performanceSummary.currentValue).toBe(currentValue);
    expect(performanceSummary.profitOrLoss).toBeCloseTo(
      currentValue - initialInvestment,
      4
    );
    expect(performanceSummary.percentageChange).toBeCloseTo(
      ((currentValue - initialInvestment) / initialInvestment) * 100,
      4
    );
    expect(performanceSummary.performanceSummary).toMatch(regMatch);
  });

  it("should return no change performance", () => {
    const initialInvestment = 100;
    const currentValue = 100;
    const performanceLevel = "no change";
    const performanceSummary = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );
    const regMatch = new RegExp(
      `${performanceLevel} with a profit of \\$${
        currentValue - initialInvestment
      }`,
      "i"
    );

    expect(performanceSummary.initialInvestment).toBe(initialInvestment);
    expect(performanceSummary.currentValue).toBe(currentValue);
    expect(performanceSummary.profitOrLoss).toBeCloseTo(
      currentValue - initialInvestment,
      4
    );
    expect(performanceSummary.percentageChange).toBeCloseTo(
      ((currentValue - initialInvestment) / initialInvestment) * 100,
      4
    );
    expect(performanceSummary.performanceSummary).toMatch(regMatch);
  });

  it("should return lost slightly performance", () => {
    const initialInvestment = 100;
    const currentValue = 99;
    const performanceLevel = "lost slightly";
    const performanceSummary = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );
    const regMatch = new RegExp(
      `${performanceLevel} with a profit of \\$${
        currentValue - initialInvestment
      }`,
      "i"
    );

    expect(performanceSummary.initialInvestment).toBe(initialInvestment);
    expect(performanceSummary.currentValue).toBe(currentValue);
    expect(performanceSummary.profitOrLoss).toBeCloseTo(
      currentValue - initialInvestment,
      4
    );
    expect(performanceSummary.percentageChange).toBeCloseTo(
      ((currentValue - initialInvestment) / initialInvestment) * 100,
      4
    );
    expect(performanceSummary.performanceSummary).toMatch(regMatch);
  });

  it("should return lost moderately performance", () => {
    const initialInvestment = 100;
    const currentValue = 80;
    const performanceLevel = "lost moderately";
    const performanceSummary = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );
    const regMatch = new RegExp(
      `${performanceLevel} with a profit of \\$${
        currentValue - initialInvestment
      }`,
      "i"
    );

    expect(performanceSummary.initialInvestment).toBe(initialInvestment);
    expect(performanceSummary.currentValue).toBe(currentValue);
    expect(performanceSummary.profitOrLoss).toBeCloseTo(
      currentValue - initialInvestment,
      4
    );
    expect(performanceSummary.percentageChange).toBeCloseTo(
      ((currentValue - initialInvestment) / initialInvestment) * 100,
      4
    );
    expect(performanceSummary.performanceSummary).toMatch(regMatch);
  });

  it("should return lost significantly performance", () => {
    const initialInvestment = 100;
    const currentValue = 70;
    const performanceLevel = "lost significantly";
    const performanceSummary = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );
    const regMatch = new RegExp(
      `${performanceLevel} with a profit of \\$${
        currentValue - initialInvestment
      }`,
      "i"
    );

    expect(performanceSummary.initialInvestment).toBe(initialInvestment);
    expect(performanceSummary.currentValue).toBe(currentValue);
    expect(performanceSummary.profitOrLoss).toBeCloseTo(
      currentValue - initialInvestment,
      4
    );
    expect(performanceSummary.percentageChange).toBeCloseTo(
      ((currentValue - initialInvestment) / initialInvestment) * 100,
      4
    );
    expect(performanceSummary.performanceSummary).toMatch(regMatch);
  });
});

describe("findLargestHolding", () => {
  it("should throw an error for empty portfolio", () => {
    expect(() => findLargestHolding([])).toThrow(/empty/i);
  });

  it("should return a max asset", () => {
    const realEstate: Asset = {
      name: "hous in winnipeg",
      value: 10000,
    };
    const stocks: Asset = {
      name: "stock in America",
      value: 200,
    };
    const bonds: Asset = {
      name: "bonds of China",
      value: 20000,
    };

    const maxAsset: Asset[] = findLargestHolding([realEstate, stocks, bonds]);

    expect(maxAsset.length).toBe(1);
    expect(maxAsset).toContainEqual({ name: "bonds of China", value: 20000 });
  });

  it("should return two max assets", () => {
    const realEstate: Asset = {
      name: "hous in winnipeg",
      value: 10000,
    };
    const stocks: Asset = {
      name: "stock in America",
      value: 300000,
    };
    const bonds: Asset = {
      name: "bonds of China",
      value: 300000,
    };

    const maxAsset: Asset[] = findLargestHolding([realEstate, stocks, bonds]);

    expect(maxAsset.length).toBe(2);
    expect(maxAsset).toContainEqual({
      name: "stock in America",
      value: 300000,
    });
    expect(maxAsset).toContainEqual({
      name: "bonds of China",
      value: 300000,
    });
  });
});

describe("assetAllocationPercentage", () => {
  it("should throw an error for empty portfolio", () => {
    expect(() => assetAllocationPercentage([])).toThrow(/empty/i);
  });

  it("should calculate pertange with even values", () => {
    const realEstate: Asset = {
      name: "hous in winnipeg",
      value: 10000,
    };
    const stocks: Asset = {
      name: "stock in America",
      value: 10000,
    };
    const bonds: Asset = {
      name: "bonds of China",
      value: 10000,
    };

    assetAllocationPercentage([realEstate, stocks, bonds]);

    expect(realEstate).toHaveProperty("percentage");
    expect(stocks).toHaveProperty("percentage");
    expect(bonds).toHaveProperty("percentage");

    expect(realEstate.percentage).toBeCloseTo(33.33, 2);
    expect(stocks.percentage).toBeCloseTo(33.33, 2);
    expect(bonds.percentage).toBeCloseTo(33.33, 2);
  });

  it("should calculate pertange with uneven values", () => {
    const realEstate: Asset = {
      name: "hous in winnipeg",
      value: 10000,
    };
    const stocks: Asset = {
      name: "stock in America",
      value: 20000,
    };
    const bonds: Asset = {
      name: "bonds of China",
      value: 10000,
    };

    assetAllocationPercentage([realEstate, stocks, bonds]);

    expect(realEstate).toHaveProperty("percentage");
    expect(stocks).toHaveProperty("percentage");
    expect(bonds).toHaveProperty("percentage");

    expect(realEstate.percentage).toBeCloseTo(25, 2);
    expect(stocks.percentage).toBeCloseTo(50, 2);
    expect(bonds.percentage).toBeCloseTo(25, 2);
  });
});
