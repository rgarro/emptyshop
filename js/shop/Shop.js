function Shop(p){
	ShopObject.call(this,p);
}

Shop.prototype = Object.create(ShopObject.prototype);

Shop.prototype.constructor = Shop;