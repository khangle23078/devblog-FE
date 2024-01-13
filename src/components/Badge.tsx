import React from 'react'

type BadgeProps = {
  name: string
  color: string,
  isPrimary?: boolean
  m?: string
}

const Badge: React.FC<BadgeProps> = ({ name, color, isPrimary, m }) => {
  return (
    <div className={`rounded-md w-[92px] ${color} ${m}`}>
      <p className={`text-sm px-[10px] text-center py-2 font-semibold ${isPrimary ? 'text-primary' : 'text-white'}`}>{name}</p>
    </div>
  )
}

export default Badge