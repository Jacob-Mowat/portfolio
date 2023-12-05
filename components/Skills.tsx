import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Skill from "./Skill";
import { Skill as SkillType } from "@/typings"
import { fetchSkills } from "@/utils/fetchSkills";


export default function Skills() {
    const [skills, setSkills] = useState<SkillType[] | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchSkills();
            setSkills(response);
        }

        if(!skills) getData();
    }, [skills]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm pb-10">Hover over a skill for current proficiency</h3>

            <div className="grid grid-cols-4 gap-5 pt-10">
                {skills ? skills.map((skill, index) => (
                    <Skill key={skill._id} skill={skill} directionLeft={(skills.length / 2) - index >= 0 ? true : false} />
                )) : undefined}
            </div>
        </motion.div>
    )
}