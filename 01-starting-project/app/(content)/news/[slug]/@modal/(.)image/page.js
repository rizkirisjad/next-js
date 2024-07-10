/** @format */

import ModalBackdrop from '@/components/ModalBackdrop';
import { getNewsItem } from '@/lib/news';

import { notFound } from 'next/navigation';

const InterceptedImagePage = async ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
};
export default InterceptedImagePage;
