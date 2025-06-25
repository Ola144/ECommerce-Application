import React from "react";
import { useNavigate } from "react-router-dom";

const category = [
  {
    name: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgeV74En-lRyHk__CKwF17TBBI8JvMBFKbg&s",
  },
  {
    name: "Shirt",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXTztzs-5UoCb1HXrCr9Z7J-wh0gM75CJlg&s",
  },
  {
    name: "Jacket",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHywu5o8bYvQy1oMgnp6-W6-c3Sab3tQzlhg&s",
  },
  {
    name: "Mobile",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4f970JSQv5b_zza0Xghfq-wRwPJroW_6FFQ&s",
  },
  {
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qTgH294LGWPNUNNsTtXi1lWJ0nfr9n4CNA&s",
  },
  {
    name: "Home",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmcfwlJnuOoSwmnetyY0ojUVogzOKZQFLnw&s",
  },
  {
    name: "Book",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxr5AAB7X-mI0iGzamBgsOhVJomOItR8CEg&s",
  },
];

function Category() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col mt-10 w-full">
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          <div className="flex">
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:-x-10 mr-10">
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className="w-16 h-16 lg:w-24 lg:h-26 max-w-xs rounded-full  transition-all cursor-pointer mb-1"
                  >
                    <div className="flex justify-center mb-12">
                      <img
                        src={item.image}
                        className="w-full h-20 rounded-full"
                      />
                    </div>
                  </div>
                  <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase mt-4">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <style
        dangerouslySetInnerHTML={{
          __html: ".hide-scroll-bar::-webkit-scrollbar {display: none;}",
        }}
      ></style> */}
    </div>
  );
}

export default Category;
