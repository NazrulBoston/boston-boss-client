import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";




const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()


    const handleAddToCart = () => {
        if (user && user.email) {
            //send to the cart item in database
            // console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            console.log(cartItem)
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to  your cart `,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send to the login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-slate-900 text-white mr-8 mt-4 px-2 rounded">${price}</p>
            <div className="card-body flex flex-col items-center" >
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline border-0 border-b-2 border-orange-300"
                    >add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;