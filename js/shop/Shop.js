function Shop(p){
	ShopObject.call(this,p);
	this.productsLoaded = new Boolean(false);
	this.Products = [];
	this.i=0;
	this.source = "{{#each products}}<li>{{name}} ${{Price}} <button index='{{id}}' type='button' class='addbtn btn btn-primary btn-sm'>ADD</button></li> {{/each}}";
	this.template = Handlebars.compile(this.source);
	this.html = "";
	this.Cart = new Cart();
}

Shop.prototype = Object.create(ShopObject.prototype);

Shop.prototype.constructor = Shop;

Shop.prototype.loadProducts = function(obj){
	if(this.i < obj.length){
		var c = obj[this.i];
		if(c.title !== undefined && c.price !== undefined && c.description !== undefined){
			this.Products.push(new Product(c.title,c.price,c.description,this.i));
			this.i ++;
			this.loadProducts(obj);
		}else{
			throw new Error("invalid product data " + c.toString());
		}
	}else{
		if(this.Products.length > 0){
			this.productsLoaded = true;
		}
		this.i = 0;
	}
};

Shop.prototype.Display = function(){
	if(this.productsLoaded){
		this.html = this.template({products:this.Products});
		$("#shopContainer").html(this.html);
	}else{
		throw new Error("call loadProducts first");
	}
};