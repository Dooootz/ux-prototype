import React from 'react'


const TopNav = () => {
  return (
    <div className="top-nav d-flex justify-content-between p-3 align-items-center">
      <i onclick="menuNav()" className="bi bi-arrow-left-circle"></i>
        <div className="text-center profile-status">
          <h5 className="pt-3">CHAT</h5>
          <p>4 Unread Messages</p>
        </div>
      <i onclick="settings()" className="bi bi-gear-wide-connected"></i>
    </div>
  )
}

export default TopNav