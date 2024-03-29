'use client';

import { fetchPageInfo } from '@/utils/fetchPageInfo';
import dynamic from 'next/dynamic';
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { PageInfo } from 'typings';

const DynamicHeader = dynamic(() => import("@/components/Header"), { ssr: true });
const DynamicHero = dynamic(() => import("@/components/Hero"), { ssr: true }); 
const DynamicAbout = dynamic(() => import("@/components/About"), { ssr: true }); 
const DynamicWorkExperience = dynamic(() => import("@/components/WorkExperience"), { ssr: true }); 
const DynamicSkills = dynamic(() => import("@/components/Skills"), { ssr: true }); 
const DynamicProjects = dynamic(() => import("@/components/Projects"), { ssr: true }); 
const DynamicContactMe = dynamic(() => import("@/components/ContactMe"), { ssr: true }); 


// #3F2140
// #7E49F2
// #262473
// #222A59
// #0D0D0D

export default function HomePage() {
    const [pageInfo, setPageInfo] = useState<PageInfo | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchPageInfo();
            setPageInfo(response);
        }

        if (!pageInfo) getData();
    }, [pageInfo]);

    if (!pageInfo) return null;

    return (
        <>
            <Head>
                    <title>Jacob Mowat - portfolio</title>
            </Head>
            <div className="bg-[#0D0D0D] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-[#f7ab0a]/80">
                <DynamicHeader />

                <section id="hero" className="snap-start">
                    <DynamicHero pageInfo={pageInfo} />
                </section>

                <section id="about" className="snap-center">
                    <DynamicAbout pageInfo={pageInfo}/>
                </section>

                <section id="experience" className="snap-center">
                    <DynamicWorkExperience pageInfo={pageInfo} />
                </section>

                <section id="skills" className="snap-start">
                    <DynamicSkills />
                </section>

                <section id="projects" className="snap-start">
                    <DynamicProjects />
                </section>

                <section id="contact" className="snap-start">
                    <DynamicContactMe pageInfo={pageInfo} />
                </section>

                <footer className='sticky bottom-5 w-full cursor-pointer'>
                    <div className='flex items-center justify-center'>
                        <Link href="#hero" passHref>
                            <img 
                            src="https://i.imgur.com/e2yvD6A.png" 
                            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                            alt="" 
                            />
                        </Link>
                    </div>
                </footer>
            </div>
        </>
    )
}

export const revalidate = 10;