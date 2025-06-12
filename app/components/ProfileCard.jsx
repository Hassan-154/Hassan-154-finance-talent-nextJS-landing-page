import React from 'react';
import Image from 'next/image'

export default function ProfileCard() {
    return (
        <div style={{
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
          }} className="bg-white rounded-2xl shadow-lg w-full p-3.5">
            {/* Profile Image */}
            <div className="flex justify-center mb-5">
                <div className="w-18 h-18 rounded-full overflow-hidden">
                    <Image src="/images/profile.png" alt='image' height="100" width="100" className="w-auto h-[70px] object-cover" />
                </div>
            </div>

            {/* Name */}
            <h1 className="text-2.5xl font-bold text-gray-900 text-center mb-1.3">
                Henry Sullivan
            </h1>

            {/* Title */}
            <p className="text-base text-gray-600 text-center mb-5">
                Accountant
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-3 text-space-blue ">
                <span className="px-3.5 py-1.75 bg-gray-100 rounded-md text-xs font-medium">
                    Financial Reporting
                </span>
                <span className="px-3.5 py-1.75 bg-green-100 rounded-md text-xs font-medium">
                    Excel
                </span>
                <span className="px-3.5 py-1.75 bg-blue-100 rounded-md text-xs font-medium">
                    CFA Level II
                </span>
                <span className="px-3.5 py-1.75 bg-orange-100 rounded-md text-xs font-medium">
                    CFA Level II
                </span>
            </div>

            <div className='border-b border-slate-light mb-2'></div>

            {/* Details */}
            <div className="space-y-1.5 text-[12px]">
                <div className="flex justify-between items-center">
                    <span>Based in:</span>
                    <span className="text-space-blue font-medium">Utica, Pennsylvania</span>
                </div>

                <div className="flex justify-between items-center">
                    <span>Looking for:</span>
                    <span className="text-space-blue font-medium">Permanent</span>
                </div>

                <div className="flex justify-between items-center">
                    <span>Expectations:</span>
                    <span className="text-space-blue font-medium">$1,500 - $2,000</span>
                </div>
            </div>
        </div>
    );
}