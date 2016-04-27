function Shop(p){
	ShopObject.call(this,p);
	
	this.Products = [];
	this.i=0;
}

Shop.prototype = Object.create(ShopObject.prototype);

Shop.prototype.constructor = Shop;

Shop.prototype.loadProducts = function(obj){
	if(this.i < obj.length){
		var c = obj[this.i]
		this.Products.push(new Product(c.title,c.price,c.description));
		this.i ++;
		this.loadProducts(obj);
	}else{
		this.i = 0;
	}
}