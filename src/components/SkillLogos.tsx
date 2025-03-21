import React from 'react';

interface LogoProps {
  color: string;
  size?: number;
  className?: string;
}

// Generic component for skill logos
export const SkillLogo: React.FC<{
  skill: string;
  color: string;
  size?: number;
  className?: string;
}> = ({ skill, color, size = 40, className = '' }) => {
  const logos: Record<string, React.FC<LogoProps>> = {
    JavaScript: JavaScriptLogo,
    TypeScript: TypeScriptLogo,
    React: ReactLogo,
    'Next.js': NextJsLogo,
    'Node.js': NodeJsLogo,
    TailwindCSS: TailwindLogo,
    GraphQL: GraphQLLogo,
    AWS: AWSLogo,
    HTML5: HTML5Logo,
    CSS3: CSS3Logo,
    Git: GitLogo,
    Docker: DockerLogo,
    SQLite: SQLiteLogo,
    Python: PythonLogo,
    Bootstrap: BootstrapLogo,
    // Add more logos as needed
  };

  const LogoComponent = logos[skill] || PlaceholderLogo;

  return <LogoComponent color={color} size={size} className={className} />;
};

// Placeholder logo with initials
export const PlaceholderLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill={color} />
    <path
      d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
      fill={color}
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

// JavaScript Logo
export const JavaScriptLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill={color} />
    <path
      d="M10 32V8H30V32H10Z"
      fill={color}
    />
    <path
      d="M26.5 22.5C26.5 24.7 25.2 26.3 23 26.3C20.9 26.3 19.6 24.8 19.6 22.7H22.1C22.1 23.5 22.5 24 23 24C23.5 24 23.9 23.7 23.9 22.5V16H26.5V22.5Z"
      fill="black"
    />
    <path
      d="M13.5 22.5C13.5 20.3 15.1 19.5 16.6 19.5C17.7 19.5 18.5 19.8 19.3 20.5L17.8 22.3C17.5 22 17.2 21.8 16.7 21.8C16.1 21.8 15.6 22.3 15.6 22.9C15.6 23.5 16 24 16.7 24C17.2 24 17.5 23.8 17.9 23.4L19.4 25C18.6 25.9 17.7 26.3 16.5 26.3C14.8 26.3 13.5 24.8 13.5 22.5Z"
      fill="black"
    />
  </svg>
);

// TypeScript Logo
export const TypeScriptLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill={color} />
    <path
      d="M10 32V8H30V32H10Z"
      fill={color}
    />
    <path
      d="M23 19H17V16H29V19H26V31H23V19Z"
      fill="white"
    />
    <path
      d="M16 24.5C16 22.5 17.5 21 20 21C22.5 21 24 22.5 24 24.5C24 26.5 22.5 28 20 28C17.5 28 16 26.5 16 24.5ZM18.5 24.5C18.5 25 19 25.5 20 25.5C21 25.5 21.5 25 21.5 24.5C21.5 24 21 23.5 20 23.5C19 23.5 18.5 24 18.5 24.5Z"
      fill="white"
    />
  </svg>
);

// React Logo
export const ReactLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#282C34" />
    <ellipse
      cx="20"
      cy="20"
      rx="16"
      ry="6"
      transform="rotate(30 20 20)"
      stroke={color}
      strokeWidth="2"
    />
    <ellipse
      cx="20"
      cy="20"
      rx="16"
      ry="6"
      transform="rotate(90 20 20)"
      stroke={color}
      strokeWidth="2"
    />
    <ellipse
      cx="20"
      cy="20"
      rx="16"
      ry="6"
      transform="rotate(150 20 20)"
      stroke={color}
      strokeWidth="2"
    />
    <circle cx="20" cy="20" r="3" fill={color} />
  </svg>
);

// Next.js Logo
export const NextJsLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#000000" />
    <path
      d="M17 28L28 13H23L12 28H17Z"
      fill="white"
    />
    <path
      d="M29 28L22 19L19 23L24 29H29Z"
      fill="white"
    />
  </svg>
);

