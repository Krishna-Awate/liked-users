import { useState, useEffect } from "react";
import Card from "./Card";

const LikedUser = () => {
  const [likedUser, setLikedUser] = useState([]);

  useEffect(() => {
    const userSessionStorage = sessionStorage.getItem("userData");
    if (userSessionStorage) {
      setLikedUser(JSON.parse(userSessionStorage));
    }
  }, []);

  const users = likedUser.map((users, index) => {
    if (likedUser[index].isLike) {
      return (
        <div key={index} className="col-md-4 my-2 ">
          <div className="users">
            <Card
              image={users.image}
              name={users.name}
              status={users.status}
              gender={users.gender}
              species={users.species}
            />
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "30px" }}>
        Liked user list
      </h3>
      <div className="container">
        <div className="row">{users}</div>
      </div>
    </>
  );
};

export default LikedUser;
