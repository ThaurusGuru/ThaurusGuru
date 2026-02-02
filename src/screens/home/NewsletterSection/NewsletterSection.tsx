export const NewsletterSection = () => {
  return (
    <section className="relative w-full py-12 md:py-20 px-4 flex flex-col items-center z-10">
      {/* Heading */}
      <h2 className="text-center mb-6 md:mb-8">
        <span 
          className="font-['M_PLUS_2',Helvetica] block"
          style={{
            color: '#FFF',
            textShadow: '0 0 4px #AB67FF',
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 600,
            lineHeight: '1.4',
            letterSpacing: '0.52px'
          }}
        >
          Subscribe to Our
        </span>
        <span 
          className="font-['M_PLUS_2',Helvetica] block"
          style={{
            color: '#B982FB',
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 600,
            lineHeight: '1.4',
            letterSpacing: '0.52px'
          }}
        >
          Newsletter
        </span>
      </h2>

      {/* Email Input and Button */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-8 w-full max-w-[350px] md:max-w-fit">
        {/* Email Input Container */}
        <div 
          className="flex items-center border border-[#B982FB]/30 rounded-full w-full md:w-auto"
          style={{
            maxWidth: '100%',
            padding: '12px 24px',
            gap: '10px',
            background: 'rgba(0, 0, 0, 0.20)'
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border-none outline-none font-['Poppins',Helvetica] placeholder:text-[#7D3DC1]"
            style={{
              color: '#7D3DC1',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: '22px'
            }}
          />
        </div>

        {/* Get Started Button */}
        <button
          className="flex justify-center items-center transition-transform hover:scale-105 w-full md:w-auto"
          style={{
            padding: '12px 32px',
            gap: '10px',
            borderRadius: '34px',
            border: '1px solid #B982FB',
            background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)'
          }}
        >
          <span 
            className="font-['Poppins',Helvetica]"
            style={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '22px'
            }}
          >
            Get Started
          </span>
        </button>
      </div>

      {/* Decorative Line */}
      <div 
        className="mt-6 md:mt-[30px]"
        style={{
          width: '200px',
          maxWidth: '80%',
          height: '0.8px',
          background: 'linear-gradient(90deg, #36105F 0%, #B982FB 50%, #35105D 100%)'
        }}
      />

      {/* Benefits */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[30px] mt-6 md:mt-[30px] w-full max-w-[350px] md:max-w-fit">
        {/* Benefit 1 - Early access to updates */}
        <div 
          className="flex justify-center items-center border border-[#B982FB]/30 w-full md:w-auto"
          style={{
            padding: '10px 20px',
            gap: '10px',
            borderRadius: '21px',
            background: 'rgba(0, 0, 0, 0.20)'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            className="flex-shrink-0"
            style={{
              width: '20px',
              height: '20px',
              aspectRatio: '1/1'
            }}
          >
            <path 
              d="M15 2H10M4 13.5C4.00016 11.819 4.49876 10.1757 5.43277 8.77808C6.36677 7.38041 7.69423 6.29107 9.2473 5.64779C10.8004 5.00452 12.5093 4.83619 14.158 5.1641C15.8068 5.492 17.3213 6.30142 18.51 7.49M18.51 7.49C19.6986 8.67874 20.508 10.1932 20.8359 11.842C21.1638 13.4907 20.9955 15.1996 20.3522 16.7527C19.7089 18.3058 18.6196 19.6332 17.2219 20.5672C15.8243 21.5012 14.181 21.9998 12.5 22H3M18.51 7.49L20 6M8 19H3M6 16H3M12.5 13.5L16 10" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span 
            className="font-['Poppins',Helvetica] text-center"
            style={{
              color: '#FFF',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '20px'
            }}
          >
            Early access to updates
          </span>
        </div>

        {/* Benefit 2 - Chance to win a $25k account */}
        <div 
          className="flex justify-center items-center border border-[#B982FB]/30 w-full md:w-auto"
          style={{
            padding: '10px 20px',
            gap: '10px',
            borderRadius: '21px',
            background: 'rgba(0, 0, 0, 0.20)'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            className="flex-shrink-0"
            style={{
              width: '20px',
              height: '20px',
              aspectRatio: '1/1'
            }}
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M11.948 1.25H12.052C12.951 1.25 13.7 1.25 14.294 1.33C14.922 1.414 15.489 1.6 15.944 2.055C16.4 2.511 16.586 3.078 16.67 3.705C16.73 4.145 16.745 4.669 16.749 5.275C17.397 5.296 17.975 5.335 18.489 5.403C19.661 5.561 20.61 5.893 21.359 6.641C22.107 7.39 22.439 8.339 22.597 9.511C22.75 10.651 22.75 12.106 22.75 13.944V14.056C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.944C8.106 22.75 6.65 22.75 5.511 22.597C4.339 22.439 3.39 22.107 2.641 21.359C1.893 20.61 1.561 19.661 1.403 18.489C1.25 17.349 1.25 15.894 1.25 14.056V13.944C1.25 12.106 1.25 10.65 1.403 9.511C1.561 8.339 1.893 7.39 2.641 6.641C3.39 5.893 4.339 5.561 5.511 5.403C6.08859 5.33223 6.66927 5.28952 7.251 5.275C7.255 4.669 7.271 4.145 7.33 3.705C7.414 3.078 7.6 2.511 8.055 2.055C8.511 1.6 9.078 1.415 9.705 1.33C10.3 1.25 11.05 1.25 11.948 1.25ZM8.752 5.252C9.13 5.25 9.52733 5.24933 9.944 5.25H14.056C14.4727 5.25 14.87 5.25067 15.248 5.252C15.244 4.682 15.23 4.252 15.184 3.905C15.121 3.444 15.014 3.246 14.884 3.116C14.754 2.986 14.556 2.879 14.094 2.816C13.612 2.752 12.964 2.75 12 2.75C11.036 2.75 10.388 2.752 9.905 2.817C9.444 2.879 9.246 2.986 9.116 3.117C8.986 3.248 8.879 3.444 8.816 3.905C8.77 4.251 8.756 4.681 8.752 5.252ZM5.71 6.89C4.704 7.025 4.124 7.279 3.7 7.702C3.278 8.125 3.024 8.705 2.889 9.711C2.751 10.738 2.749 12.093 2.749 14C2.749 15.907 2.751 17.262 2.889 18.29C3.024 19.295 3.278 19.875 3.701 20.298C4.124 20.721 4.704 20.975 5.71 21.11C6.738 21.248 8.092 21.25 9.999 21.25H13.999C15.906 21.25 17.261 21.248 18.289 21.11C19.294 20.975 19.874 20.721 20.297 20.298C20.72 19.875 20.974 19.295 21.109 18.289C21.247 17.262 21.249 15.907 21.249 14C21.249 12.093 21.247 10.739 21.109 9.71C20.974 8.705 20.72 8.125 20.297 7.702C19.874 7.279 19.294 7.025 18.288 6.89C17.261 6.752 15.906 6.75 13.999 6.75H9.999C8.092 6.75 6.739 6.752 5.71 6.89ZM12 9.25C12.1989 9.25 12.3897 9.32902 12.5303 9.46967C12.671 9.61032 12.75 9.80109 12.75 10V10.01C13.839 10.284 14.75 11.143 14.75 12.333C14.75 12.5319 14.671 12.7227 14.5303 12.8633C14.3897 13.004 14.1989 13.083 14 13.083C13.8011 13.083 13.6103 13.004 13.4697 12.8633C13.329 12.7227 13.25 12.5319 13.25 12.333C13.25 11.949 12.824 11.417 12 11.417C11.176 11.417 10.75 11.949 10.75 12.333C10.75 12.717 11.176 13.25 12 13.25C13.385 13.25 14.75 14.21 14.75 15.667C14.75 16.857 13.839 17.715 12.75 17.99V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V17.99C10.161 17.716 9.25 16.857 9.25 15.667C9.25 15.4681 9.32902 15.2773 9.46967 15.1367C9.61032 14.996 9.80109 14.917 10 14.917C10.1989 14.917 10.3897 14.996 10.5303 15.1367C10.671 15.2773 10.75 15.4681 10.75 15.667C10.75 16.051 11.176 16.583 12 16.583C12.824 16.583 13.25 16.051 13.25 15.667C13.25 15.283 12.824 14.75 12 14.75C10.615 14.75 9.25 13.79 9.25 12.333C9.25 11.143 10.161 10.284 11.25 10.01V10C11.25 9.80109 11.329 9.61032 11.4697 9.46967C11.6103 9.32902 11.8011 9.25 12 9.25Z" 
              fill="white"
            />
          </svg>
          <span 
            className="font-['Poppins',Helvetica] whitespace-nowrap text-center"
            style={{
              color: '#FFF',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '20px'
            }}
          >
            Chance to win a $25k account
          </span>
        </div>

        {/* Benefit 3 - Exclusive member-only discounts */}
        <div 
          className="flex justify-center items-center border border-[#B982FB]/30 w-full md:w-auto"
          style={{
            padding: '10px 20px',
            gap: '10px',
            borderRadius: '21px',
            background: 'rgba(0, 0, 0, 0.20)'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            className="flex-shrink-0"
            style={{
              width: '20px',
              height: '20px',
              aspectRatio: '1/1'
            }}
          >
            <path 
              d="M12 11.0592L10.3232 12.3363C10.2296 12.3969 10.1396 12.398 10.0532 12.3395C9.96678 12.281 9.94143 12.2044 9.97714 12.1097L10.6114 10.0368L8.94214 8.85678C8.85286 8.79621 8.82964 8.71615 8.8725 8.6166C8.91536 8.51704 8.98536 8.46692 9.0825 8.46622H11.16L11.7943 6.40584C11.83 6.31116 11.8986 6.26382 12 6.26382C12.1014 6.26382 12.17 6.31116 12.2057 6.40584L12.8411 8.46622H14.9111C15.0089 8.46622 15.0804 8.516 15.1254 8.61555C15.1704 8.71511 15.1479 8.79517 15.0579 8.85574L13.3832 10.0368L14.0175 12.1097C14.0532 12.2044 14.0279 12.281 13.9414 12.3395C13.855 12.398 13.765 12.3969 13.6714 12.3363L12 11.0592ZM12 19.7132L7.75393 20.9496C7.47893 21.045 7.225 21.005 6.99214 20.8295C6.75929 20.6541 6.64286 20.4257 6.64286 20.1445V14.3967C5.96429 13.7465 5.4375 12.9848 5.0625 12.1118C4.6875 11.2388 4.5 10.3049 4.5 9.31C4.5 7.27225 5.22714 5.54466 6.68143 4.12721C8.13571 2.70977 9.90857 2.0007 12 2C14.0914 1.9993 15.8643 2.70803 17.3186 4.12617C18.7729 5.54431 19.5 7.27225 19.5 9.31C19.5 10.3049 19.3125 11.2388 18.9375 12.1118C18.5625 12.9848 18.0357 13.7461 17.3571 14.3957V20.1434C17.3571 20.4247 17.2407 20.653 17.0079 20.8285C16.775 21.0039 16.5214 21.0439 16.2471 20.9486L12 19.7132ZM12 15.5757C13.7857 15.5757 15.3036 14.9666 16.5536 13.7482C17.8036 12.5299 18.4286 11.0505 18.4286 9.31C18.4286 7.56953 17.8036 6.09012 16.5536 4.87179C15.3036 3.65345 13.7857 3.04429 12 3.04429C10.2143 3.04429 8.69643 3.65345 7.44643 4.87179C6.19643 6.09012 5.57143 7.56953 5.57143 9.31C5.57143 11.0505 6.19643 12.5299 7.44643 13.7482C8.69643 14.9666 10.2143 15.5757 12 15.5757ZM7.71429 19.7988L12 18.6282L16.2857 19.7988V15.2771C15.6886 15.7052 15.0246 16.0359 14.2939 16.2691C13.5646 16.503 12.8 16.62 12 16.62C11.2 16.62 10.4354 16.5034 9.70607 16.2702C8.97679 16.0369 8.31286 15.7059 7.71429 15.2771V19.7988Z" 
              fill="white"
            />
          </svg>
          <span 
            className="font-['Poppins',Helvetica] whitespace-nowrap text-center"
            style={{
              color: '#FFF',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '20px'
            }}
          >
            Exclusive member-only discounts
          </span>
        </div>
      </div>
    </section>
  );
};
