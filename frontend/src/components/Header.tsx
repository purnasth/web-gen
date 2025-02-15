import React from 'react';

const Header: React.FC<{ design: string }> = ({ design }) => {
  if (design === 'Design1') {
    return (
      <header className="bg-green-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Header Design 1</h1>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-green-700 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Header Design 2</h1>
      </div>
    </header>
  );
};

export default Header;