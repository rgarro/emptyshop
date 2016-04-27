function Cart(p){
	ShopObject.call(this,p);
	
	
}

Cart.prototype = Object.create(ShopObject.prototype);

Cart.prototype.constructor = Cart;