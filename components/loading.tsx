import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#24252d] from-10%  to-[#000000] to-90% text-white">
      <img
          className='animate-bounce '
       width={100}
       height={100}
        alt="Loading..."
        src="/files/logo.svg"
      />   
    </div>
  );
};

export default Loading;
