import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Banner from '../components/Home/Banner'
import { useEffect } from 'react'

const RootLayout = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const userResponse = window.confirm(
        "Lịch tập cá nhân theo từng mục tiêu và level của bạn chỉ vơi 100k cho lịch tập 2 tháng. Inbox fanpage để đăng ký"
      );

      if (userResponse) {
        window.location.href = "https://www.facebook.com/profile.php?id=100090592133117"; // Thay bằng link hỗ trợ của bạn
      }
    }, 10000); // 10 giây = 10000ms

    return () => clearTimeout(timer); // Dọn dẹp timeout nếu người dùng rời trang trước khi hết 10 giây
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <div className='my-10'>
      <Outlet />
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default RootLayout