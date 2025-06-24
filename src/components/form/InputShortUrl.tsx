import { isValidUrl } from '@/utils/valideUrl';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  error?: string;
  setError: Dispatch<SetStateAction<string>>;
}

export const InputShortUrl = ({ url, setUrl, error, setError }: Props) => {
  const handleInputChange = (value: string) => {
    setUrl(value);
    if (!isValidUrl(value)) {
      setError('Por favor ingresa una URL válida.');
      return;
    }
    setError('');
  };

  return (
    <>
      <div className="w-full md:basis-2/3">
        <input
          className={`w-full py-4 px-3 border bg-gray-200 rounded  ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          type="text"
          value={url}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="https://mysite.com"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </>
  );
};
