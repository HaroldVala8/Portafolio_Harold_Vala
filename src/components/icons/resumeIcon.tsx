import React from 'react';

interface ResumeIconProps {
  className?: string;
  width?: string;
  height?: string;
}

const ResumeIcon: React.FC<ResumeIconProps> = ({ className, width = "34", height = "32" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M21.2502 3.20001V8.00001C21.2502 8.88367 22.0114 9.60001 22.9502 9.60001H28.0502M11.9002 9.60001H15.3002M11.9002 14.4H22.1002M11.9002 19.2H22.1002M25.5002 5.60001C24.7436 4.96287 23.9585 4.20718 23.4629 3.71638C23.133 3.38979 22.6773 3.20001 22.1986 3.20001H9.34984C7.47208 3.20001 5.94985 4.63269 5.94984 6.39999L5.94971 25.5999C5.94969 27.3672 7.47192 28.7999 9.34969 28.7999L24.6498 28.8C26.5275 28.8 28.0497 27.3674 28.0498 25.6001L28.0502 8.63712C28.0502 8.228 27.8844 7.83473 27.5827 7.54019C27.0248 6.99554 26.0932 6.09937 25.5002 5.60001Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ResumeIcon;
