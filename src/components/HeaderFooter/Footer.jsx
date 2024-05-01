import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section className="p-5 md:p-8 lg:p-12 bg-gradient-to-t from-[#26150a] to-primary text-white space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          <div className="space-y-5">
            <h2 className="text-2xl">Contact</h2>
            {/* <div className="h-32">
              <img
                src="/logo.png"
                className="mix-blend-multiply h-full object-contain"
                alt=""
              />
            </div> */}
            <ul className="space-y-3">
              <li className="flex gap-2 items-center">
                <IoMailOpenOutline />
                <span>info@leatherwatchstrap.in</span>
              </li>
              <li className="flex gap-2 items-center">
                <IoCallOutline size={20} />
                <span>+91 720882002</span>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl">Quick Links</h2>
            <ul className="space-y-3">
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl">Terms</h2>
            <ul className="space-y-3">
              <li>Terms and Conditions</li>
              <li>Return and Refund</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl">Newsletter</h2>
            <p className="text-[0.8rem]">
              Be the first to know about exciting new designs, special events
              and much more.
            </p>
            <form className="flex flex-col space-y-3">
              <input type="email" className=" border border-primary p-2" />
              <button type="submit" className="bg-primary text-white p-2">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <p className="text-center text-sm">
            2024 © <Link href={"/"}>Leather Watch Straps & Co</Link> | All
            Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
