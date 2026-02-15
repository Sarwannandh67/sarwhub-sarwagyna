import React from 'react';

export type LegalType = 'conduct' | 'privacy' | 'terms' | 'disclosure' | 'refund';

interface LegalViewProps {
  type: LegalType;
  setView: (view: any) => void;
}

const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  const content = {
    conduct: {
      title: "Code of Conduct",
      subtitle: "Ensuring a safe and professional environment for all.",
      lastUpdated: "January 15, 2026",
      sections: [
        {
          heading: "Our Commitment",
          text: "SarwHub is dedicated to providing a harassment-free experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of participants, organizers, or staff in any form."
        },
        {
          heading: "Expected Behavior",
          text: "Be kind and professional. Exercise consideration and respect in your speech and actions. Attempt collaboration before conflict. Refrain from demeaning, discriminatory, or harassing behavior and speech."
        },
        {
          heading: "Unacceptable Behavior",
          text: "Unacceptable behaviors include: intimidating, harassing, abusive, discriminatory, derogatory or demeaning speech or actions. Harassment includes: harmful or prejudicial verbal or written comments, use of sexual or discriminatory imagery, deliberate intimidation, stalking or following, harassing photography or recording."
        },
        {
          heading: "Reporting Issues",
          text: "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact the SarwHub team immediately at conduct@sarwhub.com. All reports will be handled with strict confidentiality."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we protect and manage your data.",
      lastUpdated: "January 15, 2026",
      sections: [
        {
          heading: "Data Ownership",
          text: "At SarwHub, we believe you own your data. We do not sell your personal information or attendee data to third parties. We only process data as necessary to provide our event management services."
        },
        {
          heading: "Information Collection",
          text: "We collect information you provide directly to us when you create an account, create an event, or purchase a ticket. This includes name, email address, payment information, and event-specific data collected via organizer forms."
        },
        {
          heading: "Use of Data",
          text: "We use the information we collect to provide, maintain, and improve our services, process transactions, send technical notices, and communicate with you about products and services."
        },
        {
          heading: "Security",
          text: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption for all data in transit and at rest."
        }
      ]
    },
    terms: {
      title: "Terms & Conditions",
      subtitle: "The legal agreement for using SarwHub.",
      lastUpdated: "January 15, 2026",
      sections: [
        {
          heading: "Acceptance of Terms",
          text: "By accessing or using SarwHub, you agree to be bound by these terms. If you do not agree to all the terms and conditions, then you may not access the service."
        },
        {
          heading: "User Accounts",
          text: "You are responsible for maintaining the security of your account and password. SarwHub cannot and will not be liable for any loss or damage from your failure to comply with this security obligation."
        },
        {
          heading: "Organizer Responsibilities",
          text: "As an organizer, you are responsible for the legality of your events and the accuracy of the information provided. You must comply with all local laws and regulations regarding ticket sales and event hosting."
        },
        {
          heading: "Limitation of Liability",
          text: "In no event shall SarwHub be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
        }
      ]
    },
    disclosure: {
      title: "Responsible Disclosure",
      subtitle: "Help us keep SarwHub secure.",
      lastUpdated: "January 15, 2026",
      sections: [
        {
          heading: "Security First",
          text: "The security of our users' data is our top priority. If you are a security researcher and have found a vulnerability in our platform, we appreciate your help in disclosing it to us in a responsible manner."
        },
        {
          heading: "Reporting Vulnerabilities",
          text: "Please send your findings to security@sarwhub.com. Provide a detailed summary of the vulnerability, including steps to reproduce, potential impact, and your contact information."
        },
        {
          heading: "Our Commitment to You",
          text: "We will acknowledge receipt of your report promptly, investigate the issue, and provide an estimated timeline for resolution. We will not take legal action against researchers who act in good faith."
        },
        {
          heading: "Guidelines",
          text: "Do not attempt to access or modify data that does not belong to you. Do not perform any testing that would disrupt our services (DoS/DDoS). Do not use social engineering techniques against our employees or users."
        }
      ]
    },
    refund: {
      title: "Cancellation & Refund Policy",
      subtitle: "Transparent rules for transactions.",
      lastUpdated: "January 15, 2026",
      sections: [
        {
          heading: "Platform Fees",
          text: "SarwHub platform fees and managed package fees are non-refundable once the service has been initiated or the event has gone live. In the event of a platform-wide technical failure, credits may be issued at our discretion."
        },
        {
          heading: "Ticket Refunds",
          text: "Ticket refund policies are set by individual event organizers. SarwHub provides the tools for organizers to issue refunds, but the ultimate decision and financial responsibility lie with the organizer. Please check the specific event page for their refund policy."
        },
        {
          heading: "Managed Packages",
          text: "Cancellations of Managed Support Packages must be made at least 14 days prior to the event date to be eligible for a partial refund. Cancellations within 14 days are subject to a 50% cancellation fee to cover allocated resources."
        },
        {
          heading: "Dispute Resolution",
          text: "For any disputes regarding payments or refunds, please contact our support team at billing@sarwhub.com with your transaction details. We aim to resolve all billing inquiries within 5 business days."
        }
      ]
    }
  };

  const current = content[type];

  return (
    <div className="pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10 mb-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">Legal Documentation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-6 metal italic">
            {current.title}
          </h1>
          <p className="text-xl text-white/50 font-normal leading-relaxed">
            {current.subtitle}
          </p>
          <p className="text-xs text-white/30 mt-8 uppercase tracking-widest font-bold">
            Last Updated: {current.lastUpdated}
          </p>
        </div>

        <div className="space-y-16">
          {current.sections.map((section, idx) => (
            <div key={idx} className="glass p-10 md:p-12 rounded-[40px] border-white/5 hover:border-white/10 transition-all">
              <h2 className="text-2xl font-medium mb-6 tracking-tight text-white">{section.heading}</h2>
              <p className="text-lg text-white/50 leading-relaxed font-normal">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm mb-8">
            Have questions about our {current.title.toLowerCase()}?
          </p>
          <a 
            href="mailto:legal@sarwhub.com"
            className="glass px-8 py-4 rounded-2xl font-medium border-white/10 hover:bg-white/5 transition-all inline-block"
          >
            Contact Legal Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default LegalView;