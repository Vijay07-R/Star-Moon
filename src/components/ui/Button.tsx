import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'beige' | 'outline' | 'outline-light' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-burgundy text-white hover:bg-burgundy-dark',
  beige: 'bg-beige text-espresso hover:bg-[#c9ab82]',
  outline: 'border border-burgundy text-burgundy hover:bg-burgundy hover:text-white',
  'outline-light': 'border border-white/70 text-white hover:bg-white hover:text-burgundy',
  ghost: 'text-burgundy hover:text-beige-dark',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-8 py-3.5 text-base',
}

const classes = (variant: Variant, size: Size, className = '') => `${base} ${variants[variant]} ${sizes[size]} ${className}`

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

export function ButtonLink({ to, variant = 'primary', size = 'md', className, children }: CommonProps & { to: string }) {
  return (
    <Link to={to} className={classes(variant, size, className)}>
      {children}
    </Link>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}
