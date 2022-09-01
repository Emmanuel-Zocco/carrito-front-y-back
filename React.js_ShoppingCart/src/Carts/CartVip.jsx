import { useState } from "react";



function CartVip() {
  let totalCarrito = 20
  const [cart, setCart] = useState([])
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 250,
      url:
        "https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg",
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      url:
        "https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg",
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      url:
        "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      cart: false,
      quantity: 1,
    }
  ])
  

  function verificarPromocionesvip(){
    let cantArticulos = 0;
    let precioTotal = 0;
    let cart2 = [...cart];
   
    if (cart.length>0){
      cart.map((i)=>{
       // console.log(i)
        cantArticulos = cantArticulos + i.quantity
        precioTotal += i.price * i.quantity

      })
     
    }
   
    if (cantArticulos > 3 && cantArticulos < 10){
      precioTotal = precioTotal * 0.75
    }
    else if (cantArticulos > 9){
      precioTotal = precioTotal - 500
     let precioMasBajo = 100000;
     let indice =  0;
      for(let i = 0; i < cart.length ; i++){
        if (cart[i].price < precioMasBajo){
          precioMasBajo = cart[i].price
          indice = i;
        }

      }
        console.log(indice);
        precioTotal = precioTotal - cart[indice].price
        
    }


      return precioTotal
     
      
  }
  


  function addtocartvip(item) {
    let enCarrito = false;
   
    if (cart.length>0){
      cart.map((i)=>{
        console.log(i)
       
        if (i.id == item.id){
          increasevip(item)
          enCarrito = true
          
        }

      })
     
    }
    if (!enCarrito){
      let cart2 = [...cart]
      cart2.push({ ...item })
      
      setCart(cart2)
    }
   

    
    

  }
  function removetocartvip(item) {
    let cart2 = cart.filter((i) => i.id != item.id)
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false
      }
    })
    setCart(cart2)
   

  }
  function increasevip(item) {
    let x = cart.map((i) => {

      if (item.id == i.id) {
       
        i.quantity += 1
      }
      return i
    })
    setCart(x)
     
  }
  function decreasevip(item) {
    let x = cart.map((i) => {

      if (item.id == i.id && i.quantity > 1) {
      
        i.quantity -= 1
      }
      return i
    })
    setCart(x)
    
  }
 
  return (
    <div className='container mt-2'>
      <div className='row justify-content-center'>
        {products.map((item) => (
          <div className='col-3' key={item.id}>
            <div className="card"  >
              <img src={item.url} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                  {item.name} - $ {item.price}
                </h6>
                {
                  item.cart == false
                  &&
                  <button className='btn btn-primary' onClick={() => addtocartvip(item)}>
                    Add to cart VIP
                </button>
                }
                {
                  item.cart == true
                  &&
                  <button className='btn btn-success' onClick={() => addtocartvip(item)}>
                    Added
                </button>
                }
              </div>
            </div>
          </div>

        ))}

      </div>

      <div className='row mt-3'>
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((i, index) => (

                < tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.url} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.name}</td>
                  <td>
                    {i.price}
                  </td>
                  <td>
                    <button
                      onClick={() => decreasevip(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                      </button>
                    {i.quantity}
                    <button
                      onClick={() => increasevip(i)}

                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removetocartvip(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col text-center">
          <h4>TOTAL: {(verificarPromocionesvip())}</h4>
          
        </div>
      </div>
      
    </div >)
    
          }


export default CartVip;
