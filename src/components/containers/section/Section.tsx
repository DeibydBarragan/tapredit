import classNames from 'classnames'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Section({children, className}: Props) {
  const containerClasses = classNames(
    "flex flex-col items-center justify-center w-full min-h-screen",
    className
  )

  return (
    <section
      className={containerClasses}
    >
      {children}
    </section>
  )
}