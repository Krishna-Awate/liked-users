import "./Routing.css";

const Card = ({ image, name, status, gender, species }) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={image}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="flip-card-back">
            <h4> Name: {name}</h4>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
            <p>Spacies: {species}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
