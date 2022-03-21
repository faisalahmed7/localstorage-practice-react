import React, { useEffect, useState } from 'react';
import { getTotalPrice } from '../../utilities/localstorage';

import Item from '../Item/Item';

const Items = () => {
const[items,setItems]=useState([])
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setItems(data))


},[])

const totaItemsPrice= getTotalPrice(items);

    return (
        <div>
            <h1>Display Items</h1>
            <h3>Total Price: {totaItemsPrice}</h3>
            {
                items.map(item=><Item key={item.id} items={item}></Item>)
            }
        </div>
    );
};

export default Items;