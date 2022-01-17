const ProductService = require('../product/product_service_no_di');
const ProductClient = require('../product/product_client');

jest.mock('../product/product_client');
describe('service',()=>{
    let productService;
    beforeEach(()=>{
        productService = new ProductService(new ProductClient());
    })

    const fetchItems = jest.fn(async ()=>[
        {item: '🍌', available : true},
        {item: '🎃', available : false}
    ])

    ProductClient.mockImplementation(()=>{
        return {
            fetchItems,
        };
    })

    it('should filter out only available items', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([{item: '🍌', available : true}]);
    })
    it('test',async ()=>{
        const items = await productService.fetchAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1)
    })
})