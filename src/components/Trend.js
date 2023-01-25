const Trend = ({ trendData }) => {
  const renderedElement = trendData.map((trend) => {
    return (
      <div className="trend" key={trend.num}>
        <img src={trend.img} alt="img" />
        <div className="trend-content">
          <h2 className="trend-num">{trend.num}</h2>
          <h4 className="trend-header">{trend.header}</h4>
          <p className="trend-paragraph">{trend.paragraph}</p>
        </div>
      </div>
    );
  });

  return <>{renderedElement}</>;
};

export default Trend;
