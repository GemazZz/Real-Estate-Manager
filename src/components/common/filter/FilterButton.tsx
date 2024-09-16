import React from "react";
import dropDownIcon from "../../../assets/dropDown.svg";

interface FilterButtonProps {
  name: string;
  isDropDown: boolean;
  setDropDown: (isDropDown: boolean) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ name, isDropDown, setDropDown }) => {
  return (
    <button className="h-[35px] px-[14px] py-[8px] relative flex items-center" onClick={() => setDropDown(!isDropDown)}>
      <p>{name}</p>
      <img src={dropDownIcon} className={`ease-in-out duration-200 m-[4px] ${isDropDown ? "rotate-180" : ""}`} alt="dropIcon" />
    </button>
  );
};

export default FilterButton;
