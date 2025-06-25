import { Scissors } from '../icons/scissors';

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
        <Scissors className="w-6 h-6 text-gray-800 hover:text-blue-500 transition-colors" />
      </button>
    </>
  );
};
