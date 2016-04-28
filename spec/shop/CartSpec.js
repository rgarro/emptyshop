describe("Cart",function(){
	
	var testcart;	 
		 
	beforeAll(function(){
		testcart = new Cart();
	});
		 
	it("should Have items array",function(){
	   expect(testcart).toHaveArray("Items");
	});
		 
		 it("should Have source string",function(){
			expect(testcart).toHaveString("source");
			});
		 
		 it("should Have template method",function(){
			expect(testcart).toHaveMethod("template");
			});
		 
		 it("should Have html string",function(){
			expect(testcart).toHaveString("html");
			});
		 
		 it("should Have Add method",function(){
			expect(testcart).toHaveMethod('Add');
			});
		 
		 /*it("should Have Taxes method",function(){
			expect(testcart).toHaveMethod('Taxes');
			});*/
		 
		 it("should Have Totals method",function(){
			expect(testcart).toHaveMethod('Totals');
			});
		 
		describe("calling Add",function(){
			it("increases Items array",function(){
			   var begin = testcart.Items.length;
			   var shop = new Shop();
			   shop.loadProducts();
			   testcart.add(0,shop.Produtcs);
			   expect(begin < testcart.Items.length).toBeTrue();
			});
				 
				 it("Items should be array of Product",function(){
					expect(typeof testcart.Items[0] == Product).toBeTrue();
					});	 
		});	 
		 
});