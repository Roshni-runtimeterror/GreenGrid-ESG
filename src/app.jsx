import { metrics, insights } from "./data";

export default function App() {
  return (
    <div className="app">

      <header>
        <h1>🌿 GreenGrid AI</h1>
        <p>Smart ESG Monitoring Dashboard</p>
      </header>

      <section className="hero">
        <h2>ESG Score</h2>
        <div className="score">87</div>
        <p>Helping organizations track sustainability.</p>
      </section>

      <section className="cards">
        {metrics.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </section>

      <section className="chart">
        <h2>Monthly Carbon Emissions</h2>

        <div className="bars">
          <div style={{ height: "90px" }}></div>
          <div style={{ height: "120px" }}></div>
          <div style={{ height: "70px" }}></div>
          <div style={{ height: "110px" }}></div>
          <div style={{ height: "80px" }}></div>
        </div>
      </section>

      <section className="insights">
        <h2>AI Insights</h2>

        {insights.map((text, i) => (
          <div className="tip" key={i}>{text}</div>
        ))}
      </section>

      <section className="goals">
        <h2>ESG Goals</h2>

        <div className="goal">
          <span>Renewable Energy</span>
          <span>70%</span>
        </div>

        <div className="goal">
          <span>Carbon Reduction</span>
          <span>55%</span>
        </div>

        <div className="goal">
          <span>Waste Recycling</span>
          <span>80%</span>
        </div>
      </section>

    </div>
  );
}