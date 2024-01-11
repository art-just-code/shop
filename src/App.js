import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowInformation from "./components/ShowInformation";

export default function App() {
  const items = [
    {
      "img": "./img/avocado.png",
      "title": "Сап надувной Avocado",
      "desc": "Прочная надувная доска для гребли стоя с полным комплектом",
      "category": "supboard",
      "price": 19000,
      "balance": 0,
      "id": "1"
    },
    {
      "img": "./img/galaxy.png",
      "title": "Сап надувной Galaxy",
      "desc": "Прочная надувная доска для гребли стоя с полным комплектом",
      "category": "supboard",
      "price": 19000,
      "balance": 5,
      "id": "2"
    },
    {
      "img": "./img/paddle.jpg",
      "title": "Весло для гребли SUP",
      "desc": "Алюминиевое трехсоставное весло для гребли стоя",
      "category": "paddle",
      "price": 2000,
      "balance": 8,
      "id": "3"
    }
  ]

  const [currentItems, setCurrentItems] = useState(items);
  const [orders, setOrders] = useState([]);
  const [showInformation, setShowInformation] = useState(false);
  const [fullItem, setFullItem] = useState({});
  
  /*  
 В гите не работает мокапи?
 const [items, setItems] = useState([]);
 useEffect(() => {
    fetch('https://64ccfd81bb31a268409a3879.mockapi.io/shop')
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setCurrentItems(json);
      })
      .catch(err => {
        console.warn(err);
        alert('Ошибка при получении данных с сервера')
      })
  }, []); */

  function onShowInfo(item) {
    setFullItem(item);
    setShowInformation(!showInformation);
  }

  function chooseCategory(category) {
    if (category === 'all') {
      setCurrentItems(items)
      return
    }
    setCurrentItems(items.filter(el => el.category === category))
  }

  function deleteOrder(id) {
    setOrders(orders.filter(el => el.id !== id))
  }

  function addToOrder(item) {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) setOrders([...orders, item])
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowInfo={onShowInfo} items={currentItems} onAdd={addToOrder} />
      {showInformation && <ShowInformation onAdd={addToOrder} onShowInfo={onShowInfo} item={fullItem} />}
      <Footer />
    </div>
  );
}