import Image from 'next/image'
import { Section, Nav } from '../../shared'
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
]

const NavDesktop = () => {
    return(
        <>
            <div className={`w-[400px] flex justify-between items-center`}>
                {
                    navItems.map((el, index) => {
                        return(
                            <span 
                                key={index}
                                className={``}
                            >
                                {el.name}
                            </span>
                        )
                    })
                }
            </div>

            <div>
                <button className={``}>LOGIN</button>
                <button className={``}>REGISTER</button>
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

                <NavDesktop/>
            </div>
        </Nav>
    </Section>
  )
}

export default Navbar;