/** @format */

import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

const ImagePage = async ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
};
export default ImagePage;
