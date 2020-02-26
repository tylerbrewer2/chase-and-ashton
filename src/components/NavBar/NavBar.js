import React from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavBar = ({ className }) => {
  return (
    <div className={className}>
      <DesktopNav />
      <MobileNav />
    </div>
  )
}

export default NavBar;