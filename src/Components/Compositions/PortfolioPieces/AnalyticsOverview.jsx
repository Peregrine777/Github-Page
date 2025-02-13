import React from "react";
import "./AnalyticsOverview.css"; // Make sure to create appropriate styles for this component

const AnalyticsOverview = ({ darkMode }) => {
  const boldTextCol = darkMode ? "white" : "#333";

  return (
    <section className="analytics-overview">
      <div className="section-header">
        <h2 style={{ color: boldTextCol }}>Data Analytics Expertise</h2>
        <p>
          Leveraging data to uncover insights and drive business decisions.
          Although I work on sensitive projects, I can offer a range of services
          in statistical analysis, predictive modeling, and data visualization.
        </p>
      </div>

      <div className="skills-and-tools">
        <h3>Tools & Techniques</h3>
        <ul>
          <li>Statistical Analysis: Python (pandas, numpy, scipy)</li>
          <li>Data Visualization: Tableau, Power BI, Plotly</li>
          <li>Database Management: SQL, PostgreSQL, NoSQL</li>
          <li>Machine Learning: Scikit-learn, TensorFlow, Keras</li>
          <li>Data Processing: ETL, web scraping, APIs</li>
        </ul>
      </div>

      <div className="impact">
        <h3>Impact</h3>
        <p>
          In my past work, I've helped businesses improve decision-making with
          data-driven insights, built predictive models for revenue forecasting,
          and developed interactive dashboards to monitor key performance
          metrics. My work directly contributes to operational efficiency and
          informed strategic decisions.
        </p>
      </div>

      <div className="visuals">
        <div className="sample-graph">
          {/* This could be a placeholder or an animated graph */}
          <img src="/path-to-placeholder-image.png" />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsOverview;
