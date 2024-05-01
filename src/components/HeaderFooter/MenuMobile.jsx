import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Crocs", url: "/category/crocs" },
    { id: 2, name: "Sue", url: "/category/sue" },
    { id: 3, name: "Racer", url: "/category/racer" },
    { id: 4, name: "Retro", url: "/category/retro" },
  ];
  return (
    <>
      <ul className="flex flex-col md:hidden font-bold z-50 absolute top-[16svh] left-0 w-full h-[calc(100vh)] bg-white border-t text-black">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                <li
                  className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                  onClick={() => setShowCatMenu(!showCatMenu)}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    <BsChevronDown size={14} />
                  </div>

                  {showCatMenu && (
                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                      {subMenuData.map((submenu) => {
                        return (
                          <Link
                            key={submenu.id}
                            href={submenu?.url}
                            onClick={() => {
                              setShowCatMenu(false);
                              setMobileMenu(false);
                            }}
                          >
                            <li className="py-4 px-8 border-t flex justify-between">
                              {submenu.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="py-4 px-5 border-b">
                  <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                    {item.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default MenuMobile;
