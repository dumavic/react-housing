import './shopitem.css';

const ShopItem = (shopItem) => {

return (
<section className='shop-item'>
    <div className='shop-item-img'>
<img src={shopItem.img_name} />
    </div>
    <div className='shop-item-info'>
        <h2>{shopItem.item_name}</h2>
        <p>Price: {shopItem.price}</p>
    </div>
</section>
  );
}

export default ShopItem;
