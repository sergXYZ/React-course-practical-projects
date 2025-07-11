import React from 'react'

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy color to clipboard')
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{hex}</p>
      <p className="color-value">{weight}%</p>
    </article>
  )
}

export default SingleColor
