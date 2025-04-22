import { useContext } from "react";
import cocktail from "../assets/cocktail.png";
import drinks from "../assets/drinks.png";
import menuBanner from "../assets/menuBanner.png";
import menuRightBanner from "../assets/menuRightbanner.png";
import sideBanner from "../assets/sideBanner.png";
import { GlobalContext } from "./GlobalStateProvider";

const MenuPreview = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("ButtonBanner must be used within a GlobalStateProvider");
  }
  const { items } = context;
  // console.log(items,"items");

  return (
    <div
      className="p-2 flex bg-cover bg-center w-full min-h-[400px] sm:min-h-[550px]"
      style={{ backgroundImage: `url(${menuBanner})` }}
    >
      <div className="w-full h-full flex flex-wrap items-center justify-between gap-4">
        {/* Left Banner */}
        <img
          className="w-[64px] sm:w-[96px] hidden sm:block object-contain"
          src={sideBanner}
          alt="Side Banner"
        />

        {/* Main Content */}
        <div className="relative flex-1 mx-2 min-h-[300px] border border-white flex items-center justify-center">
          {/* Floating Images */}
          <img
            className="absolute w-[60px] h-[90px] top-[-20px] left-0 sm:top-[-75px] sm:left-[-33px] sm:w-[110px] sm:h-[150px]"
            src={drinks}
            alt="Drinks"
          />
          <img
            className="absolute bottom-0 right-0 h-[100px] md:h-[150px] md:bottom-[-20px] md:right-[-8px]"
            src={cocktail}
            alt="Cocktail"
          />

          <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="flex flex-wrap gap-2 sm:gap-5 justify-center items-center">
              <div className="h-[2px] w-[40px] md:w-[80px] bg-gray-400" />
              <h1
                className="text-[30px] sm:text-[50px] text-center font-bold text-white max-w-[90vw] sm:max-w-[500px]"
                style={{ textShadow: "4px 3px 0px #800020" }}
              >
                {items.description}
              </h1>
              <div className="h-[2px] w-[40px] md:w-[80px] bg-gray-400" />
            </div>

            {/* Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pt-8 pb-5 w-full">
              {items?.menuItems?.length ? (
                items.menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 w-full max-w-[500px]"
                  >
                    <h2 className="text-white text-lg sm:text-2xl font-semibold">
                      {item.name} ............. ${item.price}
                    </h2>
                    <p className="text-sm sm:text-lg text-justify text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-white text-lg">No items found</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Banner */}
        <img
          className="w-[64px] sm:w-[96px] hidden sm:block object-contain"
          src={menuRightBanner}
          alt="Right Banner"
        />
      </div>
    </div>

  );
};

export default MenuPreview;
