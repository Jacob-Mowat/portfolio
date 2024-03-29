import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project as Project_t } from "@/typings";
import { urlFor } from "@/sanity";
import { fetchProjects } from "@/utils/fetchProjects";


export default function Projects() {
    const [projects, setProjects] = useState<Project_t[] | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchProjects();
            setProjects(response);
        }

        if(!projects) getData();
    }, [projects]);

    if(!projects) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-grey-400/20 scrollbar-thumb-[#f7ab0a]/80">
                {projects ? projects.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project.image).url()}
                            alt=""
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#f7ab0a]/50">
                                    Case Study {i} of {projects.length}
                                </span>{" "}
                                - {project.title}
                            </h4>

                            <p className="text-lg text-center md:text-left">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Suscipit non exercitationem
                                sed quod? Dicta temporibus dignissimos
                                consectetur? Et reiciendis aperiam perferendis.
                                Recusandae optio omnis nostrum expedita ipsam
                                sint, quae blanditiis.
                            </p>
                        </div>
                    </div>
                )) : undefined}
            </div>

            <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}
