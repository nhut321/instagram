import { Form } from 'react-bootstrap'
import './PostItem.css'

function PostItem() {
	return (
		<div className="post-item shadow-sm">
			<div className="post-item__header d-flex justify-content-between align-items-center">
				<div className="post-item__header-left d-flex justify-content-start align-items-center">
					<div className="post-item__header-left-avatar">
						<img src="/img/avatar.png" alt=""/>
					</div>
					<div className="post-item__header-left-name">
						<strong>Hugh Jackman</strong>
					</div>
				</div>
				<div className="post-item__header-right">
					<i className="fa-solid fa-ellipsis fs-5"></i>
				</div>
			</div>
			<div className="post-item__content border-bottom">
				<div className="post-item__content-img">
					<img src="/img/post-item-img.png" alt=""/>
				</div>
				<div className="post-item__content-actions d-flex">
					<div className="actions-item">
						<i className="fa-regular fa-heart"></i>
						{/* <i className="fa-solid fa-heart"></i> */}
					</div>
					<div className="actions-item">
						<i className="fa-regular fa-comment"></i>
					</div>
					<div className="actions-item">
						<i className="fa-regular fa-paper-plane"></i>
					</div>
				</div>
				<div className="post-item__content-count text-start pe-3 ps-3 pb-2 pt-0">
					1.220 lượt thích
				</div>
				<div className="post-item__content-description text-start pe-3 ps-3 pb-0">
					<span><strong>Hugh Jackman </strong></span>

					<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sequi, vero accusamus minus, sint itaque.</span>
				</div>
				<div className="post-item__content-comments text-start pe-3 ps-3 pb-0">
					<span className='text-muted'>Xem tất cả 101 bình luận</span>
					<p className='text-muted'>13 giờ trước</p>
				</div>
			</div> 
			<div className="post-item__footer d-flex">
				<div className="post-item__footer-emoji">
					<i className="fa-solid fa-face-grin-beam"></i>
				</div>
				<Form className='post-item__footer-form d-flex'>
					<input className='footer-fom__comment' type='text' placeholder='Bình luận'/>
					<div className="post-item__footer-submit">
						<button type='submit' className='btn' disabled>
							<strong style={{color: 'var(--primary-color)'}}>Đăng</strong>
						</button>
					</div>
				</Form>
			</div>
		</div>
	)
}

export default PostItem