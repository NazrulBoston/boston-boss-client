
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
  
    return (
        <section className="mb-12">
            <SectionTitle
                heading={"from our menu"}
                subHeading={"Popular Items"}

            ></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-2 mt-6">View Full Menu</button>

            </div>

        </section>
    );
};

export default PopularMenu;