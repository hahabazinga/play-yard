import { useEffect, useState, DependencyList } from 'react';
import { getUser } from '../fakeApi/user';

type AsyncCallback = (...args: any[]) => Promise<any>;

const useEffectAsync = <T>(fn: AsyncCallback, deps?: DependencyList) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [fetchId, setFetchId] = useState(Date.now());
  const [error, setError] = useState();

  const refetch = () => setFetchId(Date.now());
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    const cb = async () => {
      try {
        const result = await fn();

        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    cb();
  }, [fetchId, fn]);
  return {
    data,
    loading,
    refetch,
    error,
  };
};
export const useFetchUserList = <T>(deps?: DependencyList) => {
  const state = useEffectAsync<T>(getUser, deps);
  return state;
};
