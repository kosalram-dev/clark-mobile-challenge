import {useState, useEffect, useCallback} from 'react';
import {CONSTANTS, ERROR_CONSTANTS} from '../utils/constants';
import {TProduct} from '../utils/types';

const useProducts = ({searchTerm}: {searchTerm: string}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${CONSTANTS.API_HOST}${CONSTANTS.GET_PRODUCTS_ENDPOINT}`,
      );
      if (response.ok) {
        const result = await response.json();
        if (searchTerm.length > 0) {
          const newData = result.filter((datum: TProduct) =>
            datum.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setData(newData);
        } else {
          setData(result);
        }
      } else {
        setError(ERROR_CONSTANTS.UNABLE_TO_FETCH_DATA);
      }
    } catch (err) {
      setError(ERROR_CONSTANTS.UNABLE_TO_FETCH_DATA);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const retry = () => {
    fetchProducts();
  };

  return {data, loading, error, retry};
};

export default useProducts;
