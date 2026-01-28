import React, { useState } from 'react';

const HealthTools = () => {
  const [activeTool, setActiveTool] = useState('bmi');
  const [bmiData, setBmiData] = useState({ height: '', weight: '', result: null });
  const [heartData, setHeartData] = useState({ age: '', cholesterol: '', bp: '', result: null });

  const calculateBMI = () => {
    const height = parseFloat(bmiData.height) / 100; // cm to m
    const weight = parseFloat(bmiData.weight);
    if (height && weight) {
      const bmi = (weight / (height * height)).toFixed(1);
      let category = '';
      let color = '';
      if (bmi < 18.5) { category = 'Underweight'; color = '#3b82f6'; }
      else if (bmi < 25) { category = 'Normal'; color = '#10b981'; }
      else if (bmi < 30) { category = 'Overweight'; color = '#f59e0b'; }
      else { category = 'Obese'; color = '#ef4444'; }
      setBmiData({ ...bmiData, result: { bmi, category, color } });
    }
  };

  const calculateHeartRisk = () => {
    const { age, cholesterol, bp } = heartData;
    if (age && cholesterol && bp) {
      let risk = 0;
      if (parseInt(age) > 45) risk += 1;
      if (parseInt(age) > 55) risk += 1;
      if (parseInt(cholesterol) > 200) risk += 1;
      if (parseInt(cholesterol) > 240) risk += 1;
      if (parseInt(bp) > 120) risk += 1;
      if (parseInt(bp) > 140) risk += 2;

      let level = '';
      let color = '';
      if (risk <= 2) { level = 'Low Risk'; color = '#10b981'; }
      else if (risk <= 4) { level = 'Moderate Risk'; color = '#f59e0b'; }
      else { level = 'High Risk'; color = '#ef4444'; }

      setHeartData({ ...heartData, result: { score: risk, level, color } });
    }
  };

  const tools = [
    { id: 'bmi', name: 'BMI Calculator', icon: 'fa-weight-scale' },
    { id: 'heart', name: 'Heart Risk', icon: 'fa-heart-pulse' },
    { id: 'symptoms', name: 'Symptom Checker', icon: 'fa-stethoscope' },
    { id: 'appointment', name: 'Find a Doctor', icon: 'fa-user-doctor' },
  ];

  return (
    <section className="health-tools">
      <div className="container">
        <div className="tools-grid">
          <div className="tools-info">
            <span className="section-tag">
              <i className="fas fa-toolbox"></i>
              HEALTH RESOURCES
            </span>
            <h2>Interactive <span className="gradient-text">Health Tools</span></h2>
            <p>Use our free health assessment tools to gain insights into your well-being. These tools provide general guidance and are not a substitute for professional medical advice.</p>

            <div className="tools-features">
              <div className="tool-feature">
                <i className="fas fa-lock"></i>
                <div>
                  <h4>100% Private</h4>
                  <p>Your data is never stored or shared</p>
                </div>
              </div>
              <div className="tool-feature">
                <i className="fas fa-bolt"></i>
                <div>
                  <h4>Instant Results</h4>
                  <p>Get immediate health insights</p>
                </div>
              </div>
              <div className="tool-feature">
                <i className="fas fa-user-md"></i>
                <div>
                  <h4>Doctor Reviewed</h4>
                  <p>Tools designed by medical experts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools-panel">
            {/* Tool Tabs */}
            <div className="tools-tabs">
              {tools.map(tool => (
                <button
                  key={tool.id}
                  className={`tool-tab ${activeTool === tool.id ? 'active' : ''}`}
                  onClick={() => setActiveTool(tool.id)}
                >
                  <i className={`fas ${tool.icon}`}></i>
                  <span>{tool.name}</span>
                </button>
              ))}
            </div>

            {/* Tool Content */}
            <div className="tool-content">
              {/* BMI Calculator */}
              {activeTool === 'bmi' && (
                <div className="tool-body">
                  <h3><i className="fas fa-weight-scale"></i> BMI Calculator</h3>
                  <div className="tool-form">
                    <div className="form-group">
                      <label>Height (cm)</label>
                      <input
                        type="number"
                        placeholder="175"
                        value={bmiData.height}
                        onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Weight (kg)</label>
                      <input
                        type="number"
                        placeholder="70"
                        value={bmiData.weight}
                        onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                      />
                    </div>
                    <button className="tool-calculate-btn" onClick={calculateBMI}>
                      Calculate BMI
                    </button>
                  </div>
                  {bmiData.result && (
                    <div className="tool-result" style={{ '--result-color': bmiData.result.color }}>
                      <div className="result-value">{bmiData.result.bmi}</div>
                      <div className="result-label">{bmiData.result.category}</div>
                      <div className="result-scale">
                        <div className="scale-bar">
                          <div className="scale-marker" style={{ left: `${Math.min(100, (bmiData.result.bmi / 40) * 100)}%` }}></div>
                        </div>
                        <div className="scale-labels">
                          <span>Under</span>
                          <span>Normal</span>
                          <span>Over</span>
                          <span>Obese</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Heart Risk Calculator */}
              {activeTool === 'heart' && (
                <div className="tool-body">
                  <h3><i className="fas fa-heart-pulse"></i> Heart Risk Assessment</h3>
                  <div className="tool-form">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        type="number"
                        placeholder="45"
                        value={heartData.age}
                        onChange={(e) => setHeartData({ ...heartData, age: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Cholesterol (mg/dL)</label>
                      <input
                        type="number"
                        placeholder="200"
                        value={heartData.cholesterol}
                        onChange={(e) => setHeartData({ ...heartData, cholesterol: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Blood Pressure (Systolic)</label>
                      <input
                        type="number"
                        placeholder="120"
                        value={heartData.bp}
                        onChange={(e) => setHeartData({ ...heartData, bp: e.target.value })}
                      />
                    </div>
                    <button className="tool-calculate-btn" onClick={calculateHeartRisk}>
                      Assess Risk
                    </button>
                  </div>
                  {heartData.result && (
                    <div className="tool-result" style={{ '--result-color': heartData.result.color }}>
                      <div className="result-icon">
                        <i className="fas fa-heart"></i>
                      </div>
                      <div className="result-label">{heartData.result.level}</div>
                      <p className="result-note">Consult with a cardiologist for a comprehensive evaluation.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Symptom Checker */}
              {activeTool === 'symptoms' && (
                <div className="tool-body">
                  <h3><i className="fas fa-stethoscope"></i> AI Symptom Checker</h3>
                  <p className="tool-desc">Our AI-powered symptom checker helps identify possible conditions based on your symptoms.</p>
                  <a href="#symptom-checker" className="tool-launch-btn">
                    <i className="fas fa-play"></i>
                    Launch Symptom Checker
                  </a>
                  <div className="tool-disclaimer">
                    <i className="fas fa-info-circle"></i>
                    This tool provides general information only and is not a substitute for professional medical advice.
                  </div>
                </div>
              )}

              {/* Find a Doctor */}
              {activeTool === 'appointment' && (
                <div className="tool-body">
                  <h3><i className="fas fa-user-doctor"></i> Find the Right Doctor</h3>
                  <p className="tool-desc">Search our network of 200+ specialists to find the perfect match for your healthcare needs.</p>
                  <div className="doctor-search">
                    <input type="text" placeholder="Search by specialty, condition, or doctor name..." />
                    <button><i className="fas fa-search"></i></button>
                  </div>
                  <div className="popular-searches">
                    <span>Popular:</span>
                    <button>Cardiologist</button>
                    <button>Dermatologist</button>
                    <button>Pediatrician</button>
                    <button>Orthopedic</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTools;
