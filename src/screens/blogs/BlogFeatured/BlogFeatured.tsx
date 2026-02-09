import { Link } from 'react-router-dom';

function BlogFeatured() {
  return (
    <div className="relative z-10 w-full flex justify-center px-4 md:px-8 lg:px-[100px] pt-12 md:pt-16 lg:pt-[100px] pb-12 md:pb-16 lg:pb-24">
      <div className="w-full max-w-[1240px]">
        {/* Featured Heading */}
        <h2 
          className="font-['M_PLUS_2',Helvetica] text-white text-3xl md:text-4xl lg:text-[42px] font-bold"
        >
          Featured
        </h2>
        
        {/* Divider Line */}
        <div 
          className="w-full h-[0.4px] bg-[#DEC7FF] mt-4 md:mt-6 lg:mt-[27px]"
        />
        
        {/* Blog Cards - Horizontally Aligned on desktop, vertical on mobile */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-[37px] mt-12 md:mt-16 lg:mt-[92px]">
          {/* Blog Card 1 */}
          <Link to="/blog/1" className="block w-full max-w-[449px] mx-auto lg:mx-0">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full h-auto aspect-449/248"
            >
              <img 
                src="/blog/blog-img.svg" 
                alt="Featured Blog 1"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlays */}
              <div className="absolute top-3 md:top-[17px] left-4 md:left-6 right-4 md:right-6">
                {/* Title */}
                <h3 
                  className="font-['M_PLUS_2',Helvetica] text-white text-xl md:text-2xl lg:text-[30px] font-bold"
                >
                  Smart Money
                </h3>
                
                {/* First Divider Line */}
                <div 
                  className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-2 md:mt-[9px]"
                />
                
                {/* Subtitle */}
                <p 
                  className="font-['M_PLUS_2',Helvetica] text-white text-[8px] md:text-[10px] font-bold leading-[12px] md:leading-[15.638px] mt-1 md:mt-[6px]"
                >
                  How Smart Money Times the Perfect Entry
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

          {/* Blog Card 2 */}
          <Link to="/blog/2" className="block w-full max-w-[449px] mx-auto lg:mx-0">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full h-auto aspect-449/248"
            >
              <img 
                src="/blog/blog-img.svg" 
                alt="Featured Blog 2"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlays */}
              <div className="absolute top-3 md:top-[17px] left-4 md:left-6 right-4 md:right-6">
                {/* Title */}
                <h3 
                  className="font-['M_PLUS_2',Helvetica] text-white text-xl md:text-2xl lg:text-[30px] font-bold"
                >
                  Smart Money
                </h3>
                
                {/* First Divider Line */}
                <div 
                  className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-2 md:mt-[9px]"
                />
                
                {/* Subtitle */}
                <p 
                  className="font-['M_PLUS_2',Helvetica] text-white text-[8px] md:text-[10px] font-bold leading-[12px] md:leading-[15.638px] mt-1 md:mt-[6px]"
                >
                  How Smart Money Times the Perfect Entry
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

          {/* Blog Card 3 */}
          <Link to="/blog/3" className="block w-full max-w-[449px] mx-auto lg:mx-0">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full h-auto aspect-449/248"
            >
              <img 
                src="/blog/blog-img.svg" 
                alt="Featured Blog 3"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlays */}
              <div className="absolute top-3 md:top-[17px] left-4 md:left-6 right-4 md:right-6">
                {/* Title */}
                <h3 
                  className="font-['M_PLUS_2',Helvetica] text-white text-xl md:text-2xl lg:text-[30px] font-bold"
                >
                  Smart Money
                </h3>
                
                {/* First Divider Line */}
                <div 
                  className="w-full max-w-[402px] h-[0.241px] bg-[#DEC7FF] mt-2 md:mt-[9px]"
                />
                
                {/* Subtitle */}
                <p 
                  className="font-['M_PLUS_2',Helvetica] text-white text-[8px] md:text-[10px] font-bold leading-[12px] md:leading-[15.638px] mt-1 md:mt-[6px]"
                >
                  How Smart Money Times the Perfect Entry
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
  )
}

export default BlogFeatured;
