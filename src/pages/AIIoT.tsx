import React from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Smartphone,
  Eye,
  TrendingUp,
  Zap,
  Wifi,
  Shield,
  Heart,
} from 'lucide-react'
import IoTWearableDemo from '../components/IoTWearableDemo'

const AIIoT: React.FC = () => {
  const aiFeatures = [
    {
      icon: Eye,
      title: 'Anomaly Detection',
      description:
        'AI monitors tourist behavior patterns and identifies unusual activities or deviations from planned routes',
      examples: [
        'Inactive tourist detection',
        'Route deviation alerts',
        'Unusual movement patterns',
      ],
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description:
        'Machine learning algorithms predict potential safety risks based on historical data and current conditions',
      examples: [
        'Risk assessment scores',
        'Weather-based warnings',
        'Crowd density predictions',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Behavioral Analysis',
      description:
        'Advanced pattern recognition to understand normal vs abnormal tourist behavior',
      examples: [
        'Emergency situation detection',
        'Health monitoring alerts',
        'Social distancing compliance',
      ],
    },
  ]

  const iotDevices = [
    {
      icon: Smartphone,
      title: 'Smart Wearables',
      description:
        'IoT-enabled wristbands and devices for continuous monitoring',
      features: [
        'Heart rate monitoring',
        'GPS tracking',
        'One-touch SOS',
        'Environmental sensors',
      ],
    },
    {
      icon: Wifi,
      title: 'Connected Infrastructure',
      description:
        'Smart city integration with IoT sensors and communication networks',
      features: [
        'Environmental monitoring',
        'Crowd management',
        'Emergency beacons',
        'Real-time data sync',
      ],
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description:
        'Fast, local processing for immediate response and reduced latency',
      features: [
        'Real-time processing',
        'Offline capability',
        'Low power consumption',
        'Instant alerts',
      ],
    },
  ]

  const futureVision = [
    'Predictive AI for travel risk assessment',
    'Blockchain-based travel insurance automation',
    'AR/VR emergency assistance and navigation',
    'Global safety network integration',
    'Smart city ecosystem connectivity',
    'Advanced biometric monitoring',
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
            AI & IoT Integration
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence and Internet of Things
            technology powering the future of tourist safety
          </p>
        </motion.div>

        {/* AI Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            AI-Powered Safety Intelligence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {example}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* IoT Wearable Demo */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Smart IoT Wearable Demo
          </h2>
          <IoTWearableDemo />
        </section>

        {/* IoT Infrastructure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            IoT Infrastructure & Devices
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {iotDevices.map((device, index) => {
              const Icon = device.icon
              return (
                <motion.div
                  key={device.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {device.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {device.description}
                  </p>
                  <div className="space-y-2">
                    {device.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Future Vision */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Future Vision</h2>
            <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
              Our roadmap includes revolutionary features that will transform
              how we think about tourist safety and travel security
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureVision.map((vision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6" />
                  </div>
                  <p className="font-medium">{vision}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default AIIoT
