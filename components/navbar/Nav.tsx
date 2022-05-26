import Image from 'next/image'
import { Section, Nav, Button } from '../../shared'
import logo from '../../public/rent4less-logo.png'

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

function Navbar() {
  return (
    <Section>
        <Nav>
            <div className={`py-4 flex justify-between items-center`}>
                <figure className={`w-fit`}>
                    <Image src={logo} className={`w-[50%] border`} alt="logo" />
                </figure>
                
                <NavDesktop />
            </div>
        </Nav>
    </Section>
  )
}

export default Navbar;