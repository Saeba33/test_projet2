const Card = () => {
  return (
    <div className="cardContainer">
      <img className="imgSpot"/>
      <div className="infoSpot">
        <h4 className="titleSpot">Titre du Spot</h4>
        <p className="descriptionSpot">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed recusandae id, eaque nisi perferendis earum eius error doloribus ut.</p>
        <p className="others">Autres infos</p>
      </div>
    </div>
  );
};

export default Card;
