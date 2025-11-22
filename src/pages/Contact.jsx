import React from 'react';
import { 
    Mail, Phone, MapPin, 
    Linkedin, Facebook, Twitter, Instagram, Calendar, ArrowRight
} from 'lucide-react'; 
import { ConsultationCard } from './Card';


const PRIMARY_COLOR = '#406796';


const CustomCard = ({ children, className }) => (
    <div className={`rounded-xl border shadow-xl p-4 md:p-6 ${className}`}>
        {children}
    </div>
);


const ContactInfoItem = ({ icon: Icon, title, content, isLink = false }) => (
    <div className="flex items-start space-x-4">
        <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#D7E0E9', color: PRIMARY_COLOR }}>
            <Icon className="w-5 h-5" />
        </div>
        <div className='flex flex-col'>
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            {isLink ? (
                <div className="text-gray-600 space-y-2">
                    {content.split('|').map((item, index) => (
                        <a key={index} href={`tel:${item.trim().replace(/ /g, '')}`} className="block hover:text-gray-900 transition underline-offset-4 text-sm" style={{ color: PRIMARY_COLOR }}>
                            {item.trim()}
                        </a>
                    ))}
                </div>
            ) : (
                // Added text-sm here for consistent mobile sizing
                <p className="text-gray-600 whitespace-pre-line text-sm">{content}</p>
            )}
        </div>
    </div>
);


const EmailInfoItem = ({ icon: Icon, title, emails }) => (
    <div className="flex items-start space-x-4">
        <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#D7E0E9', color: PRIMARY_COLOR }}>
            <Icon className="w-5 h-5" />
        </div>
        <div className='flex flex-col'>
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <div className="text-gray-600 space-y-3 mt-2">
                {emails.map(({ address, description }, index) => (
                    <div key={index} className="flex flex-col">
                        <a href={`mailto:${address}`} className="text-sm hover:text-gray-900 transition underline-offset-4 font-medium" style={{ color: PRIMARY_COLOR }}>
                            {address}
                        </a>
                        <span className="text-xs text-gray-500">{description}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const SocialLinkItem = ({ icon: Icon, href, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 rounded-full transition-colors duration-300 hover:opacity-80 flex items-center justify-center shadow-md"
        style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
        aria-label={label}
    >
        <Icon className="w-6 h-6" />
    </a>
);


const ContactDetailsPanel = () => {
    const address = " 202, 2ND FLOOR, HANS BHAWAN BUILDING,\nBAHADURSHAH ZAFAR MARG, DELHI - 110002";
    const phoneNumbers = "+91 7982140425 | +91 1144753075";
    const emailList = [
        { address: "info@wellindia.in", description: "General Enquiries" },
        { address: "operation@wellindia.in", description: "Project & Service Related" },
        { address: "management@wellindia.in", description: "Partnership, Laws & Compliance" },
        { address: "hr@wellindia.in", description: "Employees & Workplace Related" },
    ];


    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/wellindia-corp-services/", label: "LinkedIn" },
        { icon: Facebook, href: "https://www.facebook.com/WellindiaCorpServices/", label: "Facebook" },
        { icon: Twitter, href: "https://twitter.com/WellindiaCorp", label: "X (Twitter)" }, 
        { icon: Instagram, href: "https://www.instagram.com/wellindiacorpservices/", label: "Instagram" }, 
    ];


    return (
        <CustomCard className=" border-gray-200 h-full flex flex-col justify-between">
            <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center" style={{ color: PRIMARY_COLOR }}>
                    <MapPin className="mr-2 h-6 w-6"/>
                    Corporate Contact Points
                </h2>


                <div className="space-y-8 mb-8">
                    <ContactInfoItem
                        icon={MapPin}
                        title="Corporate Address"
                        content={address}
                    />
                    <ContactInfoItem
                        icon={Phone}
                        title="Phone Numbers"
                        content={phoneNumbers}
                        isLink={true}
                    />
                    <EmailInfoItem
                        icon={Mail}
                        title="Dedicated Email Channels"
                        emails={emailList}
                    />
                </div>
            </div>


            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-t items-center pt-4">Connect with Us</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                        <SocialLinkItem key={index} {...link} />
                    ))}
                </div>
            </div>
        </CustomCard>
    );
};


const Contact = () => {
    return (
        // Adjusted padding for the main container on small screens
        <div className="min-h-screen w-full p-4 sm:p-8 font-['Inter',_sans-serif]">
            
            <header className="max-w-4xl mx-auto pt-8 pb-6 text-center px-4 sm:px-0">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900" style={{ color: PRIMARY_COLOR }}>
                    Get In Touch With Wellindia
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mt-3">
                    Solutions for operational and financial excellence, tailored for your business and non-profit needs.
                </p>
            </header>


            {/* Main Content Layout Grid */}
            <main className="max-w-6xl mx-auto pt-6 mb-16 px-0">
                {/* FIXES APPLIED HERE:
                  1. Removed fixed negative/positive margins (mr-4, ml-4) on small screens.
                  2. Used consistent horizontal padding (px-4) on the grid container for mobile.
                  3. Set default grid-cols-1 for mobile, switching to lg:grid-cols-3 for desktop. 
                */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch px-4">
                    
                    {/* Contact Details Panel (Takes 2/3 space on large screens) */}
                    <div className="w-full lg:col-span-2 h-full">
                        <ContactDetailsPanel />
                    </div>
                    
                    {/* Consultation Card (Takes 1/3 space on large screens) */}
                    <div className="z-0 w-full h-full lg:col-span-1">
                        <ConsultationCard/>
                    </div>
                </div>
            </main>


            <section className="max-w-6xl w-full mx-auto mb-12 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center" style={{ color: PRIMARY_COLOR }}>
                    Find Our Location
                </h2>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                    <iframe 
                        // Note: The map source is a placeholder and should be updated with a real Google Maps embed link
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8156173024564!2d77.234676175406!3d28.63462058428801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2806296335%3A0x8898b1b1c6762391!2sHans%20Bhawan%2C%20Bahadur%20Shah%20Zafar%20Marg%2C%20New%20Delhi%2C%20Delhi%20110002!5e0!3m2!1sen!2sin!4v1709280000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Wellindia Office Location on Map"
                    ></iframe>
                </div>
            </section>
            
            <footer className="mt-10 pb-6 text-center text-xs sm:text-sm text-gray-500 px-4">
                <p> 202, 2ND FLOOR, HANS BHAWAN BUILDING, BAHADURSHAH ZAFAR MARG, DELHI - 110002</p>
            </footer>
        </div>
    );
};


export default Contact;