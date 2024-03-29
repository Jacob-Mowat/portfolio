import React, { useEffect, useState } from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link";
import { Social } from "@/typings";
import { fetchSocials } from "@/utils/fetchSocials";

export default function Header() {
    const [socials, setSocials] = useState<Social[] | undefined>(undefined);
    useEffect(() => {
        const getData = async () => {
            const response: Social[] = await fetchSocials();
            setSocials(response);
        }

        if (!socials) getData();
    }, [socials]);

    if(!socials) return null;

    return (
        <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div 
                initial={{ x: -500, opacity: 0, scale:0.5 }}
                animate={{ x: 0, opacity: 1, scale:1 }}
                transition={{ duration: 1.25 }}
                className="flex flex-row items-center">
                {socials ? socials.map((social, i) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="grey"
                        bgColor="transparent"
                    />
                )) : undefined}
            </motion.div>
                
            <Link href="#contact">
                <motion.div  
                    initial={{ x: 500, opacity: 0, scale:0.5 }}
                    animate={{ x: 0, opacity: 1, scale:1 }}
                    transition={{ duration: 1.25 }}
                    className="flex flex-row items-center text-[#222A59]-300 cursor-pointer">
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="grey"
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </motion.div>
            </Link>
        </div>
    )
}