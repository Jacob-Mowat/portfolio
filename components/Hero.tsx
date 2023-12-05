import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
    pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hello, My name is ${pageInfo?.name}.`,
            "Based in the UK.",
            "ML/AI Enthusiast.",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
            />
            <div className="z-10">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#f7ab0a"></Cursor>
                </h1>

                <div className="pt-5">
                    <Link href="#about" passHref>
                        <button className="hero-button mx-5 p-5">About</button>
                    </Link>
                    <Link href="#experience" passHref>
                        <button className="hero-button mx-5 p-5">Experience</button>
                    </Link>
                    <Link href="#skills" passHref>
                        <button className="hero-button mx-5 p-5">Skills</button>
                    </Link>
                    <Link href="#projects" passHref>
                        <button className="hero-button mx-5 p-5">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
