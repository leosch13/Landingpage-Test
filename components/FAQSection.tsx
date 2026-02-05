
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`group mb-4 rounded-[1.25rem] transition-all duration-300 border-2 overflow-hidden ${
        isOpen 
          ? 'border-blue-600 bg-white shadow-lg' 
          : 'border-transparent bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#111111]' : 'text-[#111111]'}`}>
          {question}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg 
            className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0 pb-0 px-8'
        }`}
      >
        <p className="text-base text-gray-500 leading-relaxed font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is it like working together?",
      answer: "We work as your strategic growth partner. Our MBA leverage system is designed to build efficient infrastructure that multiplies your revenue without burning you out or expanding your team massively. We handle the complexity so you can focus on your zone of genius."
    },
    {
      question: "How much can we get done in a month?",
      answer: "A significant amount. In the first month, we typically overhaul your core funnel architecture and start the initial scaling phase. We focus on high-impact asymmetric leverage points to ensure fast results."
    },
    {
      question: "How often will I see progress or updates?",
      answer: "We believe in transparent communication. You'll have access to a real-time dashboard and receive detailed weekly reports on performance, experiments, and upcoming strategic moves."
    },
    {
      question: "How do you handle larger requests?",
      answer: "Larger strategic shifts or complex infrastructure builds are handled through our dedicated sprint methodology, ensuring they don't block ongoing performance activities."
    },
    {
      question: "Can I use it for just one month?",
      answer: "Our system is designed for long-term sustainable scaling, but we offer flexibility depending on your current needs and business stage."
    },
    {
      question: "How does Framer development work?",
      answer: "We use high-performance platforms like Framer to build lightning-fast, high-converting landing pages that are easy to manage and update as we iterate on your strategy."
    },
    {
      question: "Do you also work with mature companies?",
      answer: "Yes, our MBA systems are specifically powerful for companies doing 7 to 8 figures that need to break through their current ceiling by professionalizing their marketing infrastructure."
    },
    {
      question: "What if I'm not happy with the work?",
      answer: "We prioritize long-term partnerships. If something isn't meeting expectations, we have rapid feedback loops in place to pivot strategy or execution immediately."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#fcfcfd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-sm">
              Everything you need to know about how we work, what to expect, and whether we're the right fit.
            </p>
          </div>

          {/* Right Column: FAQ Items List */}
          <div className="lg:w-2/3">
            <div>
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default FAQSection;
