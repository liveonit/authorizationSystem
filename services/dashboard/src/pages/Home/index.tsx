import React from 'react';

import bg from './mainBackgound.webp';
export function Home() {
  return (
    <>
      <img
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          right: 0,
          top: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
        src={bg}
        alt={'bg'}
      />
    </>
  );
}

export default Home;
