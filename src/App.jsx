import { useState, useEffect } from "react";
import {
  calculateProbability,
  getEstimatedCount,
  formatNumber,
  formatPercentage,
} from "./utils/calculator";
import "./App.css";

const heightOptions = [
  { value: "none", label: "Any", feet: 0 },
  { value: "5'6\"", label: "5'6\"", feet: 5.5 },
  { value: "5'8\"", label: "5'8\"", feet: 5.67 },
  { value: "5'9\"", label: "5'9\"", feet: 5.75 },
  { value: "5'10\"", label: "5'10\"", feet: 5.83 },
  { value: "5'11\"", label: "5'11\"", feet: 5.92 },
  { value: "6'0\"", label: "6'0\"", feet: 6.0 },
  { value: "6'1\"", label: "6'1\"", feet: 6.08 },
  { value: "6'2\"", label: "6'2\"", feet: 6.17 },
  { value: "6'3\"", label: "6'3\"", feet: 6.25 },
  { value: "6'4\"", label: "6'4\"", feet: 6.33 },
];

const incomeOptions = [
  { value: 0, label: "Any" },
  { value: 40000, label: "$40k" },
  { value: 50000, label: "$50k" },
  { value: 60000, label: "$60k" },
  { value: 70000, label: "$70k" },
  { value: 80000, label: "$80k" },
  { value: 90000, label: "$90k" },
  { value: 100000, label: "$100k" },
  { value: 120000, label: "$120k" },
  { value: 150000, label: "$150k" },
  { value: 200000, label: "$200k" },
  { value: 250000, label: "$250k" },
  { value: 300000, label: "$300k+" },
];

const raceOptions = [
  { value: "any", label: "Any Race" },
  { value: "white", label: "White" },
  { value: "black", label: "Black" },
  { value: "asian", label: "Asian" },
  { value: "hispanic", label: "Hispanic" },
  { value: "other", label: "Other" },
];

