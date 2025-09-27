import React from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  Eye,
  MapPin,
  Users,
  Award,
  Globe,
  Calendar,
  TrendingUp,
} from 'lucide-react'

const About: React.FC = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Project Inception',
      description: 'Initial research and development phase',
    },
    {
      year: '2024',
      title: 'Pilot Program',
      description: 'Testing with select tourist destinations',
    },
    {
      year: '2025',
      title: 'Full Launch',
      description: 'Global rollout and expansion',
    },
    {
      year: '2026',
      title: 'AI Enhancement',
      description: 'Advanced predictive algorithms',
    },
    {
      year: '2027',
      title: 'Global Network',
      description: 'Worldwide safety ecosystem',
    },
  ]

  const teamValues = [
    {
      icon: Shield,
      title: 'Safety First',
      description:
        'Tourist safety is our primary concern and drives every decision we make',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Working closely with authorities and stakeholders for comprehensive solutions',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description:
        'Creating solutions that work across cultures, languages, and jurisdictions',
    },
    {
      icon: Award,
      title: 'Innovation',
      description:
        'Leveraging cutting-edge technology for breakthrough safety solutions',
    },
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
            About SafeTour
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing tourist safety through innovative technology,
            comprehensive monitoring, and intelligent response systems
          </p>
        </motion.div>

        {/* Problem Background */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  The Problem We're Solving
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Tourist safety incidents in high-risk areas have increased
                    by 35% globally over the past five years. Traditional safety
                    measures are reactive rather than proactive, leading to
                    delayed responses and preventable incidents.
                  </p>
                  <p>
                    Communication barriers, lack of real-time monitoring, and
                    fragmented emergency response systems create gaps in tourist
                    protection that our technology addresses comprehensively.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      Tourist incidents annually:
                    </span>
                    <span className="font-bold text-red-600">2.3M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      Average response time:
                    </span>
                    <span className="font-bold text-orange-600">
                      22 minutes
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      Communication barriers:
                    </span>
                    <span className="font-bold text-red-600">68%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 p-12 rounded-2xl text-white"
            >
              <Target className="w-16 h-16 mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-90">
                To create a comprehensive, AI-powered safety ecosystem that
                protects tourists worldwide through proactive monitoring,
                instant response capabilities, and seamless technology
                integration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-green-600 p-12 rounded-2xl text-white"
            >
              <Eye className="w-16 h-16 mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl leading-relaxed opacity-90">
                A world where every tourist can explore with confidence, knowing
                they're protected by intelligent technology that anticipates,
                prevents, and responds to safety challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Development Roadmap
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-12"
                    >
                      <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl ml-4">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default About
