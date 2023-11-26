import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div >
            { title && <Cover img={img} title= {title}></Cover>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};
 
export default MenuCategory;