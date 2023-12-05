import { Skill } from '../typings';

export const fetchSkills = async (): Promise<Skill[]> => {
    const res = await fetch(`/api/getSkills`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    
    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills;
}