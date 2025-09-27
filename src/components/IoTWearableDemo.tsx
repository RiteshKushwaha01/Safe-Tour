import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Heart,
  MapPin,
  Battery,
  Wifi,
  AlertTriangle,
  Activity,
  Thermometer,
  Clock,
} from 'lucide-react'

const IoTWearableDemo: React.FC = () => {
  const [heartRate, setHeartRate] = useState(72)
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [isConnected, setIsConnected] = useState(true)
  const [temperature, setTemperature] = useState(36.5)
  const [steps, setSteps] = useState(8547)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data updates
      setHeartRate((prev) =>
        Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 8))
      )
      setBatteryLevel((prev) => Math.max(0, prev - 0.1))
      setTemperature((prev) =>
        Math.max(35, Math.min(40, prev + (Math.random() - 0.5) * 0.5))
      )
      setSteps((prev) => prev + Math.floor(Math.random() * 3))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getHeartRateStatus = () => {
    if (heartRate < 60 || heartRate > 100) return 'warning'
    return 'normal'
  }

  const getBatteryColor = () => {
    if (batteryLevel > 50) return 'text-green-500'
    if (batteryLevel > 20) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Wearable Device Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-80 h-80 mx-auto relative">
            {/* Wristband */}
            <div className="absolute inset-x-16 inset-y-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-2xl">
              {/* Watch Face */}
              <div className="absolute inset-8 bg-black rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-4 text-white">
                  <div className="text-center space-y-2">
                    <div className="text-xs opacity-70">SafeTour</div>
                    <div className="text-2xl font-bold">
                      {new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Heart
                        className={`w-4 h-4 ${
                          getHeartRateStatus() === 'warning'
                            ? 'text-red-400'
                            : 'text-green-400'
                        }`}
                      />
                      <span className="text-sm">{Math.round(heartRate)}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Battery className={`w-4 h-4 ${getBatteryColor()}`} />
                      <span className="text-xs">
                        {Math.round(batteryLevel)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
          </div>

          {/* Connection Status */}
          <div className="text-center mt-6">
            <div
              className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                isConnected
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
              }`}
            >
              <Wifi className="w-4 h-4" />
              <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
            </div>
          </div>
        </motion.div>

        {/* Real-time Data Panel */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Live Biometric & Environmental Data
          </h3>

          {/* Health Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              animate={{
                scale: getHeartRateStatus() === 'warning' ? [1, 1.05, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: getHeartRateStatus() === 'warning' ? Infinity : 0,
              }}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                getHeartRateStatus() === 'warning' ? 'ring-2 ring-red-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Heart
                  className={`w-6 h-6 ${
                    getHeartRateStatus() === 'warning'
                      ? 'text-red-500'
                      : 'text-red-400'
                  }`}
                />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  Heart Rate
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {Math.round(heartRate)}{' '}
                <span className="text-lg text-gray-500">BPM</span>
              </div>
              {getHeartRateStatus() === 'warning' && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Abnormal reading detected</span>
                </div>
              )}
            </motion.div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Thermometer className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  Temperature
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {temperature.toFixed(1)}{' '}
                <span className="text-lg text-gray-500">°C</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Activity className="w-6 h-6 text-green-500" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  Steps Today
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {steps.toLocaleString()}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Battery className={`w-6 h-6 ${getBatteryColor()}`} />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  Battery
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {Math.round(batteryLevel)}
                <span className="text-lg text-gray-500">%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    batteryLevel > 50
                      ? 'bg-green-500'
                      : batteryLevel > 20
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${batteryLevel}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Emergency Features */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white">
            <h4 className="text-lg font-bold mb-4">Emergency Features</h4>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors text-center">
                <AlertTriangle className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">SOS Button</div>
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors text-center">
                <MapPin className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Share Location</div>
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Device Specifications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  • GPS + GLONASS tracking
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • Heart rate monitoring
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • Temperature sensor
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • Accelerometer
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  • 7-day battery life
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • Waterproof (IP68)
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • 4G LTE connectivity
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • Emergency backup power
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IoTWearableDemo
