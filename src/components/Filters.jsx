import { useState } from "react";
import "../styles/_filters.scss";

const Filters = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isLevelVisible, setLevelVisible] = useState(false);
  const [isLocationVisible, setLocationVisible] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  const toggleLevel = () => {
    setLevelVisible(!isLevelVisible);
  };
  const toggleLocation = () => {
    setLocationVisible(!isLocationVisible);
  };

  return (
    <section className="filtersContainer">
      <div className="calendar">
        <img src="./src/assets/img/calendar.png" alt="calendrier"></img>
        <button className="calendarButton" onClick={toggleCalendar}>
          Calendrier {isCalendarVisible ? "-" : "+"}
        </button>
      </div>
      <div className="levels">
        <div className="levelButtonContainer">
          <img src="./src/assets/img/level.png" alt="niveau" onClick={toggleLevel}></img>
          <button className="levelButton" onClick={toggleLevel}>Niveau {isLevelVisible ? "-" : "+"}</button>
        </div>
        <ul className={isLevelVisible ? "visible" : "hidden"}>
          <li><a href="noob">Novice</a></li>
          <li><a href="inter">Intermédiaire</a></li>
          <li><a href="pro">Confirmé</a></li>
        </ul>
      </div>
      <div className="localisation">
        <img src="./src/assets/img/localisation.png" alt="localisation"></img>
        <button className="localisationButton" onClick={toggleLocation}>
          Localisation {isLocationVisible ? "-" : "+"}
        </button>
      </div>
    </section>
  );
};


export default Filters;