interface Props {
  disabled: boolean;
}

export const ButtonShortUrl = ({ disabled }: Props) => {
  return (
    <>
      <button
        type="submit"
        className="font-black btn-primary md:basis-1/3"
        disabled={disabled}>
        {disabled ? 'Escribe una URL válida' : 'Cortar'}
      </button>
    </>
  );
};
