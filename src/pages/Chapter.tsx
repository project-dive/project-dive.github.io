import dsektLogo from "@/assets/chapter/dsekt.svg"
import dive from "@/assets/chapter/dive.png"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Card,
    CardContent,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

function Chapter() {
    const cards = [
        { name: "Dive", description: "Vi jobbar för att få fler tjejer och icke-binära att upptäcka datateknik!", image: dive, category: "studiesocialt" as const },
        { name: "D-Dagen", description: "Arrangerar arbetsmarknadsmässa för datastudenter.", image: dsektLogo, category: "näringsliv" as const },
        { name: "Prylmångleriet", description: "Säljer merchandise och overaller med sektionens tryck.", image: dsektLogo, category: "förvaltning" as const },
        { name: "Idrottsnämnden", description: "Sport och rörelse för alla nivåer – padel, fotboll och mer.", image: dsektLogo, category: "sport" as const },
        { name: "Studs", description: "Studieresa till spännande teknikföretag utomlands.", image: dsektLogo, category: "projekt" as const },
        { name: "Spelföreningen", description: "Brädspel, datorspel och turneringar för alla gamers.", image: dsektLogo, category: "event" as const },
        { name: "Musiknämnden", description: "Spela musik, sjunga och jamsa med andra datastudenter.", image: dsektLogo, category: "studiesocialt" as const },
        { name: "Mottagningen", description: "Välkomnar nya studenter och arrangerar nollning.", image: dsektLogo, category: "sport" as const },
        { name: "Datasladden", description: "Sektionens tidning – nyheter, humor och reportage.", image: dsektLogo, category: "information" as const },
    ]

    const CARDS_PER_PAGE = 6
    const pages: typeof cards[] = []
    for (let i = 0; i < cards.length; i += CARDS_PER_PAGE) {
        pages.push(cards.slice(i, i + CARDS_PER_PAGE))
    }

    return (
        <div className="flex w-full justify-center flex-col">
            <div className="mx-6 flex flex-col items-center justify-center text-center"> 
                <img src={dsektLogo} alt="dsekt" className="my-3 w-32 h-32 object-cover" />
                <h1 className="text-4xl font-bold text-center">
                    Välkommen till{" "}
                    <span className="inline-block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text [-webkit-background-clip:text] text-transparent [-webkit-text-fill-color:transparent]">
                        Datasektionen
                    </span>{" "}
                </h1>
                <div className="my-5 mb-10 text-lg font-normal" style={{ color: "#87163F" }}>
                    <p>Upptäck studentlivet på datateknik!</p>
                    <p>Här finns något för alla - oavsett om du gillar sport, musik, gaming eller att hänga med vänner.</p>
                    <p>Allt är frivillig! Du väljer själv hur aktiv du vill vara {"<3"}</p>
                </div>
            </div>

            <div className="flex w-full justify-center px-4 mb-10">
                <div className="bg-white flex flex-col justify-center rounded-xl overflow-hidden w-full max-w-screen-xl pb-15"> {/* The carousel box*/}
                    <div className="w-full">
                        <h1 className="text-4xl font-bold text-center mt-8 mb-2">Hitta din grej!</h1>
                        <p className="text-lg text-center text-gray-600 font-normal" style={{ color: "#87163F" }}> Det finns massor att göra utanför plugget - om du vill</p>
                        <p className="text-lg text-center text-gray-600 -mt-1 mb-6 font-normal" style={{ color: "#87163F" }}> Här är några av våra nämnder!</p>
                    </div>

                    <div className="flex justify-center px-16">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {pages.map((page, pageIndex) => (
                                    <CarouselItem key={pageIndex} className="basis-full">
                                        <div className="grid grid-cols-3 grid-rows-2 gap-6 p-2">
                                            {page.map((card) => (
                                                <Card key={card.name} className="bg-background shadow-none border-[#87163F]">
                                                    <CardContent className="flex flex-col items-center justify-center px-4 py-4">
                                                        <div className="relative w-full">
                                                            <img src={card.image} alt={card.name} className="w-full h-40 object-cover rounded-sm" />
                                                            <Badge variant={card.category} className="absolute top-2 left-2">{card.category}</Badge>
                                                        </div>
                                                        <div className="w-full text-left pt-1">
                                                            <div className="text-xl font-semibold">{card.name}</div>
                                                            <div className="text-sm text-gray-500 leading-tight font-normal">{card.description}</div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-6 mt-10 mb-10">
                <h1 className="text-4xl font-bold mb-4">
                    Gemenskap.{" "}
                    <span className="inline-block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text [-webkit-background-clip:text] text-transparent [-webkit-text-fill-color:transparent]">
                        Engagemang.
                    </span>{" "}
                    Karriär.
                </h1>
                <p className="text-lg font-normal max-w-2xl" style={{ color: "#87163F" }}>
                    Datasektionen är mer än bara plugg – det är ett sammanhang där du växer, knyter kontakter och har riktigt kul längs vägen.
                </p>
            </div>


            <div className="flex w-full justify-center px-4 mt-10 mb-10">
                <div className="bg-white flex flex-col justify-center rounded-xl w-full max-w-screen-xl pb-15"> {/* The carousel box*/}
                    <div className="w-full">
                        <h1 className="text-sm font-bold text-center mt-8 mb-2">Bilder från Sektionsevent</h1>
                        
                    </div>

                    <div className="flex justify-center px-16">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {pages.map((page, pageIndex) => (
                                    <CarouselItem key={pageIndex} className="basis-full">
                                        <div className="grid grid-cols-3 grid-rows-2 gap-6 p-2">
                                            {page.map((card) => (
                                                <Card key={card.name} className="shadow-none border-none overflow-hidden p-0">
                                                    <CardContent className="p-0">
                                                        <img src={card.image} alt={card.name} className="w-full h-40 object-cover" />
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Chapter
