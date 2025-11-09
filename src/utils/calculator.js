import {
  TOTAL_MALE_POPULATION,
  AGE_DISTRIBUTION,
  RACE_DISTRIBUTION,
  HEIGHT_DISTRIBUTION,
  INCOME_DISTRIBUTION,
  MARITAL_STATUS_BY_AGE,
  NON_OBESE_RATE,
  EMPLOYMENT_RATE,
} from "../data/statistics";

/**
 * Calculate the percentage of men meeting the specified criteria
 */
export function calculateProbability(criteria) {
  const {
    minAge,
    maxAge,
    race,
    minHeight,
    minIncome,
    excludeMarried,
    excludeObese,
  } = criteria;

  let probability = 1.0;

  // Calculate age range probability
  const ageProbability = calculateAgeRangeProbability(minAge, maxAge);
  probability *= ageProbability;

  // Apply race filter
  probability *= RACE_DISTRIBUTION[race] || 1.0;

  // Apply height filter
  probability *= HEIGHT_DISTRIBUTION[minHeight] || 1.0;

  // Apply income filter
  probability *= getIncomeProbability(minIncome);

  // Apply marital status filter (average across age range)
  if (excludeMarried) {
    const maritalProbability = calculateAverageMaritalStatus(minAge, maxAge);
    probability *= maritalProbability;
  }

  // Apply obesity filter
  if (excludeObese) {
    probability *= NON_OBESE_RATE;
  }

  // For income requirements, factor in employment
  if (minIncome > 0) {
    probability *= EMPLOYMENT_RATE;
  }

  return probability;
}

/**
 * Calculate the percentage of males in the specified age range
 */
function calculateAgeRangeProbability(minAge, maxAge) {
  let total = 0;
  for (let age = minAge; age <= maxAge; age++) {
    total += AGE_DISTRIBUTION[age] || 0;
  }
  return total;
}

/**
 * Get income probability for a given minimum income
 */
function getIncomeProbability(minIncome) {
  // Find the closest income bracket
  const incomes = Object.keys(INCOME_DISTRIBUTION)
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = incomes.length - 1; i >= 0; i--) {
    if (minIncome >= incomes[i]) {
      return INCOME_DISTRIBUTION[incomes[i]];
    }
  }

  return 1.0;
}

/**
 * Calculate average unmarried rate across age range
 */
function calculateAverageMaritalStatus(minAge, maxAge) {
  let total = 0;
  let count = 0;

  for (let age = minAge; age <= maxAge; age++) {
    if (MARITAL_STATUS_BY_AGE[age]) {
      total += MARITAL_STATUS_BY_AGE[age];
      count++;
    }
  }

  return count > 0 ? total / count : 0.3; // Default to 30% unmarried if no data
}

/**
 * Get estimated number of men meeting criteria
 */
export function getEstimatedCount(probability) {
  return Math.round(TOTAL_MALE_POPULATION * probability);
}

/**
 * Format number with commas
 */
export function formatNumber(num) {
  return num.toLocaleString("en-US");
}

/**
 * Format percentage
 */
export function formatPercentage(decimal) {
  return (decimal * 100).toFixed(2);
}
