import React from "react";
import { Formik, Form } from "formik";
const AddProduct = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <Formik
      onSubmit={(data)=>{
        console.log(data)
      }}
        initialValues={{
          name: "deben",
          imageURL: "",
          price: 0,
          quantity: 0,
          description: "",
        }}
      >
        {({values,handleChange}) => (
          <>
            <Form>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Type name of food"
                  className="input input-bordered w-full max-w-lg"
                />
                {/* <label className="label">
                <span className="label-text-alt">Alt label</span>
                <span className="label-text-alt">Alt label</span>
              </label> */}
              </div>

              {/* image ko lagi */}

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  name="imageUrl"
                  value={values.imageURL}
                  onChange={handleChange}
                  type="text"
                  placeholder="Image of food"
                  className="input input-bordered w-full max-w-lg"
                />
                {/* <label className="label">
                <span className="label-text-alt">Alt label</span>
                <span className="label-text-alt">Alt label</span>
              </label> */}
              </div>

              {/* description */}
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <textarea
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-lg"
                  type="textarea"
                  placeholder="Bio"
                ></textarea>

                {/* <label className="label">
                <span className="label-text-alt">Alt label</span>
                <span className="label-text-alt">Alt label</span>
              </label> */}
              </div>

              {/* price */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product price</span>
                </label>
                <input
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  type="number"
                  placeholder="Type price of food"
                  className="input input-bordered w-full max-w-xs"
                />
                {/* <label className="label">
                <span className="label-text-alt">Alt label</span>
                <span className="label-text-alt">Alt label</span>
              </label> */}
              </div>

              {/* quanitity */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <input
                  name="quantity"
                  value={values.quantity}
                  onChange={handleChange}
                  type="number"
                  placeholder="Type quantity of food"
                  className="input input-bordered w-full max-w-lg"
                />
                {/* <label className="label">
                <span className="label-text-alt">Alt label</span>
                <span className="label-text-alt">Alt label</span>
              </label> */}
              </div>

              <button type="submit" className="mt-4 btn btn-primary">
                submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
