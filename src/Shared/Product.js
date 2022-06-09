import React from "react";
import { BsSuitHeartFill, BsMinecart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  useAddWishlistMutation,
  useGetSingleUserQuery,
  useAddToCartMutation
} from "../store/services/userServices";
const Product = ({ gridView, product }) => {
  const [addProductWishlist, result] = useAddWishlistMutation();
  const { data, isLoading, isSuccess } = useGetSingleUserQuery();
  const [sendAddtoCart, cart] = useAddToCartMutation();
  const navigate = useNavigate();
  const handleWishlist = (productId) => {
    addProductWishlist({ productId });
  };
  const handleNavigate = (id) => {
    navigate(`product/${id}`);
  };
  const handleAddToCart = (id) =>{
    sendAddtoCart(id);
  }
  return (
    <>
      <div
        className={
          gridView
            ? "product border-2 border-gray-200 rounded-2xl p-2 relative group font-JosefinSans"
            : "product border-2 border-gray-200 rounded-2xl p-2 relative group font-JosefinSans flex items-end justify-between"
        }
      >
        {/* image */}
        <div
          className="product-image basis-2/6"
          onClick={() => handleNavigate(product?._id)}
        >
          <img
            className="group-hover:scale-110 transition-all ease-linear duration-200 w-full"
            src={product?.images[0]}
            alt="food"
          />
        </div>
        {/* heart icon */}
        <span
          className="absolute top-4 right-4 text-gray-300 text-2xl cursor-pointer hover:text-black z-20"
          onClick={() => handleWishlist(product?._id)}
        >
          <BsSuitHeartFill />
        </span>
        {data?.user?.wishlist.includes(product?._id) ? (
          <span className="absolute top-4 right-4 text-red-600 text-2xl cursor-pointer hover:text-black z-20">
            <BsSuitHeartFill />
          </span>
        ) : (
          <span
            className="absolute top-4 right-4 text-gray-300 text-2xl cursor-pointer hover:text-black z-20"
            onClick={() => handleWishlist(product?._id)}
          >
            <BsSuitHeartFill />
          </span>
        )}
        <span
          className="absolute top-4 right-4 text-gray-300 text-2xl cursor-pointer hover:text-black z-20"
          onClick={() => handleWishlist(product?._id)}
        >
          <BsSuitHeartFill />
        </span>

        {/* product content */}
        <div className="content text-left p-4 pt-5 basis-4/6">
          <h3
            onClick={() => handleNavigate(product?._id)}
            className="text-2xl font-bold text-heading hover:text-primary_hover cursor-pointer"
          >
            {product?.title}
          </h3>
          <p className="text-lg text-gray-500 ">{product?.shortDescription}</p>
          <div className="flex items-center justify-between mt-3">
            <h3 className="text-2xl text-primary font-bold">
              £{product?.price}
            </h3>
            <div className="cart-icon" onClick={()=>handleAddToCart(product._id)}>
              <BsMinecart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
