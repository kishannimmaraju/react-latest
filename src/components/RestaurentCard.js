import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    availability,
  } = resData;
  return (
    <div className="restaurent-card">
      <div className="res-item-img">
        <img
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <div className="res-description">
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{avgRating} stars</h3>
          <h3>{costForTwo}</h3>
          {/* <h3>{availability?.nextCloseTime}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
