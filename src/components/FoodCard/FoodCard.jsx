

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className= "absolute right-0 bg-slate-900 text-white mr-8 mt-4 px-2 rounded">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;