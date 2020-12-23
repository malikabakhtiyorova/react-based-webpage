
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/about'
import Services from './Pages/Services/Services'
import Offers from './Pages/Offers/Offers'
import logo from './Pages/img/logo.svg';



import './Pages/Home/home.css'

import { Link } from 'react-router-dom'

function App () {

	return (
		<>
		
		<header>
    <div className="container">
      <div className="inner-header">
        <img src={logo} alt="apple-logo" width="20" height="44" />
        <ul>
				<li>
						<Link className='link' to="/">
    					<button type="button">
         					Home
     					</button>
					  </Link>
 					</li>
          <li>
						<Link className='link' to="/about">
    					<button type="button">
         					 About
     					</button>
					  </Link>
 					</li>
					 <li>
						<Link className='link' to="/offers">
    					<button type="button">
         					 Offers
     					</button>
					  </Link>
 					</li>
					 <li>
						<Link className='link' to="/services">
    					<button type="button">
									Services
     					</button>
					  </Link>
 					</li>
        </ul>
        <form action="#">
          <input type="text" placeholder="How can we help you?" />
        </form>
      </div>
    </div>

  </header>

	

			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} exact />
				<Route path="/services" component={Services} exact />
				<Route path="/offers" component={Offers} exact />
			</Switch>
		</>
	)
}

export default App
