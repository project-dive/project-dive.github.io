import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'



const items = [
  {
    value: "item-1",
    trigger: "Finns det tjejer på data?",
    content:
      "Ja och dom är skitsnygga",
  },
  {
    value: "item-2",
    trigger: "Jag har hört att det är dåligt studentliv på KTH, stämmer det?",
    content:
      "Nej, det finns jättemycket kul studentliv, både på Datasektionen och globalt på Tekniska Högskolans Studentkår.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

function Faq() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center">
            <p className="text-center text-gray-400 text-7xl">
                FAQ            
            </p>
            <p className="text-center text-gray-400 text-5xl">
                Om Dive, KTH och att plugga data            
            </p>
            <Button
                onClick={() => navigate('/')}
                className="m-8 bg-blue-600 hover:bg-blue-700 text-black"
            >
                Hittar du inte svar på dina frågor? Klicka här!
            </Button>
                <Accordion
                    type="multiple"
                    collapsible
                    defaultValue=""
                    className="item-center md:w-2/3 m-8"
                >
                    {items.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.trigger}</AccordionTrigger>
                        <AccordionContent className="m-2">{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            
        </div>
    )
}

export default Faq