import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const InteractiveMap: React.FC = () => {
  // New Delhi coordinates
  const center: [number, number] = [28.6139, 77.209]

  const zones = [
    {
      center: [28.6562, 77.241] as [number, number],
      radius: 800,
      color: '#10B981',
      type: 'Safe Zone',
      name: 'Red Fort Area',
      tourists: 45,
    },
    {
      center: [28.6129, 77.2295] as [number, number],
      radius: 600,
      color: '#F59E0B',
      type: 'Caution Zone',
      name: 'Connaught Place',
      tourists: 23,
    },
    {
      center: [28.5535, 77.2588] as [number, number],
      radius: 400,
      color: '#EF4444',
      type: 'Restricted Zone',
      name: 'Industrial Area',
      tourists: 2,
    },
  ]

  const tourists = [
    {
      position: [28.6139, 77.209] as [number, number],
      name: 'John Doe',
      status: 'safe',
    },
    {
      position: [28.6562, 77.241] as [number, number],
      name: 'Sarah Smith',
      status: 'safe',
    },
    {
      position: [28.6129, 77.2295] as [number, number],
      name: 'Mike Johnson',
      status: 'caution',
    },
  ]

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Geo-fencing zones */}
        {zones.map((zone, index) => (
          <Circle
            key={index}
            center={zone.center}
            radius={zone.radius}
            pathOptions={{
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.2,
              weight: 2,
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-gray-900">{zone.name}</h3>
                <p className="text-sm text-gray-600">{zone.type}</p>
                <p className="text-sm text-gray-600">
                  Active tourists: {zone.tourists}
                </p>
              </div>
            </Popup>
          </Circle>
        ))}

        {/* Tourist markers */}
        {tourists.map((tourist, index) => (
          <Marker key={index} position={tourist.position}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-gray-900">{tourist.name}</h3>
                <p className="text-sm text-gray-600">
                  Status: {tourist.status}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default InteractiveMap
