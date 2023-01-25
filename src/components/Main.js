import image from "../images/image-web-3-desktop.jpg";
import New from "./New";
import Trend from "./Trend";

const Main = () => {
  const trendData = [
    {
      img: "../images/image-retro-pcs.jpg",
      num: "01",
      header: "Reviving Retro PCs",
      paragraph: "What happens when old PCs are given modern upgrades?",
    },
    {
      img: "../images/image-top-laptops.jpg",
      num: "02",
      header: "Top 10 Laptops of 2022",
      paragraph: "Our best picks for various needs and budgets.",
    },
    {
      img: "../images/image-gaming-growth.jpg",
      num: "03",
      header: "The Growth of Gaming",
      paragraph: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <main className="main">
      <div className="article-cont">
        <div className="cont">
          <img src={image} alt="web3" />

          <div className="main-container">
            <div className="highlight">
              <p className="highlight-text">The Bright Future of Web 3.0 ?</p>
            </div>

            <div className="main-detail">
              <p className="detail-text">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fufilling its promise?
              </p>
              <button className="read-more">READ MORE</button>
            </div>
          </div>
        </div>

        <New />
      </div>

      <div className="trend-container">
        <Trend trendData={trendData} />
      </div>
      
    </main>
  );
};

export default Main;
