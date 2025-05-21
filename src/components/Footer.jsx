import React from 'react';
import credpalogo from "../assets/Credpalogo.svg";
import googleplay from "../assets/GooglePlay.svg";
import appstore from "../assets/AppStore.svg";
import { footerLinks } from "../constants";

const Footer = () => (
  <footer className="bg-black text-white px-8 py-10 text-base">
    {/* Top Section: Grid Layout */}
    <div className="grid gap-6 md:grid-cols-6">
      {/* Logo and Description */}
      <div className="md:col-span-2">
        <img src={credpalogo} alt="CredPal Logo" className="w-40 mb-4" />
        <p className="text-gray-300 text-sm leading-relaxed">
          CredPal is transforming lives by making credit more accessible for businesses and individuals across developing economies, empowering people to dream bigger, achieve more, and build a better future.
        </p>
      </div>

      {/* App Downloads */}
      <div>
        <p className="text-teal-400 font-semibold mb-2">Get The App</p>
        <div className="flex flex-col gap-2 cursor-pointer">
          <a
            href="https://apps.apple.com/us/app/credpal/id1541846382"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appstore} alt="Download on the App Store" className="w-32" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.credpal.loan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googleplay} alt="Get it on Google Play" className="w-32" />
          </a>
        </div>
      </div>

      {/* Dynamic Footer Links */}
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h4 className="text-teal-400 font-semibold mb-2">{section.title}</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            {section.links.map((link) => (
              <li key={link.name} className="list-disc ml-5">
                <a href={link.link} className="hover:underline decoration-teal-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Divider */}
    <hr className="border-gray-700 my-8" />

    {/* Legal Description */}
    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
      CredPal, powered by Dawakin Kudu Microfinance Bank Ltd and licensed by the Central Bank of Nigeria, offers seamless payment, savings, and credit solutions. Instantly access credit at checkout and enjoy the freedom to buy now and pay later across online and offline merchants.
    </p>

    <hr className="border-gray-700 my-4" />

    {/* Copyright */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
      <p>Copyright © 2025. All rights reserved</p>
      <p className="font-bold mt-2 md:mt-0">Dev.Faruk</p>
    </div>
  </footer>
);

export default Footer;
