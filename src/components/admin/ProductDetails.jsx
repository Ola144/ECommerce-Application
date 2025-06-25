import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

function ProductDetails() {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

  const navigate = useNavigate();

  // Delete Product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product Deleted Succesfully!");
      getAllProductFunction;
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="py-6 flex justify-between items-center">
          <h1 className="text-xl text-pink-300 font-bold">All Product</h1>
          <Link to={"/add-product"}>
            <button className="px-5 py-2 bg-pink-50 border border-pink-100 text-pink-500 rounded-lg hover:bg-pink-100">
              Add Product
            </button>
          </Link>
        </div>

        <div className="min-h-full">{loading && <Loader />}</div>

        <div className="w-full overflow-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <thead>
              <tr>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  S/N
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Image
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Title
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Price
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Category
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Date
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {getAllProduct?.map((item, index) => {
                const { id, title, price, category, date, productImgUrl } =
                  item;
                return (
                  <tr key={index} className="text-pink-300">
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                      {index + 1}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                      <img src={productImgUrl} alt="Img" className="w-20" />
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                      {title.slice(0, 50)}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                      ${price}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                      {category}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                      {date}
                    </td>
                    <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 flex gap-5 items-center justify-center">
                      <span
                        className="text-green-600 cursor-pointer text-lg"
                        onClick={() => {
                          navigate(`/update-product/${id}`);
                        }}
                      >
                        <i className="fa fa-edit"></i>
                      </span>
                      <span
                        className="text-red-600 cursor-pointer text-lg"
                        onClick={() => deleteProduct(id)}
                      >
                        <i className="fa fa-trash"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
