import { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav () {

	const history = useHistory()

	const navRef = useRef()

	useEffect(() => {

		const ro = new ResizeObserver((entries) => {
			document.body.style.setProperty('--nav-width', entries[0].contentRect.width + 'px')
		})

		ro.observe(navRef.current)

	}, [])

	return (
		<>
			<nav ref={navRef} id="public">
				<ul>
					<li className='li'>

						<div className='toggle no'>
							<ul>
								<li>Home</li>
								<li>About</li>       
								<li>Offers</li>
								<li>Services</li>
							</ul>
						</div>

						<button className='sidebar-btn' onClick={()=> {
							document.querySelector('.li').classList.toggle('on')
							document.querySelector('.toggle').classList.toggle('no')
							document.querySelector('.toggle').classList.toggle('yes')
							document.querySelector('#public').classList.toggle('nav-open')
						}} >
						>
						</button>
					</li>                 
 
					{/* <li>
						<button onClick={() => history.replace('/news')}>
							<span>News</span>
						</button>
					</li> */}
				</ul>
			</nav>
		</>
	)
}

export default Nav