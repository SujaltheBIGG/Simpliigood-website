"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface StoreMapProps {
  stores: Array<{
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    latitude?: number;
    longitude?: number;
  }>;
}

export default function StoreMap({ stores }: StoreMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Sample coordinates for demonstration - in production, these should come from geocoding
  const sampleStores = stores.slice(0, 10).map((store, index) => ({
    ...store,
    // Add approximate coordinates for demo purposes
    latitude: 40.7128 + (Math.random() - 0.5) * 10,
    longitude: -74.0060 + (Math.random() - 0.5) * 20,
  }));

  useEffect(() => {
    if (!mapContainer.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!token) {
      console.warn("Mapbox token not found. Add NEXT_PUBLIC_MAPBOX_TOKEN to your environment variables.");
      return;
    }

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [-98.5795, 39.8283],
        zoom: 3,
        accessToken: token,
      });

      map.current.on("load", () => {
        // Add markers
        sampleStores.forEach((store) => {
          if (store.latitude && store.longitude && map.current) {
            const marker = new mapboxgl.Marker({
              color: "#154048",
            })
              .setLngLat([store.longitude, store.latitude])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(`
                  <div style="padding: 10px; font-family: system-ui, sans-serif;">
                    <h3 style="margin: 0 0 5px 0; font-size: 14px; font-weight: 600; color: #154048;">${store.name}</h3>
                    <p style="margin: 0; font-size: 12px; color: #666;">${store.address}</p>
                    <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">${store.city}, ${store.state}</p>
                  </div>
                `)
              )
              .addTo(map.current);
          }
        });
      });
    } catch (error) {
      console.error("Failed to initialize map:", error);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden" style={{ height: "800px", backgroundColor: "#e8f5e9" }}>
      <div ref={mapContainer} className="w-full h-full" style={{ height: "100%" }} />
    </div>
  );
}
