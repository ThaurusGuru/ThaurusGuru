
export const CookiesPolicyContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-purple-200/90 font-['Poppins'] leading-relaxed">
      <div className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-white via-purple-300 to-white/80 bg-clip-text text-transparent mb-6">
          Cookies Policy
        </h1>
        <p className="text-purple-300/80 text-lg sm:text-xl font-medium tracking-wide italic">
          Last updated: January 2026
        </p>
      </div>

      <div className="space-y-12 text-sm sm:text-base">
        <section className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          <p className="mb-4">
            When displaying content, advertisements and other functionalities on the <span className="text-white font-medium">www.thaurusguru.com</span> website (the “Website”) various technologies are used to collect and process personal data, including cookies. You will find details concerning this method of processing in this Cookie Policy.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <h3 className="text-xl font-bold mb-6 uppercase tracking-[0.2em] text-purple-400">01. What technologies do we use and what are cookies?</h3>
          <div className="space-y-4">
            <p>
              <span className="text-white font-medium">Cookies</span> are small files that are stored on your device and that help us collect information about your activities. In particular, cookies allow us to remember your settings, preferences, and your access data, provide targeted content and marketing communications, and analyses the operation of the Website. Cookies may come from us or from third parties whose services we use.
            </p>
            <p>
              In addition to cookies, we may also process your <span className="text-white font-medium">IP address</span>, which is a unique number assigned to a computer or other device communicating via the internet protocol, and analytical scripts, which are small pieces of a computer code through which users and their behavior on websites can be tracked.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-xl font-bold mb-6 uppercase tracking-[0.2em] text-purple-400">02. How to set up the use of cookies on the Website?</h3>
          <div className="space-y-4">
            <p>
              You can set up your preferences in your web browser and also in your operating system. Some parts of the Website are designed to work with the use of cookies. If you reject some cookies, it may affect the use of some features on the Website or parts of it.
            </p>
            <div className="bg-purple-900/10 border border-purple-500/20 p-6 rounded-xl space-y-4 shadow-xl">
              <p className="text-white font-bold">Setting up cookies in your browser:</p>
              <p>Most browsers automatically accept cookies by default. You can get more information about setting up cookies for common browsers below:</p>
              <div className="flex flex-wrap gap-4">
                {["Google Chrome", "Internet Explorer", "Microsoft Edge", "Mozilla Firefox", "Opera", "Safari"].map((browser) => (
                  <span key={browser} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-purple-300 font-medium">
                    {browser}
                  </span>
                ))}
              </div>
              <p className="text-xs italic text-purple-400">You can also delete cookies from your device’s memory at any time.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h3 className="text-xl font-bold mb-6 uppercase tracking-[0.2em] text-purple-400">03. What cookies do we use on the Website?</h3>
          <div className="grid gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all hover:bg-white/10 group">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-purple-500 text-xl">➔</div>
                <div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-purple-400 transition-colors tracking-wide">Necessary Basic Cookies</h4>
                  <p>These cookies allow you to browse the Website and use its functionalities. Enabling these cookies is automatic and cannot be turned off.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all hover:bg-white/10 group">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-purple-500 text-xl">➔</div>
                <div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-purple-400 transition-colors tracking-wide">Functional Cookies</h4>
                  <p>Thanks to these cookies, we are able to provide you with a better user experience, ensuring the information displayed corresponds to your preferences.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all hover:bg-white/10 group">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-purple-500 text-xl">➔</div>
                <div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-purple-400 transition-colors tracking-wide">Analytical Cookies</h4>
                  <p>Thanks to these cookies, we obtain information on how our Website and services are used. We use third-party tools for analytics.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all hover:bg-white/10 group">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-purple-500 text-xl">➔</div>
                <div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-purple-400 transition-colors tracking-wide">Advertising Cookies</h4>
                  <p>Through these cookies, we and our partners can offer you targeted advertising based on your interests and behavior.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rights Section */}
        <section className="pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold mb-8 uppercase tracking-[0.2em] text-purple-400">Your Rights and How to Exercise Them</h3>
          <p className="mb-6">
            You can withdraw your consent by deleting cookies in your browser. For other requests, email us at <span className="text-purple-400 font-medium">support@thaurusguru.com</span>.
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-white font-bold mb-2">Right of Access</h4>
              <p>You can ask for a confirmation of processing and receive a copy of your personal data.</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-white font-bold mb-2">Right to Rectification</h4>
              <p>If we process inaccurate data, you can notify us or edit it yourself in your user account.</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-white font-bold mb-2">Right to Erasure (“Right to be Forgotten”)</h4>
              <p>You have the right to request erasure if the data is no longer necessary or processed unlawfully.</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-white font-bold mb-2">Right to Object</h4>
              <p>If processing is based on legitimate interest or for marketing, you have the right to object.</p>
            </div>
          </div>
        </section>

        <section className="bg-red-900/10 border border-red-500/20 p-8 rounded-xl text-center">
          <p className="text-red-300 font-bold mb-2 uppercase tracking-widest text-sm">Complaint Notice</p>
          <p className="text-sm">
            If you believe we are processing your data in violation of regulations, you can lodge a complaint with the relevant supervisory authority.
          </p>
        </section>
      </div>
    </div>
  );
};
