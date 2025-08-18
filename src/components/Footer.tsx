import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [popupTitle, setPopupTitle] = useState('');

  const footerLinks = {
    casino: [
      {
        
        name: 'Gaming Guide',
        href: '#',
        popup: [
          "A valid government-issued photo ID is required for age verification.",
          "Tiger Palace Casino promotes responsible gaming.",
          "Guests may voluntarily request self-exclusion or gaming limits.",
          "Casino staff instructions must be followed at all times.",
          "Chips must be redeemed at the cashier before leaving the premises.",
          "Taxes may apply to certain winnings in accordance with government regulations."
        ]
      },
      {
        name: 'House Rules',
        href: '#',
        popup: [
          "Found on the casino floor and website, detailing acceptable behavior and game regulations.",
          "Include following age restrictions, respecting casino personnel, and adhering to dress codes.",
          "The premises are under 24/7 CCTV surveillance for guest safety and regulatory compliance.",
          "Casino chips have no cash value outside the casino.",
          "Card counting or any form of cheating will result in permanent banning and legal action.",
          "The casino is not responsible for any loss or damage to personal property.",
          "No outside food, beverages, or weapons are allowed.",
          "Disorderly conduct, abusive language, or disruptive behavior will result in immediate removal.",
          "Proper attire must be worn at all times. Management reserves the right to deny entry based on inappropriate dress.",
          "Employees are trained to identify and report signs of problem gambling."
        ]
      },
      {
        name: 'Responsible Gaming',
        href: '#',
        popup: [
          "Tiger Palace Casino promotes responsible gaming and encourages guests to gamble within their means.",
          "Guests may voluntarily request self-exclusion or gaming limits.",
          "Casino staff is trained to identify and report signs of problem gambling.",
          "Guests may request assistance from casino staff if they feel they are experiencing problem gaming behaviors.",
          "The casino offers resources for guests struggling with problem gaming, including counseling services and support groups."
        ]
      },
      { name: 'VIP Program', href: '#' }
    ],
    dining: [
      { name: 'The Jackpot Buffet', href: '#dining' },
      { name: 'Tiger Palace Casino Bar', href: '#dining' },
    ],
    support: [
      { name: 'Contact Us', href: '#Contact' },
      { name: 'Careers', href: '/careers', target: '_blank' },
      {
  name: 'Privacy Policy',
  href: '/PrivacyPolicy', // updated route
  target: '_self'
},
{
  name: 'Terms & Conditions',
  href: '/Term',
  target: '_self'
}

    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/CasinoTigerPalace/', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/tigerpalacecasino/', name: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@TigerPalaceCasino', name: 'YouTube' }
  ];

  const quickContact = [
    { icon: Phone, text: '+977-9820386758', href: 'tel:+9779820386758' },
    { icon: Mail, text: 'Marketing@royaltigercasino.com', href: 'mailto:Marketing@royaltigercasino.com' },
    { icon: MapPin, text: 'Bhairahawa,Rupandehi,Lumbini,Nepal,32900', href: '#contact' }
  ];

  const openPopup = (content, e, title = '') => {
    e.preventDefault();
    setPopupContent(content);
    setPopupTitle(title);
  };

  const closePopup = () => setPopupContent(null);

  return (
    <>
      <footer className="bg-black border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/logo_for_red.png" alt="Tiger Palace Casino" className="h-20 w-auto" />
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Experience the ultimate in luxury gaming, dining, and entertainment in the heart of Bhairahawa Strip.
                  Where fortune meets elegance.
                </p>
                <div className="space-y-3 mb-6">
                  {quickContact.map((contact, index) => (
                    <a key={index} href={contact.href} className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                      <contact.icon className="h-4 w-4 mr-3 text-yellow-400" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div>
                    <h3 className="text-white font-black mb-6 uppercase tracking-wide text-sm">Casino Links</h3>
                    <ul className="space-y-3">
                      {footerLinks.casino.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm cursor-pointer"
                            onClick={link.popup ? (e) => openPopup(link.popup, e, link.name) : undefined}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      {footerLinks.dining.map((link) => (
                        <li key={link.name}>
                          <a href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      {footerLinks.support.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            target={link.target || '_self'}
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm cursor-pointer"
                            onClick={link.popup ? (e) => openPopup(link.popup, e, link.name) : undefined}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 All rights reserved Tiger Palace Casino & IT-Tech.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
                <span>Must be 21+ to gamble</span>
                <span>•</span>
                <span>Gamble responsibly</span>
                <span>•</span>
                <span>Royal Tiger Recreation Pvt.Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {popupContent && (
        <div
          onClick={closePopup}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl relative"
          >
            <h2 className="text-lg font-bold mb-4 text-center text-yellow-500 uppercase">{popupTitle}</h2>
            <ul className="text-black list-disc pl-5 space-y-2 text-sm">
              {popupContent.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex justify-center mt-6">
              <button
                onClick={closePopup}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
