export interface Details {
    category: Category,
    creationAt:string,
    description:string,
    id:20,
    images:string[],
    price:number,
    title:string,
    updatedAt:string,
}

interface Category {
    id:number,
    name:string,
    image:string,
    creationAt:string,
    updatedAt:string,
}