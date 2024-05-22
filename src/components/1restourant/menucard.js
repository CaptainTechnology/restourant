import React from 'react'

const menucard = ({ data }) => {
    
    return (
        <>
            <section className='main-card--cointainer'>
               {data.map((crtele)=>{
                const {id,name,category,image,description}=crtele;
                return (
                    <>
                     <div className="card-container" key={crtele.id}>
                        <div className="card">
                            <div className="card-body">
                                <span className='card-number card-circle subtle'>{id}</span>
                                <span className="card-author subtle">{category}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description subtle">
                                {description}
                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image} alt="maggi" className='card-media' />
                            <div className="card-tag subtle">Order Now</div>
                        </div>
                    </div>
                    </>
                )
               })}
            </section>
        </>
    )
}

export default menucard
