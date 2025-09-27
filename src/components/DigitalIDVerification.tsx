import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  CheckCircle,
  XCircle,
  User,
  Shield,
  MapPin,
  Clock,
  AlertTriangle,
} from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const DigitalIDVerification: React.FC = () => {
  const { t } = useTranslation()
  const [searchId, setSearchId] = useState('')
  const [verificationResult, setVerificationResult] = useState<any>(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)

    // Simulate API call
    setTimeout(() => {
      if (searchId.includes('valid') || searchId === '0x1a2b3c4d5e6f') {
        setVerificationResult({
          valid: true,
          tourist: {
            name: 'John Doe',
            id: '0x1a2b3c4d5e6f',
            nationality: 'American',
            safetyScore: 4.8,
            status: 'Active',
            lastSeen: '2 minutes ago',
            location: 'Red Fort, Delhi',
            emergencyContact: '+1 555 123 4567',
            medical: 'No known allergies',
            insurance: 'Valid until 2025-12-31',
          },
        })
      } else {
        setVerificationResult({
          valid: false,
          error: 'Digital ID not found or invalid',
        })
      }
      setIsVerifying(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleVerify} className="mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {t('digitalIdVerification.title')}
          </h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder={t('digitalIdVerification.placeholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={isVerifying || !searchId}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 disabled:cursor-not-allowed"
            >
              {isVerifying ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t('digitalIdVerification.verifying')}</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>{t('digitalIdVerification.verifyButton')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Verification Result */}
      {verificationResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div
            className={`p-6 ${
              verificationResult.valid
                ? 'bg-green-50 dark:bg-green-900/20'
                : 'bg-red-50 dark:bg-red-900/20'
            }`}
          >
            <div className="flex items-center space-x-3">
              {verificationResult.valid ? (
                <>
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <div>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
                      {t('digitalIdVerification.verified')}
                    </h3>
                    <p className="text-green-600 dark:text-green-400">
                      {t('digitalIdVerification.verifiedDesc')}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-300">
                      {t('digitalIdVerification.failed')}
                    </h3>
                    <p className="text-red-600 dark:text-red-400">
                      {verificationResult.error}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {verificationResult.valid && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tourist Information */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {t('digitalIdVerification.touristInfo')}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t('digitalIdVerification.name')}:
                        </span>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {verificationResult.tourist.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t('digitalIdVerification.digitalId')}:
                        </span>
                        <p className="font-mono text-sm text-gray-900 dark:text-white">
                          {verificationResult.tourist.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 text-center text-gray-500">
                        🌍
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t('digitalIdVerification.nationality')}:
                        </span>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {verificationResult.tourist.nationality}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Information */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {t('digitalIdVerification.currentStatus')}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t('digitalIdVerification.lastLocation')}:
                        </span>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {verificationResult.tourist.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t('digitalIdVerification.lastSeen')}:
                        </span>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {verificationResult.tourist.lastSeen}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t('digitalIdVerification.status')}:
                        </span>
                        <p className="font-medium text-green-600 dark:text-green-400">
                          {verificationResult.tourist.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Information */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {t('digitalIdVerification.emergencyInfo')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {t('digitalIdVerification.emergencyContact')}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {verificationResult.tourist.emergencyContact}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {t('digitalIdVerification.medicalInfo')}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {verificationResult.tourist.medical}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {t('digitalIdVerification.insurance')}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {verificationResult.tourist.insurance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-200">
                  <MapPin className="w-4 h-4" />
                  <span>{t('digitalIdVerification.trackLocation')}</span>
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-200">
                  <Shield className="w-4 h-4" />
                  <span>{t('digitalIdVerification.sendSafetyCheck')}</span>
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-200">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{t('digitalIdVerification.createAlert')}</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Demo Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mt-8">
        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">
          {t('digitalIdVerification.demoInstructions')}
        </h4>
        <p className="text-blue-700 dark:text-blue-400 mb-2">
          {t('digitalIdVerification.demoDesc')}
        </p>
        <ul className="text-blue-600 dark:text-blue-400 space-y-1">
          <li>
            • <code>0x1a2b3c4d5e6f</code> - {t('digitalIdVerification.validId')}
          </li>
          <li>
            • <code>invalid123</code> - {t('digitalIdVerification.invalidId')}
          </li>
          <li>• {t('digitalIdVerification.validKeyword')}</li>
        </ul>
      </div>
    </div>
  )
}

export default DigitalIDVerification
