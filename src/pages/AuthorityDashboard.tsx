import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  AlertTriangle,
  Users,
  MapPin,
  FileText,
  Search,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import HeatMap from '../components/HeatMap'
import AlertsList from '../components/AlertsList'
import DigitalIDVerification from '../components/DigitalIDVerification'

const AuthorityDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const stats = [
    {
      label: 'Active Tourists',
      value: '2,847',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      label: 'Active Alerts',
      value: '12',
      icon: AlertTriangle,
      color: 'text-red-600',
    },
    {
      label: 'Safe Zones',
      value: '45',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      label: 'Response Time',
      value: '3.2 min',
      icon: Clock,
      color: 'text-purple-600',
    },
  ]

  const sections = [
    { id: 'overview', name: 'Overview', icon: Shield },
    { id: 'heatmap', name: 'Heat Map', icon: MapPin },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle },
    { id: 'verification', name: 'ID Verification', icon: Search },
    { id: 'efir', name: 'e-FIR System', icon: FileText },
  ]

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Authority Command Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real-time monitoring and incident management for tourist safety
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{section.name}</span>
              </button>
            )
          })}
        </div>

        {/* Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {activeSection === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                System Overview
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Recent Activity
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Tourist registered: John Doe
                        </span>
                        <span className="text-sm text-gray-500">2 min ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Geo-fence alert: Red Fort area
                        </span>
                        <span className="text-sm text-gray-500">5 min ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Emergency resolved
                        </span>
                        <span className="text-sm text-gray-500">
                          15 min ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white">
                  <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors">
                      <FileText className="w-6 h-6 mb-2" />
                      <div className="text-sm">Generate Report</div>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors">
                      <Search className="w-6 h-6 mb-2" />
                      <div className="text-sm">ID Verification</div>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors">
                      <AlertTriangle className="w-6 h-6 mb-2" />
                      <div className="text-sm">Send Alert</div>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors">
                      <Users className="w-6 h-6 mb-2" />
                      <div className="text-sm">Tourist List</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'heatmap' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Tourist Activity Heat Map
              </h2>
              <HeatMap />
            </div>
          )}

          {activeSection === 'alerts' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Active Alerts & Incidents
              </h2>
              <AlertsList />
            </div>
          )}

          {activeSection === 'verification' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Digital ID Verification Portal
              </h2>
              <DigitalIDVerification />
            </div>
          )}

          {activeSection === 'efir' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Automated e-FIR System
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Emergency FIR Generation
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Tourist ID
                        </label>
                        <input
                          type="text"
                          value="0x1a2b3c4d5e..."
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Incident Type
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                          <option>Medical Emergency</option>
                          <option>Theft/Robbery</option>
                          <option>Lost Tourist</option>
                          <option>Accident</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Incident Description
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Auto-generated from AI analysis..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                      Generate Automated e-FIR
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default AuthorityDashboard
