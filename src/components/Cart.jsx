import { useSelector } from "react-redux";
import { CDN_IMG_BASE_URL } from "./../constants/constants.js";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex flex-wrap m-10 gap-5">
            {cartItems.map((item, index) => (
                <div key={index} className="flex flex-col w-64 h-full p-5 border rounded shadow-lg items-center">
                    <img alt={item.name} src={CDN_IMG_BASE_URL + item.imageId} />
                    <p className="font-semibold text-red-400">{item.name}</p>
                    <p className="text-green-400">Price: ${item.price / 1000}</p>
                </div>
            ))}
        </div>

    )
}
export default Cart;