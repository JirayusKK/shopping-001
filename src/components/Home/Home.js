import React, { useEffect, useState } from 'react'
import shoe1 from '../../assets/img/shoe1.png'
import shoe2 from '../../assets/img/shoe2.png'
import bag1 from '../../assets/img/bag1.png'
import img4 from '../../assets/img/jirayus4.jpg'
import noisy from '../../assets/img/noisy.jpg'
import background1 from '../../assets/img/background1.jpg'
import '../SASS/Home.scss'

const Home = () => {
  const slides = [
    {
      image: shoe1,
      content: {
        title: 'Fall Fashion 2023',
        subtitle: 'JOURNEE',
        button: 'Shop Now',
      },
    },
    {
      image: shoe2,
      content: {
        title: 'Summer Fashion',
        subtitle: 'MISS SUMMER',
        button: 'Shop Now',
      },
    },
    {
      image: bag1,
      content: {
        title: 'A New Shoulder Bag',
        subtitle: 'Lilly of the Valley',
        button: 'Available Now',
      },
    },
    {
      image: img4,
      content: {
        title: 'Nicky',
        subtitle: 'Jirayus  Kardviset',
        button: 'My Resume',
      },
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <>
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'visible' : ''}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <img className="noisy" src={noisy} alt="noise" />
            <div className="content">
              <span>{slide.content.title}</span>
              <h1>{slide.content.subtitle}</h1>
              <button className="ano-btn">{slide.content.button}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="fall-home">
        <p className="collection-name">Fall Fashion</p>
        <div className="mini-shop-fall">
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="fall-item">
            <img className="fall-img" src={shoe1} alt=""></img>
            <p className="product-name">Fall Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
        </div>
        <button className="view-btn">VIEW ALL</button>
      </div>

      <div className="summer-home">
        <p className="collection-name">Summer Fashion</p>
        <button className="view-btn">VIEW ALL</button>
        <div className="mini-shop-summer">
          <div className="summer-item">
            <img className="summer-img" src={shoe2} alt=""></img>
            <p className="product-name">Summer Product Name</p>
            <p className="product-price">1,290 ฿</p>
          </div>
          <div className="summer-item">
            <img className="summer-img" src={shoe2} alt=""></img>
            <p className="product-name">Summer Product Name</p>
            <p className="product-price">1,290 ฿</p>
          </div>
          <div className="summer-item">
            <img className="summer-img" src={shoe2} alt=""></img>
            <p className="product-name">Summer Product Name</p>
            <p className="product-price">1,290 ฿</p>
          </div>
          <div className="summer-item">
            <img className="summer-img" src={shoe2} alt=""></img>
            <p className="product-name">Summer Product Name</p>
            <p className="product-price">1,290 ฿</p>
          </div>
        </div>
      </div>

      <div className="home-background">
        <img
          className="homepage-background"
          src={background1}
          alt="homepage-background"
        ></img>
        <img className="noisy" src={noisy} alt="noise" />
      </div>

      <div className="popular-home">
        <p className="collection-name">Popular Picks</p>
        <div className="mini-shop-popular">
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
          <div className="popular-item">
            <img className="popular-img" src={shoe1} alt=""></img>
            <p className="product-name">Popular Product Name</p>
            <p className="product-price">990 ฿</p>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="footer-row">
            <div class="footer-col">
              <h5>CATEGORIES</h5>
              <ul>
                <li>
                  <a href="/">something</a>
                </li>
                <li>
                  <a href="/">something</a>
                </li>
                <li>
                  <a href="/">something</a>
                </li>
                <li>
                  <a href="/">something</a>
                </li>
              </ul>
            </div>

            <div class="footer-col">
              <h5>HELP</h5>
              <ul>
                <li>
                  <a href="/">something</a>
                </li>
                <li>
                  <a href="/">something</a>
                </li>
                <li>
                  <a href="/">something</a>
                </li>
                <li>
                  <a href="/">something</a>
                </li>
              </ul>
            </div>

            <div class="footer-col">
              <h5>GET IN TOUCH</h5>
              <p>
                Any questions? Let us know in store at 999th floor, somewhere or call us on (+66) 1234 5678
              </p>
            </div>

            <div class="footer-col">
              <h5>NEWSLETTER</h5>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='small-text'>© 2024 Jirayus Kardviset</div>
      </footer>
    </>
  )
}

export default Home
