import { useState } from "react";
import ChooseBtn from "../common_assets/ChooseBtn";

const BedroomFilter: React.FC = () => {
  const [bedroomCount, setBedroomCount] = useState<string>();
  return (
    <div className="relative flex flex-col w-[282px] h-[178px] left-[679px] top-[65px] border-[1px] border-[#DBDBDB] rounded-[10px] ">
      <b className="m-[18px]">საძინებლების რაოდენობა</b>
      <input
        type="number"
        className="border-[1px] border-[rgba(128, 138, 147, 1)] w-[42px] h-[42px] rounded-[6px] p-[10px] mx-[18px] mb-[10px]"
        value={bedroomCount}
        onChange={(e) => setBedroomCount(e.target.value)}
      />
      <ChooseBtn />
    </div>
  );
};

export default BedroomFilter;
