"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How is the solution tailored to my business needs?",
      answer: "We start by understanding your workflows, goals, and challenges. Then we design AI-powered automations around your operations not the other way around."
    },
    {
      question: "What's the pricing, and how is it determined?",
      answer: "Our pricing is customized based on your business size, complexity, and specific requirements. We offer flexible packages that scale with your growth. Contact us for a personalized quote that fits your budget and needs."
    },
    {
      question: "How do you protect my data and business information?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data centers, and strict access controls. Your data remains confidential and is never shared with third parties. We comply with all major data protection regulations."
    },
    {
      question: "What kind of support do I get after delivery?",
      answer: "You'll receive comprehensive ongoing support including system monitoring, regular updates, performance optimization, and dedicated technical assistance. Our team ensures your AI systems continue to evolve and improve with your business."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-6">
            <span className="text-[#c7da3f] font-bold text-sm">Questions? We Have Answers</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-gray-400">Questions</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Find quick answers to some of the most common questions about Increasy.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 border border-gray-700 rounded-xl px-6 hover:border-gray-600 transition-all duration-200"
              >
                <AccordionTrigger className="text-white hover:text-[#c7da3f] text-left py-6 text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
