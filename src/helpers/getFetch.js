let products = [
    {
        id: '10001',
        title: 'Calefector Chalten',
        category: 'calefactores',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 9500,
        stock: 5,
        thumb: '/assets/products/thumbs/chalten.webp',
        pictures: ['/assets/products/gallery/chalten_01.webp'],
    },
    {
        id: '10002',
        title: 'Calefactor Pehuen',
        category: 'calefactores',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 13500,
        stock: 3,
        thumb: '/assets/products/thumbs/pehuen.webp',
        pictures: ['/assets/products/gallery/pehuen_01.webp','/assets/products/gallery/pehuen_02.webp'],
    },
    {
        id: '10003',
        title: 'Aire acondicionado Split',
        category: 'acondicionadores',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 11000,
        stock: 10,
        thumb: '/assets/products/thumbs/split.webp',
        pictures: ['/assets/products/gallery/split_01.webp'],
    },
    {
        id: '10004',
        title: 'Volcan',
        category: 'balanceados',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aperiam.',
        price: 15000,
        stock: 6,
        thumb: '/assets/products/thumbs/volcan.webp',
        pictures: ['/assets/products/gallery/volcan_01.webp'],
    },
];

export const getFetch = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        }, 500);
    });
};

export const getItem = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products.find(item=>item.id===id));
        }, 500);
    });
};

export const getCategory = (category) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products.filter((item)=>{return item.category===category}));
        }, 500);
    });
};