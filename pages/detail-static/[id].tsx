import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const DetailStatic = ({ item }: any) => {
  const router = useRouter();

  console.log('router', router);
  console.log('item', item);

  return (
    <div>
      {item && (
        <div className="Detail">
          <h1 style={{ color: '#fff' }}>with Static Generation</h1>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <p>{item.id}번째 게시글</p>
        </div>
      )}
    </div>
  );
};

export default DetailStatic;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: true,
  };
};

export const getStaticProps = async (ctx: any) => {
  // console.log('ctx', ctx);
  const id = ctx.params.id;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.data;

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item: data,
    },
  };
};

/* ctx {
  params: { id: '1' },
  locales: undefined,
  locale: undefined,
  defaultLocale: undefined
} */
