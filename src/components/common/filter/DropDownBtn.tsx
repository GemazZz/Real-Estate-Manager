import React from "react";
import dropDownIcon from "../../../assets/dropDown.svg";

interface DropDownBtnProps {
  name: string;
  isDropDown: boolean;
  setDropDownFunc: Array<(isDropDown: boolean) => void>;
}

const DropDownBtn: React.FC<DropDownBtnProps> = ({ name, isDropDown, setDropDownFunc }) => {
  return (
    <button
      className="h-[35px] px-[14px] py-[8px] relative flex items-center"
      onClick={() => {
        setDropDownFunc[0](!isDropDown);
        setDropDownFunc[1](false);
        setDropDownFunc[2](false);
        setDropDownFunc[3](false);
      }}
    >
      <p className="font-[600] ">{name}</p>
      <img src={dropDownIcon} className={`ease-in-out duration-200 m-[4px] ${isDropDown ? "rotate-180" : ""}`} alt="dropIcon" />
    </button>
  );
};

export default DropDownBtn;
