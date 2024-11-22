import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchRecipes } from '../redux/slices/recipeSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Navbar style={{zIndex: 1}} className="bg-danger position-fixed w-100">
      <Container>
        <Link to={'/'} style={{textDecoration: 'none'}} className='d-flex justify-content-between'>
          <Navbar.Brand style={{color: 'white'}} className='fs-5 fw-bolder'>
            <i className='fa-solid fa-bowl-food me-2'></i>
             Food Recipe  
          </Navbar.Brand>
        </Link>
        <li className='list-inline-item'>
          <input
            style={{width: "300px"}}
            className='rounded p-1 text-black'
            type="text"
            onChange={e => dispatch(searchRecipes(e.target.value.toLowerCase()))}
            placeholder='Search products here!!!'
          />
        </li>
      </Container>
    </Navbar>
  );
}

export default Header;
