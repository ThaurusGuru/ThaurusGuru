import { Volume2, List, Sparkles } from 'lucide-react';

function BlogArticle() {
  const ButtonStyle = {
    display: 'inline-flex',
    padding: '6px 12px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '20px',
    background: 'rgba(229, 210, 255, 0.20)',
    color: '#FFF',
    fontFamily: '"M PLUS 2", Helvetica',
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  const HeadingStyle = {
    color: '#FFF',
    fontFamily: '"M PLUS 2", Helvetica',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 'normal',
    marginBottom: '1rem'
  };

  const BodyStyle = {
    color: '#FFF',
    fontFamily: '"M PLUS 2", Helvetica',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 'normal',
    marginBottom: '1.5rem',
    width: '741px'
  };

  return (
    <div className="w-full flex justify-center px-6 lg:px-[100px] pt-[120px] lg:pt-[150px] pb-16 lg:pb-[100px]">
      <div className="w-full max-w-[1240px]">
        {/* Header Section - Title Area and Image */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start mb-12 lg:mb-16">
          {/* Title Area */}
          <div className="flex flex-col items-start w-full lg:w-[454px]">
            {/* Date Badge */}
            <div 
              className="inline-flex justify-center items-center mb-4 lg:mb-6"
              style={{
                padding: '2px 14px',
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

            {/* Title */}
            <h1 
              className="font-['M_PLUS_2',Helvetica] mb-4 lg:mb-6"
              style={{
                color: '#FFF',
                fontSize: 'clamp(28px, 5vw, 36px)',
                fontWeight: 700,
                lineHeight: '1.2'
              }}
            >
              How Smart Money Times the Perfect Entry
            </h1>

            {/* Author */}
            <p 
              className="font-['M_PLUS_2',Helvetica]"
              style={{
                color: '#FFF',
                fontSize: '14px',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              by Tracey Wilson
            </p>
          </div>

          {/* Image */}
          <div 
            className="w-full lg:w-[686px]"
            style={{ 
              height: 'auto',
              maxHeight: '351px',
              aspectRatio: '686 / 351'
            }}
          >
            <img 
              src="/blog/blog-img.svg" 
              alt="Smart Money Article"
              className="w-full h-full object-cover rounded-xl lg:rounded-none"
            />
          </div>
        </div>

        {/* Content Section with Sidebar Buttons */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Sidebar - Buttons */}
          <div className="flex flex-col gap-4 mb-8 lg:mb-0 lg:mr-[100px] w-full lg:w-[400px]">
            <div className="flex flex-wrap gap-2 lg:gap-4">
              <button style={ButtonStyle} className="hover:bg-[rgba(229, 210, 255, 0.30)] scale-90 lg:scale-100 origin-left">
                <Volume2 size={16} />
                Listen
              </button>
              <button style={ButtonStyle} className="hover:bg-[rgba(229, 210, 255, 0.30)] scale-90 lg:scale-100 origin-left">
                <List size={16} />
                On this page
              </button>
              <button style={ButtonStyle} className="hover:bg-[rgba(229, 210, 255, 0.30)] scale-90 lg:scale-100 origin-left">
                <Sparkles size={16} />
                AI summary
              </button>
            </div>
          </div>

          {/* Right Content - Article Text */}
          <div className="w-full lg:w-[741px]">
            <p style={{...BodyStyle, width: '100%'}}>
              Retail traders often ask the same question - a framework that focuses on how banks, hedge funds, and institutions actually move the market. Smart Money doesn't chase price. They engineer liquidity, create inefficiencies, and enter with intention.
            </p>

            <p style={{...BodyStyle, width: '100%'}}>
              Let's break down how Smart Money times the perfect entry.
            </p>

            <h2 style={HeadingStyle}>
              1. Smart Money Never Enters Randomly
            </h2>

            <p style={{...BodyStyle, width: '100%'}}>
              Institutions operate with large positions. They cannot enter all at once without moving price against themselves. Instead, they:
            </p>

            <ul className="list-disc ml-6 mb-6 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>Build positions in phases</li>
              <li>Manipulate price to grab liquidity</li>
              <li>Enter where risk is minimal and probability is high</li>
            </ul>

            <p style={{...BodyStyle, width: '100%'}}>
              Every entry is planned, not reactive.
            </p>

            <h2 style={HeadingStyle}>
              2. Liquidity Is the First Clue
            </h2>

            <p style={{...BodyStyle, width: '100%'}}>
              Smart Money needs liquidity to enter and exit trades. That liquidity usually sits:
            </p>

            <ul className="list-disc ml-6 mb-4 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>Above equal highs</li>
              <li>Below equal lows</li>
              <li>Around obvious support & resistance</li>
              <li>Near retail stop-loss zones</li>
            </ul>

            <p style={{...BodyStyle, width: '100%'}}>
              Price is often pushed into these areas intentionally, not by accident. When liquidity is taken, Smart Money prepares for the real move.
            </p>

            <p style={{ ...BodyStyle, width: '100%', fontWeight: 800 }}>
              Rule: Liquidity is not the target — it's the fuel.
            </p>

            <h2 style={HeadingStyle}>
              3. Market Structure Shift Confirms Intent
            </h2>

            <p style={{...BodyStyle, width: '100%'}}>
              After liquidity is swept, Smart Money looks for confirmation through structure:
            </p>

            <ul className="list-disc ml-6 mb-4 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>BOS (Break of Structure): Confirms continuation</li>
              <li>CHoCH (Change of Character): Signals potential reversal</li>
            </ul>

            <p style={{...BodyStyle, width: '100%'}}>
              A structure shift tells us that control has changed hands.
            </p>

            <p style={{...BodyStyle, width: '100%'}}>
              No structure shift = no trade.
            </p>

            <h2 style={HeadingStyle}>
              4. Fair Value Gaps: Where Smart Money Enters
            </h2>

            <p style={{...BodyStyle, width: '100%'}}>
              Once structure shifts, institutions don't chase price. They wait for price to return to imbalanced areas, known as Fair Value Gaps (FVGs).
            </p>

            <p style={{ ...BodyStyle, width: '100%', marginBottom: '0.5rem' }}>Why FVGs matter:</p>

            <ul className="list-disc ml-6 mb-4 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>They represent inefficiency caused by aggressive institutional orders</li>
              <li>Price often retraces to rebalance before continuing</li>
              <li>They offer low-risk, high-reward entries</li>
            </ul>

            <p style={{...BodyStyle, width: '100%'}}>
              Smart Money enters on the retrace, not the breakout.
            </p>

            <h2 style={HeadingStyle}>
              5. Time Matters More Than Indicators
            </h2>

            <p style={{...BodyStyle, width: '100%'}}>
              Smart Money is highly aware of session timing:
            </p>

            <ul className="list-disc ml-6 mb-4 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>London Open</li>
              <li>New York Open</li>
              <li>High-volume overlaps</li>
            </ul>

            <p style={{...BodyStyle, width: '100%'}}>
              Most manipulation and real moves happen during these windows. Outside these sessions, price often consolidates or ranges.
            </p>

            <p style={{ ...BodyStyle, width: '100%', marginBottom: '0.5rem' }}>Perfect entries usually occur when:</p>

            <ul className="list-disc ml-6 mb-6 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>Liquidity is taken</li>
              <li>Structure shifts</li>
              <li>Price retraces into FVG</li>
              <li>During high-volume sessions</li>
            </ul>

            <h2 style={HeadingStyle}>
              6. Precision Comes From Confluence
            </h2>

            <p style={{...BodyStyle, width: '100%'}}>
              A "perfect" Smart Money entry is never based on one factor. It's a confluence of conditions, such as:
            </p>

            <ul className="list-disc ml-6 mb-6 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>Liquidity sweep</li>
              <li>Market structure shift</li>
              <li>Entry at FVG or premium/discount zone</li>
              <li>Session timing</li>
            </ul>

            <p style={{...BodyStyle, width: '100%'}}>
              When all align, Smart Money executes with defined risk and clarity.
            </p>

            <h2 style={HeadingStyle}>
              7. Why Retail Traders Miss These Entries
            </h2>

            <p style={{ ...BodyStyle, width: '100%', marginBottom: '0.5rem' }}>Most retail traders:</p>

            <ul className="list-disc ml-6 mb-4 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>Enter breakouts</li>
              <li>Chase momentum</li>
              <li>Ignore liquidity</li>
              <li>Overuse indicators</li>
            </ul>

            <p style={{ ...BodyStyle, width: '100%', marginBottom: '0.5rem' }}>Smart Money does the opposite:</p>

            <ul className="list-disc ml-6 mb-6 text-white font-['M_PLUS_2',Helvetica] text-[16px] lg:text-[18px] font-bold">
              <li>They wait</li>
              <li>They let price come to them</li>
              <li>They trade from areas of inefficiency</li>
            </ul>

            <p style={{...BodyStyle, width: '100%'}}>
              Patience is the real edge.
            </p>

            <h2 style={HeadingStyle}>
              Final Thoughts
            </h2>

            <p style={{...BodyStyle, width: '100%'}}>
              Smart Money doesn't predict the market — they react to their own footprints. By understanding liquidity, structure, and imbalance, traders can stop guessing and start aligning with institutional logic.
            </p>

            <p style={{ ...BodyStyle, width: '100%', marginBottom: '2rem' }}>
              The perfect entry isn't about being fast. It's about being precise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogArticle;
