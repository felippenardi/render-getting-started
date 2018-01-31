import React from 'react'

export default function configurable({show, titleScale = 2, textScale = 4, title, text}) {
  if (!show) {
    return null
  }
  return (
    <div>
      <h1 className={`f${titleScale}`}>
        {title}
      </h1>
      <p className={`f${textScale}`}>
        {text}
      </p>
    </div>
  )
}
