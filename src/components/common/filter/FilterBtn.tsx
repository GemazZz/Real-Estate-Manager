import React from "react";
import xIcon from "../../../assets/x.svg";
import { FilterBtnProps } from "../../../props";

const FilterBtn: React.FC<FilterBtnProps> = ({ region, price, square, bedroomCount, func }) => {
  return (
    <button className="relative flex justify-center items-center px-[10px] py-[6px] border-[1px] border-[#DBDBDB] rounded-[43px]">
      {region && <p className="mx-[6px]">{region}</p>}
      {price && (
        <p className="mx-[6px]">
          {price[0]}₾ - {price[1]}₾
        </p>
      )}
      {square && (
        <p className="mx-[6px]">
          {square[0]} მ<sup>2</sup> - {square[1]} მ<sup>2</sup>
        </p>
      )}
      {bedroomCount && <p className="mx-[6px]">{bedroomCount}</p>}
      <img
        src={xIcon}
        alt="xIcon"
        onClick={() => {
          func();
        }}
      />
    </button>
  );
};

export default FilterBtn;
