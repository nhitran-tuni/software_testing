import filter from "../../filter";
import slice from "../../slice";

const mock_products = [
    {
        id: 1,
        title: 'Frozen crispy Buffalo chicken wings',
        price: 15,
        currency: 'euro',
        available: true,
    },
    {
        id: 2,
        title: 'Oreo cheesecake',
        price: 10,
        currency: 'euro',
        available: true,
    },
    {
        id: 3,
        title: 'Greek pizza',
        price: 21,
        currency: 'euro',
        available: false,
    },
    {
        id: 4,
        title: 'Frozen Tuscan grilled pork ribs',
        price: 25,
        currency: 'euro',
        available: true,
    },
    {
        id: 5,
        title: '1kg fresh salmon',
        price: 24,
        currency: 'euro',
        available: true,
    },
];

it("Search for all products that are not in stock", () => {
    const available_products = filter(mock_products, product => !product.available);

    expect(available_products).toStrictEqual([{
        id: 3,
        title: 'Greek pizza',
        price: 21,
        currency: 'euro',
        available: false,
    }]);
});

it("Search for all products that have price equal to 25euro", () => {
    const available_products = filter(mock_products, product => product.price === 25);

    expect(available_products).toStrictEqual([{
        id: 4,
        title: 'Frozen Tuscan grilled pork ribs',
        price: 25,
        currency: 'euro',
        available: true,
    }])
});

it("Search for all products that are in stock and have price more than 20 euro", () => {
    const available_products = filter(mock_products, product => product.available && product.price > 20);

    expect(available_products).toStrictEqual(slice(mock_products, 3));
});