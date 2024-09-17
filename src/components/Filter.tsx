import { useState } from "react";
import DropDownBtn from "./common/filter/DropDownBtn";
import plusWhiteIcon from "../assets/plusWhite.svg";
import plusRedIcon from "../assets/plusRed.svg";
import FilterBtn from "./common/filter/FilterBtn";
import { addLS, deleteLS, getLS, setLS } from "../helpers";

const Filter = (): JSX.Element => {
  const [regionDropDown, setRegionDropDown] = useState<boolean>(false);
  const [priceDropDown, setPriceDropDown] = useState<boolean>(false);
  const [areaDropDown, setAreaDropDown] = useState<boolean>(false);
  const [bedroomDropDown, setBedroomDropDown] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState(getLS("activeFilter"));
  // addLS("activeFilter", [{ region: "ბათუმი" }]);
  return (
    <>
      <div className="w-[1596px] h-[47px] left-[162px] top-[77px] relative flex justify-between">
        <div className="w-[785px] h-[47px] p-[6px] border-[1px] border-#DBDBDB rounded-[10px] relative flex justify-between items-center ">
          <DropDownBtn name={"რეგიონი"} isDropDown={regionDropDown} setDropDown={setRegionDropDown} />
          <DropDownBtn name={"საფასო კატეგორია"} isDropDown={priceDropDown} setDropDown={setPriceDropDown} />
          <DropDownBtn name={"ფართობი"} isDropDown={areaDropDown} setDropDown={setAreaDropDown} />
          <DropDownBtn name={"საძინებლების რაოდენობა"} isDropDown={bedroomDropDown} setDropDown={setBedroomDropDown} />
        </div>
        <div className="relative flex gap-2">
          <button className="h-[47px] bg-[#F93B1D] py-[10px] px-[16px] relative flex justify-center items-center rounded-[10px]">
            <img src={plusWhiteIcon} alt="plusWhiteIcon" />
            <p className="text-white">ლისტინგის დამატება</p>
          </button>
          <button className="h-[47px] border-[1px] border-[#F93B1D] py-[10px] px-[16px] relative flex justify-center items-center rounded-[10px] gap-[3px]">
            <img src={plusRedIcon} alt="plusRedIcon" />
            <p className="text-[#F93B1D] font-[600]">აგენტის დამატება</p>
          </button>
        </div>
      </div>
      <div className="relative flex top-[94px] h-[29px] left-[162px] gap-[10px]">
        {activeFilter.map((criteria, index) => (
          <FilterBtn
            key={index}
            {...criteria}
            func={() => {
              deleteLS("activeFilter", { ...criteria });
              setActiveFilter(getLS("activeFilter"));
            }}
          />
        ))}
        {activeFilter.length !== 0 && (
          <button>
            <p className="font-[600]">გასუფთავება</p>
          </button>
        )}
      </div>
    </>
  );
};

export default Filter;
