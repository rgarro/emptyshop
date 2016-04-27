describe("Cart",function(){
	
	var testcart;	 
		 
	beforeAll(function(){
		testcart = new Cart();
	});
		 
	it("should Have items array",function(){
	   expect(testcart).toHaveArray("Items");
	});
		 
		 it("should Have displayTpl string",function(){
			expect(testcart).toHaveString("source");
			});
		 
		 it("should Have template string",function(){
			expect(testcart).toHaveString("template");
			});
		 
		 it("should Have html string",function(){
			expect(testcart).toHaveString("html");
			});
		 
		 it("should Have Add method",function(){
			expect(testcart).toHaveMethod('Add');
			});
		 
		 it("should Have Taxes method",function(){
			expect(testcart).toHaveMethod('Taxes');
			});
		 
		 it("should Have Total method",function(){
			expect(testcart).toHaveMethod('Total');
			});
		 
		describe("calling Add",function(){
			it("increases Items array",function(){
			   var begin = testcart.Items.length;
			   var shop = new Shop();
			   shop.loadProducts();
			   testcart.add(0,shop.Produtcs);
			   expect(begin < testcart.Items.length).toBeTrue();
			});
		});	 
		 
});