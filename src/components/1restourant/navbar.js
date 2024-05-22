import React from 'react'

const navbar = ({ filteritem, menulist }) => {
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    {
                        menulist.map((crtelm) => {
                            return (
                                <>
                                    <button className="btn-group__item" onClick={() => { filteritem(crtelm) }}>{crtelm}</button>

                                </>
                            )
                        })
                    }

                </div>
            </nav>
        </>
    )
}

export default navbar
