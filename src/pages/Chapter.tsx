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

function Chapter() {
    const chapters = Array.from({ length: 60 }, (_, index) => index + 1)
    const pages: number[][] = []

    for (let i = 0; i < chapters.length; i += 6) {
        pages.push(chapters.slice(i, i + 6))
    }

    return (
        <div className="flex w-full justify-center">
            <div className="bg-white flex flex-col justify-center px-40 rounded-xl"> {/* The carousel box*/}
                <div className="w-full">
                    <h1 className="text-4xl font-bold text-center my-10">Hitta din grej!</h1>
                    <p className="text-center text-gray-600 mb-1"> Det finns massor att göra utanför plugget - om du vill</p>
                    <p className="text-center text-gray-600 mb-1">Här är några av våra nämnder!</p>
                </div>

                <div className="bg-white my-20">
                    <Carousel className="w-md bg-white-200">
                        <CarouselContent>
                            {pages.map((page, pageIndex) => (
                                <CarouselItem key={pageIndex} className="basis-full">
                                    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-2">
                                        {page.map((chapter) => (
                                            <Card key={chapter}>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-4xl font-semibold">{chapter}</span>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-white" />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Chapter
