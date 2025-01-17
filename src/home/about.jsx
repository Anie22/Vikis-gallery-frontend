import React, { useEffect, useState } from "react";
import { Footer } from "../component/footer";
import { Subscribe } from "../component/subscribe";
import { Card } from "../component/card";
import teamImg from '../assets/team.jpg';
import artise from '../assets/artise.jpg';
import nature from '../assets/nature.jpg';
import dance from '../assets/dance.jpg';
import dance2 from '../assets/dance2.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const About = () => {
    const [wCVG, setWCVG] = useState('');
    const [soldNum, setSoldNum] = useState(0);
    const [clientNum, setClientNum] = useState(0);
    const [countryNum, setCountryNum] = useState(0);

    const autoMetricCount = (num) => {
        if(num == 1) {
            return `${num}M+`
        }

        if(num == 400) {
            return `${num}K`
        }

        if(num ==100){
            return `${num}K`
        }

        return num
    }

    const metricsBar = [
        {num: autoMetricCount(soldNum), items: 'Arts sold'},
        {num: autoMetricCount(clientNum), items: 'Happy clients'},
        {num: autoMetricCount(countryNum), items: 'Countries reached'},
    ]

    const WCVGText = [
        {reHeading: 'A Unique and Diverse Collection', inContent: 'Viks Gallery, offers an extensive selection of artwork across various styles, mediums and genres. Our diverse gallery ensures that you’ll find something that truly resonates with your personal taste and vision.'},
        {reHeading: 'Expert Guidance from Art Professionals', inContent: 'Our dedicated art advisors bring years of experience and passion to each consultation, providing tailored advice to match your needs. From helping you under stand different art styles to offering insight into the artists background.'},
        {reHeading: 'Commitment to Customer Satisfaction', inContent: 'At Viks Gallery, we go above and beyond to make your art buying process smooth and enjoyable, offering framing shipping and installation services. With a strong focus on customer satisfaction we ensure every customer is happy and satisfied.'}
    ];

    const artiseHandels = [
        {icon: <FaFacebook />, style: 'text-blue-900', link: '#'},
        {icon: <FaLinkedin />, style: 'text-blue-900', link: '#'},
        {icon: <FaXTwitter />, link: '#'},
        {icon: <FaInstagram />, link: '#'}
    ];

    const teams = [
        {img: teamImg, name: 'Victor bassey', role: 'Chief executive officer', handels: [
            {icon: <FaFacebook />, style: 'text-blue-900', link: '#'},
            {icon: <FaLinkedin />, style: 'text-blue-900', link: '#'},
            {icon: <FaXTwitter />, link: '#'},
            {icon: <FaInstagram />, link: '#'}
        ]},
        {img: teamImg, name: 'Victor bassey', role: 'Chief executive officer', handels: [
            {icon: <FaFacebook />, style: 'text-blue-900', link: '#'},
            {icon: <FaLinkedin />, style: 'text-blue-900', link: '#'},
            {icon: <FaXTwitter />, link: '#'},
            {icon: <FaInstagram />, link: '#'}
        ]},
        {img: teamImg, name: 'Victor bassey', role: 'Chief executive officer', handels: [
            {icon: <FaFacebook />, style: 'text-blue-900', link: '#'},
            {icon: <FaLinkedin />, style: 'text-blue-900', link: '#'},
            {icon: <FaXTwitter />, link: '#'},
            {icon: <FaInstagram />, link: '#'}
        ]}
    ];

    useEffect(() => {
        const checkScreenSizeForWhyCVG = () => {
            const desktop = window.innerWidth >= 1024;

            if(desktop) {
                setWCVG(
                    <div className="w-full lg:h-96 flex gap-3 overflow-hidden">
                        <img className="w-2/4 h-full flex-initial" src={dance} alt="dance photo" />
                        <img className="w-2/4 h-full flex-1" src={dance2} alt="dance2 photo" />
                    </div>
                )
            } else {
                setWCVG(null)
            }
        };

        checkScreenSizeForWhyCVG()

        window.addEventListener('resize', checkScreenSizeForWhyCVG)

        const soldCount = setInterval(() => {
            setSoldNum((pre) => {
                if(pre == 1){
                    clearInterval(soldCount)
                    return pre
                }

                return pre + 1
            })
        }, 500);

        const clientCount = setInterval(() => {
            setClientNum((pre) => {
                if(pre == 400){
                    clearInterval(clientCount)
                    return pre
                }

                return pre + 1
            })
        }, 10);

        const countryCount = setInterval(() => {
            setCountryNum((pre) => {
                if(pre == 100){
                    clearInterval(countryCount)
                    return pre
                }

                return pre + 1
            })
        }, 15);

        return () => {
            clearInterval(soldCount)
            clearInterval(clientCount)
            clearInterval(countryCount)
        }

    }, [])

    return (
        <div>
            <section className="md:py-6 md:px-5 py-3 px-3">
                <div className="container flex items-center">
                    <div className="flex justify-between items-center lg:w-4/5 w-full lg:mx-auto md:mx-2 m-0">
                        {metricsBar.map((item, i) => (
                            <div className="text-center lg:text-3xl md:text-xl text-sm capitalize font-bold text-abt-blue flex-col flex gap-1" key={i}>
                                <div>
                                    <h5>{item.num}</h5>
                                </div>
                                <div>
                                    <h6>{item.items}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Card
                normalDiv={true}
                renderItem={
                    <div className="flex items-start lg:items-center justify-start lg:justify-center md:flex-row flex-col lg:gap-8 gap-5 w-full h-fit">
                        <div className="lg:w-1/2 md:w-2/4 w-full h-fit flex flex-col gap-3">
                            <div className="w-full md:h-96 lg:h-52 h-60">
                                <img className="w-full h-full" src={nature} alt="nature photo" />
                            </div>
                            {wCVG}
                        </div>
                        <div className="lg:w-2/5 md:w-3/5 w-full flex flex-col lg:gap-5 gap-3">
                            <h1 className="font-bold lg:text-3xl text-xl text-abt-blue">Why Choose Viks Gallery?</h1>
                            <div className="flex flex-col lg:gap-3 gap-2 items-start">
                                {WCVGText.map((con, i) => (
                                    <div className="flex flex-col lg:gap-3 gap-2" key={i}>
                                        <h3 className="font-semibold lg:text-xl text-lg">{con.reHeading}</h3>
                                        <p className="lg:text-base text-sm font-normal">{con.inContent}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }

                
                style="flex items-center justify-start md:justify-center flex-wrap w-full lg:gap-3 gap-5"
                subStyle="w-full flex-initial h-fit overflow-hidden"
            />
            <hr />
            <Card 
                title='Meet our artist'
                normalDiv={true}
                renderItem={
                    <div className="flex items-start lg:items-center justify-start lg:justify-center md:flex-row flex-col lg:gap-8 gap-5 w-full h-fit">
                        <div className="lg:w-1/3 md:w-2/5 w-full md:h-96 h-72">
                            <img className="w-full h-full" src={artise} alt="artise photo" />
                        </div>
                        <div className="lg:w-1/2 md:w-3/5 w-full flex flex-col gap-4">
                            <h5 className="font-semibold text-2xl">Victor</h5>
                            <div className="flex flex-col gap-3 lg:text-sm md:text-xs text-sm">
                                <p>At Viks Gallery, we pride ourselves on offering a carefully curated selection of artworks that span a wide range of styles, mediums, and movements. Our mission is to showcase both emerging and established artists, providing them with a platform to share their stories, challenge conventional narratives, and push the boundaries of contemporary art. We are deeply committed to promoting art that sparks meaningful conversations and resonates with diverse audiences, from first-time visitors to seasoned collectors.</p>
                                <p>Our gallery was founded on the belief that art is a universal language, one that transcends borders and speaks to the shared experiences of humanity. In this spirit, Viks Gallery is dedicated to fostering inclusivity and accessibility within the art world. We aim to break down the barriers that often separate artists from their audiences, ensuring that art is accessible to everyone, regardless of background, education, or financial means. Whether you are looking to add to your personal collection, discover new talent, or simply experience the beauty of artistic expression, we welcome you to explore our gallery.</p>
                            </div>
                            <div className="lg:text-xl md:text-base text-lg">
                                <ul className="flex items-center gap-6">
                                    {artiseHandels.map((icon, i) => (
                                        <li className={icon.style} key={i}>
                                            <Link className='no-underline' to={icon.link} target="_blank">
                                            {icon.icon}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                }

                
                style="flex items-center justify-start md:justify-center flex-wrap w-full lg:gap-3 gap-5"
                subStyle="w-full flex-initial h-fit overflow-hidden"
            />
            <hr />
            <Card 
                title='Meet our amazing team'
                items={teams}
                swipe={false}
                normalDiv={false}
                renderItem={(team) => (
                    <div className="flex items-start justify-start flex-col gap-2 w-full h-fit">
                        <div className="w-full lg:h-80 h-72">
                            <img className="w-full h-full" src={team.img} alt={team.name} />
                        </div>
                        <div className="lg:text-xl text-base font-normal flex flex-col gap-3 capitalize">
                            <h6>{team.name}</h6>
                            <p>{team.role}</p>
                            <div>
                                <ul className="flex items-center gap-6">
                                    {team.handels.map((icon, i) => (
                                        <li className={icon.style} key={i}>
                                            <Link className='no-underline' to={icon.link} target="_blank">
                                               {icon.icon}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                style="flex items-center justify-start md:justify-center flex-wrap w-full lg:gap-3 gap-5"
                subStyle="w-full md:w-3p flex-initial h-fit overflow-hidden"
            />
            <hr />
            <Subscribe />
            <Footer />
        </div>
    )
}