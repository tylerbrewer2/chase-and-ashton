import React from 'react';

const Col = ({ width, desktopWidth, mobileWidth, tabletWidth, center, children }) => {
  const centerClass = center ? 'center-xs' : '';

  return (
    <div className={
      `col-xs-${mobileWidth || width} 
      ${tabletWidth && `col-sm-${tabletWidth}`} 
      ${desktopWidth && `col-md-${desktopWidth}`}
      ${centerClass}`
    }>
      {children}
    </div>
  )
}

export default Col;