// Node.js Logo
export const NodeJsLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#333333" />
    <path
      d="M20 32C19.5 32 19 31.8 18.6 31.6L16 30C15.4 29.7 15.7 29.6 15.9 29.5C16.7 29.2 16.8 29.2 17.5 28.8C17.6 28.7 17.8 28.8 17.9 28.8L19.9 30C20.1 30.1 20.3 30.1 20.5 30L30.1 24.5C30.3 24.4 30.4 24.2 30.4 24V13C30.4 12.8 30.3 12.6 30.1 12.5L20.5 7C20.3 6.9 20.1 6.9 19.9 7L10.3 12.5C10.1 12.6 10 12.8 10 13V24C10 24.2 10.1 24.4 10.3 24.5L13 26V18C13 15.8 14.5 14.5 16.5 14.5H17.5C19.4 14.5 21 15.5 21 18V26.5H21.1C21.3 26.5 21.5 26.6 21.5 26.8V31.2C21.5 31.4 21.3 31.6 21.1 31.6H21C20.6 31.8 20.3 32 20 32ZM26 23.8L25.9 23.7V19.8C25.9 18.6 25.1 18 24 18H23C21.9 18 21 18.7 21 19.8V23.8L20.8 23.9L19.1 25L20 25.5L21.5 24.6V19.8C21.5 19 22 18.5 23 18.5C24 18.5 24.5 19 24.5 19.8V24.6L26 25.5L26.9 25L26 23.8Z"
      fill={color}
    />
  </svg>
);

// TailwindCSS Logo
export const TailwindLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#1a202c" />
    <path
      d="M20 12C16.7 12 14.7 13.3 13.8 16C14.5 14.7 15.4 14 16.5 13.9C17.1 13.8 17.7 14.1 18.2 14.6C19 15.4 19.9 16.3 22 16.3C25.3 16.3 27.3 15 28.2 12.3C27.5 13.6 26.6 14.3 25.5 14.4C24.9 14.5 24.3 14.2 23.8 13.7C23 12.9 22.1 12 20 12ZM12 20C8.7 20 6.7 21.3 5.8 24C6.5 22.7 7.4 22 8.5 21.9C9.1 21.8 9.7 22.1 10.2 22.6C11 23.4 11.9 24.3 14 24.3C17.3 24.3 19.3 23 20.2 20.3C19.5 21.6 18.6 22.3 17.5 22.4C16.9 22.5 16.3 22.2 15.8 21.7C15 20.9 14.1 20 12 20Z"
      fill={color}
    />
  </svg>
);

// GraphQL Logo
export const GraphQLLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#181818" />
    <path
      d="M12 25L20 30L28 25L30 15L20 10L10 15L12 25Z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M10 15L30 15"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M20 10L20 30"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M12 25L28 25"
      stroke={color}
      strokeWidth="2"
    />
    <circle cx="10" cy="15" r="2" fill={color} />
    <circle cx="20" cy="10" r="2" fill={color} />
    <circle cx="30" cy="15" r="2" fill={color} />
    <circle cx="28" cy="25" r="2" fill={color} />
    <circle cx="20" cy="30" r="2" fill={color} />
    <circle cx="12" cy="25" r="2" fill={color} />
  </svg>
);

// AWS Logo
export const AWSLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#232F3E" />
    <path
      d="M13 22L20 14L25 20L32 14V22L25 28L20 22L13 28V22Z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M8 18L12 14L16 18L12 22L8 18Z"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

// HTML5 Logo
export const HTML5Logo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#E34F26" />
    <path
      d="M10 8L12 32L20 35L28 32L30 8H10Z"
      fill={color}
    />
    <path
      d="M15 16H25L24 27L20 28L16 27L15 16Z"
      fill="white"
    />
    <path
      d="M20 18H24L23.5 24L20 25V18Z"
      fill="#EBEBEB"
    />
    <path
      d="M20 18H16L16.5 24L20 25V18Z"
      fill="white"
    />
  </svg>
);

