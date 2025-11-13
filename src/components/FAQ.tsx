import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why purple?",
    answer: "Purple is the global color for Gender-Based Violence awareness. The purple ribbon symbolizes courage, survival, and the fight against domestic violence and abuse."
  },
  {
    question: "Do I have to speak at the Purple Pit-Stop Talks?",
    answer: "No. Just drive. Your kilometers speak. The talks are brief 5-minute awareness sessions at each stop, but participation is voluntary. Your presence and journey contribute to the cause."
  },
  {
    question: "What's included in the Purple Pass?",
    answer: "Everything you need for the 7-day journey: Rally passport with GPS tracking, 14 meal vouchers, access to 3 Purple Parties, exclusive merch pack (jacket, cap, keyholder), a finisher medal, and a GBV Awareness Certificate co-signed by LVCT Health."
  },
  {
    question: "Can I join with my own car?",
    answer: "Yes! The Purple Pass covers 2 passengers and 1 car. Your vehicle will be marked with purple ribbon decals (provided) and you'll follow the GPS-tracked route with all participants."
  },
  {
    question: "How does the impact tracker work?",
    answer: "For every car that joins (KSh 30,000 pass), KSh 1,000 is donated to GBV shelters. Additionally, every kilometer driven adds to our collective goal of raising KSh 3M for support services across Kenya."
  },
  {
    question: "What happens at the Purple Parties?",
    answer: "Three special events: Day 0 kickoff in Nairobi with silent auction, Day 3 rave in Eldoret featuring survivor stories and dance, and Day 7 beach finale in Mombasa with candlelight vigil."
  },
  {
    question: "Is accommodation included?",
    answer: "The Purple Pass covers meals and activities. Accommodation is not included, giving you flexibility to choose lodging that fits your budget. We'll provide recommended hotels near each stop."
  },
  {
    question: "What if I need to contact GBV support services?",
    answer: "The national GBV hotline is 1195 (toll-free). Your NFC keyholder links directly to this number. Our partner LVCT Health also provides resources throughout the journey."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about CRADLE RUN 2026
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-purple-deep">
                  <span className="font-bebas text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
