import { useState } from "react";
import Link from "../Link/Link";
import { CgMenu } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";


const NavBar = () => {
    const [menuIcon, setMenuIcon] = useState(true)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/products", name: "Products" },
        { id: 3, path: "/about", name: "About Us" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/services", name: "Services" }
    ];

    return (
        <nav className="text-white bg-sky-900 p-6 flex justify-between items-center">
            <div className='lg:hidden text-2xl'
                onClick={() => setMenuIcon(!menuIcon)}>
                {
                    menuIcon === true ? <CgMenu /> : <RxCross1 />
                }
            </div>
            <h3 className="text-3xl">My Website</h3>
            <ul className={`absolute lg:static lg:flex duration-700 lg:duration-0 
             ${menuIcon ? '-top-40' : 'top-24 bg-sky-950 lg:bg-sky-900 pl-3 rounded-sm'}`}>
                {
                    routes.map(route => <Link key={routes.id} route={route}></Link>)
                }
            </ul>
            <button className="btn btn-warning">Button</button>
        </nav>
    );
};

export default NavBar;