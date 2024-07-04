/** @format */

import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';

const LatestNewsPage = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
};
export default LatestNewsPage;
