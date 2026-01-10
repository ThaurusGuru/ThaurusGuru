import { Badge } from "../../../components/ui/badge";

export const AboutUsOurTeam = () => {
  return (
    <section className="relative w-full flex flex-col items-center mt-[150px] md:mt-[200px] mb-[100px] md:mb-[150px]">
      {/* Badge */}
      <Badge className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms] 
            inline-flex items-center justify-center self-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 h-auto 
            rounded-full border border-white/60 sm:border-2
            bg-linear-to-r from-[#2c115c] via-[#47107b] to-[#4d0d8d]
            shadow-lg shadow-purple-500/30">
        <span className="font-['Blinker',Helvetica] font-medium text-white text-[10px] sm:text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          Who we are
        </span>
      </Badge>

      {/* Heading - 25px below badge */}
      <h2 
        className="font-['M_PLUS_2',Helvetica] font-normal text-center text-[24px] md:text-[42px] leading-[35px] md:leading-[60px] mt-[25px]"
        style={{
          background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Our Team
      </h2>

      {/* Team Members Row - 107px below heading */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-[40px] md:mt-[67px] gap-[40px] md:gap-[30px]">
        
        {/* Member 1: Placeholder */}
        <div className="flex flex-col items-center md:items-start">
          <div
            className="relative p-px rounded-[10px] overflow-hidden w-[300px] md:w-[326px] h-[386px] md:h-[420px]"
            style={{
              background: 'linear-gradient(180deg, rgba(233, 177, 255, 0.15) 0%, rgba(233, 177, 255, 0.5) 40%, rgba(233, 177, 255, 0.4) 60%, rgba(233, 177, 255, 0.05) 100%)',
            }}
          >
            <div
              className="relative w-full h-full rounded-[9px] overflow-hidden"
              style={{
                background: 'rgba(27, 8, 46, 0.40)',
              }}
            >
              <div className="w-full h-full bg-[#1b082e]/50" />
            </div>
          </div>
          <div 
            style={{
              marginTop: '27px',
              display: 'inline-flex',
              height: '40px',
              padding: '3px 18px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '30px',
              border: '1px solid #B988FA',
            }}
          >
            <span className="font-['M_PLUS_2',Helvetica] text-[#FFF] text-[20px] font-normal">
              Team Member
            </span>
          </div>
          <span className="font-['M_PLUS_2',Helvetica] mt-[19px] text-[#FFF] text-[16px] font-normal ml-0 md:ml-[12px]">
            Position
          </span>
        </div>

        {/* Member 2: Matej Kubo */}
        <div className="flex flex-col items-center md:items-start">
          <div
            className="relative p-px rounded-[10px] overflow-hidden w-[300px] md:w-[326px] h-[386px] md:h-[420px]"
            style={{
              background: 'linear-gradient(180deg, rgba(233, 177, 255, 0.15) 0%, rgba(233, 177, 255, 0.5) 40%, rgba(233, 177, 255, 0.4) 60%, rgba(233, 177, 255, 0.05) 100%)',
            }}
          >
            <div
              className="relative w-full h-full rounded-[9px] overflow-hidden"
              style={{
                background: 'rgba(27, 8, 46, 0.40)',
              }}
            >
              <div className="w-full h-full bg-[#1b082e]/50" />
            </div>
          </div>
          <div 
            style={{
              marginTop: '27px',
              display: 'inline-flex',
              height: '40px',
              padding: '3px 18px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '30px',
              border: '1px solid #B988FA',
            }}
          >
            <span className="font-['M_PLUS_2',Helvetica] text-[#FFF] text-[20px] font-normal">
              Matej Kubo
            </span>
          </div>
          <span className="font-['M_PLUS_2',Helvetica] mt-[19px] text-[#FFF] text-[16px] font-normal ml-0 md:ml-[12px]">
            Founder & CEO
          </span>
        </div>

        {/* Member 3: Placeholder */}
        <div className="flex flex-col items-center md:items-start">
          <div
            className="relative p-px rounded-[10px] overflow-hidden w-[300px] md:w-[326px] h-[386px] md:h-[420px]"
            style={{
              background: 'linear-gradient(180deg, rgba(233, 177, 255, 0.15) 0%, rgba(233, 177, 255, 0.5) 40%, rgba(233, 177, 255, 0.4) 60%, rgba(233, 177, 255, 0.05) 100%)',
            }}
          >
            <div
              className="relative w-full h-full rounded-[9px] overflow-hidden"
              style={{
                background: 'rgba(27, 8, 46, 0.40)',
              }}
            >
              <div className="w-full h-full bg-[#1b082e]/50" />
            </div>
          </div>
          <div 
            style={{
              marginTop: '27px',
              display: 'inline-flex',
              height: '40px',
              padding: '3px 18px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '30px',
              border: '1px solid #B988FA',
            }}
          >
            <span className="font-['M_PLUS_2',Helvetica] text-[#FFF] text-[20px] font-normal">
              Team Member
            </span>
          </div>
          <span className="font-['M_PLUS_2',Helvetica] mt-[19px] text-[#FFF] text-[16px] font-normal ml-0 md:ml-[12px]">
            Position
          </span>
        </div>

      </div>
    </section>
  );
};
