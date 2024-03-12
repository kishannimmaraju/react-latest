import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  //   console.log(params);

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     try {
  //       const data = await fetch(
  //         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3188294&lng=78.58737590000001&restaurantId=" +
  //           { resId } +
  //           "&catalog_qa=undefined&submitAction=ENTER"
  //       );
  //       const jsonData = await data.json();
  //       setResInfo(jsonData.data);
  //       console.log(jsonData, "helloo");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  if (resInfo === null) {
    return (
      <div className="loading-gif">
        <iframe
          src="https://giphy.com/embed/wvtt4mtViPOSrLYNFh"
          width="200"
          height="200"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <a href="https://giphy.com/gifs/music-loading-colkie-wvtt4mtViPOSrLYNFh"></a>
      </div>
    );
  }

  //   const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
  //     resInfo?.cards[0]?.card?.card?.info;

  //   const { itemCards } =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //       ?.categories[1]?.itemCards[0]?.card;
  //   console.log(itemCards, "Hello");

  return (
    <>
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </>
  );
};
export default RestaurantMenu;
