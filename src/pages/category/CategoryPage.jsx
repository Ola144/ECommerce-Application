import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

function CategoryPage() {
  const { categoryname } = useParams();
  const context = useContext(myContext);
  const { getAllProduct, loading, formatCurrency } = context;

  const navigate = useNavigate();

  const filterProduct = getAllProduct?.filter((obj) =>
    obj.category.includes(categoryname)
  );

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added To Cart!");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <div className="mt-10">
        <div className="">
          <h1 className="text-center mb-5 text-2xl font-semibold first-letter:uppercase">
            {categoryname}
          </h1>
        </div>

        {loading ? (
          <>
            <div>
              <Loader />
            </div>
          </>
        ) : (
          <>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-5 mx-auto">
                <div className="">{loading && <Loader />}</div>

                {filterProduct?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 -m-4 mx-auto">
                    {filterProduct?.slice(0, 8).map((item, index) => {
                      const { id, title, price, productImgUrl, category } =
                        item;
                      return (
                        <div
                          key={index}
                          className="p-4 lg:w-full md:w-full w-80 mx-auto"
                        >
                          <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                            <img
                              src={productImgUrl}
                              alt="blog"
                              className="lg:h-80 lg:w-full md:w-full w-80 h-96 md:h-80"
                              onClick={() => navigate(`/productInfo/${id}`)}
                            />
                            <div className="p-6">
                              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                {category}
                              </h2>
                              <h1 className="title-font text-lg font-medium text-gray-900 md:text-xs">
                                {title.substring(0, 25)}
                              </h1>
                              <h1 className="title-font text-lg font-medium text-gray-900 md:text-sm">
                                {formatCurrency(price)}
                              </h1>

                              <div className="flex justify-center mt-2">
                                {cartItems?.some((p) => p.id === item.id) ? (
                                  <button
                                    className="bg-gray-500 w-full text-white py-[4px] rounded-lg font-bold"
                                    disabled
                                  >
                                    Already In The Cart
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => onAddToCart(item)}
                                    className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                  >
                                    Add To Cart
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="w-full flex justify-center items-center mx-auto">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgh80n09s-I22rGvRCtl7yunDd5MO6ZcNAwA&s"
                        alt=""
                        className="w-32 translate-x-36 items-center"
                      />
                      <h1 className="text-black font-bold text-3xl mt-6 w-full">
                        No <span className="text-red-600">{categoryname} </span>
                        Product Found!
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
}

export default CategoryPage;
