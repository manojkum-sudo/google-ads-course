import React from "react";
import {
  FaChartLine,
  FaUserGraduate,
  FaBullhorn,
  FaDollarSign,
} from "react-icons/fa";
import "./WebinarInfo.css";

const WebinarInfo = () => {
  return (
    <div className="container">
      <h1 className="main-heading">WHAT IF WE TELL YOU...</h1>
      <p className="sub-heading">
        Learn how to set up and run profitable Google Ads to sell your products
        or services online, without the need to hire expensive freelancers or
        agencies, and avoid spending a fortune on trial and error.
      </p>
      <button className="cta-button">
        Join the Advanced Google Ads Masterclass Now
      </button>

      <h2 className="learn-heading">HERE IS WHAT YOU ARE GOING TO LEARN</h2>

      <div className="learn-cards">
        <div className="card">
          <FaChartLine
            style={{ marginRight: 10, color: "#3498db" }}
            size={40}
          />
          <p>
            <span>Learn to Use Google Ads </span> <br /> to 3X Your Business
            Profit
          </p>
        </div>
        <div className="card">
          <FaUserGraduate
            size={40}
            style={{ marginRight: 10, color: "#3498db" }}
          />
          <p>
            <span> Learn Google Ads</span> <br /> from EX Google & IIM Kozhikode
            Alumni with over 8 years of exp running Google ads
          </p>
        </div>
        <div className="card">
          <FaBullhorn size={40} style={{ marginRight: 10, color: "#3498db" }} />
          <p>
            <span>Reach the Right Audience</span> <br /> Who Will Buy Your
            Products & Services
          </p>
        </div>
        <div className="card">
          <FaDollarSign
            size={40}
            style={{ marginRight: 10, color: "#3498db" }}
          />
          <p>
            <span>Use Google Ads </span> <br /> to Achieve High Returns on Your
            Investments
          </p>
        </div>
      </div>

      <h2 className="footer-heading">
        ELEVATE YOUR ONLINE PRESENCE WITH ADVANCED GOOGLE ADS STRATEGIES TODAY!
      </h2>
      <button className="price-button">Get Instant Access At ₹199!</button>
    </div>
  );
};

export default WebinarInfo;
