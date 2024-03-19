import React from 'react';
import { useParams } from 'react-router-dom';

function CakeId(params) {
  let { productId } = useParams();
  return (
    
    <div>사용된 id는 {productId}입니다.</div>
  );
}

export default CakeId