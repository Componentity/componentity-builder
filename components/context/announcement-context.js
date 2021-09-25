import React from 'react'

// set the defaults
const AnnouncementContext = React.createContext({
  isAnnoucement: true,
  setAnnouncement: () => {}
})

export default AnnouncementContext
