
import './Header.css'
export default function Header() {
  return (
    <header>
        <nav className='menu'>
          <img src="/public/img/logo_vps.png" alt="" style={{width:"100px",height:"50px"}} />
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Đồ Nam</a></li>
        <li><a href="#">Đồ Nữ</a></li>
        <li><a href="#">Đồ Bé Trai</a></li>
        <li><a href="#">Đồ Bé Gái</a></li>
        </ul>
        <div className='form__search'>
         <i className="fa-solid fa-magnifying-glass" />

          <input type="text" />
          <button>Tìm kiếm</button>
        </div>
        </nav>
    </header>
  )
}
