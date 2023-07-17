import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = title || "not working";
    };
  }, [title]);
};

export default usePageTitle;
