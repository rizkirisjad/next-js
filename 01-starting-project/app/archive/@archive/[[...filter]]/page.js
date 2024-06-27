/** @format */

import NewsList from '@/components/NewsList';
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default FilteredNewsPage;
