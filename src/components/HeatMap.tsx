import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { Users, AlertTriangle, TrendingUp } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

const HeatMap: React.FC = () => {
  // New Delhi area with tourist clusters
  const center: [number, number] = [28.6139, 77.209]

  const clusters = [
    {
      position: [28.6562, 77.241] as [number, number],
      intensity: 85,
      tourists: 45,
      area: 'Red Fort',
    },
    {
      position: [28.6129, 77.2295] as [number, number],
      intensity: 70,
      tourists: 32,
      area: 'Connaught Place',
    },
    {
      position: [28.6445, 77.2167] as [number, number],
      intensity: 60,
      tourists: 28,
      area: 'Chandni Chowk',
    },
    {
      position: [28.5562, 77.1] as [number, number],
      intensity: 90,
      tourists: 52,
      area: 'Qutub Minar',
    },
    {
      position: [28.5933, 77.2507] as [number, number],
      intensity: 75,
      tourists: 38,
      area: 'Humayuns Tomb',
    },
    {
      position: [28.6698, 77.23] as [number, number],
      intensity: 45,
      tourists: 18,
      area: 'Civil Lines',
    },
    {
      position: [28.5535, 77.2588] as [number, number],
      intensity: 25,
      tourists: 8,
      area: 'South Delhi',
    },
  ]

  const getIntensityColor = (intensity: number) => {
    if (intensity > 80) return '#EF4444' // Red
    if (intensity > 60) return '#F59E0B' // Orange
    if (intensity > 40) return '#10B981' // Green
    return '#3B82F6' // Blue
  }

  const getRadius = (intensity: number) => {
    return Math.max(8, intensity / 4)
  }

  return (
    <div className="space-y-6">
      {/* Heat Map */}
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={center}
          zoom={11}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {clusters.map((cluster, index) => (
            <CircleMarker
              key={index}
              center={cluster.position}
              radius={getRadius(cluster.intensity)}
              pathOptions={{
                color: getIntensityColor(cluster.intensity),
                fillColor: getIntensityColor(cluster.intensity),
                fillOpacity: 0.6,
                weight: 2,
              }}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-gray-900">{cluster.area}</h3>
                  <p className="text-sm text-gray-600">
                    Tourists: {cluster.tourists}
                  </p>
                  <p className="text-sm text-gray-600">
                    Activity: {cluster.intensity}%
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Legend and Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Heat Map Legend
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                High Activity (80%+) - Crowded areas
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Medium Activity (60-79%) - Popular spots
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Low Activity (40-59%) - Normal areas
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Minimal Activity (&lt;40%) - Quiet zones
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Live Statistics
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Total Active Tourists
                </span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                2,847
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Active Alerts
                </span>
              </div>
              <span className="font-bold text-red-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Safety Score Average
                </span>
              </div>
              <span className="font-bold text-green-600">4.7/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeatMap
