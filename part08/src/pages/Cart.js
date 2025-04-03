import './cart.css';

function Cart() {
    return(
        <div>

            <section id="cart-container">
        <div class="cart-item">
            <div class="cart-info">
            <div class="cart-item-img">
                <img src="../images/black-jacket.jpg" />
            </div>
                <h2><a href="./jacket.html">JACKET</a></h2>
                <p>Size: Large</p>
            </div>

            <div class="cart-amount">
                <b>Quantity: 1</b>
                <b>Price: $80.00</b>
            </div>
        </div>

        <div id="cart-total">
            <h3>SUBTOTAL: $80.00</h3>
            <p>Taxes and shipping calculated at checkout</p>
            <button>Checkout</button>
        </div>
</section>

        </div>
    )
}

export default Cart;