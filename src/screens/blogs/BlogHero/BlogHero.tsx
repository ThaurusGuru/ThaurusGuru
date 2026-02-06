import { Link } from 'react-router-dom';

function BlogHero() {
  return (
    <div className="w-full" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-1 mb-[28px]" style={{ marginTop: '150px' }}>
        <span 
          className="font-['Cambay',Helvetica]"
          style={{
            color: '#FFF',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 'normal'
          }}
        >
        
        </span>
        <span className="text-white"></span>
        <span 
          className="font-['Cambay',Helvetica]"
          style={{
            color: '#A755FF',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 'normal'
          }}
        >
         
        </span>
      </div>

      

      {/* Centered Blog Images Grid */}
      <div className="flex justify-center px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-[37px] w-full lg:w-auto">
          {/* Large Left Image - Hidden on mobile */}
          <Link to="/blog/4" className="hidden lg:block">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              style={{ 
                width: '754px',
                height: '496px'
              }}
            >
              <img 
                src="/blog/blog-img.png" 
                alt="Featured Blog"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlays */}
              <div className="absolute" style={{ top: '25px', left: '42px' }}>
                {/* Title */}
                <h2 
                  className="font-['M_PLUS_2',Helvetica]"
                  style={{
                    color: '#FFF',
                    fontSize: '52px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  Scope360°
                </h2>
                
                {/* First Divider Line */}
                <div 
                  style={{
                    width: '670px',
                    height: '0.4px',
                    background: '#DEC7FF',
                    marginTop: '17px'
                  }}
                />
                
                {/* Subtitle */}
                <p 
                  className="font-['M_PLUS_2',Helvetica]"
                  style={{
                    color: '#FFF',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '26px',
                    marginTop: '12px'
                  }}
                >
                  The AI-Powered Trading Journal for Crypto & Forex
                </p>
                
                {/* Second Divider Line */}
                <div 
                  style={{
                    width: '670px',
                    height: '0.4px',
                    background: '#DEC7FF',
                    marginTop: '265px'
                  }}
                />
                
                {/* Author and Date Section */}
                <div className="flex items-center" style={{ marginTop: '17px' }}>
                  <span 
                    className="font-['M_PLUS_2',Helvetica]"
                    style={{
                      color: '#FFF',
                      fontSize: '14px',
                      fontWeight: 700,
                      lineHeight: 'normal'
                    }}
                  >
                    by Thaurus Team
                  </span>
                  
                  {/* Date Badge */}
                  <div 
                    className="inline-flex justify-center items-center"
                    style={{
                      marginLeft: '447px',
                      padding: '2px 14px',
                      gap: '10px',
                      borderRadius: '20px',
                      background: 'rgba(229, 210, 255, 0.40)'
                    }}
                  >
                    <span 
                      className="font-['Poppins',Helvetica]"
                      style={{
                        color: '#FFF',
                        fontSize: '10px',
                        fontWeight: 700,
                        lineHeight: '24px'
                      }}
                    >
                      August 20, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Right Side - Three Smaller Images */}
          <div className="flex flex-col gap-[37px] items-center lg:items-start px-8 lg:px-0">
            {/* Blog Post 1 */}
            <Link to="/blog/1" className="block">
              <div 
                className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                style={{ 
                  width: '449px',
                  height: '248px'
                }}
              >
              <img 
                src="/blog/Blog-1.png" 
                alt="Blog Post 1"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlays */}
              <div className="absolute" style={{ top: '17px', left: '24px' }}>
                {/* Title */}
                <h3 
                  className="font-['M_PLUS_2',Helvetica]"
                  style={{
                    color: '#FFF',
                    fontSize: '30px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  Best Prop Firms Nigeria
                </h3>
                
                {/* First Divider Line */}
                <div 
                  style={{
                    width: '402px',
                    height: '0.241px',
                    background: '#DEC7FF',
                    marginTop: '9px'
                  }}
                />
                
                {/* Subtitle */}
                <p 
                  className="font-['M_PLUS_2',Helvetica]"
                  style={{
                    color: '#FFF',
                    fontSize: '10px',
                    fontWeight: 700,
                    lineHeight: '15.638px',
                    marginTop: '6px'
                  }}
                >
                  Top Prop Firms Nigerian Traders Can Trust in 2026
                </p>
                
                {/* Second Divider Line */}
                <div 
                  style={{
                    width: '402px',
                    height: '0.241px',
                    background: '#DEC7FF',
                    marginTop: '109px'
                  }}
                />
                
                {/* Author and Date Section */}
                <div className="flex items-center whitespace-nowrap" style={{ marginTop: '13px' }}>
                  <span 
                    className="font-['M_PLUS_2',Helvetica]"
                    style={{
                      color: '#FFF',
                      fontSize: '8px',
                      fontWeight: 700,
                      lineHeight: 'normal'
                    }}
                  >
                    by Tracey Wilson
                  </span>
                  
                  {/* Date Badge */}
                  <div 
                    className="inline-flex justify-center items-center"
                    style={{
                      marginLeft: '220px',
                      padding: '1.203px 8.421px',
                      gap: '6.015px',
                      borderRadius: '12.03px',
                      background: 'rgba(229, 210, 255, 0.40)'
                    }}
                  >
                    <span 
                      className="font-['Poppins',Helvetica]"
                      style={{
                        color: '#FFF',
                        fontSize: '6px',
                        fontWeight: 700,
                        lineHeight: '14.435px'
                      }}
                    >
                      August 20, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </Link>

            {/* Blog Post 2 */}
            <Link to="/blog/2" className="block">
              <div 
                className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                style={{ 
                  width: '449px',
                  height: '248px'
                }}
              >
                <img 
                  src="/blog/Blog-2.png" 
                  alt="Blog Post 2"
                  className="w-full h-full object-cover"
                />
                
                {/* Text Overlays */}
                <div className="absolute" style={{ top: '17px', left: '24px' }}>
                  {/* Title */}
                  <h3 
                    className="font-['M_PLUS_2',Helvetica]"
                    style={{
                      color: '#FFF',
                      fontSize: '30px',
                      fontWeight: 700,
                      lineHeight: 'normal'
                    }}
                  >
                    Prop Trading for Nigerians
                  </h3>
                  
                  {/* First Divider Line */}
                  <div 
                    style={{
                      width: '402px',
                      height: '0.241px',
                      background: '#DEC7FF',
                      marginTop: '9px'
                    }}
                  />
                  
                  {/* Subtitle */}
                  <p 
                    className="font-['M_PLUS_2',Helvetica]"
                    style={{
                      color: '#FFF',
                      fontSize: '10px',
                      fontWeight: 700,
                      lineHeight: '15.638px',
                      marginTop: '6px'
                    }}
                  >
                    Prop Firms for Nigerian Traders: What You Should Know
                  </p>
                  
                  {/* Second Divider Line */}
                  <div 
                    style={{
                      width: '402px',
                      height: '0.241px',
                      background: '#DEC7FF',
                      marginTop: '109px'
                    }}
                  />
                  
                  {/* Author and Date Section */}
                  <div className="flex items-center whitespace-nowrap" style={{ marginTop: '13px' }}>
                    <span 
                      className="font-['M_PLUS_2',Helvetica]"
                      style={{
                        color: '#FFF',
                        fontSize: '8px',
                        fontWeight: 700,
                        lineHeight: 'normal'
                      }}
                    >
                      by Tracey Wilson
                    </span>
                    
                    {/* Date Badge */}
                    <div 
                      className="inline-flex justify-center items-center"
                      style={{
                        marginLeft: '220px',
                        padding: '1.203px 8.421px',
                        gap: '6.015px',
                        borderRadius: '12.03px',
                        background: 'rgba(229, 210, 255, 0.40)'
                      }}
                    >
                      <span 
                        className="font-['Poppins',Helvetica]"
                        style={{
                          color: '#FFF',
                          fontSize: '6px',
                          fontWeight: 700,
                          lineHeight: '14.435px'
                        }}
                      >
                        August 20, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Post 3 */}
            <Link to="/blog/3" className="block">
              <div 
                className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                style={{ 
                  width: '449px',
                  height: '248px'
                }}
              >
                <img 
                  src="/blog/Blog-3.png" 
                  alt="Blog Post 3"
                  className="w-full h-full object-cover"
                />
                
                {/* Text Overlays */}
                <div className="absolute" style={{ top: '17px', left: '24px' }}>
                  {/* Title */}
                  <h3 
                    className="font-['M_PLUS_2',Helvetica]"
                    style={{
                      color: '#FFF',
                      fontSize: '30px',
                      fontWeight: 700,
                      lineHeight: 'normal'
                    }}
                  >
                    How Prop<br />Firms Work in India
                  </h3>
                  
                  {/* First Divider Line */}
                  <div 
                    style={{
                      width: '402px',
                      height: '0.241px',
                      background: '#DEC7FF',
                      marginTop: '9px'
                    }}
                  />
                  
                  {/* Subtitle */}
                  <p 
                    className="font-['M_PLUS_2',Helvetica]"
                    style={{
                      color: '#FFF',
                      fontSize: '10px',
                      fontWeight: 700,
                      lineHeight: '15.638px',
                      marginTop: '6px'
                    }}
                  >
                    How Prop Firms Work in India: A Trader's Guide
                  </p>
                  
                  {/* Second Divider Line */}
                  <div 
                    style={{
                      width: '402px',
                      height: '0.241px',
                      background: '#DEC7FF',
                      marginTop: '109px'
                    }}
                  />
                  
                  {/* Author and Date Section */}
                  <div className="flex items-center whitespace-nowrap" style={{ marginTop: '13px' }}>
                    <span 
                      className="font-['M_PLUS_2',Helvetica]"
                      style={{
                        color: '#FFF',
                        fontSize: '8px',
                        fontWeight: 700,
                        lineHeight: 'normal'
                      }}
                    >
                      by Tracey Wilson
                    </span>
                    
                    {/* Date Badge */}
                    <div 
                      className="inline-flex justify-center items-center"
                      style={{
                        marginLeft: '220px',
                        padding: '1.203px 8.421px',
                        gap: '6.015px',
                        borderRadius: '12.03px',
                        background: 'rgba(229, 210, 255, 0.40)'
                      }}
                    >
                      <span 
                        className="font-['Poppins',Helvetica]"
                        style={{
                          color: '#FFF',
                          fontSize: '6px',
                          fontWeight: 700,
                          lineHeight: '14.435px'
                        }}
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