import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";

// Data-struktur för studentberättelser
type Category = "Student" | "Alumn" | "Studier" | "Studentliv";

interface StudentStory {
  id: number;
  name: string;
  status: Extract<Category, "Student" | "Alumn">;
  category: Extract<Category, "Studier" | "Studentliv">;
  text: string;
}

const categories: Category[] = ["Student", "Alumn", "Studier", "Studentliv"];

const stories: StudentStory[] = [
  { id: 1, name: "Anna Andersson", status: "Student", category: "Studier", text:
 "Att plugga datateknik är utmanande men otroligt givande! Jag har lärt mig så mycket om algoritmer, systemdesign och samarbeten i projekt. Det har också gett mig möjlighet att utveckla mina egna intressen inom AI och öppna källkodsprojekt." },
  { id: 2, name: "Erik Eriksson", status: "Alumn", category: "Studentliv", text:
 "Mina år i studentföreningen gav mig vänner för livet. Vi organiserade events, jobbade i projekt och hade många sena kvällar som formade min tid på universitetet." },
  { id: 3, name: "Sara Svensson", status: "Student", category: "Studentliv", text: "Balansen mellan studier och fritid är en konst. Jag lärde mig prioritera och hitta rutiner som fungerade för mig; det gjorde studietiden mer hållbar och rolig." },
  { id: 4, name: "Ola Nilsson", status: "Alumn", category: "Studier", text: "Projektarbetet var höjdpunkten i utbildningen. Att få ta en idé från koncept till fungerande prototyp tillsammans med ett team var oerhört värdefullt." },
];

function previewText(text: string, limit = 140) {
  return text.length > limit ? text.slice(0, limit).trimEnd() + '…' : text;
}

function Stories() {
  const [activeFilters, setActiveFilters] = useState<Category[]>([]);
  const [selectedStory, setSelectedStory] = useState<StudentStory | null>(null);

  const toggleFilter = (filter: Category) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredStories = activeFilters.length === 0
    ? stories
    : stories.filter(story =>
        activeFilters.includes(story.status) || activeFilters.includes(story.category)
      );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelectedStory(null);
    }
    if (selectedStory) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedStory]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Studentberättelser</h1>

      {/* Filter-sektion */}
      <div className="flex flex-wrap gap-2 mb-8" role="toolbar" aria-label="Filters">
        <Button
          variant={activeFilters.length === 0 ? "outline" : 'ghost'}
          onClick={(e) => { setActiveFilters([]); (e.currentTarget as HTMLButtonElement).blur(); }}
          aria-pressed={activeFilters.length === 0}
          className={`${activeFilters.length === 0 ? 'shadow-lg ring-2 ring-primary/60' : 'ring-0'} focus-visible:ring-0 focus:ring-0 focus:outline-none active:ring-0`}
        >
          Visa alla
        </Button>


         {/* focus-visible:ring-0 focus:ring-0 focus:outline-none active:ring-0 */}
        {categories.map((cat) => {
          const active = activeFilters.includes(cat);
          return (
            <Button
              key={cat}
              variant={active ? "outline" : "ghost"}
              onClick={(e) => { toggleFilter(cat); (e.currentTarget as HTMLButtonElement).blur(); }}
              className={`capitalize transform transition-all ${active ? ' shadow-lg ring-2 ring-primary/60' : 'ring-0'} `}
              aria-pressed={active}
              aria-label={`Filter ${cat}`}
            >
              {cat}
            </Button>
          )
        })}
      </div>

      {/* Grid med kort (preview) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => (
          <div key={story.id} className="cursor-pointer" onClick={() => setSelectedStory(story)}>
            <Card className="hover:shadow-xl transition-shadow h-full">
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">{story.status}</Badge>
                  <Badge variant="outline" className="text-xs">{story.category}</Badge>
                </div>
                <CardTitle>{story.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{previewText(story.text, 120)}"</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {filteredStories.length === 0 && (
        <p className="text-center mt-10 text-gray-500">Inga berättelser matchar dina valda filter.</p>
      )}

      {/* Modal / Enlarged story */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Story details ${selectedStory.name}`} 
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedStory(null); }}
        >
          <div className="max-w-3xl w-full">
            <Card className="">
              <div className="flex items-start justify-between p-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{selectedStory.status}</Badge>
                    <Badge variant="outline" className="text-xs">{selectedStory.category}</Badge>
                  </div>
                  <h2 className="text-2xl font-semibold">{selectedStory.name}</h2>
                </div>
                <div>
                  <Button variant="outline" onClick={() => setSelectedStory(null)} className="ml-4 focus-visible:ring-0 focus:ring-0 focus:outline-none">Stäng</Button>
                </div>
              </div>

              <CardContent>
                <p className="whitespace-pre-wrap">{selectedStory.text}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories
