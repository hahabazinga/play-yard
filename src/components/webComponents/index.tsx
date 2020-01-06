import * as React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import './square';

const WebComponentSquare = () => {
  const [l, setL] = useState(100);
  return (
    <>
      <Button onClick={() => setL(Math.random() * 100)}>change width</Button>
      <custom-square l={l} c="#999"></custom-square>
    </>
  );
};
export default WebComponentSquare;
