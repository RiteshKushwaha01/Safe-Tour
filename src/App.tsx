import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import TouristFeatures from './pages/TouristFeatures'
import AuthorityDashboard from './pages/AuthorityDashboard'
import AIIoT from './pages/AIIoT'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Header />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route 
                    path="/tourist-features" 
                    element={
                      <ProtectedRoute requiredUserType="tourist">
                        <TouristFeatures />
                      </ProtectedRoute>
                    } 
                  />
                  <Route
                    path="/authority-dashboard"
                    element={
                      <ProtectedRoute requiredUserType="authority">
                        <AuthorityDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/ai-iot" element={<AIIoT />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/faq" element={<FAQ />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
