import { useEffect } from 'react';

const useInterval = (fn, delay) => {
  useEffect(() => {
    const id = setInterval(fn, delay)
    return () => clearInterval(id)
  }, [])
}

export default useInterval;