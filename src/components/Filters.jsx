const Filters = () => {
  return (
    <div className="filtersContainer">
      <div className="calendar">
        <img src="./src/assets/img/calendar.png" alt="calendrier"></img>
      </div>
      <div className="levels">
        <img src="./src/assets/img/level.png" alt="niveau"></img>
        <ul>
          <li><a href="level"> Niveau</a> </li>
                   </ul>
           <ul>
            <li>
              <a href="noob">Novice</a>
            </li>
            <li>
              <a href="inter">Intermédiaire</a>
            </li>
            <li>
              <a href="pro">Confirmé</a>
            </li>
          
        </ul>
      </div>
      <div className="localisation">
        <img src="./src/assets/img/localisation.png" alt="localisation"></img>
      </div>
    </div>
  );
};

export default Filters;
