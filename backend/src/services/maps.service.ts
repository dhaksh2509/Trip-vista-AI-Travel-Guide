import { config } from '../config/env';

export interface Coordinates {
  lat: number;
  lng: number;
}

export class MapsService {
  /**
   * Calculates Great-Circle distance using the Haversine formula
   */
  public calculateDistanceKm(coord1: Coordinates, coord2: Coordinates): number {
    const R = 6371; // Earth radius in km
    const dLat = this.deg2rad(coord2.lat - coord1.lat);
    const dLng = this.deg2rad(coord2.lng - coord1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(coord1.lat)) *
        Math.cos(this.deg2rad(coord2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  public async geocode(address: string): Promise<Coordinates | null> {
    if (config.googleMapsApiKey) {
      try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${config.googleMapsApiKey}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data.results && data.results.length > 0) {
            return data.results[0].geometry.location;
          }
        }
      } catch (err) {
        console.warn('[MapsService] Google Geocoding API failed:', err);
      }
    }
    return null;
  }
}

export const mapsService = new MapsService();

