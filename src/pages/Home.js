import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <header className="container">
                <div className="header-content">
                <a href="index.html">
                    <img src="assets/images/ზოოტოპია ქართული 2.png" alt="logo" />
                </a>
                <div className="burger-menu">
                    <img src="assets/images/menu (1).png" alt="burger menu" />
                </div>
                <div className="small-icons">
                    <div className="header-icons">
                    <img src="assets/images/search.png" alt="search icon" />
                    <span>ძებნა</span>
                    </div>
                    <div className="header-icons">
                    <img src="assets/images/shopping-cart.png" alt=" cart icon" />
                    <span id="thirteen">13</span>
                    <span>კალათა</span>
                    </div>
                    <div className="header-icons">
                    <img src="assets/images/smile.png" alt="smile icon" />
                    <span>შესვლა</span>
                    </div>
                </div>
                </div>
            </header>
            <div className="container">
                <div>
                <nav>
                    <ul>
                    <li className="slider-pages">
                        <a className="slider-pages active" href="index.html">
                        მთავარი
                        </a>
                        <a className="slider-pages" href="aboutus.html">
                        ჩვენ შესახებ
                        </a>
                        <a className="slider-pages" href="contact.html">
                        კონტაქტი
                        </a>
                        <a className="slider-pages" href="category.html">
                        ზრდასრული ძაღლები
                        </a>
                        <a className="slider-pages" href="product.html">
                        პროდუქტის დასახელება
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            <section className="products-blocks container">
                    <div className="white-block">
                        <img id="perc-icon" src="assets/images/prc.png" alt="icon" />
                        <a href="product.html">
                        <img
                            className="pedigri"
                            src="assets/images/pedigri.jpg"
                            alt="dogs food"
                        />
                        </a>
                        <h5>პედიგრი</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                            <button className="kg-btn-single">600გრ.</button>
                            <button className="kg-btn-single active">2 კგ.</button>
                            <button className="kg-btn-single">5 კგ.</button>
                            <button className="kg-btn-single">13 კგ.</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price">135₾</span>
                        <span className="old-price">160₾</span>
                        <div className="line-of-category" />
                        <img
                            className="cart-of-category"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <a href="product.html">
                        <img
                            className="royal-food"
                            src="assets/images/royalc.png"
                            alt="dogs food"
                        />
                        </a>
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        <button>1 შეკვრა</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price black">140.45₾</span>
                        <img
                            className="cart-of-category orange"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <img id="perc-icon" src="assets/images/prc.png" alt="icon" />
                        <a href="product.html">
                        <img
                            className="pedigri"
                            src="assets/images/pedigri.jpg"
                            alt="dogs food"
                        />
                        </a>
                        <h5>პედიგრი</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>600გრ.</button>
                        <button className="kg-btn-single active">2 კგ.</button>
                        <button>5 კგ.</button>
                        <button>13 კგ.</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price">135₾</span>
                        <span className="old-price">160₾</span>
                        <div className="line-of-category" />
                        <img
                            className="cart-of-category"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block white-block-2">
                        <a href="product.html">
                        <img
                            className="royal-food royal-2"
                            src="assets/images/royal.jpg"
                            alt="dogs food"
                        />
                        </a>
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        </div>
                        <div className="prices-of-category">
                        <span className=" not-in-stock">არ არის მარაგში</span>
                        </div>
                    </div>
                    <div className="white-block">
                        <a href="product.html">
                        <img
                            className="royal-food dif-food"
                            src="assets/images/food.png"
                            alt="dogs food"
                        />
                        </a>
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        </div>
                        <div className="prices-of-category dif-prices">
                        <span className="current-price black">135₾</span>
                        <img
                            className="cart-of-category"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <a href="product.html">
                        <img
                            className="royal-food"
                            src="assets/images/royalc.png"
                            alt="dogs food"
                        />
                        </a>
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        <button>1 შეკვრა</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price black">140.45₾</span>
                        <img
                            className="cart-of-category orange"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <img id="perc-icon" src="assets/images/prc.png" alt="icon" />
                        <a href="product.html" />
                        <img className="pedigri" src="assets/images/pedigri.jpg" alt="dogs food" />
                        <h5>პედიგრი</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>600გრ.</button>
                        <button className="kg-btn-single active">2 კგ.</button>
                        <button>5 კგ.</button>
                        <button>13 კგ.</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price">135₾</span>
                        <span className="old-price">160₾</span>
                        <div className="line-of-category" />
                        <img
                            className="cart-of-category"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <a href="product.html" />
                        <img
                        className="royal-food"
                        src="assets/images/royalc.png"
                        alt="dogs food"
                        />
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        <button>1 შეკვრა</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price black">140.45₾</span>
                        <img
                            className="cart-of-category orange"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <img id="perc-icon" src="assets/images/prc.png" alt="icon" />
                        <a href="product.html">
                        <img
                            className="pedigri"
                            src="assets/images/pedigri.jpg"
                            alt="dogs food"
                        />
                        </a>
                        <h5>პედიგრი</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>600გრ.</button>
                        <button className="kg-btn-single active">2 კგ.</button>
                        <button>5 კგ.</button>
                        <button>13 კგ.</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price">135₾</span>
                        <span className="old-price">160₾</span>
                        <div className="line-of-category" />
                        <img
                            className="cart-of-category"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <a href="product.html">
                        <img
                            className="royal-food royal-2"
                            src="assets/images/royal.jpg"
                            alt="dogs food"
                        />
                        </a>
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        </div>
                        <div className="prices-of-category">
                        <span className=" not-in-stock">არ არის მარაგში</span>
                        </div>
                    </div>
                    <div className="white-block">
                        <a href="product.html">
                        <img
                            className="royal-food dif-food"
                            src="assets/images/food.png"
                            alt="dogs food"
                        />
                        </a>
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        </div>
                        <div className="prices-of-category dif-prices">
                        <span className="current-price black">135₾</span>
                        <img
                            className="cart-of-category"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    <div className="white-block">
                        <a href="product.html">
                        <img
                            className="royal-food"
                            src="assets/images/royalc.png"
                            alt="dogs food"
                        />
                        </a>
                        <h5>Royal Canin</h5>
                        <p>საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.</p>
                        <div className="kg-btns">
                        <button>400გრ.</button>
                        <button className="kg-btn-single active">8 კგ.</button>
                        <button>1 შეკვრა</button>
                        </div>
                        <div className="prices-of-category">
                        <span className="current-price black">140.45₾</span>
                        <img
                            className="cart-of-category orange"
                            src="assets/images/shop.png"
                            alt="icon"
                        />
                        </div>
                    </div>
                    </section>

            </>
            

    )   
}