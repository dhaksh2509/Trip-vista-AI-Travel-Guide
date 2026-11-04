/**
 * Google Maps Integration Configuration and Utilities
 * 
 * Safely accesses the Google Maps API key from the environment variable:
 * process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
 */

export const GOOGLE_MAPS_API_KEY: string =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

/**
 * Checks if a non-empty Google Maps API key is configured in the environment.
 */
export const isGoogleMapsConfigured = (): boolean => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return typeof key === 'string' && key.trim().length > 0;
};

/**
 * Returns the configured API key or undefined if empty.
 */
export const getGoogleMapsApiKey = (): string | undefined => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return key && key.trim().length > 0 ? key : undefined;
};

/**
 * Helper to construct the Google Maps JavaScript API script URL
 * for dynamic script injection or Next.js Script loading.
 */
export const getGoogleMapsScriptUrl = (
  libraries: string[] = ['places', 'geometry']
): string => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const libs = libraries.join(',');
  return `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libs}`;
};
