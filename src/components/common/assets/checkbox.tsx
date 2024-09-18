import { useState } from "react";
import check from "../../../assets/check.svg";

const Checkpoint = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div
      className={`w-[20px] h-[20px]  relative flex justify-center items-center bg-[${checked ? "#45A849" : "white"}] rounded-[2px] border-[${
        checked ? "none" : "1px"
      }] border-[${checked ? "#DBDBDB" : "none"}]`}
    >
      <input
        type="checkbox"
        value={check}
        onChange={() => {
          setChecked(!checked);
        }}
        className="w-[20px] absolute bg-none z-50"
      />
      <img src={check} alt="check" width={10} />
    </div>
  );
};

export default Checkpoint;
