import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/home/banner.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupsImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Boston-Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>

            {/* Main cover */}
            <SectionTitle
                subHeading="Don't miss"
                heading="today's offer"
            ></SectionTitle>
           
            {/* Offered menu items */}
            <MenuCategory
                items={offered}
            ></MenuCategory>
            <div className='text-center mb-8'>
                <button className="btn btn-outline border-0 border-b-2 mt-6">Order Now</button>

            </div>
            {/* desserts menu item */}
            <MenuCategory
                items={desserts}
                title="desserts"
                img={dessertImg}
            ></MenuCategory>
            <div className='text-center mb-8'>
                <button className="btn btn-outline border-0 border-b-2 mt-6">Order Now</button>

            </div>
            {/* pizza menu item */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>
            <div className='text-center mb-8'>
                <button className="btn btn-outline border-0 border-b-2 mt-6">Order Now</button>

            </div>

            {/* salad menu item */}

            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg}
            ></MenuCategory>
            <div className='text-center mb-8'>
                <button className="btn btn-outline border-0 border-b-2 mt-6">Order Now</button>

            </div>

            {/* soup menu item */}

            <MenuCategory
                items={soup}
                title="soup"
                img={soupsImg}

            ></MenuCategory>
            <div className='text-center mb-8'>
                <button className="btn btn-outline border-0 border-b-2 mt-6">Order Now</button>

            </div>



        </div>
    );
};

export default Menu;