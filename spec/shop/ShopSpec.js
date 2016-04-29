describe("Shop",function(){
	var testshop;
	
	var testdata;	 
		 
	beforeAll(function(){
			testshop = new Shop();
			  testdata = eval("[{title:'burger',price:12.2,description:'very tasty'},{title:'burger',price:12.2,description:'very tasty'}]");	   
	});
		 
	it("should Have LoadProducts method",function(){
		expect(testshop).toHaveMethod('loadProducts');
	});
	
		 it("should Have source string",function(){
			expect(testshop).toHaveString("source");
			});
		 
		 it("should Have template method",function(){
			expect(testshop).toHaveMethod("template");
			});
		 
		 it("should Have html string",function(){
			expect(testshop).toHaveString("html");
			});
		 
		 it("should Have productsLoaded boolean",function(){
			expect(testshop).toHaveBoolean("productsLoaded");
			});
		 
	describe("Calling loadProducts",function(){
		it("before calling Products array is empty",function(){
		   expect(testshop.Products).toBeEmptyArray();
		});
		
		it("after call Products is an array of Product ",function(){
		   testshop.loadProducts(testdata);
		   console.log(testshop.Products);		   
		   expect(testshop.Products.length > 0).toBeTrue();
		   //expect(typeof testshop.Product[0] == Object).toBeTrue();
		});
	});	 
		
		 it("should Have Display method",function(){
			expect(testshop).toHaveMethod('Display');
			});	 
		 
		 it("should Have Cart object",function(){
			expect(testshop).toHaveObject('Cart');
			//console.log(typeof testshop.Cart);			
			//expect(typeof testshop.Cart == Cart).toBeTrue();
			});	 
		 
		 
		 
});