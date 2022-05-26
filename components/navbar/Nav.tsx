import { useState } from 'react';
import Image from 'next/image'
import { Section, Nav, Button } from '../../shared'
import logo from '../../public/rent4less-logo.png'

type THamburgerProps = {
    handler: () => void;
    toggler: boolean;
}

type TNavMobileProps = {
    toggler: boolean;
}

const navItems = [
    {
        id: 0,
        name: "About us",
        isDropdown: false,
    },

    {
        id: 1,
        name: "Property",
        isDropdown: true,
    },
    
    {
        id: 2,
        name: "FAQs",
        isDropdown: false,
    },
    
    {
        id: 3,
        name: "Landlord",
        isDropdown: false,
    } 
];

const NavDesktop = () => {
    return(
        <>
            <div className={`hidden md:w-[250px] xl:w-[350px] md:flex justify-between items-center`}>
                {
                    navItems.map((el, index) => {
                        return(
                            <span 
                                key={index}
                                className={`
                                    text-sm cursor-pointer text-darkgray
                                    hover:text-flamingo transition-all 
                                    duration-500 ease-in-out
                                `}
                            >
                                {el.name}
                            </span>
                        )
                    })
                }
            </div>

            <div className={`hidden md:block`}>
                <Button className={`mr-2`} variant={`unfilled`} text={`login`} />
                <Button variant={`filled`} text={`register`} />
            </div>
        </>
    )
}

const NavMobile = ({toggler}: TNavMobileProps) => {
    return(
        <div 
            className={`
                ${toggler ? "-translate-y-6 opacity-100" : "opacity-0 translate-y-0" }
                absolute z-50 w-full h-[100vh] left-0 top-[80px]
                transition-all duration-500 ease-in-out
                md:hidden
            `}
        >
            <div className={`p-4 h-[100%] flex flex-col justify-start items-center`}>
                {
                    navItems.map((el, index) => {
                        return(
                            <span 
                                key={index}
                                className={`
                                    text-sm cursor-pointer text-darkgray
                                    hover:text-flamingo transition-all 
                                    duration-500 ease-in-out mb-8
                                `}
                            >
                                {el.name}
                            </span>
                        )
                    })
                }
                
                <Button className={`mb-4`} variant={`unfilled`} text={`login`} />
                <Button variant={`filled`} text={`register`} />
            </div>
        </div>
    )
}

const Hamburger = ({toggler, handler}: THamburgerProps) => {
    return(
        <button onClick={() => handler()} id="navMenu" className={`outline-0 ${toggler ? "active" : ""} md:hidden`}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

function Navbar() {
    const [toggleClass, setToggleClass] = useState(false);

    function handleClassToggle(){
        setToggleClass(!toggleClass);
    }

    return (
        <Section className={`fixed w-full bg-white`}>
            <Nav>
                <div className={`py-4 flex justify-between items-center`}>
                    <figure className={`w-fit`}>
                        <Image src={logo} className={`w-[20px] md:w-[50%] border`} alt="logo" />
                    </figure>
                            
                    {/* <button onClick={() => handleClassToggle()} id="navMenu" className={`${toggleClass ? "active" : ""} md:hidden`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button> */}
                    <Hamburger toggler={toggleClass} handler={handleClassToggle} />
                    <NavMobile toggler={toggleClass}/>
                    <NavDesktop/>
                </div>
            </Nav>
        </Section>
    )
}

export default Navbar;