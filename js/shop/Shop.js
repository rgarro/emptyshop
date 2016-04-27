function Shop(p){
	ShopObject.call(this,p);
	
	this.Products = [];
}

Shop.prototype = Object.create(ShopObject.prototype);

Shop.prototype.constructor = Shop;

Shop.prototype.loadProducts = function(){

}