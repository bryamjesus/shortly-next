import { FULL_URL } from '@/config/global';
import { ResponseShortUrl, UrlState } from '@/lib/url.interface';

// Clase personalizada para errores de la API
class UrlServiceError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'UrlServiceError';
  }
}

// Función auxiliar para manejar errores
const handleApiError = async (response: Response): Promise<never> => {
  let errorMessage = `Error en la solicitud: ${response.status}`;
  let errorDetails;

  try {
    const errorData = await response.json();
    errorMessage = errorData.message || errorMessage;
    errorDetails = errorData;
  } catch {
    // Si no se puede parsear el JSON, usar mensaje por defecto
  }

  throw new UrlServiceError(response.status, errorMessage, errorDetails);
};

/**
 * Acorta una URL larga
 * @param url - URL completa a acortar
 * @returns Objeto con la URL acortada y sus datos
 */
export const getShortUrl = async (url: string): Promise<UrlState> => {
  try {
    console.log('[POST]', `${FULL_URL}/urls`);

    const response = await fetch(`${FULL_URL}/urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      await handleApiError(response);
    }

    const { data }: ResponseShortUrl = await response.json();
    console.log('[SUCCESS] URL acortada:', data.shortCode);

    return data;
  } catch (error) {
    if (error instanceof UrlServiceError) {
      throw error;
    }
    console.error('Error al acortar URL:', error);
    throw new UrlServiceError(
      500,
      'No se pudo acortar la URL. Por favor, intenta nuevamente.'
    );
  }
};

/**
 * Obtiene estadísticas de una URL acortada (si tu API lo soporta)
 * @param shortCode - Código corto de la URL
 * @returns Datos con estadísticas
 */
export const getUrlStats = async (shortCode: string): Promise<UrlState> => {
  try {
    console.log('[GET]', `${FULL_URL}/urls/${shortCode}`);

    const response = await fetch(`${FULL_URL}/urls/${shortCode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      await handleApiError(response);
    }

    const { data }: ResponseShortUrl = await response.json();
    return data;
  } catch (error) {
    if (error instanceof UrlServiceError) {
      throw error;
    }
    console.error('Error al obtener estadísticas:', error);
    throw new UrlServiceError(500, 'No se pudieron obtener las estadísticas.');
  }
};

export { UrlServiceError };
