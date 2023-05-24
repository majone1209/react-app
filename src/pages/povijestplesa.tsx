import { useState } from "react";


import { Timeline, timelineData } from "../data/timelineData";

const PovijestPlesa = () => {
  const [historyData, setHistoryData] = useState<Timeline[]> ([]);

  const getHistoryData = (id: number) => {
    historyData.forEach((value) => {
      if (value.id === id) {
        setHistoryData(value);
      }
    });
  };

  {historyData.map((dance: Timeline) => {
  return (
    <div>
      <div className="timeline">
        <div onClick={() => getHistoryData(dance.id)} className="timeline__box">14 stoljeće</div>
      </div>
    </div>
  })}
  )
  

export default PovijestPlesa;
