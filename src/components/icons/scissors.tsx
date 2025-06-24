interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Scissors = ({ className = '', ...props }: IconProps) => {
  return (
    <>
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        id="scissors-2"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className={`icon line-color stroke-current ${className}`}
        {...props}>
        <path
          id="secondary"
          d="M16.91,4.32c1.55-.68,3.29-.25,3.89,1S20.63,8,19.09,8.68s-3.29.25-3.89-1S15.37,5,16.91,4.32ZM3,16,19.09,8.68"
          style={{
            fill: 'none',
            stroke: 'rgb(44, 169, 188)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}></path>
        <path
          id="primary"
          d="M15.2,16.28c.6-1.21,2.34-1.64,3.89-1s2.31,2.2,1.71,3.4-2.34,1.64-3.89,1S14.6,17.48,15.2,16.28Zm3.89-1L3,8"
          style={{
            fill: 'none',
            stroke: 'rgb(0, 0, 0)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}></path>
      </svg>
    </>
  );
};
