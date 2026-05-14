import { ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn('mx-auto w-full max-w-content', className)}>{children}</div>
}
