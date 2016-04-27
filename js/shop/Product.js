function Product(p){
	ShopObject.call(this,p);
	
	this.Price = 0;
}

Product.prototype = Object.create(ShopObject.prototype);

Product.prototype.constructor = Product;


