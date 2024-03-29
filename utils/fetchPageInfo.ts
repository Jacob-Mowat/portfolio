import { PageInfo    } from '../typings';

export const fetchPageInfo = async (): Promise<PageInfo> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    console.log(pageInfo);

    return pageInfo;
}