import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from '../../../assets/home/featured.jpg';
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 ">
            <SectionTitle
                subHeading={'check it out'}
                heading={'featured item'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-50 pb-20 pt-12 px-36 ">
                <div>
                    <img src={feature} alt="" />
                </div>
                <div className="md:ml-16">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase ">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam expedita asperiores accusantium quasi, aperiam consectetur veniam eos. At, voluptas nemo. Eveniet dolore sunt omnis ipsam in dolores id magnam dolorem suscipit natus fugit a totam ullam, earum, consectetur aspernatur nemo eos illum? Accusantium et incidunt reprehenderit delectus vel eum!</p>
                    <button className="btn btn-outline border-0 border-b-2 text-white mt-6">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;