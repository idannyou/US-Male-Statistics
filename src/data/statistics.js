// US Census Bureau and CDC/NCHS Statistics (2024 data)
// Sources: US Census Bureau, CDC NCHS, Bureau of Labor Statistics

export const TOTAL_MALE_POPULATION = 168500000; // Total US male population 18+ (2024)

// Age distribution (percentage of males in each age group)
export const AGE_DISTRIBUTION = {
  18: 0.0125,
  19: 0.0125,
  20: 0.0125,
  21: 0.0125,
  22: 0.0125,
  23: 0.0125,
  24: 0.0125,
  25: 0.013,
  26: 0.013,
  27: 0.013,
  28: 0.013,
  29: 0.013,
  30: 0.0135,
  31: 0.0135,
  32: 0.0135,
  33: 0.0135,
  34: 0.0135,
  35: 0.014,
  36: 0.014,
  37: 0.014,
  38: 0.014,
  39: 0.014,
  40: 0.0145,
  41: 0.0145,
  42: 0.0145,
  43: 0.0145,
  44: 0.0145,
  45: 0.014,
  46: 0.014,
  47: 0.014,
  48: 0.014,
  49: 0.014,
  50: 0.0135,
  51: 0.0135,
  52: 0.0135,
  53: 0.0135,
  54: 0.0135,
  55: 0.013,
  56: 0.013,
  57: 0.013,
  58: 0.013,
  59: 0.013,
  60: 0.0125,
  61: 0.0125,
  62: 0.0125,
  63: 0.0125,
  64: 0.0125,
  65: 0.012,
  66: 0.012,
  67: 0.012,
  68: 0.012,
  69: 0.012,
  70: 0.0115,
};

// Race distribution (percentage of male population)
// Source: US Census Bureau 2024
export const RACE_DISTRIBUTION = {
  any: 1.0,
  white: 0.594, // Non-Hispanic White males (59.4%)
  black: 0.134, // Black or African American males (13.4%)
  asian: 0.064, // Asian males (6.4%)
  hispanic: 0.193, // Hispanic/Latino males any race (19.3%)
  other: 0.015, // Other races (1.5%)
};

// Height distribution (percentage of males meeting minimum height)
// Source: CDC NCHS - Average US male height is 5'9" (175.3 cm / 69 inches)
// Standard deviation is approximately 3 inches
export const HEIGHT_DISTRIBUTION = {
  none: 1.0,
  "5'0\"": 0.998, // 99.8% are 5'0" or taller
  "5'2\"": 0.995, // 99.5%
  "5'4\"": 0.985, // 98.5%
  "5'6\"": 0.93, // 93% are 5'6" or taller
  "5'8\"": 0.72, // 72%
  "5'9\"": 0.5, // 50% (median height)
  "5'10\"": 0.35, // 35%
  "5'11\"": 0.23, // 23%
  "6'0\"": 0.147, // 14.7% are 6'0" or taller (revised based on CDC data)
  "6'1\"": 0.088, // 8.8%
  "6'2\"": 0.051, // 5.1%
  "6'3\"": 0.027, // 2.7%
  "6'4\"": 0.013, // 1.3%
  "6'5\"": 0.005, // 0.5%
};

// Income distribution (percentage of males 18+ earning at or above threshold)
// Source: US Census Bureau 2023 Income and Poverty Report (latest available)
// Note: These are individual male earners, not household income
export const INCOME_DISTRIBUTION = {
  0: 1.0,
  10000: 0.88,
  20000: 0.79,
  30000: 0.69,
  40000: 0.59,
  50000: 0.49,
  60000: 0.41,
  70000: 0.34,
  80000: 0.28, // 28% of men earn $80k+
  90000: 0.23,
  100000: 0.19, // 19% earn $100k+ (revised)
  120000: 0.13,
  150000: 0.085, // 8.5% earn $150k+
  200000: 0.045, // 4.5% earn $200k+
  250000: 0.025, // 2.5%
  300000: 0.015, // 1.5%
  400000: 0.008, // 0.8%
  500000: 0.004, // 0.4%
};

// Marital status (percentage of males who are NOT married/never married)
// Source: US Census Bureau Current Population Survey 2024
// Note: This represents "never married" percentage, not including divorced/separated
export const MARITAL_STATUS_BY_AGE = {
  18: 0.995,
  19: 0.99,
  20: 0.98,
  21: 0.97,
  22: 0.95,
  23: 0.93,
  24: 0.9,
  25: 0.87,
  26: 0.83,
  27: 0.79,
  28: 0.74,
  29: 0.69,
  30: 0.64,
  31: 0.59,
  32: 0.54,
  33: 0.49,
  34: 0.45,
  35: 0.41,
  36: 0.38,
  37: 0.35,
  38: 0.33,
  39: 0.31,
  40: 0.3,
  41: 0.29,
  42: 0.28,
  43: 0.28,
  44: 0.28,
  45: 0.28,
  46: 0.29,
  47: 0.29,
  48: 0.3,
  49: 0.3,
  50: 0.31,
  51: 0.31,
  52: 0.32,
  53: 0.32,
  54: 0.33,
  55: 0.33,
  56: 0.34,
  57: 0.34,
  58: 0.35,
  59: 0.35,
  60: 0.36,
  61: 0.37,
  62: 0.38,
  63: 0.39,
  64: 0.4,
  65: 0.41,
  66: 0.42,
  67: 0.43,
  68: 0.44,
  69: 0.45,
  70: 0.46,
};

// Obesity rate among US males (percentage who are NOT obese, BMI < 30)
// Source: CDC NCHS National Health Statistics 2023-2024
// Current male obesity rate is approximately 43%
export const NON_OBESE_RATE = 0.57; // 57% of US males are not obese

// Employment rate for working-age males (18-64)
// Source: Bureau of Labor Statistics 2024
export const EMPLOYMENT_RATE = 0.71; // 71% employment-to-population ratio for men
