import { IconProps } from '@/lib/icon.interface';

export const ScissorsIcon = ({
  className = '',
  color = '#1f1f1f',
  ...props
}: IconProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill={color}
        className={`icon line-color stroke-current ${className}`}
        {...props}>
        <path d="M760-120 480-400l-94 94q8 15 11 32t3 34q0 66-47 113T240-80q-66 0-113-47T80-240q0-66 47-113t113-47q17 0 34 3t32 11l94-94-94-94q-15 8-32 11t-34 3q-66 0-113-47T80-720q0-66 47-113t113-47q66 0 113 47t47 113q0 17-3 34t-11 32l494 494v40H760ZM600-520l-80-80 240-240h120v40L600-520ZM240-640q33 0 56.5-23.5T320-720q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720q0 33 23.5 56.5T240-640Zm240 180q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM240-160q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Z" />
      </svg>
      {/* <svg
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
      </svg> */}
    </>
  );
};
