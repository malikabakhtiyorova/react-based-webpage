import { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav () {

	const history = useHistory()

	const navRef = useRef()

	useEffect(() => {

		const ro = new ResizeObserver((entries) => {
			document.body.style.setProperty('--nav-height', entries[0].contentRect.height + 'px')
		})

		ro.observe(navRef.current)

	}, [])

	return (
		<>
			<nav ref={navRef} id="public">
				<ul>
					<li>
						<button onClick={() => history.replace('/')}>
							<span>Home</span>
						</button>
					</li>
					<li>
						<button onClick={() => history.replace('/news')}>
							<span>News</span>
						</button>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
