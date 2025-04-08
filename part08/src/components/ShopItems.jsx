import './shopitems.css';

const ShopItems = (shopItem) => {

return (
<section className="item-showcase">
    <div className='shop-items'>
    <section className='shop-item'>
    <div className='shop-item-img'>
    <img src={shopItem.img_name} />
    </div>
    <div className="shop-item-info">
        <h2>{shopItem.item_name}</h2>
        <p>Price: {shopItem.price}</p>
        <p>Select Size:</p>
        <div className="size-option">
            <button className="sizes">XS</button>
            <button className="sizes">S</button>
            <button className="sizes">M</button>
            <button className="sizes">L</button>
            <button className="sizes">XL</button>
            </div>
        <button className="add-to-cart">Add to Cart</button>
    </div>
</section>
    </div>

<div className="item-description">
<h4>Description</h4>
<p>This is a Jacket that is designed based off of the Asian folklore of the koi and the dragon. The koi represents struggle and adversity, striving for greatness and one day turning into a dragon. The jacket is black with ABA origin story design on the back.</p>
</div>
</section>
  );
}

export default ShopItems;
