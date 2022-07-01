import React from 'react';
import axios from 'axios';
import Link from 'next/link';
const DetailStatic = ({ item }: any) => {
  return (
    <div>
      hi
      <Link href="/detail-static/101">
        <a>Go to pages/post/[pid].js</a>
      </Link>
    </div>
  );
};

export default DetailStatic;
