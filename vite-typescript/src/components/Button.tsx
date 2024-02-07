import React from 'react';

type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {

  return (
    <button className='bg-blue-500' >
      {children}
    </button>
  );
};

export default Button;
