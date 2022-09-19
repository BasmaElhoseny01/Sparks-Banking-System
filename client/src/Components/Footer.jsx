import React from 'react'

import LinkedIn from '../Images/LinkedIn.gif'
import Github from '../Images/Github.gif'
import Gmail from '../Images/Gmail.gif'

function Footer() {
    return (
        <div className='Footer'>
            <div className='Social'>
                <div className="Links">
                    <a href="https://www.linkedin.com/in/BasmaElhoseny01/"><img src={LinkedIn} /></a>
                    <a href="https://github.com/BasmaElhoseny01"><img src={Github} /></a>
                    <a href="mailto:basmaelhoseny6@gmail.com"><img src={Gmail} /></a>
                </div>
                <h2>Powered by <a href="https://www.thesparksfoundationsingapore.org/">Sparks</a></h2>
            </div>
            <h5 className='Copyrights'>Copyrights©Basma Elhoseny</h5>
        </div>
    )
}

export default Footer