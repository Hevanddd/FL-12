import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './search-bar.css';
import AddButton from '../add-button';
import { filter } from '../../redux/action';


function SearchBar({ filter }) {

    const onSearchChange = (e) => {
        const text = e.target.value;
        filter(text);
    }

    return (
        <div className='search-bar'>
            <input placeholder='Search' className='search-bar-input' type="text" onChange={ onSearchChange } />
            <Link to='/edit'> <AddButton/> </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    filter: (props) => dispatch(filter(props))
})

export default connect(
    null,
    mapDispatchToProps
)(SearchBar);
