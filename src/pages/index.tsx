import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';

import Header from '../components/Header';
import { getPrismicClient } from '../services/prismic';
import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | spacetravelling.</title>
      </Head>

      <div className={commonStyles.pageContainer}>
        <Header />

        <div className={styles.postContainer}>
          <Link href="/">
            <a>
              <p className={styles.title}>Como utilizar Hooks</p>
              <p className={styles.subtitle}>
                Pensando em sincronização em vez de ciclos de vida.
              </p>

              <div className={commonStyles.creationTime}>
                <time>
                  <FiCalendar />
                  04 Ago 2022
                </time>
                <span>
                  <FiUser />
                  Pedro Henrique
                </span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
