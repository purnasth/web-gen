import React from 'react';

const Footer: React.FC<{ design: string }> = ({ design }) => {
  if (design === 'Design1') {
    return (
      <footer className="bg-red-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Footer Design 1</h1>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-red-700 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Footer Design 2</h1>
      </div>
    </footer>
  );
};

export default Footer;