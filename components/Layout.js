import Nav from './Nav'
import Announcement from './Announcement'
export default function Layout({ children }) {
  return (
    <>
      <Announcement />
      <Nav />
      {children}
    </>
  )
}
