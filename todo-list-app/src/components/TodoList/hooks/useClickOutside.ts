import { MouseEvent, MutableRefObject, useEffect } from 'react';

export const useClickOutside = (
  startListen: boolean,
  targetElRef: MutableRefObject<HTMLElement>,
  cb: Function,
) => {
  useEffect(() => {
    if (startListen) {
      const onClickDocument = (e: MouseEvent<HTMLElement>) => {
        if (!targetElRef.current.contains(e.target as HTMLElement)) {
          cb(e);
        }
      };

      // @ts-ignore
      document.addEventListener('click', onClickDocument);

      return () => {
        // @ts-ignore
        document.removeEventListener('click', onClickDocument);
      };
    }
  }, [startListen]);
};
