import React from 'react'
import {
  CDropdown,
  CDropdownToggle,
  CImg
} from '@coreui/react'
const TheHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin"
          />
        </div>
      </CDropdownToggle>
    </CDropdown>
  )
}

export default TheHeaderDropdown
