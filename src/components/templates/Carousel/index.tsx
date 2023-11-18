import React from "react";

const Carousel = () => {
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
  return (
    <>
      <h2 className="text-xl font-bold tracking-tight text-gray-900 text-center mb-4">
        CHECK OUT OUR INSTAGRAM @weird.dudes
      </h2>
      <div className="flex overflow-x-auto" style={{ width: "100%" }}>
        {products.map((product, index) => (
          <div key={index} className="flex-none w-1/4">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-[120px] w-[120px] object-cover object-center md:h-full md:w-full lg:h-[300px] lg:w-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
