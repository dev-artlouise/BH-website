// import logo from '../../assets/logo.png'
// import { navItems } from '../../constants';
import { ArrowRight, Menu, X, } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// import './navbar.scss'
import { motion } from 'framer-motion';
import Sidebar from './sidebar/Sidebar';

const Navbar = () => {

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "about-us" },
        { label: "Services", path: "services" },
        { label: "Fortpolio", path: "fortpolio" },
        // { label: "Contact", href: "#" },
    ];

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (

        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrinks-0">
                        {/* <img className="h-10 w-10 mr-2" src={logo} alt="logo" /> */}
                        <span className="text-xl tracking-tight">BroadHeader</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map(({ label, path }, index) => (
                            <NavLink
                                key={index}
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? 'text-primary-700' : 'text-neutral-500'
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </ul>

                    <div className='hidden lg:flex justify-center space-x-12 items-center'>
                        <Link to="/contact-us" className='flex items-center py-2 px-3 border rounded-md'>
                            Contact Us
                            <ArrowRight className='ml-2' />
                        </Link>
                    </div>
                    <div className="lg:hidden md:flex flex-column justify-end">
                        <button
                            onClick={toggleMobileDrawer}
                        >
                            {
                                mobileDrawerOpen ? <X /> : <Menu />
                            }
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map(({ label, href }, index) => (
                                <li key={index} className='py-4 text-center'>
                                    <a href={href}>{label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6'>
                            <Link
                                to="/contact-us"
                                className='flex items-center py-2 px-3 border rounded-full'
                            >
                                Contact Us
                                <ArrowRight className='ml-2' />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav >

        // <div className="navbar">
        //     <Sidebar />
        //     <div className="wrapper">
        //         <motion.span
        //             initial={{ opacity: 0, scale: 0.5 }}
        //             animate={{ opacity: 1, scale: 1 }}
        //             transition={{ duration: 0.5 }}
        //         >
        //             <span>Broadheader</span>

        //             {/* 
        //             <div className="social">
        //                 <a href="">test</a>
        //                 <a href="">test</a>
        //                 <a href="">test</a>
        //                 <a href="">test</a>
        //             </div> */}
        //         </motion.span>

        //     </div>
        // </div>
    )
}

export default Navbar;