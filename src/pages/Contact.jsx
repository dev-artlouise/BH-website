import React from 'react'

import EmailField from '../components/ui/EmailField'
import TextField from '../components/common/TextField'
import TextAreaField from '../components/common/TextAreaField'
import SubmitBtn from '../components/ui/SubmitBtn'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import ContactImg from '../assets/get-in-touch.jpg'

const Contact = () => {

    const contacts = [
        { label: 'Email', value: 'broadheader2024@gmail.com', icon: < Mail /> },
        { label: 'Phone', value: '+63 (999) 9999 999', icon: < Phone /> },
        { label: 'Address', value: 'Office Address', icon: < MapPin /> }
    ]

    const socials = [
        { label: 'Facebook', icon: <Facebook /> },
        { label: 'Instagram', icon: <Instagram /> },
    ]

    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 m-4'>

                <div className=''>
                    <h2 className='font-display text-4xl font-semibold leading-tight text-center md:text-start sm:text-5xl sm:leading-tight lg:text-[40px] lg:leading-tight xl:text-5xl xl:leading-tight'>
                        Let's get in touch!
                    </h2>

                    <h4 class="font-display text-2xl font-semibold mt-10 text-center md:text-start">
                        You can get in touch with us through the following.
                    </h4>

                    <div className='mt-16 grid gap-4'>
                        {contacts.map(({ label, value, icon }, index) => (
                            <div className='flex gap-[18px]' key={index}>
                                <div className='sm:pt-0.5'>
                                    <div className='flex gap-2'>
                                        {icon}
                                        <p className='font-display text-lg'>{label}</p>
                                    </div>
                                    <a href='' className='mt-2 inline-block '>{value}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-10'>
                        <h4 className='font-display text-2xl font-semibold mt-10 text-center md:text-start'>Follow us on</h4>
                        <div className='my-2 flex gap-4'>
                            {socials.map(({ icon, label }, index) => (
                                <div key={index}>
                                    <a href="">
                                        {icon}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div>
                    <h3 class="font-display text-3xl font-semibold">
                        Fill out the form below to get started
                    </h3>

                    <p class="mt-4 text-lg text-gray-600">
                        Let us know about your project and we will get back to you with our proposal and timeline.
                    </p>

                    <form className='mt-10'>
                        <div className='space-y-7'>
                            <div>
                                <EmailField />
                            </div>

                            <div>
                                <TextField
                                    label={'Phone (Optional)'}
                                />
                            </div>

                            <div>
                                <TextAreaField
                                    label={'How can we assist you'}
                                />
                            </div>

                            <div>
                                <SubmitBtn />
                            </div>

                        </div>
                    </form>

                </div>


            </div >

        </>

    )
}

export default Contact