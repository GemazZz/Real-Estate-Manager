import { useState, useEffect } from "react";
import { fetchData, getLS, setLS } from "../../../helpers";
import Checkbox from "../common_assets/Checkbox";
import { Region } from "../../../props";
import ChooseBtn from "../common_assets/ChooseBtn";

const RegionFilter: React.FC = (): JSX.Element => {
  const [regionData, setRegionData] = useState<Region[]>(() => getLS("regions") || []);

  useEffect(() => {
    const loadData = async () => {
      const data: Region[] = await fetchData("https://api.real-estate-manager.redberryinternship.ge/api/regions");
      const updatedData = data.map((item) => ({ ...item, checked: false }));
      setLS("regions", updatedData);
      setRegionData(updatedData);
    };

    if (!regionData.length) {
      loadData();
    }
  }, [regionData.length]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = regionData.map((item) => (item.id === parseInt(e.target.value) ? { ...item, checked: !item.checked } : item));
    setLS("regions", updatedData);
    setRegionData(updatedData);
  };

  return (
    <div className="relative flex flex-col justify-evenly items-center w-[731px] h-[284px] left-[162px] top-[65px] border-[1px] border-[#DBDBDB] rounded-[10px]">
      <div>
        <div className="relative flex justify-start h-[43px] w-[679px]">
          <b>რეგიონის მიხედვით</b>
        </div>
        <div className="relative flex flex-col flex-wrap gap-[10px] w-[679px] h-[128px] ">
          {regionData.length > 0 &&
            regionData.map((region) => (
              <div className="relative flex justify-center items-center w-[191px] h-[20px]" key={region.id}>
                <Checkbox value={region.id.toString()} checked={region.checked || false} onChange={handleCheckboxChange} />
                <label htmlFor={`custom-checkbox-${region.id}`} className="w-[191px] h-[20px] px-2">
                  {region.name}
                </label>
              </div>
            ))}
        </div>
      </div>
      <ChooseBtn />
    </div>
  );
};

export default RegionFilter;
