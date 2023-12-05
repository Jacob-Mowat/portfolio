import { Social } from '../typings';

export const fetchSocials = async (): Promise<Social[]> => {
    const res = await fetch(`/api/getSocials`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    
    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}