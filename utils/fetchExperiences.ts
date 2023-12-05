import { Experience } from '../typings';

export const fetchExperiences = async (): Promise<Experience[]> => {
    const res = await fetch(`/api/getExperiences`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    
    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}