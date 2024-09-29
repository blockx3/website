import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faqs() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-purple-200 to-pink-200 flex flex-col justify-center items-center p-5 md:p-10">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-10">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-purple-800">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border-b border-purple-200">
                        <AccordionTrigger className="text-lg font-semibold text-purple-700 hover:text-purple-900">
                            What is the main purpose of this community?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">
                            We aim to foster a collaborative environment where individuals
                            passionate about Web3, AI, and open-source development can learn,
                            teach, and build projects together, focusing on growth and mutual
                            success.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-purple-200">
                        <AccordionTrigger className="text-lg font-semibold text-purple-700 hover:text-purple-900">
                            Can anyone contribute to a project, and how are contributions
                            managed?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">
                            Yes, anyone enthusiastic and aligned with the project goals
                            can contribute. Contributions are managed collaboratively, with
                            project owners guiding the development, and the community providing
                            support, feedback, and expertise.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b border-purple-200">
                        <AccordionTrigger className="text-lg font-semibold text-purple-700 hover:text-purple-900">
                            What happens if a community project becomes successful?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">
                            If a project has potential and grows massively, it remains the
                            project of its creator(s). Our community encourages this growth
                            while maintaining the creator ownership, allowing them to use
                            the project as they see fit.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b border-purple-200">
                        <AccordionTrigger className="text-lg font-semibold text-purple-700 hover:text-purple-900">
                            How does the community sustain itself financially?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">
                            While we support individual projects, we also run our own
                            organizational projects, which act as a source of funding to ensure
                            the sustainability of the community.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}