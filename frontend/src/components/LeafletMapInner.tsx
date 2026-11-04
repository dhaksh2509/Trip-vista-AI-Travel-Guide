'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export interface MapMarkerItem {
  id: string;
  name: string;
  category: string;
  description: string;
  lat: number;
  lng: number;
  imageUrl?: string;
  durationMinutes?: number;
  costInr?: number;
  dayNumber?: number;
  type: 'attraction' | 'restaurant' | 'origin';
}

interface LeafletMapInnerProps {
  center: { lat: number; lng: number };
  markers: MapMarkerItem[];
  routeCoordinates?: { lat: number; lng: number }[];
  selectedDay?: number | null;
  highlightedPlaceId?: string | null;
  onMarkerClick?: (marker: MapMarkerItem) => void;
  googleMapsApiKey?: string;
}

export default function LeafletMapInner({
  center,
  markers,
  routeCoordinates = [],
  selectedDay = null,
  highlightedPlaceId = null,
  onMarkerClick,
  googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
}: LeafletMapInnerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);
  const polylineRef = useRef<L.Polyline | null>(null);
  const markerMapRef = useRef<Map<string, { marker: L.Marker; data: MapMarkerItem }>>(new Map());

  // Initialize Map once
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [center.lat, center.lng],
        zoom: 12,
        zoomControl: false,
        attributionControl: false
      });

      // Select tile provider based on Google Maps API key or OpenStreetMap fallback
      const hasGoogleKey = typeof googleMapsApiKey === 'string' && googleMapsApiKey.trim().length > 0;
      
      const tileUrl = hasGoogleKey
        ? `https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${googleMapsApiKey.trim()}`
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

      const tileSubdomains = hasGoogleKey ? ['0', '1', '2', '3'] : ['a', 'b', 'c'];
      const tileAttribution = hasGoogleKey ? '&copy; Google Maps' : '&copy; OpenStreetMap contributors';

      L.tileLayer(tileUrl, {
        maxZoom: 19,
        subdomains: tileSubdomains,
        attribution: tileAttribution,
        className: hasGoogleKey ? '' : 'map-tiles-dark'
      }).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      layerGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;

      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 150);
    } else {
      mapInstanceRef.current.setView([center.lat, center.lng], 12, { animate: true });
    }
  }, [center.lat, center.lng, googleMapsApiKey]);

  // Update Markers and Polyline when markers, selectedDay, or center change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();
    markerMapRef.current.clear();

    if (polylineRef.current) {
      map.removeLayer(polylineRef.current);
      polylineRef.current = null;
    }

    const filteredMarkers = selectedDay !== null
      ? markers.filter(m => m.dayNumber === selectedDay || m.dayNumber === undefined)
      : markers;

    filteredMarkers.forEach((m) => {
      const isRestaurant = m.type === 'restaurant';
      const isOrigin = m.type === 'origin';
      const markerColor = isOrigin ? '#facc15' : (isRestaurant ? '#f59e0b' : '#eab308');
      const badgeText = isOrigin ? '🛫' : (m.dayNumber ? `D${m.dayNumber}` : (isRestaurant ? '🍴' : '📍'));

      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `
          <div style="
            background: ${markerColor};
            width: 30px;
            height: 30px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #000000;
            box-shadow: 0 4px 14px rgba(0,0,0,0.8);
            cursor: pointer;
            transition: transform 0.2s ease;
          ">
            <div style="transform: rotate(45deg); font-size: 10px; font-weight: 800; color: #000000;">
              ${badgeText}
            </div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });

      const marker = L.marker([m.lat, m.lng], { icon: customIcon });

      const popupHtml = `
        <div style="font-family: inherit; padding: 4px; max-width: 250px;">
          ${m.imageUrl ? `
            <div style="width: 100%; height: 95px; border-radius: 6px; overflow: hidden; margin-bottom: 6px;">
              <img src="${m.imageUrl}" alt="${m.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'" />
            </div>
          ` : ''}
          <div style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: ${markerColor}; margin-bottom: 2px;">
            ${m.dayNumber ? `Day ${m.dayNumber} • ` : ''}${m.category}
          </div>
          <div style="font-size: 13px; font-weight: bold; color: #ffffff; margin-bottom: 4px; line-height: 1.25;">
            ${m.name}
          </div>
          <div style="font-size: 11px; color: #a1a1aa; line-height: 1.4; margin-bottom: 6px;">
            ${m.description}
          </div>
          <div style="display: flex; gap: 8px; font-size: 11px; color: #e4e4e7; border-top: 1px solid #27272a; padding-top: 5px;">
            ${m.durationMinutes ? `<span>⏱️ ${m.durationMinutes} mins</span>` : ''}
            ${m.costInr !== undefined ? `<span>💰 ₹${m.costInr}</span>` : ''}
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);
      marker.on('click', () => {
        if (onMarkerClick) onMarkerClick(m);
      });

      layerGroup.addLayer(marker);
      markerMapRef.current.set(m.id, { marker, data: m });
    });

    // Draw route polyline connecting points in order
    const routePoints: [number, number][] = (routeCoordinates && routeCoordinates.length >= 2)
      ? routeCoordinates.map(c => [c.lat, c.lng] as [number, number])
      : filteredMarkers.map(m => [m.lat, m.lng] as [number, number]);
    if (routePoints.length >= 2) {
      polylineRef.current = L.polyline(routePoints, {
        color: '#facc15',
        weight: 3.5,
        opacity: 0.95,
        dashArray: '8, 8',
        lineCap: 'round'
      }).addTo(map);

      const bounds = L.latLngBounds(routePoints);
      map.fitBounds(bounds, { padding: [45, 45], maxZoom: 15 });
    } else if (routePoints.length === 1) {
      map.setView(routePoints[0], 14, { animate: true });
    } else {
      map.setView([center.lat, center.lng], 12, { animate: true });
    }
  }, [markers, selectedDay, onMarkerClick, center]);

  // Handle programmatically highlighted place
  useEffect(() => {
    if (!highlightedPlaceId) return;
    const map = mapInstanceRef.current;
    if (!map) return;

    // Direct match or partial match on id
    let target = markerMapRef.current.get(highlightedPlaceId);
    if (!target) {
      for (const [key, val] of Array.from(markerMapRef.current.entries())) {
        if (key.includes(highlightedPlaceId) || highlightedPlaceId.includes(key)) {
          target = val;
          break;
        }
      }
    }

    if (target) {
      map.setView([target.data.lat, target.data.lng], 15, { animate: true });
      target.marker.openPopup();
    }
  }, [highlightedPlaceId]);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-full min-h-[460px] rounded-2xl overflow-hidden border border-zinc-800 shadow-card"
    />
  );
}
