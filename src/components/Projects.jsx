import React from 'react'

const Projects = () => {

    const features = [

        {
            // icon: <BotMessageSquare />,
            text: "Web Design and Development",
            description:
                "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
        },
        {
            // icon: <Fingerprint />,
            text: "Mobile App Development",
            description:
                "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
        },
        {
            // icon: <ShieldHalf />,
            text: "Web Based Application",
            description:
                "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
        },
        {
            // icon: <BatteryCharging />,
            text: "Search Engine Optimization",
            description:
                "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
        },
    ];

    return (
        <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
            <div className='text-center'>
                {/* <span className='bg-neutral-900 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                    What We Do?
                </span> */}
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                    Services
                </h2>
            </div>

            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map(({ text, description }, index) => (
                    <div key={index} className='w-full sm:1/2 lg:w-1/3'>

                        <div className='flex'>
                            {/* <div className='flex mx-6 h-10 w-10 p-2 bg-neautral-900 justify-center items-center rounded-full' >

                            </div> */}
                            <div>
                                <h5 className='mt-1 mb-6 text-xl'>{text}</h5>
                                <p className='text-md p-2 mb-20 text-neutral-500'>{description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects