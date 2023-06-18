import classNames from 'classnames'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({children, className, id}: Props) {
  const containerClasses = classNames(
    "flex flex-col items-center justify-center w-full min-h-screen mb-10 pb-10",
    className
  )

  return (
    <section
      className={containerClasses}
      id={id}
    >
      {children}
    </section>
  )
}