// CSS3 Logo
export const CSS3Logo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#1572B6" />
    <path
      d="M10 8L12 32L20 35L28 32L30 8H10Z"
      fill={color}
    />
    <path
      d="M20 13H30L28 28L20 30L12 28L11 20H16L16.5 24L20 25L23.5 24L24 19H16L15.5 16H24.5L25 13H20Z"
      fill="white"
    />
  </svg>
);

// Git Logo
export const GitLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#F05032" />
    <path
      d="M36 18L22 4L20 6L17.5 3.5L16 5L18.5 7.5L8 18C7 19 7 20.5 8 21.5L18.5 32C19.5 33 21 33 22 32L32.5 21.5C33.5 20.5 33.5 19 32.5 18L30 15.5L32.5 13L31 11.5L28.5 14L26 11.5L28.5 9L27 7.5L24.5 10L22 7.5L32.5 18C33.5 19 33.5 20.5 32.5 21.5L22 32C21 33 19.5 33 18.5 32L8 21.5C7 20.5 7 19 8 18L18.5 7.5L22 11L25.5 14.5L27 13L23.5 9.5L36 18Z"
      fill="white"
    />
    <circle cx="20" cy="20" r="3" fill="white" />
  </svg>
);

// Docker Logo
export const DockerLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#2496ED" />
    <path
      d="M20 23H16V27H20V23Z"
      fill="white"
    />
    <path
      d="M15 23H11V27H15V23Z"
      fill="white"
    />
    <path
      d="M20 18H16V22H20V18Z"
      fill="white"
    />
    <path
      d="M15 18H11V22H15V18Z"
      fill="white"
    />
    <path
      d="M10 18H6V22H10V18Z"
      fill="white"
    />
    <path
      d="M25 18H21V22H25V18Z"
      fill="white"
    />
    <path
      d="M15 13H11V17H15V13Z"
      fill="white"
    />
    <path
      d="M31 19.5C31 19.5 29 17.5 25 18.5C25 18.5 24.5 13 19 13H8C8 13 5 21 10 24.5C10 24.5 11.5 26 16 26H25.5C25.5 26 31 25.5 31 19.5Z"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

// SQLite Logo
export const SQLiteLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#003B57" />
    <path
      d="M8 8H22C24 8 26 10 26 12V28C26 30 24 32 22 32H8V8Z"
      fill={color}
    />
    <path
      d="M26 12C26 10 24 8 22 8H8V32H22C24 32 26 30 26 28V12Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M29 20V12L32 8V28L29 32V24"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 16H21"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13 20H21"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13 24H21"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Python Logo
export const PythonLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#3776AB" />
    <path
      d="M20 7C16 7 15 9 15 11V14H21V15H12C10 15 8 16.5 8 19.5C8 22.5 10 25 12 25H15V22C15 19.5 17 17 20 17H25C27.5 17 29 15.5 29 13V11C29 8.5 27 7 25 7H20Z"
      fill="#FFD43B"
    />
    <path
      d="M20 33C24 33 25 31 25 29V26H19V25H28C30 25 32 23.5 32 20.5C32 17.5 30 15 28 15H25V18C25 20.5 23 23 20 23H15C12.5 23 11 24.5 11 27V29C11 31.5 13 33 15 33H20Z"
      fill="#FFD43B"
    />
    <circle cx="17" cy="11" r="1.5" fill="#3776AB" />
    <circle cx="23" cy="29" r="1.5" fill="#3776AB" />
  </svg>
);

// Bootstrap Logo
export const BootstrapLogo: React.FC<LogoProps> = ({ color, size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="4" fill="#7952B3" />
    <path
      d="M11 8H23C25.8 8 28 10.2 28 13C28 15.8 25.8 18 23 18H11V8Z"
      fill={color}
    />
    <path
      d="M11 18H25C27.8 18 30 20.2 30 23C30 25.8 27.8 28 25 28H11V18Z"
      fill={color}
    />
    <path
      d="M11 8H23C25.8 8 28 10.2 28 13C28 15.8 25.8 18 23 18H11V8Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M11 18H25C27.8 18 30 20.2 30 23C30 25.8 27.8 28 25 28H11V18Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M16 13H21"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 23H23"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
