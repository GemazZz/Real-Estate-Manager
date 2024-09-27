import { useState } from "react";
import ChooseBtn from "../common_assets/ChooseBtn";

const AreaFilter: React.FC = () => {
  const [minArea, setMinArea] = useState<string>();
  const [maxArea, setMaxArea] = useState<string>();
  return (
    <div className="relative flex flex-col  w-[382px] h-[372px] left-[529px] top-[65px] border-[1px] border-[#DBDBDB] rounded-[10px] ">
      <b className="p-[24px]">ფართობის მიხედვით</b>
      <div className="relative flex justify-center items-center gap-[15px] mb-[20px]">
        <div className="relative ">
          <input
            type="number"
            className="border-[1px] border-[rgba(128, 138, 147, 1)] w-[155px] h-[42px] rounded-[6px] p-[10px]"
            placeholder="დან"
            value={minArea}
            onChange={(e) => setMinArea(e.target.value)}
          />
          <p className="absolute left-[130px] top-[10px]">
            მ<sup>2</sup>
          </p>
          <ul>
            <li className="my-[17px] font-[600] ">
              მინ. მ<sup>2</sup>{" "}
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinArea("50")}>
              50 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinArea("100")}>
              100 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinArea("150")}>
              150 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinArea("200")}>
              200 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMinArea("300")}>
              300 მ<sup>2</sup>
            </li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="number"
            className="border-[1px] border-[rgba(128, 138, 147, 1)] w-[155px] h-[42px] rounded-[6px] p-[10px]"
            placeholder="მდე"
            value={maxArea}
            onChange={(e) => setMaxArea(e.target.value)}
          />
          <p className="absolute left-[130px] top-[10px]">
            მ<sup>2</sup>
          </p>
          <ul>
            <li className="my-[17px] font-[600] ">
              მაქს. მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxArea("50")}>
              50 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxArea("100")}>
              100 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxArea("150")}>
              150 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxArea("200")}>
              200 მ<sup>2</sup>
            </li>
            <li className="my-[3px] text-[14px] cursor-pointer" onClick={() => setMaxArea("300")}>
              300 მ<sup>2</sup>
            </li>
          </ul>
        </div>
      </div>
      <ChooseBtn />
    </div>
  );
};

export default AreaFilter;
