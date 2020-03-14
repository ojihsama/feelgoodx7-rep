import React from 'react'
import Nav from './nav'
import Footer from './footer'



const Layout = (props) => {
    return (
        <div>
            <Nav />
                <div>
                    <div > 
                        <div>
                            {props.children}
                        </div>
                    
                </div>
                    <Footer />
            </div>
        </div>
    )
}

export default Layout