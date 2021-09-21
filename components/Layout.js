import Nav from './Navbar'
import Footer from './Footer'
import Announcement from './Announcement'
export default function Layout({ children }) {
  return (
    <>
      <Announcement />
      <Nav />
      {children}
      <Footer />
    </>
  )
}
