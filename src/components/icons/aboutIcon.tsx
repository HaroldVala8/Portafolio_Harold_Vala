import React from 'react';

interface AboutIconProps {
  className?: string;
  width?: string;
  height?: string;
}

const AboutIcon: React.FC<AboutIconProps> = ({ className, width = "33", height = "32" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3.30005 27.3499C3.30005 22.3158 7.63719 18.2349 16.5 18.2349C25.3629 18.2349 29.7 22.3158 29.7 27.3499C29.7 28.1508 29.0975 28.8 28.3542 28.8H4.64593C3.90262 28.8 3.30005 28.1508 3.30005 27.3499Z" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M21.45 8.00001C21.45 10.651 19.2339 12.8 16.5 12.8C13.7662 12.8 11.55 10.651 11.55 8.00001C11.55 5.34904 13.7662 3.20001 16.5 3.20001C19.2339 3.20001 21.45 5.34904 21.45 8.00001Z" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  );
};

export default AboutIcon;
