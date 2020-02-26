import React from 'react';

const Row = ({ className, children, middle, center }) => {
  const middleClass = middle ? 'middle-xs' : '';
  const centerClass = center ? 'center-xs' : '';

  return(
    <div className={`${className} ${middleClass} ${centerClass} row`}>
      {children}
    </div>
  )
}

export default Row;