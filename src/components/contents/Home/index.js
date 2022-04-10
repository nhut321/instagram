import PostItem from '../PostItem'
import './Home.css'

function Home() {
	return (
		<div className="contents">
			<div className="container">
				<div className="row">
					<div className="col-7">
						<div className="post-list">
							<PostItem />
							<PostItem />
							<PostItem />
						</div>
					</div>
					<div className="col-5">
						<div className="contents-right">
							<div className="contents-right__me d-flex justify-content-between align-items-center">
								<div className="contents-right__me-info d-flex align-items-center">
									<div 
										className="me-info__avatar"
										style={{
											backgroundImage: `url('/img/avatar.png')`
										}}
									></div>
									<div className="me-info__name">
										<strong>Hugh Jackman</strong>
									</div>
								</div>
								<div className="contents-right__me-switch">
									<button className="btn">
										<strong className='text-info'>Chuyển</strong>
									</button>
								</div>
							</div>
							<div className="contents-right__recommend">
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home