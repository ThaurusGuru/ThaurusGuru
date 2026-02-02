import { useEffect, useRef, useState } from 'react';

export const AffiliateHowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer for scroll-triggered animations - each step individually
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepData = (entry.target as HTMLElement).dataset.step;
            if (stepData) {
              const stepIndex = parseInt(stepData);
              setVisibleSteps((prev) => {
                if (!prev.includes(stepIndex)) {
                  return [...prev, stepIndex].sort();
                }
                return prev;
              });
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  // Progress bar animation based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollPercentage = Math.max(0, Math.min(1, 
            (windowHeight - rect.top) / (windowHeight + rect.height)
          ));
          setProgress(scrollPercentage * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Activate your Affiliate account',
      description: 'Contact support to verify and activate your status',
      position: 'right', // right side
      dotTop: '0px',
    },
    {
      number: 2,
      title: 'Promote your link',
      description: 'Share it anywhere - tracking ensures you get credit even if users buy later.',
      position: 'left', // left side
      dotTop: '200px',
    },
    {
      number: 3,
      title: 'Track Performance',
      description: 'Monitor clicks and purchases in real time via your dashboard.',
      position: 'right', // right side
      dotTop: '400px',
    },
    {
      number: 4,
      title: 'Claim rewards',
      description: 'Request your payout directly from the rewards page when eligible.',
      position: 'left', // left side
      dotTop: '600px',
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .heading-animated {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .heading-shimmer {
          background: linear-gradient(
            90deg,
            #FFF 0%,
            #E9B1FF 25%,
            #FFF 50%,
            #E9B1FF 75%,
            #FFF 100%
          );
          background-size: 2000px 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .timeline-container {
          position: relative;
          width: 6px;
          height: 802px;
          background: #571FA1;
          border-radius: 3px;
          margin-top: 110px;
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(233, 177, 255, 0.8),
              0 0 40px rgba(233, 177, 255, 0.6),
              0 0 60px rgba(122, 39, 239, 0.4);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(233, 177, 255, 1),
              0 0 60px rgba(233, 177, 255, 0.8),
              0 0 90px rgba(122, 39, 239, 0.6);
          }
        }

        .progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(180deg, #E9B1FF 0%, #7A27EF 100%);
          transition: height 0.1s ease-out;
          border-radius: 3px;
          box-shadow: 
            0 0 25px rgba(233, 177, 255, 0.9),
            0 0 50px rgba(233, 177, 255, 0.6),
            0 0 75px rgba(122, 39, 239, 0.4);
          animation: glowPulse 2s ease-in-out infinite;
        }

        .step-visible-left {
          animation: fadeInLeft 0.7s ease-out forwards;
        }

        .step-visible-right {
          animation: fadeInRight 0.7s ease-out forwards;
        }

        .dot-container {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .dot-visible {
          animation: scaleIn 0.5s ease-out forwards, pulse 2.5s ease-in-out infinite;
          animation-delay: 0s, 0.6s;
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          background-color: #FFF;
          border-radius: 50%;
          border: 3px solid #571FA1;
          box-shadow: 0 0 0 4px rgba(87, 31, 161, 0.3);
          opacity: 0;
        }

        .connecting-line {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 2px;
          background: linear-gradient(90deg, rgba(122, 39, 239, 0.3), #7A27EF);
          width: 0;
          transition: width 0.6s ease-out;
        }

        .connecting-line.visible {
          animation: lineGrow 0.6s ease-out forwards;
        }

        .connecting-line-left {
          right: 10px;
          background: linear-gradient(90deg, #7A27EF, rgba(122, 39, 239, 0.3));
        }

        .connecting-line-right {
          left: 10px;
        }

        .number-box-animated {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .number-box-animated::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .number-box-animated:hover::before {
          width: 100px;
          height: 100px;
        }

        .number-box-animated:hover {
          transform: scale(1.15) rotate(8deg);
          background: rgba(122, 39, 239, 0.5) !important;
          box-shadow: 0 10px 30px rgba(122, 39, 239, 0.5);
        }

        .step-content-wrapper {
          transition: all 0.3s ease;
          cursor: pointer;
          opacity: 0;
        }

        .step-content-wrapper:hover {
          transform: scale(1.03);
        }

        .step-content-wrapper:hover .step-title {
          color: #E9B1FF;
        }

        .step-content-wrapper:hover .step-desc {
          color: #D4A9FF;
        }

        .step-content-wrapper.active .step-title {
          color: #FFF;
          text-shadow: 0 0 10px rgba(233, 177, 255, 0.5);
        }

        .step-title {
          transition: all 0.3s ease;
        }

        .step-desc {
          transition: all 0.3s ease;
        }

        @media (max-width: 568px) {
          .howitworks-heading-mobile {
            text-align: center !important;
            font-family: "M PLUS 2" !important;
            font-size: 24px !important;
            font-weight: 400 !important;
            line-height: 35px !important;
            margin-top: 100px !important;
          }

          .timeline-container {
            margin-top: 60px !important;
            height: 700px !important;
          }
          
          .step-title-1-mobile {
            width: 139px !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }
          
          .step-desc-1-mobile {
            width: 157px !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-title-2-mobile {
            width: 82px !important;
            text-align: right !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-desc-2-mobile {
            width: 144px !important;
            text-align: right !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-title-3-mobile {
            width: 121px !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-desc-3-mobile {
            width: 151px !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-title-4-mobile {
            text-align: right !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-desc-4-mobile {
            width: 144px !important;
            text-align: right !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .connecting-line {
            width: 40px !important;
          }

          .connecting-line.visible {
            width: 40px !important;
          }
        }
      `}</style>
      
      <section ref={sectionRef} className="w-full flex flex-col items-center">
        <h2
          className="howitworks-heading-mobile heading-animated heading-shimmer text-center"
          style={{
            marginTop: '157px',
            textAlign: 'center',
            fontFamily: '"M PLUS 2"',
            fontSize: '42px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '60px',
          }}
        >
          How it works?
        </h2>

        <div
          ref={timelineRef}
          className="timeline-container"
        >
          {/* Progress Bar */}
          <div
            className="progress-bar"
            style={{
              height: `${Math.min(progress * 1.2, 100)}%`,
            }}
          />

          {steps.map((step, index) => (
            <div key={step.number}>
              {/* Dot Container - Perfectly centered on timeline */}
              <div
                className="dot-container"
                style={{
                  top: step.dotTop,
                }}
              >
                {/* Circle Dot */}
                <div
                  className={`timeline-dot ${visibleSteps.includes(index) ? 'dot-visible' : ''}`}
                />
                
                {/* Connecting Line */}
                <div
                  className={`connecting-line ${step.position === 'left' ? 'connecting-line-left' : 'connecting-line-right'} ${visibleSteps.includes(index) ? 'visible' : ''}`}
                  style={{
                    transitionDelay: `${0.3}s`,
                  }}
                />
              </div>

              {/* Step Content */}
              <div
                ref={(el) => { stepsRef.current[index] = el; }}
                data-step={index}
                className={`step-content-wrapper ${activeStep === index ? 'active' : ''} ${
                  visibleSteps.includes(index)
                    ? step.position === 'left'
                      ? 'step-visible-left'
                      : 'step-visible-right'
                    : ''
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                style={{
                  position: 'absolute',
                  top: `calc(${step.dotTop} - 23px)`,
                  ...(step.position === 'right'
                    ? { left: '50%', marginLeft: '93px' }
                    : { right: '50%', marginRight: '93px' }),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: step.position === 'right' ? 'flex-start' : 'flex-end',
                }}
              >
                {/* Number Box */}
                <div
                  className="number-box-animated"
                  style={{
                    display: 'flex',
                    width: '46px',
                    height: '46px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '23px',
                    background: 'rgba(122, 39, 239, 0.20)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Manrope',
                      fontSize: '24px',
                      fontWeight: '400',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <p
                  className={`step-title step-title-${step.number}-mobile`}
                  style={{
                    marginTop: '24px',
                    color: '#FFF',
                    textAlign: step.position === 'right' ? 'left' : 'right',
                    fontFamily: 'Blinker',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '26px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step.title}
                </p>

                {/* Description */}
                <p
                  className={`step-desc step-desc-${step.number}-mobile`}
                  style={{
                    marginTop: '2px',
                    color: '#B988FA',
                    textAlign: step.position === 'right' ? 'left' : 'right',
                    fontFamily: 'Cambay',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '26px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};