import React from "react";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/images/collections/collection1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    description: "PIZZA COLLECTION",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/images/collections/collection2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    description: "ANNIVERSARY SHIRT",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/images/collections/collection3.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    description: "SINCE DAY ONE ",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/images/collections/collection4.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    description: "WEIRD DUDES CLUB",
  },
];
const Collections = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          OUR COLLECTIONS
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div className="hidden group-hover:block absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                  <div className="h-full flex flex-col items-center justify-center">
                    <p className="text-white text-md text-center">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
