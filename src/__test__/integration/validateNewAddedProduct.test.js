import isEmpty from "../../isEmpty";
import toNumber from "../../toNumber";
import upperFirst from "../../upperFirst";
import ceil from "../../ceil";

const mock_product_string_price = {
    id: 1,
    title: "ginger beer",
    price: '3.42',
    currency: 'euro',
    available: true,
};

const mock_product_ceil_price = {
    id: 1,
    title: "ginger beer",
    price: 3.4134532,
    currency: 'euro',
    available: true,
};

it("Uppercase the first character of title, convert string price to type number", () => {
    if (!isEmpty(mock_product_string_price.title)) {
        mock_product_string_price.title = upperFirst(mock_product_string_price.title);
    };

    if (!isEmpty(mock_product_string_price.price)) {
        mock_product_string_price.price = toNumber(mock_product_string_price.price);
    };

    expect(mock_product_string_price.title).toEqual('Ginger beer');
    expect(mock_product_string_price.price).toEqual(3.42);
});

it("Uppercase the first character of title, ceil the price to precision of 2", () => {
    if (!isEmpty(mock_product_ceil_price.title)) {
        mock_product_ceil_price.title = upperFirst(mock_product_ceil_price.title);
    };

    if (isEmpty(mock_product_string_price.price)) {
        mock_product_ceil_price.price = ceil(mock_product_ceil_price.price, 2);
    };

    expect(mock_product_ceil_price.title).toEqual('Ginger beer');
    expect(mock_product_ceil_price.price).toEqual(3.42);
});
