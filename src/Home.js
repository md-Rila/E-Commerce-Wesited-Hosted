import React from 'react'
import "./Home.css";
import Product from './Product.js';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://ww1.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png" alt=" "/>
            <div className="home__row">
            <Product
            id= "1"
            title="PTron Blutooth 5.0 Vivo V20 Pro 5G (Midnight Jazz, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers" 
            price={700.05}
            image=  "https://m.media-amazon.com/images/I/51YMl+OstqL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
             />
            <Product
            id= "2"
             title="OnePlus Bullets Blutooth Headset with werable mic and bla bla hardwares that doesn't exist now" 
             price={1999.00}
             image=  "https://m.media-amazon.com/images/I/616bhfyXimL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5} 
             />
            </div>
            <div className="home__row">
            <Product 
            id= "3"
             title="OnePlus Bullets Blutooth Headset Vivo V20 Pro 5G (Midnight Jazz, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers" 
             price={1999.00}
             image=  "https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5} 
             />
            <Product 
            id= "4"
            title="SONY BRAVIA 43inch(KLV432) Vivo V20 Pro 5G (Midnight Jazz, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={43999.00}
            image=  "https://m.media-amazon.com/images/I/81lpllAGcBL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4} 
            />
            <Product
            id= "5"
            title="SONY BRAVIA 43inch(KLV432) Vivo V20 Pro 5G (Midnight Jazz, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={43999}
            image=  "https://m.media-amazon.com/images/I/81lpllAGcBL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4} 
            />            
                </div>
            <div className="home__row">
            <Product 
            id= "6"
            title="SONY BRAVIA 43inch(KLV432) WIDE ANGLE WITH IPS DISPLAY ALSO A REMOTE WITH SMART FEATURES Vivo V20 Pro 5G (Midnight Jazz, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={43999}
            image=  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwGW_oXsQU0rmLJcSyZ4Yqrx0JYByk0EoSBMJ8gpeZtQeW0Cu4mbStCPxvKUTuzw&usqp=CAc"
            rating={4} 
            />
            
            
            </div>
            </div>
        </div>
    )
}

export default Home
