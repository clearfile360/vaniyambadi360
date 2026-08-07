// Location and distance utilities for Vaniyambadi360

export interface LatLng {
  lat: number;
  lng: number;
}

// Vaniyambadi Town Center (Near Bus Stand & C.L. Road Junction)
export const VANIYAMBADI_TOWN_CENTER: LatLng = {
  lat: 12.6841,
  lng: 78.6186
};

// Tahsildar / Taluk Office Complex Landmark Coordinates
export const TAHSILDAR_OFFICE_CENTER: LatLng = {
  lat: 12.6865,
  lng: 78.6210
};

/**
 * Calculates distance in kilometers between two geographic points using Haversine formula
 */
export function calculateDistanceKm(
  point1: LatLng,
  point2: LatLng = VANIYAMBADI_TOWN_CENTER
): number {
  const R = 6371; // Earth radius in km
  const dLat = deg2rad(point2.lat - point1.lat);
  const dLon = deg2rad(point2.lng - point1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(point1.lat)) *
      Math.cos(deg2rad(point2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal place (e.g. 0.4 km)
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Gets or estimates lat/lng coordinates for a business entity
 */
export function getBusinessLatLng(b: { latLng?: LatLng; area?: string }): LatLng {
  if (b.latLng && typeof b.latLng.lat === 'number' && typeof b.latLng.lng === 'number') {
    return b.latLng;
  }
  const area = (b.area || '').toLowerCase();
  if (area.includes('tahsildar') || area.includes('taluk') || area.includes('court')) {
    return { lat: 12.6865, lng: 78.6210 };
  }
  if (area.includes('khaderpet')) {
    return { lat: 12.6880, lng: 78.6150 };
  }
  if (area.includes('c.l. road') || area.includes('cl road')) {
    return { lat: 12.6820, lng: 78.6160 };
  }
  if (area.includes('new town')) {
    return { lat: 12.6810, lng: 78.6240 };
  }
  if (area.includes('ambur road')) {
    return { lat: 12.6910, lng: 78.6280 };
  }
  if (area.includes('muslimpur')) {
    return { lat: 12.6790, lng: 78.6120 };
  }
  return VANIYAMBADI_TOWN_CENTER;
}
