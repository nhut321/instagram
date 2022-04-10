import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext'
import './Login.css'
import { baseUrl } from '../baseUrl'
import axios from 'axios'

function Account() {
	const Auth = useContext(AuthContext)
	const [user, setUser] = useState({
		username: '',
		password: ''
	})
	const onSubmit = async e => {
		e.preventDefault()
		try {
			await axios.post(baseUrl + '/api/user/login', {
				username: user.username,
				password: user.password,
			})
			.then(res => {
				if(res.data.success) {
					Auth.dispatch({type: 'LOGIN'})
					axios.defaults.baseURL = 'https://localhost:8080';
				} else {
					console.log('Username hoặc mật khẩu sai')
				}
			})
		} catch(err) {
			console.log(err)
		}
	}
	return (
		<div className="login-register">
			<div className="log-reg">
				<div className="log-reg__header fs-4">
					Đăng nhập
				</div>
				<div className="log-reg__form">
					<Form onSubmit={onSubmit}>
						<Form.Control 
							type='text' 
							placeholder='Username'
							value={user.username}
							onChange={e => setUser({...user, username: e.target.value})}
						/>
						<Form.Control 
							type='text' 
							placeholder='Password'
							value={user.password}
							onChange={e => setUser({...user, password: e.target.value})}
						/>
						<Button style={{
							backgroundColor: 'var(--primary-color)',
							border: 'none',
							width: '100%',
							padding: '0.75rem 0'
							}}
							type='submit'
						>Đăng nhập</Button>
					</Form>
				</div>
				<div className="log-reg__footer pt-4">
					<span>Chưa có tài khoản?</span>
					<Link to='/account/register'>Đăng ký ngay!</Link>
				</div>
			</div>
		</div>
	)
}

export default Account