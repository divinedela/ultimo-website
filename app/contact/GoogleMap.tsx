import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div
      className="map-container"
      style={{ borderRadius: "10px", overflow: "hidden" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.8812326201078!2d0.5265081124728485!3d5.984163473814675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020e3c2bff56f05%3A0xc56c52f92680493d!2sJOHNNY%27S%20CORNER!5e1!3m2!1sen!2sgh!4v1723901377815!5m2!1sen!2sgh"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "10px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
