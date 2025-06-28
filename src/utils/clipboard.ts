export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true; // Éxito
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err);
    // Fallback para navegadores antiguos o si navigator.clipboard no está disponible
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch (fallbackErr) {
      console.error(
        'Fallback: No se pudo copiar al portapapeles:',
        fallbackErr
      );
      document.body.removeChild(textarea);
      return false;
    }
  }
};
