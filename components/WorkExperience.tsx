import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience, PageInfo } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";

type Props = {
    pageInfo: PageInfo;
};

export default function WorkExperience({ pageInfo } : Props) {
    const [experiences, setExperiences] = useState<Experience[] | undefined>(undefined);

    useEffect(() => {
        const getExp = async () => {
            const exp = await fetchExperiences();
            setExperiences(exp);
        }

        if(!experiences) getExp();
    }, [experiences])

    if (!experiences) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-grey-400/20 scrollbar-thumb-[#f7ab0a]/80">
                {(experiences && pageInfo) ? experiences.map((experience) => (
                    <ExperienceCard
                        key={experience._id}
                        experience={experience}
                        pageInfo={pageInfo}
                    />
                )) : undefined}
            </div>
        </motion.div>
    );
}
