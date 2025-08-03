import React from "react";

type CounterButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
  };
  
  export const CounterButton = ({ children, className, onClick }: CounterButtonProps) => (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
