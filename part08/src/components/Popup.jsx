import './popup.css';


const Popup = (props) => {

    const [inputs, setInputs] = useState({});

    const onSubmit = () => {};

    const handleChange = (event) => {
        const item_name = event.target.item_name;
        const price = event.target.price;
        const img_name = event.target.img_name;
        const description = event.target.description;
        const collectionType = event.target.collectionType;
        const best_seller = event.target.best_seller;
        const newest_arrival = event.target.newest_arrival;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            item name, item page run from item name.html, price, sizes, img_name, description, 
            collectionType, best seller tag, newest arrival tag, detail tag

            <span id="dialog-close" 
            className='w3-button w3-display-topright' 
            onClick={props.closeDialog}>
                &times;
            </span>
            <form id='add-item-form' onSubmit={onSubmit}>
                <p>
                    <label htmlFor="item_name">Item Name</label>
                    <input type="text" id="item_name" name="item_name" value={inputs.item_name || ""} required />
                </p>

                <p>
                    <label htmlFor='price'>Price</label>
                    <input type="number" id="price" name="price" value={inputs.price || ""} required/>
                </p>

                <p>
                    <label htmlFor="img_name">Image</label>
                    <input type="image" id="img_name" name="img_name" value={inputs.img_name || ""}/>
                </p>

                <p>
                    <label htmlFor='description'>Description</label>
                    <input type="text" id='description' name="description" value={inputs.description || ""} required />
                </p>

                <p>
                    <label htmlFor='collectionType'>Collection Type</label>
                    <input type="text" id="collectionType" name="collectionType" value={inputs.collectionType || ""} required />
                </p>

                <p>
                    <label htmlFor='best_seller'>Best Seller</label>
                    <input type="checkbox" id="best_seller" name="best_seller" value={inputs.best_seller || ""} required/>
                </p>

                <p>
                    <label htmlFor='newest_arrival'>Newest Arrival</label>
                    <input type="checkbox" id="newest_arrival" name="newest_arrival" value={inputs.newest_arrival || ""} required/>
                </p>

                <p>
                    <button type="submit">Submit</button>
                </p>

            </form>
        </div>
    )

}


export default Popup;