describe("Shop",function(){
	var testshop;
		 
	beforeAll(function(){
			testshop = new Shop();
				   
	});
		 
	it("should Have LoadProducts method",function(){
		expect(testshop).toHaveMethod('loadProducts');
	});
	
		 it("should Have displayTpl string",function(){
			expect(testshop).toHaveString("source");
			});
		 
		 it("should Have template string",function(){
			expect(testshop).toHaveString("template");
			});
		 
		 it("should Have html string",function(){
			expect(testshop).toHaveString("html");
			});
		 
	describe("Calling loadProducts",function(){
		it("before calling Products array is empty",function(){
		   expect(testshop.Products).toBeEmptyArray();
		});
		
		it("after call Products is an array of Product ",function(){
		   testshop.loadProducts();
		   expect(testshop.Products.length > 0).toBeTrue();
		   expect(typeof testshop.Product[0] == Product).toBeTrue;
		});
	});	 
		
		 it("should Have display method",function(){
			expect(testshop).toHaveMethod('display');
			});	 
		 
		 it("should Have Cart object",function(){
			expect(testshop).toHaveObject('Cart');
			expect(typeof testshop.Cart == Cart).toBeTrue();
			});	 
		 
		 it("should Have loaded flag",function(){
			expect(testshop).toHaveBoolean('loaded');
			});
		 
});