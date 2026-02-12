import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "En jättebra fråga",
    content:
      "Ett bra svar typ",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

function Faq() {
    return (
        <div className="flex-1 place-content-center w-full">
                <Accordion
                type="multiple"
                collapsible
                defaultValue=""
                className="w-full m-8"
            >
                {items.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <p className="text-center text-gray-400">
                FAQ            
            </p>
        </div>
    )
}

export default Faq