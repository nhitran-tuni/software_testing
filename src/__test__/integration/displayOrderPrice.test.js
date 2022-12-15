import isEmpty from "../../isEmpty";
import map from "../../map";
import reduce from "../../reduce";
import add from "../../add";
import ceil from "../../ceil";

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

const priceCalculation = (order, taxRate = null) => {
    if (isEmpty(order)) return 0.00;

    const prices = map(order, item => item.quantity * item.price);
    const result = reduce(prices, (sum, n) => sum + n);

    if (taxRate === null) {
        return ceil(result, 2);
    } else {
        const additionalTax = result * (taxRate / 100);
        return ceil(add(result, additionalTax), 2);
    }
}

it('Display the correct total of products with tax rate of 0', () => {
    const result = priceCalculation(cart, 0);

    expect(result).toEqual(15 + 25 + 24 * 3);
});

it('Display the correct total of products with tax rate of 14', () => {
    const result = priceCalculation(cart, 14);

    expect(result).toEqual(ceil(15 + 25 + 24 * 3 + (15 + 25 + 24 * 3) * 0.14, 2));
});

it('Display the correct total price of products in cart when new product added, tax rate of 14', () => {
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

    const result = priceCalculation(cart, 14)

    expect(cart).toStrictEqual(new_cart);
    expect(result).toEqual(ceil(15 + 25 + 24 * 3 + 10 + (15 + 25 + 24 * 3 + 10) * 0.14, 2));
});