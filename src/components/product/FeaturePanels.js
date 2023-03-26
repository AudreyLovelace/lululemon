import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import PlusMinus from "../filter/PlusMinus";
import "./FeaturePanels.scss";
export default function FeaturePanels({
  panel,
  panelIndex,
  setPanelIndex,
  panelRef,
}) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  //   console.log(panelIndex);

  function trimExtraWords(title) {
    const extraWords = "(Click to Expand)";
    if (!title.includes(extraWords)) {
      return title;
    }
    return title.slice(0, title.length - extraWords.length);
  }

  return (
    <div className="feature_panels" ref={panelRef}>
      {panel.map((e, index) => {
        return (
          <div
            key={index}
            className="feature_panel"
            onClick={() => {
              if (!e.isPanel) {
                return;
              }
              if (index !== panelIndex) {
                setPanelIndex(index);
              } else {
                setPanelIndex(-2);
              }
            }}
          >
            <div className="container">
              <div className="feature_panel_title">
                <h1>
                  <img src={e.iconPath} alt="/" />
                  {trimExtraWords(e.title)}
                </h1>
                {e.isPanel && <PlusMinus expand={panelIndex === index} />}
              </div>
              {e.isPanel && index === panelIndex && (
                <ul>
                  {e.content.map((content, i) => {
                    return <li key={i}>{content}</li>;
                  })}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
