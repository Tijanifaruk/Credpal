import React from 'react'
import credpalogo from "../assets/Credpalogo.svg"
import googleplay from "../assets/GooglePlay.svg"
import appstore from "../assets/AppStore.svg"
import { footerLinks } from "../constants"

const Footer = () => (
  <footer className="bg-black text-white px-4 py-8 text-base">
    {/* Logo and Description */}
    <div className="mb-6">
      <img src={credpalogo} alt="CredPal Logo" className="w-40 mb-4" />
      <p className="text-gray-300">
        CredPal is transforming lives by making credit more accessible for businesses and individuals across developing economies, empowering people to dream bigger, achieve more, and build a better future.
      </p>
    </div>

    {/* App Downloads */}
    <div className="mb-6">
      <p className="text-teal-400 font-semibold mb-2">Get The App</p>
      <div className="flex flex-col gap-2">
        <img src={appstore} alt="App Store" className="w-36" />
        <img src={googleplay} alt="Google Play" className="w-36" />
      </div>
    </div>

    {/* Links Section */}
    <div className="mb-6 space-y-4">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h4 className="text-teal-400 font-semibold mb-2">{section.title}</h4>
          <ul className="space-y-1 text-gray-300">
            {section.links.map((link) => (
              <li key={link.name} className="list-disc ml-5">
                <a href={link.link} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Divider */}
    <hr className="border-gray-700 my-6" />

    {/* Legal Description */}
    <p className="text-white mb-4">
      CredPal, powered by Dawakin Kudu Microfinance Bank Ltd and licensed by the Central Bank of Nigeria, offers seamless payment, savings, and credit solutions. Instantly access credit at checkout and enjoy the freedom to buy now and pay later across online and offline merchants.
    </p>

    <hr className="border-gray-700 my-4" />

    {/* Copyright */}
    <div  className="text-white text-sm flex justify-between">
    <p>Copyright © 2025. All rights reserved</p>
    <p className='font-bold'>Dev.Faruk</p>
    </div>
    
  </footer>
)

export default Footer
