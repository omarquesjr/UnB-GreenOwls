'use client'

import * as React from "react"

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gaming'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
    const getVariantClasses = (v: ButtonVariant): string => {
      switch (v) {
        case 'gaming':
          return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25'
        case 'outline':
          return 'border border-green-500/30 text-green-400 hover:bg-green-500/10'
        case 'ghost':
          return 'hover:bg-accent hover:text-accent-foreground'
        default:
          return 'bg-green-600 text-white hover:bg-green-700'
      }
    }
    
    const getSizeClasses = (s: ButtonSize): string => {
      switch (s) {
        case 'sm':
          return 'h-9 px-3 text-sm'
        case 'lg':
          return 'h-11 px-8 text-lg'
        case 'icon':
          return 'h-10 w-10'
        default:
          return 'h-10 px-4 py-2'
      }
    }

    const classes = [
      'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      getVariantClasses(variant),
      getSizeClasses(size),
      className
    ].filter(Boolean).join(' ')

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
