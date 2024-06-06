"use client";
import { AboutContent, Header } from "@/components";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing";
export default function About(){
     
const cards = [
    {
      id: 1,
      title:"NJFC started in Ulhasnagar in 1993",
      thumbnail:
        "/images/1.jpg",
    },
    {
      id: 2,
      title:"NJFC started in Ulhasnagar in 1993",
      thumbnail:
      "/images/2.jpg",
    },
    {
      id: 3,
        title:"NJFC started in Ulhasnagar in 1993",
      thumbnail:"/images/3.1.jpg"
          },
    {
      id: 4,
        title:"ELM Rayakotta 4 Month Bible School 1996",
      thumbnail:"/images/4.1.jpg"
        },
        {
            id: 5,
              title:"ELM Rayakotta 4 Month Bible School 1996",
            thumbnail:"/images/5.1.jpg"
              },
        
          {
            id: 6,
            title:"By the Grace of God, I went to Kerala for ministry in 1994",
            thumbnail:"/images/6.1.jpg"
              },
          {
            id: 7,
            title:"ELM Rayakotta 4 Month Bible School 1996",
            thumbnail:"/images/7.jpg"
              },
          {
            id: 8,
            title:"ELM Rayakotta 4 Month Bible School 1996",
            thumbnail:"/images/8.1.jpg"
              },
              {
                id: 9,
                title:"",
                thumbnail:
                  "/images/9.1.jpg",
              },
              {
                id: 10,
                title:"NJFC 1st church established in Gujarat 1987",
                thumbnail:
                "/images/10.1.jpg",
              },
              {
                id: 11,
                title:"NJFC started in Ulhasnagar in 1993",
                thumbnail:"/images/11.1.jpg"
                    },
              {
                id: 12,
                title:"NJFC started in Ulhasnagar in 1993",
                thumbnail:"/images/12.1.jpg"
                  },
                  {
                    id: 13,
                    title:"NJFC started in Ulhasnagar in 1993",
                    thumbnail:"/images/13.1.jpg"
                      },
                  {
                    id: 14,
                    title:"NJFC started in Ulhasnagar in 1993",
                    thumbnail:"/images/14.1.jpg"
                      },
                  {
                    id: 15,
                    title:"NJFC started in Ulhasnagar in 1993",
                    thumbnail:"/images/15.1.jpg"
                      },
                  {
                    id: 16,
                    title:"NJFC started in Ulhasnagar in 1993",
                    thumbnail:"/images/16.1.jpg"
                      },
  
  ];
   
    return(
        <section className="h-screen w-full bg-black flex flex-col">
    <Header />
    <AboutContent/>
</section>


    )
}