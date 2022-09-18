import React from "react"
import { motion } from "framer-motion"

type Props = {};

export default function ExperienceCard({}: Props) {

    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://avatars.githubusercontent.com/u/4152339?v=4"
                alt="avatar"
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of PAPA</h4>
                <p className="font-bold text-2xl mt-1">Papa</p>
                <div className="flex space-x-2 my-2">
                    <img 
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.iconscout.com/icon/free/png-256/python-2038870-1720083.png" 
                        alt="" 
                    />
                    <img 
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" 
                        alt="" 
                    />
                    <img 
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.iconscout.com/icon/free/png-256/c-4-226082.png" 
                        alt="" 
                    />
                    <img 
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.iconscout.com/icon/free/png-256/graphql-3521468-2944912.png" 
                        alt="" 
                    />
                    <img 
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png" 
                        alt="" 
                    />
                    <img 
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.iconscout.com/icon/free/png-256/amazon-aws-3521268-2944772.png" 
                        alt="" 
                    />
                    <img 
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.iconscout.com/icon/free/png-128/groovy-458301.png" 
                        alt="" 
                    />
                </div>

                <p className="uppercase py-5 text-gray-500">Started work... - Ended...</p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    )
}