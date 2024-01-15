import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="what's new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text">Recipe name<span className="text-red-600">*</span></span>
                        </div>
                        <input {...register('name', {required: true})}
                            required
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full " />
                    </label>

                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full my-6 ">
                            <div className="label">
                                <span className="label-text">Category<span className="text-red-600">*</span></span>
                            </div>
                            <select defaultValue="default" {...register('category', {required: true} )}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        {/* price */}
                        <label className="form-control w-full my-6 ">
                            <div className="label">
                                <span className="label-text">Price<span className="text-red-600">*</span></span>
                            </div>
                            <input {...register('price' , {required: true})}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control my-6">
                        <div className="label">
                            <span className="label-text">Recipe details<span className="text-red-600">*</span></span>
                        </div>
                        <textarea {...register('recipe' , {required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                    </label>

                    {/* file input */}
                    <div>
                        <input {...register('image' , {required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-outline mt-5 text-amber-600 ">
                            Add Items <FaUtensils></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddItems;