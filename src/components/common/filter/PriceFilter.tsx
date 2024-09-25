import { useState } from "react";
import ChooseBtn from "../common_assets/ChooseBtn";

const PriceFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState<string>();
  const [maxPrice, setMaxPrice] = useState<string>();
  return (
    <div className="relative flex flex-col  w-[382px] h-[372px] left-[306px] top-[65px] border-[1px] border-[#DBDBDB] rounded-[10px] ">
      <b className="p-[24px]">ფასის მიხედვით</b>
      <div className="relative flex justify-center items-center gap-[15px] mb-[20px]">
        <div className="relative ">
          <input
            type="number"
            className="border-[1px] border-[rgba(128, 138, 147, 1)] w-[155px] h-[42px] rounded-[6px] p-[10px]"
            placeholder="დან"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <p className="absolute left-[130px] top-[10px]">₾</p>
          <ul>
            <li className="my-[17px] font-[600] ">მინ. ფასი </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinPrice("50000")}>
              50,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinPrice("100000")}>
              100,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinPrice("150000")}>
              150,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinPrice("200000")}>
              200,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinPrice("300000")}>
              300,000 ₾
            </li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="number"
            className="border-[1px] border-[rgba(128, 138, 147, 1)] w-[155px] h-[42px] rounded-[6px] p-[10px]"
            placeholder="მდე"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <p className="absolute left-[130px] top-[10px]">₾</p>
          <ul>
            <li className="my-[17px] font-[600] ">მინ. ფასი </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxPrice("50000")}>
              50,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxPrice("100000")}>
              100,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxPrice("150000")}>
              150,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxPrice("200000")}>
              200,000 ₾
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxPrice("300000")}>
              300,000 ₾
            </li>
          </ul>
        </div>
      </div>
      <ChooseBtn />
    </div>
  );
};

export default PriceFilter;
