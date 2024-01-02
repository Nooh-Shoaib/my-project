import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Products = ({ data }) => {
        console.log('Products Component Data Length:', data.length);

        if (data.length === 0) {
                return;
        }

        const hasData = data && data.length > 0;
        console.log('Data:', data);

        return (
                <>
                        <Helmet>
                                <title>All Products</title>
                        </Helmet>
                        <div>
                                {hasData && (
                                        <div className="py-10 lg:flex md:flex relative">
                                                <div className="lg:w-2/3 md:w-2/3 mx-3">
                                                        <h1 className="w-full text-center my-12 text-4xl font-semibold">
                                                                {data[0]?.allProductTitle || 'All Products'}
                                                        </h1>
                                                        <div className="w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:px-10 gap-4 py-0 px-1">
                                                                {data.map((product, productIndex) => (
                                                                        <div key={productIndex}>
                                                                                <Link to={`/${product.slug}`}>
                                                                                        <div className="text-center hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                                                                                                {product.productImage && (
                                                                                                        <img
                                                                                                                src={product.productImage}
                                                                                                                alt={`Product Image ${productIndex + 1}`}
                                                                                                        />
                                                                                                )}
                                                                                                <div>
                                                                                                        {product.productTitle && (
                                                                                                                <h2 className="font-medium py-2 px-3 lg:py-4 text-[0.6rem] text-black text-sm bg-amber-500">
                                                                                                                        {product.productTitle}
                                                                                                                </h2>
                                                                                                        )}
                                                                                                </div>
                                                                                        </div>
                                                                                </Link>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>
                                )}
                        </div>
                </>
        );
};

export default Products;