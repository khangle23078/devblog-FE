import { Button } from "antd"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <main className="flex justify-between">
        <h1 className="text-lg font-semibold">News esport</h1>
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