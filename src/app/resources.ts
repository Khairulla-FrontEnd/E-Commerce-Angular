
export enum Resources {
    Signup = "/signup",
    Login = "/login",

    Home = "/home",

    Wishlist = "/wishlist",
    
    Cart = "/cart",

    Categories = "/categories",
    Category = `${Categories}/:id`,

    Search = "/search",

    Error = "/error",
    Error404 = `${Error}/404`,
};

export function getResourceById(resource:Resources | string, id:number | string) {
    return resource.replace(new RegExp(':.*'),id.toString());
}