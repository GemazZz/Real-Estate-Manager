import { useState, useEffect } from "react";
import { fetchData, getLS, setLS } from "../../../helpers";
type Region = {
  id: number;
  name: string;
  checked?: boolean;
};

const RegionFilter = (): JSX.Element => {
  const [regionData, setRegionData] = useState<Region[]>(getLS("regions") || []);

  useEffect(() => {
    const loadData = async () => {
      const data: Region[] = await fetchData("https://api.real-estate-manager.redberryinternship.ge/api/regions");
      data.map((item) => {
        return (item.checked = false);
      });
      setLS("regions", data);
      setRegionData(data);
    };
    loadData();
  }, []);

  return (
    <div className="relative w-[731px] h-[284px] left-[162px] top-[65px] bg-red-400">
      <div className="relative flex flex-col flex-wrap gap-[10px] w-[679px] h-[128px] bg-slate-600">
        {regionData.length > 0 &&
          regionData.map((region) => (
            <div className="relative flex justify-center items-centerw-[191px] h-[20px]" key={region.id}>
              <input
                type="checkbox"
                value={region.id}
                onChange={(e) => {
                  const data: Region[] = getLS("regions");
                  data.map((item) => {
                    if (item.id === parseInt(e.target.value)) {
                      return (item.checked = !item.checked);
                    }
                  });
                  setLS("regions", data);
                  setRegionData(data);
                }}
              />
              <p className="w-[191px] h-[20px]">{region?.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RegionFilter;
