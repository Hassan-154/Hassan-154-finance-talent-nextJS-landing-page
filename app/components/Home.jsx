import React from 'react'
import Button from './Button'
import Image from 'next/image'
import ProfileCard from './ProfileCard'
import AccountChat from './AccountChat'

function Home() {
    return (
        <div className='lg:h-[80vh] pb-[25px] lg:pb-0 max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-[10px] items-center justify-center px-3 sm:px-4 xl:px-0'>
            <div className='w-2/2 lg:w-1/2 flex flex-col gap-[20px]'>
                <h1 className='text-[42px] leading-[50px] sm:text-[60px] sm:leading-[67px] text-black font-medium'>Connecting <br></br> <span className='text-periwinkle-blue font-roslindale italic'>Finance</span> Talent with Hiring Power</h1>
                <p className='max-w-[440px]'>A recruitment platform built for accounting & finance professionals and the recruiters who need them.</p>
                <div className='flex gap-3'>
                    <Button title="Join as a Candidate" className="bg-periwinkle-blue text-white rounded-md" />
                    <Button title="I’m a Recruiter" className="bg-slate-light text-black rounded-md" />
                </div>
                <div className='border-b border-[#CAD5E2]'></div>
                <div className='flex gap-10'>
                    <div><span>Successful Projects</span><h5 className='text-[34px] font-semibold text-space-blue'>510+</h5></div>
                    <div><span>Clients Satisfaction</span><h5 className='text-[34px] font-semibold text-space-blue'>97%</h5></div>
                </div>
            </div>
            <div className='w-2/2 lg:w-1/2 p-4'>
                <div className="relative h-[320px] sm:h-[600px] w-auto overflow-hidden">
                    <Image src="/images/home-back.svg" alt='image' height="300" width="300" className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto sm:h-[560px] object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image src="/images/Frame 1707479238 (4).png" alt='image' height="700" width="700" className="min-w-[350px] sm:min-w-[570px] h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home