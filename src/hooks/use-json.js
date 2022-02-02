import { DATA_NOT_FOUND_ERROR, REQUEST_ERROR } from "../config";

const useJson = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(REQUEST_ERROR);

    const data = await response.json();

    if (!data) throw new Error(DATA_NOT_FOUND_ERROR);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default useJson;
