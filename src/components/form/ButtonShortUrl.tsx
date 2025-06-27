import { ScissorsIcon } from '../icons/ScissorsIcon';

interface Props {
  disabled: boolean;
}

export const ButtonShortUrl = ({ disabled }: Props) => {
  return (
    <>
      <button
        type="submit"
        className="flex items-center justify-center font-black btn-primary md:basis-1/4"
        disabled={disabled}>
        <ScissorsIcon
          className="w-6 h-6 hover:text-blue-500 transition-colors"
          color={`${disabled ? '#1f2937' : '#f9fafb'}`}
        />
      </button>
    </>
  );
};
