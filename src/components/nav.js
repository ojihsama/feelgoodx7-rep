import React from 'react';
import {Link} from 'gatsby'
function Nav(){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/bio">Bio</Link>
            </div>
            <div>
                <Link to="/blog">Blog</Link>
            </div>
                <Link to="/videos">Videos</Link>
            <div>
                <Link to="/contacts">Contacts</Link>
            </div>
            <div>
                <Link to="/donate">Donate</Link>
            </div>

        </div>
    )
}

export default Nav;