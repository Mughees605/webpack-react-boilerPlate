var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory,browserHistory} = require('react-router');
require('style!css!bootstrap/dist/css/bootstrap.css');

var Modal = require('Modal');
var Cart = require('Cart');
var Checkout = require('Checkout');
var Product = require('Product');

//require("style!css!foundation-sites/dist/foundation.min.css") 
require("style!css!applicationStyles")

const PRODUCTS = [ // product component using
  { id: 0, src: 'images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
  { id: 4, src: 'images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
]

const Heading = ()=>{
  return <h1>Nile Book Store</h1>
}
const Copy = ()=>{
  return <p>Please click on a book to view details in a modal view.</p>
}
class App extends React.Component{

}

class Index extends React.Component{

}
let cartItems = {}; // cart component && checkout using 



const addToCart = (id) =>{ // add to cart products using
  if(cartItems[id]){
    cartItems[id] +=1
  }
  else {
    cartItems[id] = 1;
  }
}


ReactDOM.render(
  <Router history={hashHistory}>
   <Route path = "/"  component = {App}>
    <IndexRoute component = {Index}/>
     <Route path = "/products/:id" component = {product} addToCart = {addToCart} product = {PRODUCTS}/>
     <Route path = "/cart" component = {cart} cartItems = {cartItems}/>
      <Route path = "/checkout" component = {checkout} cartItems = {cartItems}/>
   </Route>
  </Router>,
  document.getElementById('app')
);
