import React, { useContext, useState } from "react";
import MyContext from "../../context/useMyContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  // const searchData = [
  //   {
  //     name: "Fashion",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgeV74En-lRyHk__CKwF17TBBI8JvMBFKbg&s",
  //   },
  //   {
  //     name: "Shirt",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXTztzs-5UoCb1HXrCr9Z7J-wh0gM75CJlg&s",
  //   },
  //   {
  //     name: "Jacket",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHywu5o8bYvQy1oMgnp6-W6-c3Sab3tQzlhg&s",
  //   },
  //   {
  //     name: "Mobile",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4f970JSQv5b_zza0Xghfq-wRwPJroW_6FFQ&s",
  //   },
  //   {
  //     name: "Laptop",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qTgH294LGWPNUNNsTtXi1lWJ0nfr9n4CNA&s",
  //   },
  //   {
  //     name: "Home",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmcfwlJnuOoSwmnetyY0ojUVogzOKZQFLnw&s",
  //   },
  //   {
  //     name: "Book",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxr5AAB7X-mI0iGzamBgsOhVJomOItR8CEg&s",
  //   },
  // ];

  const context = useContext(MyContext);
  const { getAllProduct } = context;

  const [search, setSearch] = useState("");

  const filterSearchData = getAllProduct
    ?.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="input flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-200 placeholder-gray-600 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black"
        />
      </div>

      <div className="flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-2 px-2 cursor-pointer"
                      onClick={() => navigate(`/productInfo/${item.id}`)}
                    >
                      <div className="flex items-center gap-2">
                        <img className="w-10" src={item.productImgUrl} alt="" />
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className="w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
