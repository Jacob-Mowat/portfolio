import React from "react"

type Props = {
    description: string;
};

export default function Project({ description }: Props) {
    return (
        <div className="h-[500px] w-[300px] bg-[#f7ab0a] m-10 rounded-xl shadow-lg flex flex-col justify-center items-center">
            <h3 className="text-2xl text-white">Project</h3>
        </div>
    );
}