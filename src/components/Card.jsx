import { useState } from "react";
import "../styles/_card.scss";

const Card = () => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [isOthersVisible, setOthersVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };
  const toggleOthers = () => {
    setOthersVisible(!isOthersVisible);
  };

  return (
    <div className="cardContainer">
      <img className="imgSpot" onClick={toggleDescription}/>
      <div className="infoSpot">
        <h4 className="titleSpot">Titre du Spot</h4>
        <div
          className={`descriptionSpot ${isDescriptionVisible ? "visible" : "hidden"}`}
          onClick={toggleDescription}
        >
          <p className="toggleButton" onClick={toggleDescription}>
            {isDescriptionVisible ? "-" : "+"}Description
          </p>{" "}
          {isDescriptionVisible ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              sed recusandae id, eaque nisi perferendis earum eius error
              doloribus ut.
            </p>
          ) : null}
        </div>
        <div
          className={`others ${isOthersVisible ? "visible" : "hidden"}`}
          onClick={toggleOthers}
        >
          <p className="toggleButton" onClick={toggleOthers}>
            {isOthersVisible ? "-" : "+"}
            Autres infos
          </p>
          {isOthersVisible ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              ipsum soluta. Quod facere, sapiente earum laborum dignissimos
              blanditiis perspiciatis corporis!
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};


export default Card;