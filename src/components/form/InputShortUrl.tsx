import { Dispatch, SetStateAction } from 'react';

interface Props {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  error: string;
}
export const InputShortUrl = ({ url, setUrl, error }: Props) => {
  return (
    <>
      <input
        className={`w-full py-4 px-3 border bg-gray-200 rounded md:basis-2/3 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://mysite.com"
      />
    </>
  );
};
