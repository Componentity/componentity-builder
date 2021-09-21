import Navbar from './Navbar'
import Footer from './Footer'
import Announcement from './Announcement'
export default function Layout({ children }) {
  return (
    <>
      <Announcement />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
