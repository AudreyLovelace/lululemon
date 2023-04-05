import React, { useState, useEffect,  } from "react";
import "./ImpulseShadow.scss";
export default function ImpulseShadow({ total }) {
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    let timerId;
    if (total) {
      timerId = setTimeout(() => {
        setShowShadow(true);
      }, 5000);
    } else {
      setShowShadow(false);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [total]);
  return showShadow && <div className="impulse_shadow"></div>;
}
