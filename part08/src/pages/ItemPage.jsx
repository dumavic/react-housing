import './itempage.css';
import ShopItems from '../components/ShopItems';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // To access the route parameter

const ItemPage = () => {
  const { name } = useParams();  // Get the name parameter from the URL
  const [shopItems, setShopItems] = useState([]);
  const [item, setItem] = useState(null);  // State to hold the specific item

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://dumavic.github.io/projects/part6/json/items.json"
      );
      setShopItems(response.data);
    })();
  }, []);

  // Find the specific item that matches the 'name' parameter in the URL
  useEffect(() => {
    if (shopItems.length > 0) {
      const foundItem = shopItems.find(item => item.item_page === name);
      setItem(foundItem);  // Set the found item
    }
  }, [shopItems, name]);

  // If item is not found or loading, show a loading message or error
  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <section className="item-page-container" id={`item-`+ item.item_id}>
        <ShopItems
          key={item.item_id}
          img_name={`https://dumavic.github.io/projects/part6/images/${item.img_name}`}
          item_name={item.item_name}
          price={item.price}
        />
    </section>
  );
};

export default ItemPage;
