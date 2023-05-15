import React from 'react'
import './BannerTitles.css'

export const BannerTitles = ({subtitle, title}) => {
  return (
    <div className="bannertitles-titles">
        <p className="bannertitles-subtitle">{subtitle}</p>
        <p className="bannertitles-title">{title}</p>
    </div>
  )
}
