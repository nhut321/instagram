import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<div className="header mb-4">
			<div className="container d-flex justify-content-between align-items-center" style={{height: '100%'}}>
				<div className="header-left">
					<img src="/img/logo.png" alt=""/>
				</div>
				<div className="header-center">
					<div className="header-center__search d-flex align-items-center rounded">
						<div className="header-center__search-icon">
							<i className="fa-solid fa-magnifying-glass fs-6 text-muted" style={{display: 'block'}}></i>
						</div>
						<div className="header-center__search-input col-12">
							<input className='col-12' type="text" placeholder='Tìm kiếm...'/>
						</div>
					</div>
				</div>
				<div className="header-right">
					<div className="header-right__list d-flex justify-content-end align-items-center">
						<div className="header-right__item active">
							<Link to='/'>
								<i className="fa-solid fa-house"></i>
							</Link>
						</div>
						<div className="header-right__item">
							<Link to='/'>
								<i className="fa-solid fa-paper-plane"></i>
							</Link>
						</div>
						<div className="header-right__item">
							<Link to='/'>
								<i className="fa-solid fa-plus"></i>
							</Link>
						</div>
						<div className="header-right__item">
							<img src="/img/avatar.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header