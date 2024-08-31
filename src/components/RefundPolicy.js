import React from "react";
import { useNavigate } from "react-router-dom";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="refund-policy-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1>Return and Refund Policy</h1>
      <p>
        We want you to be completely satisfied with your purchase. If, for any
        reason, you are not happy with the course, we offer a 30-day return and
        refund policy.
      </p>
      <h2>Eligibility for Refund:</h2>
      <p>
        You are eligible for a full refund if you request it within 30 days of
        your purchase. The refund applies only to the course you purchased
        directly from our website. To be eligible for a refund, you must not
        have completed more than 25% of the course content.
      </p>
      <h2>How to Request a Refund:</h2>
      <p>
        To initiate a refund, please contact our support team at{" "}
        <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>{" "}
        with your order details. Once your request is received and verified, we
        will process your refund within 5-7 business days. The refund will be
        issued to the original payment method used during the purchase.
      </p>
      <h2>Non-Refundable Items:</h2>
      <p>
        Any downloadable materials, templates, or resources included in the
        course are non-refundable once downloaded.
      </p>
      <h2>Exceptions:</h2>
      <p>
        If the course has been accessed or completed beyond the 25% mark, the
        refund request may be subject to review and is not guaranteed.
      </p>
      <h2>Changes to this Policy:</h2>
      <p>
        We reserve the right to modify this return and refund policy at any
        time. Changes will be effective immediately upon posting to this page.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions regarding this policy, feel free to contact us
        at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.
      </p>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default RefundPolicy;
