import { useRef, useCallback, useEffect } from 'react';

export default (): () => boolean => {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false
    };
  })
  return isMounted;
}