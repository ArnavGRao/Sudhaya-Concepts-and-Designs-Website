import axios from "axios";
import { useCallback, useState, useEffect } from "react";

import "./showcase.css";

import DisplaySection from "./DisplaySection";

export default function Showcase() {
  const FETCH_API_URL = import.meta.env.VITE_API_URL + "/images/?dirName=";

  const [food_carts, setFoodCarts] = useState([]);
  const [food_stalls, setFoodStalls] = useState([]);
  const [food_vans, setFoodVans] = useState([]);

  const getList = useCallback(
    async (name) => {
      try {
        const { data } = await axios.get(`${FETCH_API_URL}${name}`);
        return data ?? [];
      } catch (error) {
        console.error("Axios error:", error);
        return [];
      }
    },
    [FETCH_API_URL],
  );

  useEffect(() => {
    const loadLists = async () => {
      const [carts, stalls, vans] = await Promise.all([
        getList("food-carts"),
        getList("food-stalls"),
        getList("food-vans"),
      ]);

      setFoodCarts(carts.urls);
      setFoodStalls(stalls.urls);
      setFoodVans(vans.urls);
    };

    loadLists();
  }, [getList]);
  return (
    <section className="showcase-section">
      <h1 className="showcase-title">Showcase</h1>
      <DisplaySection displayName={"Food Carts"} imageList={food_carts} />
      <DisplaySection displayName={"Food Stalls"} imageList={food_stalls} />
      <DisplaySection displayName={"Food Vans"} imageList={food_vans} />
    </section>
  );
}
