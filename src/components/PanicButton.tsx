import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Phone, MapPin, Clock } from 'lucide-react'

const PanicButton: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false)
  const [isActivated, setIsActivated] = useState(false)

  const handlePanicPress = () => {
    setIsPressed(true)
    setTimeout(() => {
      setIsActivated(true)
      setTimeout(() => {
        setIsActivated(false)
        setIsPressed(false)
      }, 5000)
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Emergency Response Demo
        </h3>

        <div className="flex justify-center mb-8">
          <motion.button
            onClick={handlePanicPress}
            disabled={isPressed}
            className={`relative w-32 h-32 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 ${
              isActivated
                ? 'bg-red-600 text-white animate-pulse'
                : isPressed
                ? 'bg-orange-500 text-white'
                : 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white hover:scale-110'
            }`}
            whileHover={!isPressed ? { scale: 1.1 } : {}}
            whileTap={!isPressed ? { scale: 0.95 } : {}}
          >
            <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
            {isActivated ? 'ALERT SENT' : isPressed ? 'SENDING...' : 'SOS'}

            {isActivated && (
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-red-400"
                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </motion.button>
        </div>

        {isActivated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 mb-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-bold">Emergency Alert Activated</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Your location and emergency information has been sent to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Nearest Police
                </p>
                <p className="text-xs text-gray-500">Response: 2 min</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Emergency Contacts
                </p>
                <p className="text-xs text-gray-500">Notified</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Response Center
                </p>
                <p className="text-xs text-gray-500">Dispatching help</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              How It Works
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Instant GPS location sharing</li>
              <li>• Medical information access</li>
              <li>• Multi-channel alert system</li>
              <li>• Real-time status updates</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Response Protocol
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Nearest authority contacted</li>
              <li>• Emergency services dispatched</li>
              <li>• Family members notified</li>
              <li>• Medical teams alerted if needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanicButton
