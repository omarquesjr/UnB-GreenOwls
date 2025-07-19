'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  variant?: 'full' | 'icon'
}

export const GreenOwlsLogo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 64, 
  height = 64,
  variant = 'icon'
}) => {
  if (variant === 'full') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <Image
          src="/images/green-owls.png"
          alt="Green Owls Logo"
          width={width}
          height={height}
          priority
        />
        <div>
          <div className="text-white font-gaming text-xl text-gradient">GREEN OWLS</div>
          <div className="text-green-400 text-xs font-medium uppercase tracking-wider">University of Brasília</div>
        </div>
      </div>
    )
  }

  return (
    <Image
      src="/images/green-owls.png"
      alt="Green Owls Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

export const GreenOwlsIcon: React.FC<Omit<LogoProps, 'variant'>> = ({ 
  className = '', 
  width = 64, 
  height = 64 
}) => {
  return (
    <Image
      src="/images/green-owls.png"
      alt="Green Owls Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

export default GreenOwlsLogo
