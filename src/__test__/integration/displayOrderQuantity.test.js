import isEmpty from "../../isEmpty";
import map from "../../map";
import reduce from "../../reduce";
import add from "../../add";

const cart = [
    {
        id: 1,
        title: 'Frozen crispy Buffalo chicken wings',
        price: 15,
        currency: 'euro',
        available: true,
        quantity: 1,
    },
    {
        id: 4,
        title: 'Frozen Tuscan grilled pork ribs',
        price: 25,
        currency: 'euro',
        available: true,
        quantity: 1,
    },
    {
        id: 5,
        title: '1kg fresh salmon',
        price: 24,
        currency: 'euro',
        available: true,
        quantity: 3,
    }
];

const addProductToCart = newProduct => {
    if (isEmpty(newProduct)) return;

    const existingProduct = cart.find(product => product.id === newProduct.id);

    if (isEmpty(existingProduct)) {
        cart.push({
            ...newProduct,
            quantity: 1
        });
    } else {
        const newQuantity = add(existingProduct.quantity, 1);
        existingProduct.quantity =  newQuantity;
    };
};

it('Display the correct number of products in cart', () => {
    const quantity = map(cart, item => item.quantity);
    const result = reduce(quantity, (sum, n) => sum + n);

    expect(result).toEqual(5)
});

it('Display the correct number of products in cart when new product added', () => {
    const new_product = {
        id: 2,
        title: 'Oreo cheesecake',
        price: 10,
        currency: 'euro',
        available: true,
    };

    const new_cart = [
        {
            id: 1,
            title: 'Frozen crispy Buffalo chicken wings',
            price: 15,
            currency: 'euro',
            available: true,
            quantity: 1,
        },
        {
            id: 4,
            title: 'Frozen Tuscan grilled pork ribs',
            price: 25,
            currency: 'euro',
            available: true,
            quantity: 1,
        },
        {
            id: 5,
            title: '1kg fresh salmon',
            price: 24,
            currency: 'euro',
            available: true,
            quantity: 3,
        },
        {
            id: 2,
            title: 'Oreo cheesecake',
            price: 10,
            currency: 'euro',
            available: true,
            quantity: 1,
        },
    ];
    addProductToCart(new_product);

    const quantity = map(cart, item => item.quantity);
    const result = reduce(quantity, (sum, n) => sum + n);

    expect(cart).toStrictEqual(new_cart);
    expect(result).toEqual(6);
});