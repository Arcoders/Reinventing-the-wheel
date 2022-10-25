import { useState, useEffect } from 'react';
import { MAX_RESIDENTS } from "../constants";

export const useFetch = (url, options = {}, config = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState({ status: false, message: '' });

  useEffect(() => {
    if (!config.init) call()
  }, [url]);

  const call = async () => {
    try {
      const data = await (await fetch(url, options)).json();
      if (!config.embeddedFetchKey) return setData(data);

      const embedded = await Promise.all(
        data[config.embeddedFetchKey].slice(0, MAX_RESIDENTS).map(async (url) => await (await fetch(url)).json())
      );

      setData(embedded);
    } catch (error) {
      setError({ status: true, message: 'Unable to fetch ' });
    }
  }

  return { data, error, call };
};
