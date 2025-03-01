import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I know the pandits on Seremo are qualified?",
      answer:
        "All pandits on Seremo undergo a thorough verification process. We check their credentials, experience, and expertise in specific rituals. We also collect reviews from users to ensure ongoing quality.",
    },
    {
      question: "Can I perform rituals that require specific materials virtually?",
      answer:
        "Yes! Seremo provides AI-powered material recommendations and setup guidance for all rituals. For virtual rituals, our pandits adapt the ceremonies to work with commonly available items or provide links to purchase authentic materials.",
    },
    {
      question: "Are the virtual rituals as effective as in-person ceremonies?",
      answer:
        "According to Hindu traditions, the intention (sankalp) and proper recitation of mantras are what make rituals effective. Our pandits ensure that virtual rituals maintain the spiritual essence and authenticity of traditional ceremonies.",
    },
    {
      question: "How does the booking and payment process work?",
      answer:
        "You can browse available pandits, select your preferred ritual, and choose a date and time. Once you make your selection, you'll proceed to payment. We offer various payment methods, and you'll receive confirmation and joining instructions via email.",
    },
    {
      question: "Can I request rituals specific to my regional traditions?",
      answer:
        "Seremo has pandits from various regions and traditions. You can filter pandits based on regional expertise (e.g., North Indian, South Indian, Bengali) or specific sampradaya (tradition) to ensure your rituals align with your family customs.",
    },
    {
      question: "What if I need to reschedule or cancel a booking?",
      answer:
        "You can reschedule or cancel bookings through your account dashboard. Rescheduling is free if done at least 24 hours before the scheduled time. Cancellation policies vary based on how close to the scheduled time you cancel.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-600">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about Seremo and our virtual ritual services.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-orange-700">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

