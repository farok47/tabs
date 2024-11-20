import React, { useState } from "react";
import "./tabs.css";

function TAbs({ tabscontent, onChange }) {
  const [currenttabindex, setcurrenttabindex] = useState(0);
  function handleclick(getcurrentindex) {
    setcurrenttabindex(getcurrentindex);
    onChange(getcurrentindex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabscontent.map((tabditem, index) => {
          return (
            <div
              className={`tab-item ${
                currenttabindex === index ? "active" : null
              }`}
              onClick={() => handleclick(index)}
              key={index}
            >
              <span className="label">{tabditem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="content">
        {tabscontent[currenttabindex] && tabscontent[currenttabindex].content}
      </div>
    </div>
  );
}

export default TAbs;
