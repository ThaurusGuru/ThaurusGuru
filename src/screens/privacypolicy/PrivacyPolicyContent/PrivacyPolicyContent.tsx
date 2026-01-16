

export const PrivacyPolicyContent = () => {
  return (
    <div className="relative w-full py-12 md:py-20 px-6 sm:px-10 lg:px-20 max-w-[1200px] mx-auto text-white/70 font-['Inter'] leading-relaxed">
      <div className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-white via-purple-300 to-white/80 bg-clip-text text-transparent mb-6">
          Privacy Policy
        </h1>
        
      </div>

      <div className="space-y-12 text-sm sm:text-base">
        {/* Intro */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy of ThaurusGuru</h2>
          <div className="space-y-4">
            <p>
              ThaurusGuru is managed by Thaurus ltd., a company incorporated in Mauritius with its registered address at 8th Floor, Hennessy Tower, Pope Hennessy Street, Port Louis, Mauritius (the “Company”).
            </p>
            <p>
              You, as a client that is interested in the use of our services should be aware of the fact that we collect and store personal data about you. This Privacy Policy (the “Policy”) informs you of the methods used to handle your personal data.
            </p>
          </div>
        </section>

        {/* Controller */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">01. Controller of Personal Data</h3>
          <p>The controller of personal data is <span className="text-white font-medium">Thaurus Ltd.</span></p>
        </section>

        {/* Collection */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">02. Personal Data Collected About You</h3>
          <div className="space-y-4">
            <p>
              The information in this part is meant to give you a broad overview of how and what types of personal data we acquire from you. Personal data includes any information that can be used to identify or connect you to a specific individual.
            </p>
            <p>
              When you use our services, you provide us with much of the information we need to know about you. In particular, this shall include:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-3 marker:text-purple-500">
              <li>
                <span className="text-white font-medium">Identification & Contact Data:</span> Whether you sign up for an account, provide Personal data, place an order, participate in an event or project, or connect with us via customer service or social media. This includes your name, surname, phone number, email, postal address, date of birth, username, password, and any warranty claims.
              </li>
              <li>
                <span className="text-white font-medium">Payment Data:</span> Includes your bank account information and other data such as records of communication between you and our company.
              </li>
              <li>
                <span className="text-white font-medium">Automatically Collected Data:</span> Information about your device (IP address), usage data (time and date of visit, country), and service usage (login/logout info, account settings, fictitious capital value, account currency, business strategy).
              </li>
              <li>
                <span className="text-white font-medium">Third Party Data:</span> If you link social networking accounts or use trading platform providers. Includes financial data (instrument types, trade times) and social network data (user name, profile picture).
              </li>
            </ul>
          </div>
        </section>

        {/* Use of Data */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">03. Use of Your Personal Data</h3>
          <p className="mb-4">There are following reasons to use your personal data:</p>
          <div className="space-y-4">
            <p>
              <span className="text-white font-bold">A) Creating a user account and signing up</span> – In order to utilize the services, you must register on the website and create an account, and we use your personal data for this purpose.
            </p>
            <p>
              <span className="text-white font-bold">B) Personal data</span> – Your name, email address, and phone number are required to identify you and get in touch with you.
            </p>
          </div>
        </section>

        {/* Legal Grounds */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">04. Legal Reasons for Processing</h3>
          <div className="space-y-4">
            <p>
              You must provide your personal data to us in order for us to register your user account. We need it to offer you our services, i.e. to give you appropriate access, tools, assistance, and to conduct transactions.
            </p>
            <p>
              <span className="text-white font-medium">Legitimate Interest:</span> Fulfilment of a contract or legitimate interests are sufficient grounds. We retain data for a short amount of time after service ends to protect and defend our rights.
            </p>
          </div>
        </section>

        {/* Marketing */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">05. Marketing & Promotion</h3>
          <p>
            Marketing messages to existing and former customers are based on our legitimate interest. Other commercial communications are sent based on your permission. Each email includes an easy link to discontinue receiving such communications.
          </p>
        </section>

        {/* Analytics & Satisfaction */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">06. Analytics & Service Improvement</h3>
          <p>
            We use consumer behavior analysis and social media communication data to learn how our website is used and to improve our services. Our legitimate interest is keeping customers happy and making services more useful.
          </p>
        </section>

        {/* Security */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">07. Data Security</h3>
          <p>
            Personal data is stored in an encrypted database. Organisational and technical safeguards are in place to protect against unauthorised access, modification, disclosure, or destruction.
          </p>
        </section>

        {/* Retention */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">08. Data Retention</h3>
          <ul className="list-disc pl-5 space-y-3 marker:text-purple-500">
            <li><span className="text-white font-medium">Contractual:</span> For the duration necessary to carry out the agreement and execute rights (complaints, claims, legal action).</li>
            <li><span className="text-white font-medium">Marketing:</span> Up to 5 years from end of last contract or until objection/unsubscription.</li>
            <li><span className="text-white font-medium">Legal:</span> For the period set out by relevant law.</li>
          </ul>
        </section>

        {/* Third Parties */}
        <section>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-purple-400">09. Third Party Information Sharing</h3>
          <p className="mb-4">We make your data available to:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Trading Platform Providers",
              "Cloud Service Providers",
              "Payment System Operators",
              "Financial Institutions",
              "IT & Support Companies",
              "Marketing Agencies",
              "Legal Consultants",
              "Postal Services"
            ].map(item => (
              <div key={item} className="bg-white/5 border border-white/5 p-3 rounded-lg text-sm text-center">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Rights */}
        <section className="bg-purple-900/10 border border-purple-500/20 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6">Your Rights</h3>
          <p className="mb-6">Send a request to <span className="text-purple-400 font-bold">support@thaurusguru.com</span> to exercise your rights:</p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-white font-bold mb-2">Right to Access</h4>
              <p className="text-sm">Request confirmation and a copy of the personal data we hold about you.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Right to Correction</h4>
              <p className="text-sm">Request correction of inaccurate or incomplete personal data.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Right to be Forgotten</h4>
              <p className="text-sm">Request deletion of your data when it's no longer necessary or consent is withdrawn.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Right to Limitation</h4>
              <p className="text-sm">Request a temporary halt to the processing of your data under Article 18 of the GDPR.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Data Portability</h4>
              <p className="text-sm">Receive your data in a machine-readable format to transfer to another controller.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Right to Object</h4>
              <p className="text-sm">Object to processing based on legitimate interests or direct marketing.</p>
            </div>
          </div>
        </section>

        {/* Footer legal */}
        <section className="pt-10 border-t border-white/10 text-center text-xs text-white/40">
          <p className="mb-2">We reserve the right to amend this policy at any time. Notifications will be provided for significant changes.</p>
          <p>© 2024 Thaurus Guru. All Rights Reserved.</p>
        </section>
      </div>
    </div>
  );
};
