
// logic for menu section
let coffee = document.querySelector("#coffee");
let snacks = document.querySelector("#snacks");
let desserts = document.querySelector("#desserts");
let coffeeItems = document.querySelector("#coffee-items");
let snacksItems = document.querySelector("#snacks-items");
let dessertsItems = document.querySelector("#desserts-items");
let item_head = 1;

coffee.addEventListener("click", () => {
    item_head = 1;
    updateDisplay();
});

snacks.addEventListener("click", () => {
    item_head = 2;
    updateDisplay();
});

desserts.addEventListener("click", () => {
    item_head = 3;
    updateDisplay();
});

function updateDisplay() {
    // Reset styles
    coffee.style.backgroundColor = '';
    snacks.style.backgroundColor = '';
    desserts.style.backgroundColor = '';
    coffeeItems.style.display = 'none';
    snacksItems.style.display = 'none';
    dessertsItems.style.display = 'none';

    // Show the appropriate section and change background color
    if (item_head === 1) {
        coffeeItems.style.display = '';
        coffee.style.backgroundColor = '#6F4E37';
    } else if (item_head === 2) {
        snacksItems.style.display = '';
        snacks.style.backgroundColor = '#6F4E37';
    } else if (item_head === 3) {
        dessertsItems.style.display = '';
        desserts.style.backgroundColor = '#6F4E37';
    }
}
updateDisplay();

const todaysSpecialItems = [
    // Coffee Items
    {
        category: "Coffee",
        items: [
            {
                name: "Espresso",
                description: "A rich, bold shot of coffee brewed by forcing hot water through finely-ground coffee beans.",
                price: 225,
                image: "https://images.unsplash.com/photo-1530878092547-647df23b3056?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Cappuccino",
                description: "A delightful mix of espresso, steamed milk, and a frothy milk cap.",
                price: 338,
                image: "https://images.unsplash.com/photo-1503240778100-fd245e17a273?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Latte",
                description: "Creamy steamed milk combined with espresso for a smooth finish.",
                price: 300,
                image: "https://plus.unsplash.com/premium_photo-1674406102318-c9d362ad510b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Cold Brew",
                description: "Smooth and refreshing cold coffee brewed slowly for a rich flavor.",
                price: 300,
                image: "https://images.unsplash.com/photo-1561395049-69684aacf8de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
            },
            {
                name: "Flat White",
                description: "A velvety espresso drink topped with microfoam for a perfect balance.",
                price: 319,
                image: "https://images.unsplash.com/photo-1604298458655-ae6e04213678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Caramel Macchiato",
                description: "Espresso layered with steamed milk and vanilla, finished with caramel drizzle.",
                price: 375,
                image: "https://images.unsplash.com/photo-1604298458655-ae6e04213678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    },
    // Snacks Items
    {
        category: "Snacks",
        items: [
            {
                name: "Avocado Toast",
                description: "Freshly smashed avocado on toasted sourdough, topped with chili flakes and lime.",
                price: 413,
                image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=1472&auto=format&fit=crop&ixib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Cheese Croissant",
                description: "Flaky, buttery croissant filled with creamy cheese.",
                price: 263,
                image: "https://images.unsplash.com/photo-1649067857157-440079e838e1?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
            },
            {
                name: "Hummus & Veggie Platter",
                description: "A selection of fresh vegetables served with house-made hummus.",
                price: 450,
                image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
            },
            {
                name: "Bruschetta",
                description: "Toasted bread topped with fresh tomatoes, basil, garlic, and balsamic glaze.",
                price: 375,
                image: "https://images.unsplash.com/photo-1662980482395-24343058f9c3?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJydXNjaGV0dGF8ZW58MHx8MHx8fDA%3D"
            },
            {
                name: "Spinach & Feta Pastry",
                description: "Flaky pastry filled with fresh spinach and tangy feta cheese.",
                price: 338,
                image: "https://plus.unsplash.com/premium_photo-1716647123974-2c9a7c15c456?q=80&w=1470&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Garlic Bread",
                description: "Toasted bread topped with garlic butter and herbs, served with marinara sauce.",
                price: 225,
                image: "https://images.unsplash.com/photo-1558672368-143f91f0a267?q=80&w=1470&auto=format&fit=crop&ixib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    },
    // Desserts Items
    {
        category: "Desserts",
        items: [
            {
                name: "Chocolate Cake",
                description: "Decadent chocolate cake layered with rich chocolate frosting.",
                price: 338,
                image: "https://plus.unsplash.com/premium_photo-1716152289394-bc819c3e8450?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8s"
            },
            {
                name: "Cheesecake",
                description: "Creamy cheesecake with a buttery graham cracker crust.",
                price: 413,
                image: "https://plus.unsplash.com/premium_photo-1726866097045-1173bb40e1d2?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
            },
            {
                name: "Fruit Tart",
                description: "A flaky tart shell filled with pastry cream and topped with fresh seasonal fruits.",
                price: 450,
                image: "https://images.unsplash.com/photo-1596529267076-07866e3655cc?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
            },
            {
                name: "Brownie Sundae",
                description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and nuts.",
                price: 450,
                image: "https://images.unsplash.com/photo-1707070026861-ae45cb63d845?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            },
            {
                name: "Tiramisu",
                description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
                price: 225,
                image: "https://images.unsplash.com/photo-1544950363-53748f6d342e?q=80&w=1374&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8fDA%3D"
            },
            {
                name: "Apple Pie",
                description: "Homemade apple pie with a flaky crust and cinnamon-spiced apples.",
                price: 338,
                image: "https://images.unsplash.com/photo-1572572295541-80c399ca4211?q=80&w=1470&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8fDA%3D"
            }
        ]
    }
];

// Assuming todaysSpecialItems is already defined
function updateTodaysSpecial() {
    const date = new Date();
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Get the special items for each category based on the current day
    let coffeeItem = todaysSpecialItems[0].items[dayOfWeek % todaysSpecialItems[0].items.length];
    let snackItem = todaysSpecialItems[1].items[dayOfWeek % todaysSpecialItems[1].items.length];
    let dessertItem = todaysSpecialItems[2].items[dayOfWeek % todaysSpecialItems[2].items.length];

    // Update the HTML content for Coffee
    let coffeeCard = document.querySelector(".special-coffee .special-card-content");
    coffeeCard.querySelector('img').src = coffeeItem.image;
    coffeeCard.querySelector('h3').textContent = coffeeItem.name;
    coffeeCard.querySelector('p').textContent = coffeeItem.description;
    coffeeCard.querySelector('h4').textContent = `Price: ₹${coffeeItem.price}`;

    // Update the HTML content for Snacks
    let snackCard = document.querySelector(".special-snacks .special-card-content");
    snackCard.querySelector('img').src = snackItem.image;
    snackCard.querySelector('h3').textContent = snackItem.name;
    snackCard.querySelector('p').textContent = snackItem.description;
    snackCard.querySelector('h4').textContent = `Price: ₹${snackItem.price}`;

    // Update the HTML content for Desserts
    let dessertCard = document.querySelector(".special-desserts .special-card-content");
    dessertCard.querySelector('img').src = dessertItem.image;
    dessertCard.querySelector('h3').textContent = dessertItem.name;
    dessertCard.querySelector('p').textContent = dessertItem.description;
    dessertCard.querySelector('h4').textContent = `Price: ₹${dessertItem.price}`;
}

// Call the function to update the special items on page load
updateTodaysSpecial();
