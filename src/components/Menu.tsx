import React from 'react'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
    const navigate = useNavigate();
    const signOut = useSignOut();
    const logout = () => {
        signOut();
        navigate("/login");
    } 
    return (
    <nav className="bg-white flex fixed w-full z-20 top-0 left-0 border-b border-gray-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-3 p-4">
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                    <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/qread" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Get Prescription</a>
                </li>
                <li>
                    <button onClick={logout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Logout</button>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Menu