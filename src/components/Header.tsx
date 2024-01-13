import { Button } from "antd"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <main className="max-w-[1216px] mx-auto py-4 flex justify-between">
        <Link to={'/'} className="text-lg font-semibold text-black no-underline uppercase ">
          <span className="p-2 text-white rounded-md bg-primary">Dev</span> blog
        </Link>
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
          <NavLink to={'/login'}>
            <Button type="primary" className="bg-primary">Đăng nhập</Button>
          </NavLink>
        </div>
      </main>
    </header >
  )
}

export default Header