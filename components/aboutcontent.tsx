"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layoutgrid";


//     {
//       title: "By the Grace of God, I went to Kerala for ministry in 1994",
//       description:
//       "‎ ‎ ‎ ‎ ‎ ‎ ",
//       content: (
//           <div className="h-full w-full  flex items-center justify-center text-white">
//             <Image
//               src="/images/4.1.jpg"
//               width={300}
//               height={300}
//               className="h-full w-full object-cover"
//               alt="linear board demo"
//             />
//           </div>
//         ),
//     },
//     {
//       title: "By the Grace of God, I went to Kerala for ministry in 1994",
//       description:
//         "‎ ‎ ‎ ‎ ‎ ‎ ",
//         content: (
//           <div className="h-full w-full  flex items-center justify-center text-white">
//             <Image
//               src="/images/4.2.jpg"
//               width={300}
//               height={300}
//               className="h-full w-full object-cover"
//               alt="linear board demo"
//             />
//           </div>
//         ),
//     },
//     {
//       title: "ELM Rayakotta 4 Month Bible School 1996",
//       description:
//         "‎ ‎ ‎ ‎ ‎ ‎ ",
//         content: (
//           <div className="h-full w-full  flex items-center justify-center text-white">
//             <Image
//               src="/images/5.1.jpg"
//               width={300}
//               height={300}
//               className="h-full w-full object-cover"
//               alt="linear board demo"
//             />
//           </div>
//         ),
//     },
//     {
//       title: "ELM Rayakotta 4 Month Bible School 1996",
//       description:
//       "‎ ‎ ‎ ‎ ‎ ‎ ",
//       content: (
//           <div className="h-full w-full  flex items-center justify-center text-white">
//             <Image
//               src="/images/5.2.jpg"
//               width={300}
//               height={300}
//               className="h-full w-full object-cover"
//               alt="linear board demo"
//             />
//           </div>
//         ),
//     },
//     {
//       title: "1997",
//       description:
//         "‎ ‎ ‎ ‎ ‎ ‎ ",
//         content: (
//           <div className="h-full w-full  flex items-center justify-center text-white">
//             <Image
//               src="/images/6.1.jpg"
//               width={300}
//               height={300}
//               className="h-full w-full object-cover"
//               alt="linear board demo"
//             />
//           </div>
//         ),
//     },
//     {
//       title: "1997",
//       description:
//         "‎ ‎ ‎ ‎ ‎ ‎ ",
//         content: (
//           <div className="h-full w-full  flex items-center justify-center text-white">
//             <Image
//               src="/images/6.2.jpg"
//               width={300}
//               height={300}
//               className="h-full w-full object-cover"
//               alt="linear board demo"
//             />
//           </div>
//         ),
//     },
    
//     {
//       title: "2002",
//       description:
//       "‎ ‎ ‎ ‎ ‎ ‎ ",
//       content: (
//           <div className="h-full w-full  flex items-center justify-center text-white">
//             <Image
//               src="/images/8.1jpg"
//               width={300}
//               height={300}
//               className="h-full w-full object-cover"
//               alt="linear board demo"
//             />
//           </div>
//         ),
//     },
//   ];
 

 

 
const cards = [
  {
    id: 1,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">Rev. Romeo S Gophane 1982</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:
      "/images/1.jpg",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC 1st church established in Gujarat 1987</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:
    "/images/2.jpg",
  },
  {
    id: 3,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC started in Ulhasnagar in 1993</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/3.1.jpg"
        },
  {
    id: 4,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">By the Grace of God, I went to Kerala for ministry in 1994</p>
       
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/4.1.jpg"
      },

];
 
const cards1 = [

  {
    id: 5,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">ELM Rayakotta 4 Month Bible School 1996</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/5.1.jpg"
      },





  {
    id: 6,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">By the Grace of God, I went to Kerala for ministry in 1994</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/6.1.jpg"
      },
  {
    id: 7,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">ELM Rayakotta 4 Month Bible School 1996</p>
        <p className="font-normal text-base text-white"></p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/7.jpg"
      },
  {
    id: 8,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">ELM Rayakotta 4 Month Bible School 1996</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/8.1.jpg"
      },

];
 
const cards2 = [

      {
        id: 9,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">Rev. Romeo S Gophane 1982</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:
          "/images/9.1.jpg",
      },
      {
        id: 10,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC 1st church established in Gujarat 1987</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:
        "/images/10.1.jpg",
      },
      {
        id: 11,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC started in Ulhasnagar in 1993</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/11.1.jpg"
            },
      {
        id: 12,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC started in Ulhasnagar in 1993</p>
           
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/12.1.jpg"
          },

];
 
const cards3 = [
      {
        id: 13,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">By the Grace of God, I went to Kerala for ministry in 1994</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/13.1.jpg"
          },
      {
        id: 14,
        content:(
          <div>
            <p className="font-bold text-4xl text-white">By the Grace of God, I went to Kerala for ministry in 1994</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/14.1.jpg"
          },
      {
        id: 15,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">ELM Rayakotta 4 Month Bible School 1996</p>
            <p className="font-normal text-base text-white"></p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/15.1.jpg"
          },
      {
        id: 16,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">ELM Rayakotta 4 Month Bible School 1996</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/16.1.jpg"
          },
];
export default function AboutContent(){
    return (
      <div className="h-screen py-4 w-full bg-black flex-grow overflow-y-auto">
      <LayoutGrid cards={cards} />
      <LayoutGrid cards={cards1} />
      <LayoutGrid cards={cards2} />
      <LayoutGrid cards={cards3} />
    </div>
      );
}