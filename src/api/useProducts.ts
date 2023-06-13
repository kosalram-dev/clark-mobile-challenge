import {useState, useEffect} from 'react';
import {CONSTANTS, ERROR_CONSTANTS} from '../utils/constants';
import {TProduct} from '../utils/types';

const useProducts = ({searchTerm}: {searchTerm: string}) => {
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
    };
    fetchProducts();
  }, [searchTerm]);

  return {data, loading, error};
};

export default useProducts;
