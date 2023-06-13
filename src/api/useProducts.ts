import {useState, useEffect} from 'react';
import {CONSTANTS, ERROR_CONSTANTS} from '../utils/constants';

const useProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${CONSTANTS.API_HOST}${CONSTANTS.GET_PRODUCTS_ENDPOINT}`,
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          setError(ERROR_CONSTANTS.UNABLE_TO_FETCH_DATA);
        }
      } catch (err) {
        setError(ERROR_CONSTANTS.UNABLE_TO_FETCH_DATA);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return {data, loading, error};
};

export default useProducts;
