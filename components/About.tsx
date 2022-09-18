import React from "react"
import { motion } from "framer-motion"

type props = {};

export default function About({}: props) {
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://avatars.githubusercontent.com/u/4152339?v=4"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
            ></motion.img>

            <div className="space-y-10 px-0 md:px-10">

                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
                    background</h4>
                <p className="text-base">
                    I'm a 17 year old software engineer from the UK. 
                    I'm currently studying Computer Science at A-Level and I'm looking to study Computer Science at University. 
                    I'm a full-stack developer with experience in React, Next.js, Node.js, Express, MongoDB, MySQL, and more. 
                    I'm also a designer with experience in Figma, Adobe XD, and Adobe Photoshop. 
                    I'm currently working on a few projects, including a social media platform, a website for a local business, and a website for a local charity.
                </p>
            </div>
        </motion.div>
    )
}