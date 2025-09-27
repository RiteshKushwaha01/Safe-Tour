import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Star,
  MapPin,
  AlertCircle,
  Users,
  Globe,
  Smartphone,
  CheckCircle,
  Clock,
  Map,
} from 'lucide-react'
import InteractiveMap from '../components/InteractiveMap'
import PanicButton from '../components/PanicButton'
import LanguageSelector from '../components/LanguageSelector'

const TouristFeatures: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('digital-id')

  const tabs = [
    { id: 'digital-id', name: 'Digital ID', icon: Shield },
    { id: 'safety-score', name: 'Safety Score', icon: Star },
    { id: 'geo-fencing', name: 'Geo-fencing', icon: MapPin },
    { id: 'panic-button', name: 'Panic Button', icon: AlertCircle },
    { id: 'family-tracking', name: 'Family Tracking', icon: Users },
    { id: 'multilingual', name: 'Multilingual', icon: Globe },
  ]

  const safetyFeatures = [
    'Real-time location sharing',
    'Emergency contact integration',
    'Automatic incident reporting',
    'Medical information access',
    'Travel insurance verification',
    'Local authority coordination',
  ]

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
            Tourist Safety Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive safety tools designed to protect tourists and enhance
            their travel experience
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:block">{tab.name}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {selectedTab === 'digital-id' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Blockchain Digital Tourist ID
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Our revolutionary blockchain-based digital ID ensures your
                    identity is secure, tamper-proof, and instantly verifiable
                    by authorities worldwide.
                  </p>
                  <div className="space-y-3">
                    {safetyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Digital Tourist ID Card
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="font-medium">John Doe</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ID:</span>
                      <span className="font-mono text-sm">0x1a2b3c...</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety Score:</span>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">4.8/5.0</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="px-2 py-1 bg-green-500 text-white rounded text-sm">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'safety-score' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Dynamic Safety Score System
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">4.8</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= 4
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-green-100">Excellent Safety Score</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Score Factors
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Travel history</li>
                    <li>• Emergency contacts</li>
                    <li>• Insurance status</li>
                    <li>• Safety compliance</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Benefits
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Priority emergency response</li>
                    <li>• Reduced insurance premiums</li>
                    <li>• Enhanced travel permissions</li>
                    <li>• Personalized safety tips</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'geo-fencing' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Smart Geo-fencing Protection
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    How It Works
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Map className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Real-time Location Monitoring
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Continuous GPS tracking with intelligent boundary
                          detection
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Instant Alerts
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Immediate notifications for restricted area entry
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Predictive Safety
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          AI-powered risk assessment and proactive warnings
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <InteractiveMap />
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'panic-button' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Emergency Panic Button
              </h2>
              <div className="max-w-2xl mx-auto">
                <PanicButton />
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">
                      Emergency Response
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Instant alert to nearest authorities</li>
                      <li>• GPS location sharing</li>
                      <li>• Emergency contact notification</li>
                      <li>• Medical information access</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
                      Response Time
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Average response: &lt; 5 minutes</li>
                      <li>• 24/7 monitoring</li>
                      <li>• Multi-language support</li>
                      <li>• Silent alarm option</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'family-tracking' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Real-time Family Tracking
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Family Group: "Smith Family Trip"
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              John Smith
                            </p>
                            <p className="text-sm text-gray-500">
                              Last seen: Red Fort
                            </p>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                          Safe
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              Sarah Smith
                            </p>
                            <p className="text-sm text-gray-500">
                              Last seen: India Gate
                            </p>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                          Safe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Privacy Settings
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" checked className="rounded" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Share location with family
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" checked className="rounded" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Emergency contact alerts
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Share with authorities
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Group Stats
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Active Members:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          2/2
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Safety Status:
                        </span>
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          All Safe
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {selectedTab === 'panic-button' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Emergency Panic Button
              </h2>
              <PanicButton />
            </div>
          )}

          {selectedTab === 'multilingual' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Multilingual Support
              </h2>
              <div className="max-w-2xl mx-auto">
                <LanguageSelector />
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Supported Languages
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                      <div>🇺🇸 English</div>
                      <div>🇮🇳 हिंदी</div>
                      <div>🇪🇸 Español</div>
                      <div>🇫🇷 Français</div>
                      <div>🇩🇪 Deutsch</div>
                      <div>🇯🇵 日本語</div>
                      <div>🇨🇳 中文</div>
                      <div>🇷🇺 Русский</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Features
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Real-time translation</li>
                      <li>• Voice commands</li>
                      <li>• Emergency phrases</li>
                      <li>• Cultural guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default TouristFeatures
