import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed bottom-[1rem] right-[1rem] flex justify-center items-center z-50">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
