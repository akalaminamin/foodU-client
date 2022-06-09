import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  personalInfo,
  shippingInfo,
  shippinCost,
  paymentInfo,
} from "../userData";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
const CheckoutForm = () => {
  const [shippingAddres, setShippingAddress] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddres, [name]: value });
    console.log({[name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="col-span-3 lg:col-span-2">
        {/* personal info */}
        <h2 className="text-xl text-black mb-3">01. Personal Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {personalInfo.map((item, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={item.label} className="text-gray-600">
                {item.label}
              </label>
              <br />
              <input
                className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {/* shipping details */}
        <h2 className="text-xl text-black mb-3">02. Shipping Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {shippingInfo.map((item, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={item.label} className="text-gray-600">
                {item.label}
              </label>
              <br />
              <input
                className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {/* shipping cost */}
        <h2 className="text-xl text-black mb-3">03. Shipping Cost</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {shippinCost.map((item, index) => (
            <div
              key={index}
              className="mb-3 border-2 border-gray-200 bg-light-gray rounded-md p-3 flex items-center justify-between"
            >
              <div className="flex items-center ">
                <span className="text-5xl color-gray-300 mr-3">
                  {item.icon}
                </span>
                <div>
                  <label htmlFor={item.name} className="text-gray-600 ">
                    {item.title}
                  </label>
                  <p>{item.text}</p>
                </div>
              </div>
              <br />
              <input
                className=" bg-light-gray w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {/* payment method */}
        <h2 className="text-xl text-black mb-3">04. Payment Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          <input
            className="col-span-2 px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            onChange={handleChange}
          />
          {paymentInfo.map((item, index) => (
            <div className="col-span-2 lg:col-span-1">
              {/* select method */}
              <div
                key={index}
                className="mb-3 border-2 border-gray-200 bg-light-gray rounded-md p-3 flex items-center justify-between"
              >
                <div className="flex items-center ">
                  <span className="text-4xl color-gray-300 mr-3">
                    {item.icon}
                  </span>
                  <div>
                    <label>{item.text}</label>
                  </div>
                </div>
                <input
                  className=" bg-light-gray w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  name={item.name}
                  type={item.type}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
        </div>
        {/* confirm order btn */}
        <div className="grid gric-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <Link
            to="/shop"
            className="bg-gray-200 text-black py-2 px-4 flex items-center justify-center rounded-md hover:bg-gray-300"
          >
            <span className="text-xl mr-2">
              <IoReturnUpBackOutline />
            </span>
            Continue Shopping
          </Link>
          <button className="bg-primary text-black py-2 px-4 flex items-center justify-center rounded-md hover:bg-primary_hover hover:text-white" type="submit">
            Confirm Order
            <span className="text-xl ml-2">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
