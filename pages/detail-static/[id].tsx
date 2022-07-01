import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const DetailStatic = ({ item }: any) => {
  const router = useRouter();
  console.log(router);
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
/* ctx {
  params: { id: '1' },
  locales: undefined,
  locale: undefined,
  defaultLocale: undefined
} */
export const getStaticProps = async (ctx: any) => {
  const id = ctx.params.id;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
};
