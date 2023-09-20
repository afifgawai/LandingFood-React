import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenus } from "../actions/menuAction";
import { getRestaurants } from "../actions/restaurantAction";
import FoodItem from "./FoodItem"; 


const Menu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { menus, loading, error } = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(getMenus(id));
    dispatch(getRestaurants());
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <p>Loading menus...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2>
            <hr />
            {menu.items && menu.items.length > 0 ? (
              <div className="row">
                {menu.items.map((fooditem) => (
                  <FoodItem key={fooditem._id} fooditem={fooditem} />
                ))}
              </div>
            ) : (
              <p>No food items available</p>
            )}
          </div>
        ))
      ) : (
        <p>No Menus available</p>
      )}
    </div>
  );
};

export default Menu;
