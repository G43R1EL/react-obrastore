let products = [
    {
        id: '10001',
        title: 'Chalten',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 9500,
        stock: 5,
        image: 'assets/products/chalten.webp',
    },
    {
        id: '10002',
        title: 'Pehuen',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 13500,
        stock: 3,
        image: 'assets/products/pehuen.webp',
    },
    {
        id: '10003',
        title: 'Split',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 11000,
        stock: 10,
        image: 'assets/products/split.webp',
    },
    {
        id: '10004',
        title: 'Volcan',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 15000,
        stock: 6,
        image: 'assets/products/volcan.webp',
    },
];

export const getFetch = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        }, 2000);
    });
};