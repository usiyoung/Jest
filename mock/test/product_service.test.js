const ProductService = require('../product/product_service');
const StubproductClient = require('./stub_product_client');

describe('productService',()=>{
    let productService;
    beforeEach(()=>{
        productService = new ProductService(new StubproductClient());
    })

    it('test', async ()=>{
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([{item: '🍌', available : true}]);

    })

})
