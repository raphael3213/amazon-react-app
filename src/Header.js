import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from './StateProvider';
import {Link, useHistory} from "react-router-dom";
import {auth} from './firebase'
import { useAlert } from 'react-alert';


function Header() {

	const [state,dispatch] = useStateValue();
	const history = useHistory();
	const alert = useAlert();
	const handleAuthentication = (event) =>{
		auth.signOut().then((userAuth) => {
			history.push('/');
			alert.show(<div style={{ textTransform: 'initial' }}>Logged Out</div>)
		});
	};
	return (
		<div className = "header">
			<Link to="/">
				<img className="header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
			</Link>
			

			<div className="header__search">
				<input className="header__searchInput" type="text">
					
				</input>
				<SearchIcon className="header__searchIcon"/>
			</div>

			<div className="header__nav">
				<Link to={!state.user && '/login'}>
					<div className="header__option" onClick = {state.user ? handleAuthentication : '' }>
						<span className="header__optionLineOne">
							Hello {state.user? state.user?.email : 'Guest'}
						</span>
						<span className="header__optionLineTwo">{state.user? 'Sign Out': 'Sign In'}
						</span>
					</div>
				</Link>
				<Link to={state.user && '/orders'}>
					<div className="header__option">
						
							<span className="header__optionLineOne">
								Your
							</span>
							<span className="header__optionLineTwo">
								Orders
							</span>
						
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">
						Your
					</span>
					<span className="header__optionLineTwo">
						Prime
					</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon className="header__option"/>
						<span className="header__optionBasketCount header__optionLineTwo">{state.basket.length}</span>
					</div>
				</Link>
				
			</div>
		</div>
	)
}

export default Header
