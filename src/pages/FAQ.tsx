import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Shield,
  Users,
  Brain,
  Smartphone,
} from 'lucide-react'

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const faqCategories = [
    {
      category: 'General',
      icon: HelpCircle,
      color: 'from-blue-500 to-blue-600',
      faqs: [
        {
          question: 'What is SafeTour and how does it work?',
          answer:
            'SafeTour is an AI-powered tourist safety monitoring system that uses blockchain technology, geo-fencing, and IoT devices to provide real-time protection for tourists. It combines digital identity verification, location tracking, emergency response, and predictive safety analytics.',
        },
        {
          question: 'Is my personal data secure?',
          answer:
            'Yes, we use enterprise-grade encryption and blockchain technology to ensure your data is completely secure. Your information is stored using distributed ledger technology, making it tamper-proof and privately accessible only to you and authorized emergency personnel when needed.',
        },
        {
          question: 'How much does it cost to use SafeTour?',
          answer:
            'SafeTour offers different pricing tiers including a free basic plan for individual tourists, premium plans with advanced features, and enterprise solutions for tourism operators. Emergency services are always free regardless of your plan.',
        },
        {
          question: 'Which countries and regions are supported?',
          answer:
            'We currently operate in India with plans to expand to Southeast Asia, Europe, and globally. Our system is designed to work internationally with local authority partnerships.',
        },
      ],
    },
    {
      category: 'Safety Features',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      faqs: [
        {
          question: 'How does the panic button work?',
          answer:
            'The panic button instantly sends your GPS location, medical information, and emergency alert to the nearest authorities, your emergency contacts, and our 24/7 response center. It works even with limited internet connectivity through SMS and satellite backup.',
        },
        {
          question: 'What is geo-fencing and how does it protect me?',
          answer:
            "Geo-fencing creates virtual boundaries around safe and restricted areas. When you enter a potentially dangerous zone, you receive instant alerts, and authorities are automatically notified if you're in a high-risk area for an extended period.",
        },
        {
          question: 'How accurate is the real-time tracking?',
          answer:
            'Our GPS tracking is accurate within 3-5 meters in urban areas and 5-10 meters in remote locations. We use multiple positioning technologies including GPS, GLONASS, and cellular triangulation for maximum accuracy.',
        },
        {
          question: 'Can I control my privacy settings?',
          answer:
            'Absolutely. You have complete control over who can see your location, when tracking is active, and what information is shared. You can set different privacy levels for family, friends, and authorities.',
        },
      ],
    },
    {
      category: 'Technology',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      faqs: [
        {
          question: 'How does the AI anomaly detection work?',
          answer:
            'Our AI analyzes patterns in movement, behavior, and communication to detect unusual situations. It learns normal tourist behavior and flags deviations that might indicate emergencies, getting lost, or potential safety issues.',
        },
        {
          question: 'What is blockchain-based digital ID?',
          answer:
            'Your digital ID is stored on a secure blockchain, making it tamper-proof and instantly verifiable by authorities worldwide. It contains your identity information, medical data, and travel credentials in an encrypted, decentralized format.',
        },
        {
          question: 'Do I need special hardware or devices?',
          answer:
            'The basic system works with any smartphone. For enhanced protection, we offer optional IoT wearables like smart wristbands that provide additional monitoring capabilities and work even when your phone battery dies.',
        },
        {
          question: 'Does the system work offline?',
          answer:
            'Yes, many features work offline including emergency alerts via SMS and satellite communication. Your safety data is cached locally and syncs when connectivity is restored.',
        },
      ],
    },
    {
      category: 'For Authorities',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      faqs: [
        {
          question: 'How can authorities access the system?',
          answer:
            'Verified law enforcement and tourism officials can request access through our secure portal. We verify credentials and provide training before granting access to sensitive tourist data and emergency response tools.',
        },
        {
          question: 'What information do authorities see?',
          answer:
            'Authorities see only necessary information for safety and emergency response: location data during emergencies, digital ID verification, and incident reports. Personal communications and detailed travel information remain private.',
        },
        {
          question: 'How fast can authorities respond to emergencies?',
          answer:
            'Our system enables response times under 3 minutes in urban areas and under 10 minutes in remote locations. Authorities receive instant alerts with precise location data, medical information, and situation context.',
        },
        {
          question: 'Is training provided for authority personnel?',
          answer:
            'Yes, we provide comprehensive training on our dashboard, emergency protocols, and integration with existing law enforcement systems. Training includes both online modules and hands-on sessions.',
        },
      ],
    },
  ]

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about SafeTour's tourist safety system
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${category.color} p-6 text-white`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-8 h-8" />
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex
                      const isOpen = openItems.includes(globalIndex)

                      return (
                        <div
                          key={faqIndex}
                          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
                          >
                            <span className="font-semibold text-gray-900 dark:text-white pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            )}
                          </button>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12"
        >
          <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our support team is available 24/7 to help with any questions about
            tourist safety and our services
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
