import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="w-full md:flex md:flex-col md:justify-center p-5">
      <div className="text-center text-2xl md:text-4xl">
        Frequently Asked Question
      </div>
      <Accordion type="single" collapsible className="w-full py-7">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is the main purpose of this community?
          </AccordionTrigger>
          <AccordionContent>
            We aim to foster a collaborative environment where individuals
            passionate about Web3, AI, and open-source development can learn,
            teach, and build projects together, focusing on growth and mutual
            success.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can anyone contribute to a project, and how are contributions
            managed?
          </AccordionTrigger>
          <AccordionContent>
            Yes, anyone enthusiastic and aligned with the project&apos;s goals
            can contribute. Contributions are managed collaboratively, with
            project owners guiding the development, and the community providing
            support, feedback, and expertise.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What happens if a community project becomes successful?
          </AccordionTrigger>
          <AccordionContent>
            If a project has potential and grows massively, it remains the
            project of its creator(s). Our community encourages this growth
            while maintaining the creator&apos;s ownership, allowing them to use
            the project as they see fit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How does the community sustain itself financially?
          </AccordionTrigger>
          <AccordionContent>
            While we support individual projects, we also run our own
            organizational projects, which act as a source of funding to ensure
            the sustainability of the community.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
