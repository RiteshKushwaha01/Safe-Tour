import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface User {
  id: string
  name: string
  email: string
  type: 'tourist' | 'authority'
  phone?: string
  nationality?: string
  department?: string
  badgeId?: string
  jurisdiction?: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; redirectTo?: string }>
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<{ success: boolean; redirectTo?: string }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('safetour_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; redirectTo?: string }> => {
    setIsLoading(true)
    
    // Simulate API call - in real app, this would be an actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data - in real app, this would come from your backend
    const mockUsers = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        type: 'tourist' as const,
        phone: '+91 98765 43210',
        nationality: 'American',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '2',
        name: 'Sarah Smith',
        email: 'sarah@example.com',
        type: 'tourist' as const,
        phone: '+91 98765 43211',
        nationality: 'British',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '3',
        name: 'Inspector Raj Kumar',
        email: 'raj.kumar@police.gov.in',
        type: 'authority' as const,
        department: 'Tourism Police',
        badgeId: 'TP-2024-001',
        jurisdiction: 'Delhi NCR',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      }
    ]

    const foundUser = mockUsers.find(u => u.email === email)
    
    if (foundUser && password === 'password123') { // Simple password for demo
      setUser(foundUser)
      localStorage.setItem('safetour_user', JSON.stringify(foundUser))
      setIsLoading(false)
      
      // Determine redirect based on user type
      const redirectTo = foundUser.type === 'tourist' ? '/tourist-features' : '/authority-dashboard'
      return { success: true, redirectTo }
    }
    
    setIsLoading(false)
    return { success: false }
  }

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<{ success: boolean; redirectTo?: string }> => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      ...userData
    }
    
    setUser(newUser)
    localStorage.setItem('safetour_user', JSON.stringify(newUser))
    setIsLoading(false)
    
    // Determine redirect based on user type
    const redirectTo = newUser.type === 'tourist' ? '/tourist-features' : '/authority-dashboard'
    return { success: true, redirectTo }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('safetour_user')
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
