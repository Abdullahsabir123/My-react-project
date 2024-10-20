import React from "react";
import Cards from "./Cards";

export default function Product() {
  return (
    <>
      <center>
        <div className="container d-flex flex-wrap justify-content-around mt-5">
          <Cards
            cardTitle="Watch"
            cardImg="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
            cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas."
          />
          <Cards cardTitle="Shoes" cardImg="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas." />
          <Cards cardTitle="T-shirts" cardImg="https://media.istockphoto.com/id/1151955708/photo/mens-white-blank-t-shirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=1024x1024&w=is&k=20&c=jd_ypD5c2lmT2FPPrSFKSMzoMpGXKNAR4ZSuvt-gleg=" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas." />
          <Cards cardTitle="Pents" cardImg="https://media.istockphoto.com/id/1084128060/photo/blank-black-mens-pants-mock-up-isolated.jpg?b=1&s=612x612&w=0&k=20&c=LGK25u5PnkAv-zmeeJm1PeN5F3264EP52-OhBmG7Za4=" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas." />
          <Cards cardTitle="Bracelet" cardImg="https://images.pexels.com/photos/28933801/pexels-photo-28933801/free-photo-of-elegant-gold-bracelet-on-display-stand.jpeg?auto=compress&cs=tinysrgb&w=600" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas." />
          <Cards cardTitle="Necklace" cardImg="https://images.pexels.com/photos/28976815/pexels-photo-28976815/free-photo-of-elegant-gold-necklace-on-display-mannequin.jpeg?auto=compress&cs=tinysrgb&w=600" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas." />
          <Cards cardTitle="Begs" cardImg="https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas" />
          <Cards cardTitle="Ear rings" cardImg="https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel praesentium facere eaque. Facere, eum illum sint esse optio doloribus cum quos nihil, facilis enim rerum, reprehenderit soluta sequi quas" />
        </div>
      </center>
    </>
  );
}
