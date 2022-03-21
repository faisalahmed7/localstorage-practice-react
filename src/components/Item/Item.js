import React from 'react';
import { addCartToStorage, removeFromStorage } from '../../utilities/localstorage';
import './Item.css'

const Item = (props) => {
    const{name,id,price}=props.items

const addCart=(id)=>{
    addCartToStorage(id)
}

const removeStorageData=(id)=>{
removeFromStorage(id)
}

    return (
        <div className='container'>
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>
            <p>ID:{id}</p>
            <button onClick={()=>addCart(id)}>Add</button> <br/><br/>
            <button onClick={()=>removeStorageData(id)}>Remove</button>
        </div>
    );
};

export default Item;