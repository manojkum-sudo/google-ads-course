import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-disclaimer">
        This site is not part of and/or endorsed by Facebook™. <br />
        Facebook™ is a trademark of Facebook™, Inc.
      </p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/refund-policy">Refund/Cancellation Policy</a>
        <a href="/term">Terms & Conditions</a>
        <a href="/disclaimer">Disclaimer</a>
      </div>
      <p className="footer-text">
        As stipulated by law, we can not and do not make any guarantees about
        your ability to get results or earn any money with our ideas,
        information, tools or strategies. We just want to help you by giving
        great content, direction and strategies that worked well for us and our
        students and that we believe can move you forward. All of our terms,
        privacy policies and disclaimers for this program and website can be
        accessed via the link above. We feel transparency is important and we
        hold ourselves (and you) to a high standard of integrity. Thanks for
        stopping by. We hope this training and content brings you a lot of
        value.
      </p>
    </div>
  );
};

export default Footer;
