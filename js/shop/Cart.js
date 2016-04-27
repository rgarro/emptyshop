function Cart(p){
	ShopObject.call(this,p);
	
	this.indexes = [];
	this.Items = [];
	this.source = "{{#each items}}<li>{{qty}} {{name}} {{subtotal}}</li> {{/each}}<li>${{delivery}}</li><li>${{taxes}}</li><li>${{total}}</li>";
	this.template = Handlebars.compile(this.source);
	this.html = "";
	this.delivery = 1.3;
	this.taxes = 0;
	this.total = 0;
	this.c = 0;
}

Cart.prototype = Object.create(ShopObject.prototype);

Cart.prototype.constructor = Cart;

Cart.prototype.Add = function(index,productList){
	var i = this.indexes.indexOf(index);
	if(i > 0){
		this.Items[i].addOne();
	}else{
		if(productList[index] !== undefined){
			this.Items.push(productList[index]);
			this.indexes.push(index);
		}else{
			throw new Error("undefined productList index " + index);
		}
	}
	this.Display();
};

Cart.prototype.Totals = function(){
	if(this.c < this.Items.length){
		this.total = this.total + this.items[this.c].subtotal;
		this.c ++;
		this.Totals();
	}else{
		this.taxes = this.total * 0.15;
		this.c = 0;
	}
};

Cart.prototype.Display = function(){
	this.Totals();
	this.html = this.template({items:this.Items,delivery:this.delivery,taxes:this.taxes,total:this.total});
	$("#cardContainer").html(html);
};