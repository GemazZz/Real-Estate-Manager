import { useState, useEffect } from "react";
import { fetchData, getLS, setLS } from "../../../helpers";
import Checkbox from "../common_assets/Checkbox";

type Region = {
  id: number;
  name: string;
  checked?: boolean;
};

const RegionFilter = (): JSX.Element => {
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
    <div className="relative w-[731px] h-[284px] left-[162px] top-[65px] bg-red-400">
      <p>რეგიონის მიხედვით</p>
      <div className="relative flex flex-col flex-wrap gap-[10px] w-[679px] h-[128px] bg-slate-600">
        {regionData.length > 0 &&
          regionData.map((region) => (
            <div className="relative flex justify-center items-center w-[191px] h-[20px]" key={region.id}>
              <Checkbox value={region.id.toString()} checked={region.checked || false} onChange={handleCheckboxChange} />
              <label htmlFor={`custom-checkbox-${region.id}`} className="w-[191px] h-[20px]">
                {region.name}
              </label>
            </div>
          ))}
      </div>
      <button>არჩევა</button>
    </div>
  );
};

export default RegionFilter;
