
export const addToCart = (_id, price) => {
    const cart = JSON.parse(localStorage.getItem('ecom-cart'));
    if (!cart) {
        console.log("Item not found");
        const newCart = [{ _id, price, count: 1 }];
        localStorage.setItem('ecom-cart', JSON.stringify(newCart));
        return;
    }

    const searchId = _id;

    const foundItem = cart?.find(item => item._id === searchId);

    if (foundItem) {
        console.log("Found item:", foundItem);
        const { _id, price, count } = foundItem;
        const increaseFoundItem = { _id, price, count: count + 1 };
        const restItems = cart.filter(item => item._id !== _id);
        const newCart = [...restItems, increaseFoundItem];
        localStorage.setItem('ecom-cart', JSON.stringify(newCart));
    } else {
        console.log("Item not found");
        const newCart = [...cart, { _id, price, count: 1 }];
        localStorage.setItem('ecom-cart', JSON.stringify(newCart));
    }

};

export const removeFromCart = (_id) => {
    const cart = JSON.parse(localStorage.getItem('ecom-cart'));
    const restItems = cart.filter(item => item._id !== _id);
    localStorage.setItem('ecom-cart', JSON.stringify(restItems));
}