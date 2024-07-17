const filters = [
    {
        id: 'Brand',
        name: 'Brand',
        options: [
            { value: 'apple', label: 'Apple', checked: false },
            { value: 'samsung', label: 'Samsung', checked: false },
            { value: 'xiaomi', label: 'Xiaomi', checked: true },
            { value: 'oneplus', label: 'OnePlus', checked: false },
            { value: 'oppo', label: 'Oppo', checked: false },
            { value: 'vivo', label: 'Vivo', checked: false },
        ],
    },
    {
        id: 'price-range',
        name: 'Price Range',
        options: [
            { value: '0-200', label: '$0 - $200', checked: false },
            { value: '200-500', label: '$200 - $500', checked: true },
            { value: '500-1000', label: '$500 - $1000', checked: false },
            { value: '1000-1500', label: '$1000 - $1500', checked: false },
            { value: '1500-2000', label: '$1500 - $2000', checked: false },
            { value: '2000+', label: '$2000+', checked: false },
        ],
    },
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'black', label: 'Black', checked: true },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'red', label: 'Red', checked: false },
            { value: 'gold', label: 'Gold', checked: false },
            { value: 'silver', label: 'Silver', checked: false },
        ],
    },
    {
        id: 'ram',
        name: 'RAM',
        options: [
            { value: '2gb', label: '2GB', checked: false },
            { value: '4gb', label: '4GB', checked: false },
            { value: '6gb', label: '6GB', checked: true },
            { value: '8gb', label: '8GB', checked: false },
            { value: '12gb', label: '12GB', checked: false },
            { value: '16gb', label: '16GB', checked: false },
        ],
    },
    {
        id: 'rom',
        name: 'ROM',
        options: [
            { value: '32gb', label: '32GB', checked: false },
            { value: '64gb', label: '64GB', checked: false },
            { value: '128gb', label: '128GB', checked: true },
            { value: '256gb', label: '256GB', checked: false },
            { value: '512gb', label: '512GB', checked: false },
            { value: '1tb', label: '1TB', checked: false },
        ],
    },
    {
        id: 'camera-quality',
        name: 'Camera Quality',
        options: [
            { value: '12mp', label: '12MP', checked: false },
            { value: '24mp', label: '24MP', checked: false },
            { value: '48mp', label: '48MP', checked: true },
            { value: '64mp', label: '64MP', checked: false },
            { value: '108mp', label: '108MP', checked: false },
            { value: '200mp', label: '200MP', checked: false },
        ],
    },
    {
        id: 'release-year',
        name: 'Release Year',
        options: [
            { value: '2020', label: '2020', checked: false },
            { value: '2021', label: '2021', checked: false },
            { value: '2022', label: '2022', checked: true },
            { value: '2023', label: '2023', checked: false },
            { value: '2024', label: '2024', checked: false },
        ],
    },
    {
        id: 'battery',
        name: 'Battery',
        options: [
            { value: '3000mah', label: '3000mAh', checked: false },
            { value: '4000mah', label: '4000mAh', checked: false },
            { value: '5000mah', label: '5000mAh', checked: true },
            { value: '6000mah', label: '6000mAh', checked: false },
            { value: '7000mah', label: '7000mAh', checked: false },
        ],
    },
    {
        id: 'screen-size',
        name: 'Screen Size',
        options: [
            { value: '5inch', label: '5 Inch', checked: false },
            { value: '5.5inch', label: '5.5 Inch', checked: false },
            { value: '6inch', label: '6 Inch', checked: true },
            { value: '6.5inch', label: '6.5 Inch', checked: false },
            { value: '7inch', label: '7 Inch', checked: false },
        ],
    },
];


export default filters