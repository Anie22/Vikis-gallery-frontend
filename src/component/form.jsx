import React from "react";
import { Link } from "react-router-dom";


export const FormCard = ({ authImg, formStyle, imageHldStyle, subImgHoldStyle, formHoldStyle, headingStyle, heading, innerFormStyle, authMessage, subAuthMessage, authStyle, authMsgStyle, formInHolder, error, fgTxt, btnText, link, subLink, singleSubLink, SubLink}) => {
    return (
        <div className="w-full flex items-start">
            <div className="w-full relative">
                <div className={`${formStyle}`}>
                    {authImg &&
                        <div className={`${imageHldStyle}`}>
                            <div className={`${subImgHoldStyle}`}>
                                <img className="h-full w-full" src={authImg} alt="" />
                            </div>
                        </div>
                    }
                    <div className={`${formHoldStyle}`}>
                        <div className={`${headingStyle}`}>
                            <h2>{heading}</h2>
                        </div>
                        <div className="w-full flex flex-col items-center justify-start">
                            <div className={`${innerFormStyle}`}>
                                <div className={`${authStyle}`}>
                                    <h5 className={`${authMsgStyle}`}>{authMessage}</h5>
                                    {subAuthMessage && <p>{subAuthMessage}</p>}
                                </div>
                                <div>
                                    <form action="">
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-col gap-5 items-start w-full">
                                                {formInHolder.map((fih, i) => (
                                                    <div className="flex flex-col items-start gap-0 w-full capitalize" key={i}>
                                                        <label className="text-label font-normal xl:text-lg text-base" htmlFor={fih.for}>{fih.label}</label>
                                                        <div className="w-full flex flex-col gap-1">
                                                            <input className="border-b border-bdr w-full h-10 outline-none py-1 px-2 bg-transparent" type={fih.type} name={fih.name} />
                                                            <p className="text-sm text-danger capitalize font-normal">{error}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {fgTxt && 
                                                <div className="md:text-base text-sm font-normal capitalize">
                                                    <Link to='/reset-pass'>{fgTxt}</Link>
                                                </div>
                                            }
                                            {btnText &&
                                                <div className="w-full text-center capitalize text-lg text-white">
                                                    <button className="bg-auth h-12 w-full rounded-md">{btnText}</button>
                                                </div>
                                            }
                                            {singleSubLink ? 
                                                (<div className="md:text-base text-sm font-normal capitalize text-center">
                                                    <Link to={link}>{subLink}</Link>
                                                </div>) : 
                                                (<div className="md:text-base text-sm font-normal capitalize text-center flex justify-between">
                                                    {SubLink.map((lnk, i) => (
                                                        <Link to={lnk.link} key={i}>{lnk.subLink}</Link>
                                                    ))}
                                                </div>)
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}