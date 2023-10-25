import { footerLinks, socialMedia } from "../Constants"
import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
       <div className="flex flex-col items-start">
         <a href="/">
          <img src={footerLogo} width={150} height={46} />
         </a>
         <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get Shoes ready for the new term at your nearest Nike store. Find your perfect Size In store. Get Rewards</p>
         <div className="flex gap-5 items-center m-8">
          {socialMedia.map((icon)=>(
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer">
              <img src={icon.src} alt={icon.alt} width={24} height={24}/>
            </div>
          ))}
         </div>
       </div>
       <div className="flex justify-between flex-1 lg:gap- gap-20 flex-wrap">
            {footerLinks.map((section)=>(
              <div key="section">
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li className="mt-3 font-montserrat text-base leading-normal hover:text-slate-gray text-white-400" key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center cursor-pointer font-montserrat gap-2"> 
        <img src={copyrightSign} alt="CopyRight" width={20} height={20} className="rounded-full m-0" />
        <p>Copyright. All rights reserved.</p>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer