import React from 'react';

interface ProjectsIconProps {
  className?: string;
  width?: string;
  height?: string;
}

const ProjectsIcon: React.FC<ProjectsIconProps> = ({ className, width = "34", height = "32" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M29.0308 20.9231H9.15385C6.84275 20.9231 4.96924 22.6864 4.96924 24.8615M29.0308 20.9231V26.8308C29.0308 27.9184 28.094 28.8 26.9385 28.8H9.15385C6.84275 28.8 4.96924 27.0367 4.96924 24.8615M29.0308 20.9231V5.16924C29.0308 4.08167 28.094 3.20001 26.9385 3.20001H11.7692H9.15385C6.84275 3.20001 4.96924 4.96332 4.96924 7.13847V24.8615" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ProjectsIcon;
