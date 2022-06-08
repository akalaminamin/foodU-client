import React, { useState } from "react";
import Tab from "../../../Shared/Tab";
import Product from "../../../Shared/Product";
import { Link } from "react-router-dom";
import { useAllProductQuery } from "../../../store/services/productServices";

const Popular = () => {
  const [openTab, setOpenTab] = useState(null);
  const [gridView, setGridView] = useState(true);
  const { data, isLoading, isSuccess } = useAllProductQuery();
  return (
    <div className="bg-white font-JosefinSans section-padding">
      <div className="container">
        <h2 className="section-title text-center">Popular dishes</h2>
        {/* tab */}
        <Tab openTab={openTab} setOpenTab={setOpenTab} />
        {/* product */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-0">
          {isLoading
            ? "Loading..."
            : data?.allProducts
                ?.map((product) => (
                  <Product gridView={gridView} product={product} />
                ))
                .reverse()}
        </div>
        <div className="flex items-center justify-center mt-12">
          <Link to="/shop" className="btn-primary">
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
