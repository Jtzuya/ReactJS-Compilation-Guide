import React from 'react'
import { Email, LinkedIn, Twitter, Facebook, Instagram, GitHub } from '@mui/icons-material';

const Card = () => {
    let url = '#'

    return (
        <section className="bg-react-blue-dark py-14">
            <div className="bg-react-body min-h-[868px] max-w-[550px] mx-auto px-28 py-11 w-full flex items-start">
                <div className="w-full max-w-20 bg-card-light rounded-xl">
                    {/* image */}
                    <img src="https://t.ly/XDYW" alt="" className="max-h-[317px] min-h-[317px] w-full object-cover rounded-t-xl" />

                    {/* content body */}
                    <div className="px-9 pb-11 pt-5">
                        <div className="flex items-center flex-col">
                            <h2 className="text-2xl text-white font-bold font-body">Laura Smith</h2>
                            <p className="text-xs text-highlight pt-1.5 font-body">Frontend Developer</p>
                            <a href={ url }><span className="pt-2 text-[10.24px] text-white font-body font-normal">laurasmith.portfolio</span></a>
                        </div>

                        <div className="pt-4 flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center bg-white text-react-body min-w-[115px] rounded-md gap-2 text-sm font-body font-medium px-4 py-2.5 cursor-pointer">
                                <Email className="text-[1.05rem]" />
                                <span>Email</span>
                            </div>
                            <div className="flex items-center justify-center bg-[#5093E2] text-white min-w-[115px] rounded-md gap-2 text-sm font-body font-medium px-4 py-2.5 cursor-pointer">
                                <LinkedIn className="text-[1.05rem]" />
                                <span>LinkedIn</span>
                            </div>
                        </div>

                        <div className="pt-8 text-white">
                            <div className="pb-7">
                                <h3 className="text-inherit text-base font-body font-bold pb-sm">About</h3>
                                <p className="text-inherit text-[10.24px] font-body font-normal">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                            </div>
                            <div className="">
                                <h3 className="text-inherit text-base font-body font-bold pb-sm">Interests</h3>
                                <p className="text-inherit text-[10.24px] font-body font-normal">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                            </div>
                        </div>
                    </div>

                    {/* card footer */}
                    <div className="__footer bg-card-dark pt-[19px] pb-[20px] flex items-center justify-center rounded-b-xl gap-[25.3px] text-[#918E9B]">
                        <Twitter className="cursor-pointer" />
                        <Facebook className="cursor-pointer" />
                        <Instagram className="cursor-pointer" />
                        <GitHub className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card