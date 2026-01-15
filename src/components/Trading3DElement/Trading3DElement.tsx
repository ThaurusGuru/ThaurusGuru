import { useEffect, useRef } from "react";

export const Trading3DElement = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add any interactive behavior here if needed
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Scene Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Candlestick Bars Container */}
        <div className="relative flex items-end justify-center gap-4 md:gap-5 lg:gap-7 h-[300px] md:h-[340px] lg:h-[380px]">
          {/* Bar 1 - Shortest */}
          <div className="relative animate-bar-float-1" style={{ animationDelay: "0s" }}>
            {/* Top Stick */}
            <div className="absolute top-[-35px] md:top-[-45px] left-1/2 -translate-x-1/2 w-[3px] h-[35px] md:h-[45px] bg-gradient-to-t from-[#9A51FF] to-transparent" />
            
            <div className="w-[55px] md:w-[65px] lg:w-[80px] h-[140px] md:h-[160px] lg:h-[180px] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] relative overflow-hidden
              bg-gradient-to-b from-[#9A51FF] via-[#7A27EF] to-[#5D1DA0]
              shadow-[0_0_30px_rgba(154,81,255,0.6),0_0_60px_rgba(122,39,239,0.4)]
              backdrop-blur-sm
              before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/10 before:to-transparent
              after:absolute after:inset-[1px] after:rounded-[7px] md:after:rounded-[9px] lg:after:rounded-[11px] after:border after:border-white/20">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[8px] md:rounded-t-[10px] lg:rounded-t-[12px]" />
            </div>
            
            {/* Bottom Stick */}
            <div className="absolute bottom-[-35px] md:bottom-[-45px] left-1/2 -translate-x-1/2 w-[3px] h-[35px] md:h-[45px] bg-gradient-to-b from-[#5D1DA0] to-transparent" />
          </div>

          {/* Bar 2 - Tallest (Center) */}
          <div className="relative animate-bar-float-2" style={{ animationDelay: "0.3s" }}>
            {/* Top Stick */}
            <div className="absolute top-[-50px] md:top-[-60px] left-1/2 -translate-x-1/2 w-[4px] h-[50px] md:h-[60px] bg-gradient-to-t from-[#E9B1FF] to-transparent shadow-[0_0_10px_rgba(233,177,255,0.6)]" />
            
            <div className="w-[60px] md:w-[75px] lg:w-[95px] h-[210px] md:h-[240px] lg:h-[270px] rounded-[10px] md:rounded-[12px] lg:rounded-[16px] relative overflow-hidden
              bg-gradient-to-b from-[#E9B1FF] via-[#9A51FF] to-[#7A27EF]
              shadow-[0_0_40px_rgba(233,177,255,0.7),0_0_80px_rgba(154,81,255,0.5)]
              backdrop-blur-sm
              before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/15 before:to-transparent
              after:absolute after:inset-[1px] after:rounded-[9px] md:after:rounded-[11px] lg:after:rounded-[15px] after:border after:border-white/30">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" style={{ animationDelay: "0.5s" }} />
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-white/40 to-transparent rounded-t-[10px] md:rounded-t-[12px] lg:rounded-t-[16px]" />
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-white/10 animate-pulse" style={{ animationDuration: "3s" }} />
            </div>
            
            {/* Bottom Stick */}
            <div className="absolute bottom-[-50px] md:bottom-[-60px] left-1/2 -translate-x-1/2 w-[4px] h-[50px] md:h-[60px] bg-gradient-to-b from-[#7A27EF] to-transparent shadow-[0_0_10px_rgba(122,39,239,0.6)]" />
          </div>

          {/* Bar 3 - Medium */}
          <div className="relative animate-bar-float-3" style={{ animationDelay: "0.6s" }}>
            {/* Top Stick */}
            <div className="absolute top-[-40px] md:top-[-50px] left-1/2 -translate-x-1/2 w-[3px] h-[40px] md:h-[50px] bg-gradient-to-t from-[#A855F7] to-transparent" />
            
            <div className="w-[55px] md:w-[65px] lg:w-[80px] h-[165px] md:h-[185px] lg:h-[205px] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] relative overflow-hidden
              bg-gradient-to-b from-[#A855F7] via-[#7A27EF] to-[#6B21A8]
              shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(122,39,239,0.4)]
              backdrop-blur-sm
              before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/10 before:to-transparent
              after:absolute after:inset-[1px] after:rounded-[7px] md:after:rounded-[9px] lg:after:rounded-[11px] after:border after:border-white/20">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" style={{ animationDelay: "1s" }} />
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[8px] md:rounded-t-[10px] lg:rounded-t-[12px]" />
            </div>
            
            {/* Bottom Stick */}
            <div className="absolute bottom-[-40px] md:bottom-[-50px] left-1/2 -translate-x-1/2 w-[3px] h-[40px] md:h-[50px] bg-gradient-to-b from-[#6B21A8] to-transparent" />
          </div>
        </div>

        {/* Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Ring 1 - Outer */}
          <div className="absolute w-[340px] md:w-[420px] lg:w-[530px] h-[340px] md:h-[420px] lg:h-[530px] animate-orbit-slow">
            <div className="w-full h-full rounded-full border-2 border-[#9A51FF]/40 
              shadow-[0_0_20px_rgba(154,81,255,0.3),inset_0_0_20px_rgba(154,81,255,0.2)]"
              style={{ transform: "rotateX(75deg) rotateZ(0deg)" }} />
          </div>

          {/* Ring 2 - Middle */}
          <div className="absolute w-[280px] md:w-[340px] lg:w-[430px] h-[280px] md:h-[340px] lg:h-[430px] animate-orbit-medium">
            <div className="w-full h-full rounded-full border-2 border-[#E9B1FF]/30
              shadow-[0_0_15px_rgba(233,177,255,0.3),inset_0_0_15px_rgba(233,177,255,0.2)]"
              style={{ transform: "rotateX(75deg) rotateZ(45deg)" }} />
          </div>

          {/* Ring 3 - Inner */}
          <div className="absolute w-[220px] md:w-[270px] lg:w-[340px] h-[220px] md:h-[270px] lg:h-[340px] animate-orbit-fast">
            <div className="w-full h-full rounded-full border-2 border-[#7A27EF]/50
              shadow-[0_0_25px_rgba(122,39,239,0.4),inset_0_0_25px_rgba(122,39,239,0.3)]"
              style={{ transform: "rotateX(75deg) rotateZ(90deg)" }} />
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#E9B1FF] animate-float-particle"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 3)}s`,
                boxShadow: "0 0 10px rgba(233,177,255,0.8)"
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes bar-float-1 {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-15px) scale(1.02);
          }
        }

        @keyframes bar-float-2 {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-20px) scale(1.03);
          }
        }

        @keyframes bar-float-3 {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-18px) scale(1.02);
          }
        }

        @keyframes orbit-slow {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg);
          }
        }

        @keyframes orbit-medium {
          from {
            transform: rotateZ(45deg);
          }
          to {
            transform: rotateZ(405deg);
          }
        }

        @keyframes orbit-fast {
          from {
            transform: rotateZ(90deg);
          }
          to {
            transform: rotateZ(450deg);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.8;
          }
        }

        .animate-bar-float-1 {
          animation: bar-float-1 4s ease-in-out infinite;
        }

        .animate-bar-float-2 {
          animation: bar-float-2 3.5s ease-in-out infinite;
        }

        .animate-bar-float-3 {
          animation: bar-float-3 4.2s ease-in-out infinite;
        }

        .animate-orbit-slow {
          animation: orbit-slow 20s linear infinite;
        }

        .animate-orbit-medium {
          animation: orbit-medium 15s linear infinite;
        }

        .animate-orbit-fast {
          animation: orbit-fast 10s linear infinite;
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
