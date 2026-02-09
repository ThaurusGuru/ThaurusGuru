import { Link } from 'react-router-dom';

function BlogHero() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-[100px]">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-1 mb-7 mt-20 md:mt-32 lg:mt-[150px]">
        <span 
          className="font-['Cambay',Helvetica] text-white text-base md:text-lg font-bold"
        >
        
        </span>
        <span className="text-white"></span>
        <span 
          className="font-['Cambay',Helvetica] text-[#A755FF] text-base md:text-lg font-bold"
        >
         
        </span>
      </div>

      

      {/* Centered Blog Images Grid */}
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-[37px] w-full lg:w-auto">
          {/* Large Left Image - Hidden on mobile */}
          <Link to="/blog/4" className="hidden lg:block">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full lg:w-[754px] h-auto lg:h-[496px]"
            >
              <img 
                src="/blog/blog-img.png" 
                alt="Featured Blog"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlays */}
              <div className="absolute top-4 md:top-[25px] left-6 md:left-[42px] right-6 md:right-[42px]">
                {/* Title */}
                <h2 
                  className="font-['M_PLUS_2',Helvetica] text-white text-3xl md:text-4xl lg:text-[52px] font-bold"
                >
                  Scope360°
                </h2>
                
                {/* First Divider Line */}
                <div 
                  className="w-full max-w-[670px] h-[0.4px] bg-[#DEC7FF] mt-3 md:mt-[17px]"
                />
                
                {/* Subtitle */}
                <p 
                  className="font-['M_PLUS_2',Helvetica] text-white text-sm md:text-base font-bold leading-6 md:leading-[26px] mt-2 md:mt-3"
                >
                  The AI-Powered Trading Journal for Crypto & Forex
                </p>
                
                {/* Second Divider Line */}
                <div 
                  className="w-full max-w-[670px] h-[0.4px] bg-[#DEC7FF] mt-40 md:mt-52 lg:mt-[265px]"
                />
                
                {/* Author and Date Section */}
                <div className="flex items-center justify-between mt-3 md:mt-[17px]">
                  <span 
                    className="font-['M_PLUS_2',Helvetica] text-white text-xs md:text-sm font-bold"
                  >
                    by Thaurus Team
                  </span>
                  
                  {/* Date Badge */}
                  <div 
                    className="inline-flex justify-center items-center px-3 md:px-[14px] py-0.5 md:py-[2px] rounded-[20px] bg-[rgba(229,210,255,0.40)]"
                  >
                    <span 
                      className="font-['Poppins',Helvetica] text-white text-[8px] md:text-[10px] font-bold leading-6"
                    >
                      August 20, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Right Side - Three Smaller Images */}
          <div className="flex flex-col gap-6 md:gap-[37px] items-center lg:items-start">
            {/* Blog Post 1 */}
            <Link to="/blog/1" className="block w-full max-w-[449px]">
              <div 
                className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full h-auto aspect-[449/248]"
              >
              <img 
                src="/blog/Blog-1.png" 
                alt="Blog Post 1"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlays */}
              <div className="absolute top-3 md:top-[17px] left-4 md:left-6 right-4 md:right-6">
                {/* Title */}
                <h3 
                  className="font-['M_PLUS_2',Helvetica] text-white text-xl md:text-2xl lg:text-[30px] font-bold"
                >
                  Best Prop Firms Nigeria
                </h3>
                
                {/* First Divider Line */}
                <div 
                  className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-2 md:mt-[9px]"
                />
                
                {/* Subtitle */}
                <p 
                  className="font-['M_PLUS_2',Helvetica] text-white text-[8px] md:text-[10px] font-bold leading-[12px] md:leading-[15.638px] mt-1 md:mt-[6px]"
                >
                  Top Prop Firms Nigerian Traders Can Trust in 2026
                </p>
                
                {/* Second Divider Line */}
                <div 
                  className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-20 md:mt-24 lg:mt-[109px]"
                />
                
                {/* Author and Date Section */}
                <div className="flex items-center justify-between whitespace-nowrap mt-2 md:mt-[13px]">
                  <span 
                    className="font-['M_PLUS_2',Helvetica] text-white text-[7px] md:text-[8px] font-bold"
                  >
                    by Tracey Wilson
                  </span>
                  
                  {/* Date Badge */}
                  <div 
                    className="inline-flex justify-center items-center px-2 md:px-[8.421px] py-[1.203px] rounded-[12.03px] bg-[rgba(229,210,255,0.40)]"
                  >
                    <span 
                      className="font-['Poppins',Helvetica] text-white text-[5px] md:text-[6px] font-bold leading-[14.435px]"
                    >
                      August 20, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </Link>

            {/* Blog Post 2 */}
            <Link to="/blog/2" className="block w-full max-w-[449px]">
              <div 
                className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full h-auto aspect-[449/248]"
              >
                <img 
                  src="/blog/Blog-2.png" 
                  alt="Blog Post 2"
                  className="w-full h-full object-cover"
                />
                
                {/* Text Overlays */}
                <div className="absolute top-3 md:top-[17px] left-4 md:left-6 right-4 md:right-6">
                  {/* Title */}
                  <h3 
                    className="font-['M_PLUS_2',Helvetica] text-white text-xl md:text-2xl lg:text-[30px] font-bold"
                  >
                    Prop Trading for Nigerians
                  </h3>
                  
                  {/* First Divider Line */}
                  <div 
                    className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-2 md:mt-[9px]"
                  />
                  
                  {/* Subtitle */}
                  <p 
                    className="font-['M_PLUS_2',Helvetica] text-white text-[8px] md:text-[10px] font-bold leading-[12px] md:leading-[15.638px] mt-1 md:mt-[6px]"
                  >
                    Prop Firms for Nigerian Traders: What You Should Know
                  </p>
                  
                  {/* Second Divider Line */}
                  <div 
                    className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-20 md:mt-24 lg:mt-[109px]"
                  />
                  
                  {/* Author and Date Section */}
                  <div className="flex items-center justify-between whitespace-nowrap mt-2 md:mt-[13px]">
                    <span 
                      className="font-['M_PLUS_2',Helvetica] text-white text-[7px] md:text-[8px] font-bold"
                    >
                      by Tracey Wilson
                    </span>
                    
                    {/* Date Badge */}
                    <div 
                      className="inline-flex justify-center items-center px-2 md:px-[8.421px] py-[1.203px] rounded-[12.03px] bg-[rgba(229,210,255,0.40)]"
                    >
                      <span 
                        className="font-['Poppins',Helvetica] text-white text-[5px] md:text-[6px] font-bold leading-[14.435px]"
                      >
                        August 20, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Post 3 */}
            <Link to="/blog/3" className="block w-full max-w-[449px]">
              <div 
                className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full h-auto aspect-[449/248]"
              >
                <img 
                  src="/blog/Blog-3.png" 
                  alt="Blog Post 3"
                  className="w-full h-full object-cover"
                />
                
                {/* Text Overlays */}
                <div className="absolute top-3 md:top-[17px] left-4 md:left-6 right-4 md:right-6">
                  {/* Title */}
                  <h3 
                    className="font-['M_PLUS_2',Helvetica] text-white text-xl md:text-2xl lg:text-[30px] font-bold"
                  >
                    How Prop<br />Firms Work in India
                  </h3>
                  
                  {/* First Divider Line */}
                  <div 
                    className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-2 md:mt-[9px]"
                  />
                  
                  {/* Subtitle */}
                  <p 
                    className="font-['M_PLUS_2',Helvetica] text-white text-[8px] md:text-[10px] font-bold leading-[12px] md:leading-[15.638px] mt-1 md:mt-[6px]"
                  >
                    How Prop Firms Work in India: A Trader's Guide
                  </p>
                  
                  {/* Second Divider Line */}
                  <div 
                    className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-20 md:mt-24 lg:mt-[109px]"
                  />
                  
                  {/* Author and Date Section */}
                  <div className="flex items-center justify-between whitespace-nowrap mt-2 md:mt-[13px]">
                    <span 
                      className="font-['M_PLUS_2',Helvetica] text-white text-[7px] md:text-[8px] font-bold"
                    >
                      by Tracey Wilson
                    </span>
                    
                    {/* Date Badge */}
                    <div 
                      className="inline-flex justify-center items-center px-2 md:px-[8.421px] py-[1.203px] rounded-[12.03px] bg-[rgba(229,210,255,0.40)]"
                    >
                      <span 
                        className="font-['Poppins',Helvetica] text-white text-[5px] md:text-[6px] font-bold leading-[14.435px]"
                      >
                        August 20, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHero;