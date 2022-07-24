import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useBilling } from "../../context/Billing";
const ProductCard = ({
  product: { id, imageURL, name, price, description },
}) => {

  const [modal, setModal] = useState(false);
  const { addOrder } = useBilling();
  return (
    <div key={id} className="card w-96 bg-base-100 shadow-xl h-[28rem]">
      <figure className="px-10 pt-10">
        <img src={imageURL} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <input
            type="checkbox"
            checked={modal}
            onChange={()=>setModal(false)}
            id="add_product-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <button
                onClick={() => setModal(false)}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </button>
              {/* quantity orders start */}
              <Formik
                initialValues={{ quantity: 1 }}
                onSubmit={(data) => {
                  addOrder(id, data.quantity);
                }}
              >
                {() => (
                  <Form>
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
                      <label className="label">
                        <ErrorMessage
                          name="quantity"
                          component="span"
                          className="label-text-alt"
                        />
                      </label>
                      <div className="modal-action">
                        <button type="submit" className="btn">
                          submit
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>

              {/* quantity orders end */}
            </div>
          </div>
          <div className="flex justify-end mx-10 my-6">
            <button onClick={() => setModal(true)} className="btn btn-primary">
              add products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
