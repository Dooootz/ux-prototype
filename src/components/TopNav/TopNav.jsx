import React from 'react'


const TopNav = () => {
  return (
    <div class="top-nav d-flex justify-content-between p-3 align-items-center">
      <i onclick="menuNav()" class="bi bi-arrow-left-circle"></i>
        <div class="text-center profile-status">
          <h5 class="pt-3">CHAT</h5>
          <p>4 Unread Messages</p>
        </div>
      <i onclick="settings()" class="bi bi-gear-wide-connected"></i>
    </div>
  )
}

export default TopNav