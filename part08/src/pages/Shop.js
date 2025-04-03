import './shop.css'

function Shop() {
    return(
        <div>
            <section id="shop-page-mid">
    <div class="filter">
        <p>FILTER:</p>
        <div class="dropdown">
            <button class="dropbtn">By Price</button>
            <div class="dropdown-content">
            <a href="#">Lowest to Highest</a>
            <a href="#">Highest to Lowest</a>
            </div>
          </div>
    </div>
    <section id="item-container">

        <div class="shop-type-tag">
            <b>Best Sellers:</b>
        </div>
        <div id="shop-items-top">

        </div>

        <div class="shop-type-tag">
            <b>Newest Arrvials:</b>
        </div>
        <div id="shop-items-bot">
        </div>

    </section>
</section>

        </div>
    )
}

export default Shop;