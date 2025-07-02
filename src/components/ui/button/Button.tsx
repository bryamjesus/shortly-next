interface Props {
  type: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
  disabled?: boolean;
  button?: string;
  children?: React.ReactNode;
}

export const Button = ({
  type = 'submit',
  className,
  disabled = false,
  button,
  children,
}: Props) => {
  return (
    <>
      <button
        type={type}
        className={`flex items-center justify-center font-black btn-primary ${className}`}
        disabled={disabled}>
        {button && button}
        {children && children}
      </button>
    </>
  );
};
