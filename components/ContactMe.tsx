import React, { useEffect, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
    const [pageInfo, setPageInfo] = useState<PageInfo | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchPageInfo();
            setPageInfo(data);
        }

        if(!pageInfo) getData;
    }, [pageInfo]);

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    if (!pageInfo) return null;

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I&apos;ve got just what you need.{" "}
                    <span className="underline decoration-[#f7ab0a]/50">
                        Lets Talk.
                    </span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="tet-[#f7ab0a] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{pageInfo?.phoneNumber}</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="tet-[#f7ab0a] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{pageInfo?.email}</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="tet-[#f7ab0a] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{pageInfo?.address}</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="contactInput"
                            type="text"
                            name="name"
                        />
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="contactInput"
                            type="email"
                            name="email"
                        />
                    </div>

                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="contactInput"
                        type="text"
                        name="subject"
                    />

                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="contactInput"
                        name="message"
                    />
                    <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
