import { useState } from "react";
import FilterButton from "./common/filter/filterButton";
import plusWhiteIcon from "../assets/plusWhite.svg";
import plusRedIcon from "../assets/plusRed.svg";

const Filter = (): JSX.Element => {
  const [regionDropDown, setRegionDropDown] = useState<boolean>(false);
  const [priceDropDown, setPriceDropDown] = useState<boolean>(false);
  const [areaDropDown, setAreaDropDown] = useState<boolean>(false);
  const [bedroomDropDown, setBedroomDropDown] = useState<boolean>(false);
  return (
    <div className="w-[1596px] h-[47px] left-[162px] top-[77px] relative flex justify-between">
      <div className="w-[785px] h-[47px] p-[6px] border-[1px] border-#DBDBDB rounded-[10px] relative flex justify-between items-center ">
        <FilterButton name={"რეგიონი"} isDropDown={regionDropDown} setDropDown={setRegionDropDown} />
        <FilterButton name={"საფასო კატეგორია"} isDropDown={priceDropDown} setDropDown={setPriceDropDown} />
        <FilterButton name={"ფართობი"} isDropDown={areaDropDown} setDropDown={setAreaDropDown} />
        <FilterButton name={"საძინებლების რაოდენობა"} isDropDown={bedroomDropDown} setDropDown={setBedroomDropDown} />
      </div>
      <div className="relative flex gap-2">
        <button className="h-[47px] bg-[#F93B1D] py-[10px] px-[16px] relative flex justify-center items-center rounded-[10px]">
          <img src={plusWhiteIcon} alt="plusWhiteIcon" />
          <p className="text-white">ლისტინგის დამატება</p>
        </button>
        <button className="h-[47px] border-[1px] border-[#F93B1D] py-[10px] px-[16px] relative flex justify-center items-center rounded-[10px] gap-[3px]">
          <img src={plusRedIcon} alt="plusRedIcon" />
          აგენტის დამატება
        </button>
      </div>
    </div>
  );
};

export default Filter;
