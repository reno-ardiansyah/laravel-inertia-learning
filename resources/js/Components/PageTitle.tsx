import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const { url } = usePage();

  useEffect(() => {
    document.title = title;
  }, [url, title]);

  return null; // This component doesn't render anything
};

export default PageTitle;
