
export enum Resources {
    Signup = "/signup",
    Login = "/login",

    Home = "/home",

    Wishlist = "/wishlist",
    
    Cart = "/cart",

    Categories = "/categories",
    Category = `${Categories}/:id`,

    Details = "/details",
    Detail = `${Details}/:id`,

    Profile = "/profile",

    Contact = "/contact",

    About = "/about",

    Search = "/search",

    Error = "/error"
};

export function getResourceById(resource:Resources | string, id:number | string) {
    return resource.replace(new RegExp(':.*'),id.toString());
}