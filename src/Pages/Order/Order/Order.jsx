import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={salad} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={offered} ></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;