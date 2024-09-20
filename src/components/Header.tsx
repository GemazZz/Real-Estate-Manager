import Logo from "../assets/LOGO-02 3.svg";
import Checkbox from "./common/common_assets/Checkbox";

const Header = (): JSX.Element => {
  return (
    <div className="w-[1920px] h-[100px] border-#DBDBDB border-[1px]">
      <img src={Logo} alt="logo" className="relative left-[162px] top-[38px]" />
      {/* <Checkbox /> */}
    </div>
  );
};

export default Header;
