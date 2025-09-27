import React from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  User,
  AlertTriangle,
  TrendingUp,
  Globe,
  Shield,
} from 'lucide-react'

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'New Safety Protocols for Himalayan Trekking Routes',
      excerpt:
        'Updated guidelines and safety measures for high-altitude tourist destinations in the Himalayas.',
      author: 'Tourism Safety Board',
      date: '2025-01-15',
      category: 'Travel Advisory',
      priority: 'high',
      image:
        'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Monsoon Season Safety Guidelines for Coastal Tourism',
      excerpt:
        'Essential safety information for tourists visiting coastal regions during monsoon season.',
      author: 'Coastal Safety Authority',
      date: '2025-01-12',
      category: 'Weather Alert',
      priority: 'medium',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Technology Update: Enhanced AI Detection Capabilities',
      excerpt:
        'Our latest AI algorithms now provide 40% faster anomaly detection and improved accuracy.',
      author: 'SafeTour Tech Team',
      date: '2025-01-10',
      category: 'Technology',
      priority: 'low',
      image:
        'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'International Collaboration: European Safety Network Integration',
      excerpt:
        'SafeTour now integrates with European tourist safety systems for seamless cross-border protection.',
      author: 'International Relations',
      date: '2025-01-08',
      category: 'Partnership',
      priority: 'medium',
      image:
        'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Emergency Response Time Reduced to Under 3 Minutes',
      excerpt:
        'New optimization algorithms and expanded response network achieve record-breaking emergency response times.',
      author: 'Operations Team',
      date: '2025-01-05',
      category: 'Achievement',
      priority: 'high',
      image:
        'https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Cultural Sensitivity Training for AI Safety Algorithms',
      excerpt:
        'How we ensure our AI systems respect local customs and cultural practices while maintaining safety.',
      author: 'AI Ethics Team',
      date: '2025-01-03',
      category: 'Ethics',
      priority: 'low',
      image:
        'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100 dark:bg-red-900/20'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
      default:
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Travel Advisory':
        return AlertTriangle
      case 'Weather Alert':
        return Globe
      case 'Technology':
        return TrendingUp
      case 'Partnership':
        return Users
      case 'Achievement':
        return Shield
      default:
        return Calendar
    }
  }

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
            Travel Advisories & News
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest safety updates, travel advisories, and
            technology developments
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${getPriorityColor(
                    posts[0].priority
                  )}`}
                >
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  URGENT ADVISORY
                </div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-xl opacity-90 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div
                className="h-64 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${posts[0].image})` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => {
            const CategoryIcon = getCategoryIcon(post.category)
            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                        post.priority
                      )}`}
                    >
                      <CategoryIcon className="w-3 h-3 mr-1" />
                      {post.category}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to receive critical safety alerts and travel advisories
            directly in your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
