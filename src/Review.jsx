import React from "react";
import { Rating } from "@mui/material";
import { Phone, Directions, Share } from "@mui/icons-material";
import img1 from "./imgs/img1.jpg"
import img2 from "./imgs/img2.jpg"
import img3 from "./imgs/img3.jpg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ShopCard = ({ brand, price, originalPrice, delivery, returnDays, stockStatus, link, color, isAvailable }) => (
  <div className="bg-gray-50 rounded-xl shadow p-4 mb-4">
    <div >
      <div>
        <div className="flex justify-between items-center">
          <h3 className={`text-lg font-semibold ${color}`}>{brand}</h3>
          <div className="text-right">
            <p className="text-xl font-semibold">₹{price}</p>
            {originalPrice && (
              <p className="text-sm line-through text-gray-500">₹{originalPrice}</p>
            )}
          </div>
        </div>
        <p className="text-xs  text-green-700 font-bold">{stockStatus}</p>
        <p className="text-sm text-gray-600">{delivery}</p>
        <p className="text-sm text-gray-600">{returnDays}</p>
        {isAvailable && <p className="text-sm text-gray-500">Contact for availability · 12.4 km</p>}
      </div>

    </div>
    <div className="flex gap-3 mt-3">
      <button className="text-blue-800 text-sm font-medium border border-gray-900 rounded-2xl px-2 py-1">Visit site</button>
      <div className="flex items-center justify-center border rounded-3xl w-7 h-7">
        <Phone fontSize="small" />
      </div>
      <div className="flex items-center justify-center border rounded-3xl w-7 h-7">
        <Directions fontSize="small" />
      </div>
      <div className="flex items-center justify-center border rounded-3xl w-7 h-7">
        <MoreVertIcon fontSize="small" />
      </div>
    </div>
  </div>
);

const ReviewItem = ({ stars, text, img }) => (
  <div className="flex flex-col gap-2 mb-4">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center"> <div className="bg-orange-500 text-white  rounded-full h-8 w-8 flex items-center justify-center font-bold">m</div>
        <p className="text-sm text-gray-700 ml-3
        ">{text}</p>   </div>
      <MoreVertIcon fontSize="small" />
    </div>
    {img && (
      <img src={img} alt="review" className="w-20 h-20 object-cover rounded-md border" />
    )}
  </div>
);

const Review = () => {
  return (
    <>
      <div className="md:w-[50%] w-full md:m-auto m-0 py-4">
        <div className="shadow-md p-4">
          <ShopCard
            brand="Jack & Jones"
            price="3,999"
            stockStatus="In stock online"
            delivery="Free delivery 29 Nov–13 Dec"
            returnDays="15-day returns"
            color="text-blue-800"
            isAvailable={true}
          />
          <ShopCard
            brand="Nykaa Fashion"
            price="1,400"
            originalPrice="3,999"
            stockStatus="In stock online"
            delivery="Free delivery 21–25 Nov"
            returnDays="Free 7-day returns"
            color="text-blue-800"
          />
          <button className="w-full mt-2  text-center py-2 rounded-3xl bg-gray-50 border ">More shops <KeyboardArrowRightIcon /></button>
        </div>

        <div className="mt-6 p-4">
          <h3 className="font-semibold text-lg mb-2">User reviews</h3>
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex gap-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span>5</span> <div className="w-30 h-2 bg-yellow-400 rounded"></div>
                </div>
                <span>7 reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>4</span> <div className="w-20 h-2 bg-yellow-400 rounded"></div> <span>3 reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>3</span> <div className="w-10 h-2 bg-gray-300 rounded"></div> <span>1 review</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>2</span> <div className="w-6 h-2 bg-gray-300 rounded"></div> <span>0 reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>1</span> <div className="w-4 h-2 bg-gray-300 rounded"></div> <span>3 reviews</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold">3.6</p>
              <Rating name="read-only" value={3.6} precision={0.5} readOnly />
              <p className="text-sm text-gray-600">14 reviews</p>
            </div>
          </div>

          {/* Sample reviews */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <img src={img1} alt="review1" className="rounded-md" />
            <img src={img1} alt="review2" className="rounded-md" />
            <img src={img1} alt="review3" className="rounded-md" />
          </div>

          <ReviewItem text="Nice fit and good quality fabric…" />
          <ReviewItem text="Quality is ok and fitting is not so perfect…" />
        </div>
      </div></>
  );
};

export default Review;
