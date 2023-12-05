import { Experience } from '../typings';

export const fetchExperiences = async (): Promise<Experience[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    
    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}