function App() {
  const [criteria, setCriteria] = useState({
    minAge: 25,
    maxAge: 35,
    race: "any",
    minHeight: "6'0\"",
    minIncome: 80000,
    excludeMarried: true,
    excludeObese: true,
  });

  const [heightIndex, setHeightIndex] = useState(6);
  const [incomeIndex, setIncomeIndex] = useState(5);
  const [raceIndex, setRaceIndex] = useState(0);

  const [result, setResult] = useState({ probability: 0, count: 0 });

  useEffect(() => {
    const probability = calculateProbability(criteria);
    const count = getEstimatedCount(probability);
    setResult({ probability, count });
  }, [criteria]);

  const updateCriteria = (key, value) => {
    setCriteria((prev) => ({ ...prev, [key]: value }));
  };

  const handleHeightChange = (index) => {
    setHeightIndex(index);
    updateCriteria("minHeight", heightOptions[index].value);
  };

  const handleIncomeChange = (index) => {
    setIncomeIndex(index);
    updateCriteria("minIncome", incomeOptions[index].value);
  };

  const handleRaceChange = (index) => {
    setRaceIndex(index);
    updateCriteria("race", raceOptions[index].value);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">
            <span className="gradient-text">Reality Check</span> Calculator
          </h1>
          <p className="subtitle">
            Live Statistics • US Census Bureau & CDC Data 2024
          </p>
        </header>

        <div className="calculator-card">
          <div className="input-grid">
            {/* Age Range */}
            <div className="input-group full-width">
              <label className="label">
                <span className="label-icon">🎂</span>
                Age Range
              </label>
              <div className="age-inputs">
                <div className="age-input-wrapper">
                  <input
                    type="number"
                    min="18"
                    max="70"
                    value={criteria.minAge}
                    onChange={(e) =>
                      updateCriteria("minAge", parseInt(e.target.value))
                    }
                    className="input age-input"
                  />
                  <span className="age-label">Min</span>
                </div>
                <div className="range-slider-container">
                  <input
                    type="range"
                    min="18"
                    max="70"
                    value={criteria.minAge}
                    onChange={(e) =>
                      updateCriteria("minAge", parseInt(e.target.value))
                    }
                    className="range-slider"
                  />
                  <input
                    type="range"
                    min="18"
                    max="70"
                    value={criteria.maxAge}
                    onChange={(e) =>
                      updateCriteria("maxAge", parseInt(e.target.value))
                    }
                    className="range-slider"
                  />
                </div>
                <div className="age-input-wrapper">
                  <input
                    type="number"
                    min="18"
                    max="70"
                    value={criteria.maxAge}
                    onChange={(e) =>
                      updateCriteria("maxAge", parseInt(e.target.value))
                    }
                    className="input age-input"
                  />
                  <span className="age-label">Max</span>
                </div>
              </div>
            </div>

            {/* Race Picker */}
            <div className="input-group full-width">
              <label className="label">
                <span className="label-icon">🌍</span>
                Race / Ethnicity
              </label>
              <div className="race-picker">
                {raceOptions.map((option, index) => (
                  <button
                    key={option.value}
                    className={`race-card ${
                      raceIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleRaceChange(index)}
                    type="button"
                  >
                    <span className="race-emoji">
                      {index === 0 && "🌐"}
                      {index === 1 && "👨"}
                      {index === 2 && "🙋🏿‍♂️"}
                      {index === 3 && "🧑"}
                      {index === 4 && "🧔"}
                      {index === 5 && "👤"}
                    </span>
                    <span className="race-label">{option.label}</span>
                    {raceIndex === index && (
                      <span className="race-check">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Height Slider */}
            <div className="input-group">
              <label className="label">
                <span className="label-icon">📏</span>
                Minimum Height
              </label>
              <div className="slider-value">
                {heightOptions[heightIndex].label}
              </div>
              <input
                type="range"
                min="0"
                max={heightOptions.length - 1}
                value={heightIndex}
                onChange={(e) => handleHeightChange(parseInt(e.target.value))}
                className="range-slider"
                step="1"
              />
              <div className="slider-marks">
                {heightOptions.map((opt, i) => (
                  <span
                    key={i}
                    className={i === heightIndex ? "active" : ""}
                  ></span>
                ))}
              </div>
            </div>

            {/* Income Slider */}
            <div className="input-group full-width">
              <label className="label">
                <span className="label-icon">💰</span>
                Minimum Annual Income
              </label>
              <div className="slider-value-large">
                {incomeOptions[incomeIndex].label}
              </div>
              <input
                type="range"
                min="0"
                max={incomeOptions.length - 1}
                value={incomeIndex}
                onChange={(e) => handleIncomeChange(parseInt(e.target.value))}
                className="range-slider"
                step="1"
              />
              <div className="slider-marks">
                {incomeOptions.map((opt, i) => (
                  <span
                    key={i}
                    className={i === incomeIndex ? "active" : ""}
                  ></span>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="checkbox-group full-width">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={criteria.excludeMarried}
                  onChange={(e) =>
                    updateCriteria("excludeMarried", e.target.checked)
                  }
                  className="checkbox"
                />
                <span className="checkbox-text">
                  <span className="checkbox-icon">💍</span>
                  Exclude Married
                </span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={criteria.excludeObese}
                  onChange={(e) =>
                    updateCriteria("excludeObese", e.target.checked)
                  }
                  className="checkbox"
                />
                <span className="checkbox-text">
                  <span className="checkbox-icon">💪</span>
                  Exclude Obese (BMI ≥ 30)
                </span>
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="results">
            <div className="result-main">
              <div className="percentage-display">
                <span className="percentage-number">
                  {formatPercentage(result.probability)}
                </span>
                <span className="percentage-symbol">%</span>
              </div>
              <div className="result-description">
                of men meet your criteria
              </div>
              <div className="probability-bar">
                <div
                  className="probability-fill"
                  style={{
                    width: `${Math.min(result.probability * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Probability Visualization */}
            <div className="probability-visualization">
              <h3 className="viz-title">Visual Representation</h3>
              <p className="viz-subtitle">
                Out of 100 men, here's how many match:
              </p>
              <div className="circles-grid">
                {Array.from({ length: 100 }, (_, i) => {
                  const threshold = result.probability * 100;
                  const isMatch = i < Math.round(threshold);
                  return (
                    <div
                      key={i}
                      className={`circle ${isMatch ? "match" : "no-match"}`}
                      style={{
                        animationDelay: `${i * 0.01}s`,
                      }}
                    >
                      {isMatch ? "✓" : ""}
                    </div>
                  );
                })}
              </div>
              <div className="viz-legend">
                <div className="legend-item">
                  <div className="legend-circle match"></div>
                  <span>
                    Matches criteria ({Math.round(result.probability * 100)}{" "}
                    men)
                  </span>
                </div>
                <div className="legend-item">
                  <div className="legend-circle no-match"></div>
                  <span>
                    Doesn't match ({100 - Math.round(result.probability * 100)}{" "}
                    men)
                  </span>
                </div>
              </div>
            </div>

            <div className="result-details">
              <div className="detail-card">
                <div className="detail-icon">👥</div>
                <div className="detail-content">
                  <span className="detail-label">Estimated Count</span>
                  <span className="detail-value">
                    {formatNumber(result.count)}
                  </span>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">🇺🇸</div>
                <div className="detail-content">
                  <span className="detail-label">Total US Males</span>
                  <span className="detail-value">168.5M</span>
                </div>
              </div>
            </div>

            {result.probability < 0.01 && (
              <div className="reality-check danger">
                <span className="emoji">🎯</span>
                <div className="reality-content">
                  <strong>Ultra Selective!</strong>
                  <p>
                    Those are some very high standards. You might want to
                    reconsider your priorities.
                  </p>
                </div>
              </div>
            )}

            {result.probability >= 0.01 && result.probability < 0.05 && (
              <div className="reality-check moderate">
                <span className="emoji">🤔</span>
                <div className="reality-content">
                  <strong>Quite Selective</strong>
                  <p>
                    Your criteria are fairly selective. Finding someone might
                    take time and effort.
                  </p>
                </div>
              </div>
            )}

            {result.probability >= 0.05 && result.probability < 0.2 && (
              <div className="reality-check good">
                <span className="emoji">👍</span>
                <div className="reality-content">
                  <strong>Reasonable Standards</strong>
                  <p>You have a decent pool of candidates to choose from.</p>
                </div>
              </div>
            )}

            {result.probability >= 0.2 && (
              <div className="reality-check excellent">
                <span className="emoji">✨</span>
                <div className="reality-content">
                  <strong>Plenty of Options!</strong>
                  <p>Great! You have many options with these criteria.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className="footer">
          <p className="footer-main">
            📊 Data Sources: US Census Bureau (2024) • CDC/NCHS • Bureau of
            Labor Statistics
          </p>
          <p className="disclaimer">
            This calculator is for entertainment and educational purposes only.
            Statistical probabilities do not account for geography,
            compatibility, or personal factors.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
