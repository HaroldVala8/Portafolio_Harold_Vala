import React from 'react';

interface HomeIconProps {
  className?: string;
  width?: string;
  height?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ className, width = "34", height = "32" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 32"
      fill="none"
      className={className}
    >
      <path
        d="M10.625 22.75H23.375M16.0148 4.28156L4.96481 11.3147C4.51636 11.6001 4.25 12.0622 4.25 12.5547V25.7176C4.25 26.9781 5.39167 28 6.8 28H27.2C28.6083 28 29.75 26.9781 29.75 25.7176V12.5547C29.75 12.0622 29.4836 11.6001 29.0352 11.3147L17.9852 4.28156C17.3954 3.90615 16.6046 3.90615 16.0148 4.28156Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;