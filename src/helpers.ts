import { FilterProps } from "./props";

const getLS = (key: string): object[] => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      const result: object[] = JSON.parse(value);
      return result;
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      return [];
    }
  } else {
    return [];
  }
};

const setLS = (key: string, value: object[]): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const addLS = (key: string, value: object[]): void => {
  const info = localStorage.getItem(key);
  const result: object[] = info ? JSON.parse(info) : [];
  const newLSArr = [...result, ...value];
  localStorage.setItem(key, JSON.stringify(newLSArr));
};

const deleteLS = (key: string, value: FilterProps): void => {
  const info = localStorage.getItem(key);
  const result: object[] = info ? JSON.parse(info) : [];
  const newLSArr = result.filter((obj: FilterProps) => {
    return obj.region !== value.region || obj.price !== value.price || obj.square !== value.square || obj.bedroomCount !== value.bedroomCount;
  });
  localStorage.setItem(key, JSON.stringify(newLSArr));
};
export { addLS, deleteLS, getLS, setLS };
