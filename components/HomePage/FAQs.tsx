import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FAQs() {
  return (
    <div className="w-full bg-gradient-to-b to-purple-200 from-pink-200 px-2 py-3 lg:px-10 lg:py-20">
      <div className="lg:text-4xl text-lg lg:pb-3 md:text-4xl underline underline-offset-8 font-bold text-slate-800">
        FAQs
      </div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1" className="border-b border-purple-200">
          <AccordionTrigger className="lg:text-2xl font-semibold text-slate-700 hover:text-slate-900">
            BlockX3 is a community or Organization ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4 lg:text-lg">
            We are both, we are a community of developers, designers, and
            creators who collaborate on projects. We also run our own
            organizational projects to support the community and ensure its
            sustainability.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-purple-200">
          <AccordionTrigger className="lg:text-2xl font-semibold text-slate-700 hover:text-slate-900">
            Can BlockX3 help me develop my idea into product ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4 lg:text-lg">
            Yes absolutely, since We are a community, we are enthusiastic to
            grow together and help each other. We can help you develop your idea
            into a product. Our community exist because Some of us want to build
            the next big tech company, some want to learn, and others want to
            share their skills.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-purple-200">
          <AccordionTrigger className="lg:text-2xl font-semibold text-slate-700 hover:text-slate-900">
            What happens if a community project becomes successful?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4 lg:text-lg">
            If a project has potential and grows massively, it remains the
            project of its creator(s). Our community encourages this growth
            while maintaining the creator ownership, allowing them to use the
            project as they see fit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQs;
