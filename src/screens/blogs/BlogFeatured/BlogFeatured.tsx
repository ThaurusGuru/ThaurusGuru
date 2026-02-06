import { Link } from 'react-router-dom';

function BlogFeatured() {
  return (
    <div className="relative z-10 w-full flex justify-center px-4 lg:px-[100px] pt-16 lg:pt-[100px] pb-16 lg:pb-24">
      <div className="w-full max-w-[1240px]">
        {/* Featured Heading */}
        <h2 
          className="font-['M_PLUS_2',Helvetica]"
          style={{
            color: '#FFF',
            fontSize: '42px',
            fontWeight: 700,
            lineHeight: 'normal'
          }}
        >
          Featured
        </h2>
        
        {/* Divider Line */}
        <div 
          className="w-full lg:w-[1240px]"
          style={{
            height: '0.4px',
            background: '#DEC7FF',
            marginTop: '27px'
          }}
        />
        
        {/* Blog Cards - Horizontally Aligned on desktop, vertical on mobile */}
        <div className="flex flex-col lg:flex-row justify-center gap-[37px]" style={{ marginTop: '92px' }}>
          {/* Blog Card 1 */}
          <Link to="/blog/1" className="block">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              style={{ 
                width: '449px',
                height: '248px'
              }}
            >
              <img 
                src="/blog/blog-img.svg" 
                alt="Featured Blog 1"
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
                  Smart Money
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
                  How Smart Money Times the Perfect Entry
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

          {/* Blog Card 2 */}
          <Link to="/blog/2" className="block">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              style={{ 
                width: '449px',
                height: '248px'
              }}
            >
              <img 
                src="/blog/blog-img.svg" 
                alt="Featured Blog 2"
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
                  Smart Money
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
                  How Smart Money Times the Perfect Entry
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

          {/* Blog Card 3 */}
          <Link to="/blog/3" className="block">
            <div 
              className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              style={{ 
                width: '449px',
                height: '248px'
              }}
            >
              <img 
                src="/blog/blog-img.svg" 
                alt="Featured Blog 3"
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
                  Smart Money
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
                  How Smart Money Times the Perfect Entry
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
  )
}

export default BlogFeatured;
