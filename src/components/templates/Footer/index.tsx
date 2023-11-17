import React from "react";
// import {}

const Footer = () => {
  return (
    <footer className="bg-black  bottom-0 left-0 right-0 text-white">
      <div className="container mx-auto flex items-center justify-center p-6">
        <div className="flex flex-col items-center text-center text-sm">
          <img
            className="h-30 w-30 mb-6"
            src="/images/logo_footer.svg"
            alt=""
          />
          <div className="flex gap-3 mb-5 items-center">
            <div>Follow Us</div>
            <img src="/images/facebook.svg" alt="" />
            <img src="/images/instagram.svg" alt="" />
          </div>

          <nav className="mx-auto justify-between flex gap-20 mb-8">
            <a href="#" className=" font-semibold leading-6">
              Home
            </a>
            <a href="#" className=" font-semibold leading-6">
              Shop
            </a>
            <a href="#" className=" font-semibold leading-6">
              About Us
            </a>
            <a href="#" className=" font-semibold leading-6">
              Size Chart
            </a>
          </nav>

          <div className="">Copyright 2024, Weird Dudes</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
