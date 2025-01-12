import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  it("should return gained slightly performance", () => {
    const initialInvestment = 100;
    const currentValue = 105;
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
    const currentValue = 115;
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
