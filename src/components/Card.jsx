const Card = () => {
  return (
    <div className="cardContainer">
      <img src="./src/assets/img/plage.jpeg" alt="photo" />
      <div className="infoSpot">
        <h4 className="titleSpot">Titre Spot</h4>
        <p className="descriptionSpot">Description</p>
        <p className="others">Autres infos</p>
      </div>
    </div>
  );
};

export default Card;
