import Carousel from "@/components/templates/Carousel";
import Collections from "@/components/templates/Collections";
import NewsLetter from "@/components/templates/Newsletter";
import Products from "@/components/templates/Products";
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className="hidden flex items-center justify-center absolute w-full h-full lg:flex">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="relative text-center">
            <Image
              src="/images/promo_logo.svg"
              alt=""
              width={350}
              height={350}
              className="mx-auto  "
            />

            <button className="bg-white hover:bg-white-700 text-black py-2 px-4 rounded mt-4">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <Image
        src="/gif/promo.gif"
        alt=""
        width={1730}
        height={200}
        className="mx-auto pt-20 lg:h-[828px]"
      />

      <div className={`bg-black hidden animate-slide lg:block`}>
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 flex justify-between flex">
          <div className="flex items-center gap-3 carousel">
            <Image src="/images/nationwide.png" alt="" width={25} height={25} />
            Nationwide Shipping
          </div>
          <div className="flex items-center gap-3 carousel">
            <Image src="/images/delivery.png" alt="" width={25} height={25} />
            Same day delivery for orders in Cebu City
          </div>
          <div className="flex items-center gap-3 carousel">
            <Image src="/images/quality.png" alt="" width={25} height={25} />
            Quality Garments
          </div>
        </div>
      </div>

      <Products />
      <Collections />
      <Carousel />
      <NewsLetter />
    </>
  );
};

export default HomePage;
