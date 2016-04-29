function Product(name,price,description,id,p){
	ShopObject.call(this,p);
	this.name = name;
	this.Price = price;
	this.description = description;
	this.qty = 1;
	this.subtotal= 0;
	this.id = id;
}

Product.prototype = Object.create(ShopObject.prototype);

Product.prototype.constructor = Product;


Product.prototype.addOne  = function(){
	this.qty ++;
	this.subtotal = this.Price * this.qty;
};