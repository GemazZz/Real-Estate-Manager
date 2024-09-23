import { ChangeEvent } from "react";
import check from "../../../assets/check.svg";

type CheckboxProps = {
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ value, checked, onChange }: CheckboxProps): JSX.Element => {
  return (
    <div className="relative">
      <input type="checkbox" checked={checked} value={value} onChange={onChange} className="hidden" id={`custom-checkbox-${value}`} />
      <label
        htmlFor={`custom-checkbox-${value}`}
        className={`w-[20px] h-[20px] flex justify-center items-center rounded-[2px] cursor-pointer ${
          checked ? "bg-[#45A849]" : "bg-white border-[1px] border-[#DBDBDB]"
        }`}
      >
        {checked && <img src={check} alt="check" width={12} />}
      </label>
    </div>
  );
};

export default Checkbox;
