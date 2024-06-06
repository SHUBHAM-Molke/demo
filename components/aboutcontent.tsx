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
        <p className="font-bold text-4xl text-white">NJFC started in Ulhasnagar in 1993</p>
       
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/3.2.jpg"
      },

];
 
const cards1 = [

  {
    id: 5,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">By the Grace of God,I went to Kerala for ministry in 1994</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/4.1.jpg"
      },





  {
    id: 6,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">By the Grace of God,I went to Kerala for ministry in 1994</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/4.2.jpg"
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
    thumbnail:"/images/5.1.jpg"
      },
  {
    id: 8,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">ELM Rayakotta 4 Month Bible School 1996</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/5.2.jpg"
      },

];
 
const cards2 = [

      {
        id: 9,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">1997</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:
          "/images/6.1.jpg",
      },
      {
        id: 10,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">1997</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:
        "/images/6.2.jpg",
      },
      {
        id: 11,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">1999</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/7.jpg"
            },
      {
        id: 12,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">2002</p>
           
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/8.1.jpg"
          },

];
 
const cards3 = [
      {
        id: 13,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">2002</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/8.2.jpg"
          },
      {
        id: 14,
        content:(
          <div>
            <p className="font-bold text-4xl text-white">2006</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/9.1.jpg"
          },
      {
        id: 15,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">2006</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/9.2.jpg"
          },
      {
        id: 16,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">2006</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/9.3.jpg"
          },
];
const cards4 = [
  {
    id: 17,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2011</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/10.1.jpg"
      },
  {
    id: 18,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">2011</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/10.2.jpg"
      },
  {
    id: 19,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2011</p>

        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/10.3.jpg"
      },
  {
    id: 20,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2011</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/10.4.jpg"
      },
];
const cards5 = [
  {
    id: 21,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC Sunday Service @ Samaj Hall, Kurla Camp,Ulhasnagar-4 2014</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/11.1.jpg"
      },
  {
    id: 22,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">NJFC Sunday Service @ Samaj Hall, Kurla Camp,Ulhasnagar-4 2014</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/11.2.jpg"
      },
  {
    id: 23,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2015</p>

        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/12.1.jpg"
      },
  {
    id: 24,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2015</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/12.2.jpg"
      },
];
const cards6 = [
  {
    id: 25,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2015</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/12.3.jpg"
      },
  {
    id: 26,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">2015</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/12.4.jpg"
      },
  {
    id: 27,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2018</p>

        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/13.1.jpg"
      },
  {
    id: 28,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2018</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/13.2.jpg"
      },
];
const cards7 = [
  {
    id: 29,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">2018</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/13.3.jpg"
      },
  {
    id: 30,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">NJFC Open Healing Meetings (Ulhasnagar)</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/14.1.jpg"
      },
  {
    id: 31,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC Open Healing Meetings (Ulhasnagar)</p>

        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/14.2.jpg"
      },
  {
    id: 32,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC Open Healing Meetings (Ulhasnagar)</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/14.3.jpg"
      },
];




const cards8 = [
  {
    id: 33,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC Open Healing Meetings (Ulhasnagar)</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:
      "/images/14.4.jpg",
  },

  {
    id: 36,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC IN NASHIK</p>
       
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/15.1.jpg"
      },

];
 
const cards9 = [

  {
    id: 37,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC IN NASHIK</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/15.2.jpg"
      },





  {
    id: 38,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">NJFC IN NASHIK</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/15.3.jpg"
      },
  {
    id: 39,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC IN NASHIK</p>
        
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/15.4.jpg"
      },
  {
    id: 40,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC in JALNA (Rajur)</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/16.1.jpg"
      },

];
 
const cards10 = [

      {
        id: 41,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Rajur)</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:
          "/images/16.2.jpg",
      },
      {
        id: 42,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Rajur)</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:
        "/images/16.3.jpg",
      },
      {
        id: 43,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Rajur)</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/16.4.jpg"
            },
      {
        id: 44,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Nalni)</p>
           
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/17.1.jpg"
          },

];
 
const cards11 = [
      {
        id: 45,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Nalni)</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/17.2.jpg"
          },
      {
        id: 46,
        content:(
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Nalni)</p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/17.3.jpg"
          },
      {
        id: 47,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Nalni)</p>
            <p className="font-normal text-base text-white"></p>
            
          </div>
        ),
        className: "col-span-1",
        thumbnail:"/images/17.4.jpg"
          },
      {
        id: 48,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">NJFC in JALNA (Tembhurni)</p>
            
          </div>
        ),
        className: "md:col-span-2",
        thumbnail:"/images/18.1.jpg"
          },
];
const cards12 = [
  {
    id: 49,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC in JALNA (Tembhurni)</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/18.2.jpg"
      },
  {
    id: 50,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">NJFC in JALNA (Tembhurni)</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/18.3.jpg"
      },
  {
    id: 51,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC in JALNA (Tembhurni)</p>
       
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/18.4.jpg"
      },
  {
    id: 52,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">OPEN MEETING IN GUJRAT 2017</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/19.1.jpg"
      },
];
const cards13 = [
  {
    id: 53,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">OPEN MEETING IN GUJRAT 2017</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/19.2.jpg"
      },
  {
    id: 54,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">OPEN MEETING IN GUJRAT 2017</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/19.3.jpg"
      },
  {
    id: 55,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">OPEN MEETING IN GUJRAT 2017</p>
        <p className="font-normal text-base text-white"></p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/19.4.jpg"
      },
  {
    id: 56,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">Old Age Home ministry</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/20.1.jpg"
      },
];
const cards14 = [
  {
    id: 57,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">Old Age Home ministry</p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/20.2.jpg"
      },
  {
    id: 58,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">Old Age Home ministry</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/20.3.jpg"
      },
  {
    id: 59,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">Old Age Home ministry</p>
        
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/20.4.jpg"
      },
  {
    id: 60,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC  cares for Widows & Senior Citizens  </p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/21.1.jpg"
      },
];
const cards15 = [
  {
    id: 61,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">NJFC  cares for Widows & Senior Citizens  </p>
        
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:"/images/21.2.jpg"
      },
  {
    id: 62,
    content:(
      <div>
        <p className="font-bold text-4xl text-white">NJFC organizing medical camps</p>
        
      </div>
    ),
    className: "col-span-1",
    thumbnail:"/images/22.1.jpg"
      },

  
];
export default function AboutContent(){
    return (
      <div className="h-screen py-4 w-full bg-black flex-grow overflow-y-auto">
      <LayoutGrid cards={cards} />
      <LayoutGrid cards={cards1} />
      <LayoutGrid cards={cards2} />
      <LayoutGrid cards={cards3} />
      <LayoutGrid cards={cards4} />
      <LayoutGrid cards={cards5} />
      <LayoutGrid cards={cards6} />
      <LayoutGrid cards={cards7} />
      <LayoutGrid cards={cards8} />
      <LayoutGrid cards={cards9} />
      <LayoutGrid cards={cards10} />
      <LayoutGrid cards={cards11} />
      <LayoutGrid cards={cards12} />
      <LayoutGrid cards={cards13} />
      <LayoutGrid cards={cards14} />
      <LayoutGrid cards={cards15} />
    </div>
      );
}