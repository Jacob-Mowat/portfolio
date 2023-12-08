import React from "react";
import { motion } from "framer-motion";
import { Experience, PageInfo, Skill as Skill_t } from "@/typings";
import exp from "constants";
import { urlFor } from "@/sanity";
import Skill from "./Skill";

type Props = {
    experience: Experience;
    pageInfo: PageInfo;
};

export default function ExperienceCard({ experience, pageInfo }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={urlFor(experience?.companyImage).url()}
                alt={`Company Logo for ${experience?.company}`}
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{experience?.jobTitle} @ {experience?.company}</h4>
                <p className="font-bold text-2xl mt-1">{experience?.role}</p>
                <div className="flex space-x-2 my-2">
                    {experience.skills?.map((skill: Skill_t) => (
                        <Skill
                            key={skill._id}
                            skill={skill}
                            directionLeft={true}
                        />
                    ))}
                </div>

                <p className="uppercase py-5 text-gray-500">
                    {new Date(experience.dateStarted).toLocaleDateString()} -{" "}
                    {new Date(experience.dateEnded).toLocaleDateString()}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {experience.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
