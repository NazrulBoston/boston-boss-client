import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="space-y-12 my-8" >
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

           <div className="text-center">
           <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-2 mt-6">Order Now</button>
            </Link>
           </div>
        </div>
    );
};

export default MenuCategory;