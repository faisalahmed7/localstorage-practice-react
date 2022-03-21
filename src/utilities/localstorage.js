const addCartToStorage=(id)=>{
    
let shoppingCart;

const storedData=localStorage.getItem('shopping-cart')
if(storedData){
    shoppingCart=JSON.parse(storedData)
}
else{
    shoppingCart={};
}





const quantity=shoppingCart[id]
if(quantity){

const newQ=quantity+1;
shoppingCart[id]=newQ;

}

else{
    shoppingCart[id]=1;  
}

localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))




 /*    const quantity=localStorage.getItem(id)
if(quantity){
const newQ=+quantity+1;
localStorage.setItem(id,newQ)
}

else{
   localStorage.setItem(id,1)
} */
}


const removeFromStorage=(id)=>{
const storedData=localStorage.getItem('shopping-cart')
if(storedData){
const shoppingCart=JSON.parse(storedData)

if(id in shoppingCart){
    delete shoppingCart[id]
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
    
  }
 

}


const getTotalPrice=(products)=>{
    const reducerPrice=(previous,current)=> previous+current.price;
    const total=products.reduce(reducerPrice,0)
    return total;
}


export {addCartToStorage,removeFromStorage,getTotalPrice};