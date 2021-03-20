import React from 'react'
class Header extends React.Component 
{
    render()
    {
        return(
            <div className='header'>
                <ul>
                    <li><a>NavBar</a></li>
                    <li><a>Home</a></li>
                    <li><a>Link</a></li>
                    <li><a>Drop Down</a></li>
                    <li><a>Disable</a></li> 
                </ul>
                <div>  
                    <input/>
                    <button>Search</button>
                        
                </div>
            </div>
        )
    }
}
export  default Header;