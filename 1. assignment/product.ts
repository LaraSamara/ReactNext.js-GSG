// Task...4
interface Product{
    name: string;
    price: number;
}
function sumPrice(products: Product[]): number{
    return products.reduce((result, product) => result+product.price, 0);
}
const products: Product[] = [
    {name: "Cap", price:150},
    {name: "T-shirt", price:30},
    {name: "Dress", price:250},
    {name: "Skirt", price:99.9},
]
console.log(sumPrice(products));

// Task...5
function validEmail(email: string): boolean{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log(validEmail("larasamara@gmail.com"));