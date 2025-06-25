import React from "react";

function Testimonial() {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container -x-5 py-10 mx-auto">
          <h1 className="text-center text-3xl font-bold text-black">
            Testmonial
          </h1>
          <h2 className="text-center text-2xl font-semibold mb-10">
            What our <span className="text-pink-500">customers</span> are saying
          </h2>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="w-full text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s"
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block
                   border-2"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  enim reiciendis adipisci? Quaerat ducimus at expedita
                  reiciendis? Dolor, beatae? Quos.
                </p>
                <span className="inline-block h-1 w-10 bg-pink-500 mt-6 mb-4"></span>
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  xyz
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="w-full text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block
                   border-2"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  enim reiciendis adipisci? Quaerat ducimus at expedita
                  reiciendis? Dolor, beatae? Quos.
                </p>
                <span className="inline-block h-1 w-10 bg-pink-500 mt-6 mb-4"></span>
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  xyz
                </h2>
                <p className="text-gray-500">UI Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="w-full text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s"
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block
                   border-2"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  enim reiciendis adipisci? Quaerat ducimus at expedita
                  reiciendis? Dolor, beatae? Quos.
                </p>
                <span className="inline-block h-1 w-10 bg-pink-500 mt-6 mb-4"></span>
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  xyz
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
