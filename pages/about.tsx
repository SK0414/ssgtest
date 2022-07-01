import React from 'react';
import axios from 'axios';

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const About = ({ list }: { list: Props[] }) => {
  return (
    <div className="About">
      <h1>여기는 About 페이지요!</h1>
      {list.length && list.slice(0, 10).map((item: Props) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
};

export default About;

export const getStaticProps = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  const data = res.data;

  console.log(data[1]);

  return {
    props: {
      list: data,
    },
  };
};
