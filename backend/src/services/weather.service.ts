import { config } from '../config/env';
import { WeatherInfo } from '../types';

export class WeatherService {
  public async getWeather(destination: string, isOnline: boolean = true): Promise<WeatherInfo> {
    if (!isOnline) {
      return {
        destination,
        temperatureC: 22,
        feelsLikeC: 22,
        condition: 'Cached Weather Info',
        isRainExpected: false,
        rainProbabilityPct: 10,
        humidityPct: 60,
        windSpeedKmph: 10,
        outdoorAdvice: 'Offline mode active. Real-time meteorological telemetry requires network connectivity.',
        isLive: false
      };
    }

    if (config.weatherApiKey) {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(destination)},IN&units=metric&appid=${config.weatherApiKey}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          const condition = data.weather?.[0]?.main || 'Clear';
          const isRain = condition.toLowerCase().includes('rain') || condition.toLowerCase().includes('drizzle');
          return {
            destination: data.name || destination,
            temperatureC: Math.round(data.main.temp),
            feelsLikeC: Math.round(data.main.feels_like),
            condition: data.weather?.[0]?.description || condition,
            isRainExpected: isRain,
            rainProbabilityPct: isRain ? 75 : 15,
            humidityPct: data.main.humidity,
            windSpeedKmph: Math.round((data.wind?.speed || 3) * 3.6),
            outdoorAdvice: isRain ? 'Carry an umbrella; consider indoor cultural sights.' : 'Ideal weather for outdoor activities.',
            isLive: true
          };
        }
      } catch (err) {
        console.warn('[WeatherService] OpenWeather query failed, using climate heuristics:', err);
      }
    }

    // Heuristic climate modeling based on destination name
    const destLower = destination.toLowerCase();
    const isHills = destLower.includes('valley') || destLower.includes('hill') || destLower.includes('manali') || destLower.includes('ooty') || destLower.includes('shimla') || destLower.includes('araku') || destLower.includes('munnar');
    const isCoastal = destLower.includes('goa') || destLower.includes('visakhapatnam') || destLower.includes('vizag') || destLower.includes('beach') || destLower.includes('kochi') || destLower.includes('pondicherry');

    const temp = isHills ? 20 : (isCoastal ? 29 : 27);
    const humidity = isCoastal ? 78 : (isHills ? 65 : 45);

    return {
      destination,
      temperatureC: temp,
      feelsLikeC: temp + 1,
      condition: isHills ? 'Pleasant & Breezy' : (isCoastal ? 'Sunny & Humid' : 'Clear Skies'),
      isRainExpected: false,
      rainProbabilityPct: 12,
      humidityPct: humidity,
      windSpeedKmph: 14,
      outdoorAdvice: 'Pleasant climate anticipated; excellent for sightseeing, exploration, and photography.',
      isLive: false
    };
  }
}

export const weatherService = new WeatherService();

