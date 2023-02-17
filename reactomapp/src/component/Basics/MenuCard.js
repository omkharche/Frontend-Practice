import React from 'react'
import "./style.css";
import Menu from "./menuApi.js";
const MenuCard = ( {menuData} ) => {

    //console.log(menuData);
    return(   
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElm) => {

        const{id,name,category,image,description}=curElm;

        return (
            <div>
               
                <div className="card-container" key={id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">
                                <br />{name}
                            </span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-description subtle">
                            {description}
                            </span>
                            <div className="card-read">Read</div>
                        
                            <img src={image} alt="images" className="card-media" /> 
                            <span className="card-tag subtle">Order Now</span>
        
                        </div>
                    </div>
                </div>
        
            </div>
          );
    })}
    </section>
    </>
  );
};

export default MenuCard