import { useState } from "react";

import { DanceType, Timeline, timelineData } from "../data/timelineData";

const PovijestPlesa = () => {
  const [historyData, setHistoryData] = useState<DanceType | null>(null);

  const getHistoryData = (id: number) => {
    timelineData.forEach((century) => {
      if (century.id === id) {
        setHistoryData(century.data);
      }
    });
  };

  return (
    <div>
      <div className="timeline">
        {timelineData.map((century: Timeline) => {
          return (
            <div
              onClick={() => getHistoryData(century.id)}
              className="timeline__box"
            >
              {century.century}
            </div>
            
          );
        })}
      </div>
      <div>
        <h1 className="naslov">Info</h1>
        {historyData ? (
          <div className="timeline__container">
            <div className="timeline__container--item1">{historyData.title}</div>
            <hr />
            <div className="timeline__container--item2">{historyData.subtitle}</div>
            <hr />
            <div className="timeline__container--item3">{historyData.content}</div>
            <hr />
            <div className="timeline__container--item4"><a href={historyData.image}>Klikni za sliku</a></div>
          </div>
        ) : (
          "Odaberi neko stoljeće"
        )}
      </div>
    </div>
  );
};

export default PovijestPlesa;