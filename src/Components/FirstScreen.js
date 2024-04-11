import React, { useState, useEffect } from "react";
import "./FirstScreen.css";
import Signup from "./Signup";

const FirstScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowComponent(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="First">
      {isLoading && (
        <div className="loading-screen">
          <img src="./30-30 (1).jpg" alt="Loading..." />
        </div>
      )}

      {showComponent && <Signup/>}
    </div>
  );
};

export default FirstScreen;
