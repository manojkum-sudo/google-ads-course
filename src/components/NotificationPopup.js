import React, { useEffect, useState } from "react";
import "./NotificationPopup.css";

const NotificationPopup = ({ buyerName, location, purchaseTime }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the notification after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="notification-popup">
      <p>
        <strong>{buyerName}</strong> from {location} purchased the course!
      </p>
      <span className="time">{purchaseTime}</span>
    </div>
  );
};

export default NotificationPopup;
