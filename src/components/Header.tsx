import { Button } from "antd"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="shadow-md">
      <main className="max-w-[1140px] mx-auto py-4 flex justify-between">
        <Link to={'/'} className="text-lg font-semibold text-black no-underline">News esport</Link>
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex gap-4 list-none">
              <li>
                <NavLink to="/" className='text-base text-black no-underline'>Trang chủ</NavLink>
              </li>
              <li>
                <NavLink to="/post" className='text-base text-black no-underline'>Bài viết</NavLink>
              </li>
            </ul>
          </nav>
          <Button type="primary">
            <NavLink to={'/login'}>Đăng nhập</NavLink>
          </Button>
        </div>
      </main>
    </header >
  )
}

export default Header