function Product(p){
	ShopObject.call(this,p);
	
	this.Price = 0;
	this.qty = 1;
	this.subtotal= 0;
}

Product.prototype = Object.create(ShopObject.prototype);

Product.prototype.constructor = Product;


Product.prototype.addOne  = function(){
	this.qty ++;
	this.subtotal = this.Price * this.qty;
};