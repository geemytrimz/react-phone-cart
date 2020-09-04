import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
 render() {
  return (
  	<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
  {/* https: https:www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk */}
  	<Link to='/'>
  	<img src={logo} alt="store" className="navbar-brand" />
  	</Link>
  	<ul className="navbar-nav align-items-center"> 
  	<li className="nav-item ml-5">
  	<Link to="/" className="nav-link">
  	Products
  	</Link>
  	</li>
  	</ul>
    <Link to='www.facebook.com' className="ml-auto">
   <h1><span className="text-center text-danger text-capitalize">produced by geemy trimz<i className="fas fa-user" /></span></h1>
    </Link>
  	<Link to='/cart' className="ml-auto">
  	<ButtonContainer>
  	<span className="mr-2">
  	<i className="fas fa-cart-plus" />
  	My Cart
  	</span>
  	</ButtonContainer>
  	</Link>
  	</NavWrapper>
  	);
 }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
	color: var(--mainWhite) !important;
	font-size: 1.3rem;
	text-transform: capitalize;
}

`