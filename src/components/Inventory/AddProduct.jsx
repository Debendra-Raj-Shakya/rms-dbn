import React from 'react'
import {Formik,Form,Field} from "formik"
const AddProduct = ({addProduct}) => {
  return (
    <Formik
    onSubmit={(data,{resetForm})=>{
     addProduct(data)
     resetForm();
    }}
      initialValues={{
        name: "deben",
        imageURL: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
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
              <Field
                name="name"
                // value={values.name}
                // onChange={handleChange}
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
              <Field
                name="imageURL"
                // value={values.imageURL}
                // onChange={handleChange}
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
              <Field
              as='textarea'
                name="description"
                value={values.description}
                onChange={handleChange}
                className="textarea input input-bordered w-full max-w-lg h-20"
                placeholder="Bio"
                // rows={4}
              />

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
              <Field
                name="price"
                // value={values.price}
                // onChange={handleChange}
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
              <Field
                name="quantity"
                // value={values.quantity}
                // onChange={handleChange}
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
  )
}

export default AddProduct