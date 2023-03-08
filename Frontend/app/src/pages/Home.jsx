import React from 'react'
import Navbar from '../components/Navbar'
import Crousel from '../components/SliderComponents/Crousel'
import Kimaye from "../components/Image/Kimaye.png"
import fruits from "../components/Image/fruits.png"
import allgood from "../components/Image/KimayeAllGood.png"
import secret from "../components/Image/secret.png"
import VerticalSlider from '../components/SliderComponents/VericalSlider'
import ImageSlider from '../components/SliderComponents/ImageSlider'
import AllFruits from "../components/Image/AllFruits.png"
import FreshCuts from "../components/Image/FreshCuts.png"
import FruitsCombos from "../components/Image/FruitsCombo.png"
import GiftByKimaye from "../components/Image/GiftsByKimaye.png"

import jazz from "../components/Image/jazz.png"
import Looking from "../components/Image/Looking.png"
import Footer from '../components/Footer'
import { Link, useNavigate } from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      {/*Navbar Starts Here...............................*/}

      <div style={{ marginTop: '1.5%' }}>
        <Crousel />
        <button style={{ width: '110px', height: '40px', borderRadius: '19px', border: "none", backgroundColor: "#98CB4C", color: "white", position: 'relative', left: '10%', top: '-160px', zIndex: '2' }}>Shop Now</button>
      </div>
      {/*Navbar Ends Here...............................*/}


      {/*categories of products Starts Here...............................*/}
      <div>

        <img src={Kimaye} style={{ marginLeft: "30%", width: '500px', height: '100px', marginTop: '4%' }} alt="title" />
        <h1 style={{ fontFamily: "PT Sans", textAlign: "center", fontWeight: "normal" }}>
          A Handpicked and Curated Fruit offering
        </h1>
      </div>
      <div className="landing-products">
        <div>
          <div className="land-product-image">
            <Link to="/products">    <img

              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/e0c74e05ba4b05097e90bb82141d140a_377x.png?v=1668505325"
              alt="product"
            /></Link>
          </div>
          <Link to="/products">    <img src={AllFruits} style={{ marginLeft: '26%', height: "50px" }} alt="product" /></Link>
          <p style={{ textAlign: "center", marginTop: "12px" }}>
            Pick and choose from a wide range of delicious fruits
          </p>
          <button onClick={() => { navigate("/products") }} className="landing-product-button">Shop Now</button>
        </div>
        <div>
          <div className="land-product-image">
            <Link to="/products">    <img

              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/150166f844a40459166372de4d5f563d_377x.jpg?v=1668505330"
              alt="product"
            /></Link>
          </div>
          <Link to="/products">     <img src={FreshCuts} style={{ marginLeft: '26%', height: "50px" }} alt="product" /></Link>
          <p style={{ textAlign: "center", marginTop: "12px" }}>
            We want to spoon-feed you… quite literally
          </p>
          <button onClick={() => { navigate("/products") }} className="landing-product-button">Shop Now</button>
        </div>
        <div>
          <div className="land-product-image">
            <Link to="/products">     <img

              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/2bcaf12e866a7a0baf63bd5b0dd950c9_377x.jpg?v=1668505359"
              alt="product"
            /></Link>
          </div>

          <Link to="/products">   <img src={FruitsCombos} style={{ marginLeft: '26%', height: "50px" }} alt="product" /></Link>
          <p style={{ textAlign: "center", marginTop: "12px" }}>
            Indulge in fruit combinations created by us
          </p>
          <button onClick={() => { navigate("/products") }} className="landing-product-button">Shop Now</button>
        </div>
        <div>
          <div className="land-product-image">
            <Link to="/products">      <img

              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_900x.jpg?v=1631516874"
              alt="product"
            /></Link>
          </div><img src={GiftByKimaye} style={{ marginLeft: '26%', height: "50px" }} alt="product" />
          <p style={{ textAlign: "center", marginTop: "12px" }}>
            Gifts by Kimaye
          </p>
          <button onClick={() => { navigate("/products") }} className="landing-product-button">Shop Now</button>
        </div>

      </div>
      {/*categories of products Ends Here...............................*/}


      {/*normal static div Starts Here...............................*/}
      <div
        style={{
          height: "600px",
          backgroundColor: "#6F924A",
          marginTop: "5%",
          display: "flex",
          paddingLeft: "12%",
        }}
      >
        <div>
          <img src={fruits} alt="fruits" height="600px" />
        </div>
        <div style={{ marginTop: "7%", marginLeft: "2%", textAlign: "left" }}>
          <h1 style={{ color: "white" }}>We’d like to say Kimahi…</h1>
          <p
            style={{
              color: "white",
              marginTop: "8%",
              textAlign: "left",
              fontSize: "18px",
            }}
          >
            Many of us share common safety concerns about the food we eat.{" "}
          </p>
          <p
            style={{
              color: "white",
              marginTop: "3%",
              textAlign: "left",
              fontSize: "18px",
            }}
          >
            When it comes to fruits, these concerns are even more serious in
            terms of the way they are grown and handled throughout their
            farm-to-home journey. We make eating fruits a worry-free and
            enjoyable experience for you.
          </p>
          <p
            style={{
              color: "white",
              marginTop: "3%",
              textAlign: "left",
              fontSize: "18px",
            }}
          >
            Since 2009, we have set the benchmark for fruit safety and quality
            in 35 countries. Kimaye is now expanding its footprint in India,
            bringing you multiple varieties of fruit that are grown, packaged,
            and delivered in the safest and most socially responsible manner.
          </p>
          <img
            src={allgood}
            alt="allgood"
            height="100px"
            width="350px"
            style={{ marginTop: "3%", marginBottom: "5%" }}
          />
          <button className="KnowButton">Know More</button>
        </div>
      </div>

      {/*normal static div Ends Here...............................*/}

      {/*vertical Crousel div Starts Here...............................*/}
      <div>
        <img
          src={secret}
          alt="allgood"
          width="800px"
          height="100px"
          style={{ marginLeft: "18%", marginTop: "5%" }}
        />
        <h2 style={{ textAlign: "center", fontWeight: "normal" }}>
          Witness Our Journey
        </h2>
        <div style={{ marginTop: "4%", width: "100%", height: "400px" }}>
          <VerticalSlider />
        </div>
      </div>
      {/*vertical Crousel div Ends Here...............................*/}

      {/*ProductImage Crousel div Starts Here...............................*/}
      <div style={{
        height: "500px",
        backgroundColor: "#EDCE67",
        marginTop: "10%"
      }}>
        <img src={jazz} alt="jazz" style={{ height: "60px", width: '450px', marginTop: "4%", marginLeft: '30%' }} />
        <ImageSlider />
      </div>
      {/*ProductImage Crousel div Ends Here...............................*/}


      {/*InstagramImage Crousel div Starts Here...............................*/}
      <div>
        <img src={Looking} alt="text" style={{ height: "60px", width: '450px', marginTop: "4%", marginLeft: '30%' }} />
        <h1 style={{ fontWeight: '100', textAlign: 'center' }}>We are here</h1>
      </div>
      <div style={{ display: 'flex', gap: '50px', width: '75%', margin: 'auto', marginTop: '5%' }}>
        <img className="instaImages" src="https://scontent.cdninstagram.com/v/t39.30808-6/330199917_5997952806984611_353961809128844215_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=KpSGZXVug3oAX-gxrEC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCgkm9X9Y8WcawACJa3xquoGIkvMQ59YHEztX4PiD4Euw&oe=640CE75B" alt="instaImages" />
        <img className="instaImages" src="https://scontent.cdninstagram.com/v/t39.30808-6/332329164_875647280270055_8918924242205342851_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uAWY2mh8QPEAX9C2n2U&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDfS5-mKA8nehdNnyNRhTdhUGa1c2m9WqNQoiLr-uJcXQ&oe=640DD536" alt="instaImages" />
        <img className="instaImages" src="https://scontent.cdninstagram.com/v/t51.29350-15/333765670_576263417872572_4409073988663545092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uf5_uSO4pCAAX-N4jC0&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAARyrakriM2AbjXbLpR-tQPJOQ-4BuYLRTJhhF1WQ7Dw&oe=640D1A37" alt="instaImages" />
        <img className="instaImages" src="https://scontent.cdninstagram.com/v/t39.30808-6/331762066_528730309397337_8916543531740955780_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zvd2cLffvvQAX8kcefX&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBni-OF8opsT_10nd1wAj5uijcOZFdHGFG9a--RInpJdA&oe=640D8DC0" alt="instaImages" />
      </div>
      {/*InstagramImage Crousel div Ends Here...............................*/}


    </>
  )
}

export default Home