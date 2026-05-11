import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

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

const status_categories: Category[] = ["Student", "Alumn"];
const content_categories: Category[] = ["Studier", "Studentliv"];


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
    setActiveFilters((prev) => {
      const isStatus = status_categories.includes(filter);
      const isContent = content_categories.includes(filter);

      if (isStatus) {
        if (prev.includes(filter)) {
          return prev.filter((f) => f !== filter);
        }
        const withoutStatus = prev.filter((f) => !status_categories.includes(f));
        return [...withoutStatus, filter];
      }

      if (isContent) {
        if (prev.includes(filter)) {
          return prev.filter((f) => f !== filter);
        }
        const withoutContent = prev.filter((f) => !content_categories.includes(f));
        return [...withoutContent, filter];
      }

      return prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter];
    });
  };

  const statusFilters = activeFilters.filter((f) => status_categories.includes(f));
  const contentFilters = activeFilters.filter((f) => content_categories.includes(f));

  let filteredStories = stories;
  if (statusFilters.length === 0 && contentFilters.length === 0) {
    filteredStories = stories;
  } else if (statusFilters.length > 0 && contentFilters.length > 0) {
    // Both types selected -> require both to match
    filteredStories = stories.filter(
      (story) => statusFilters.includes(story.status) && contentFilters.includes(story.category)
    );
  } else if (statusFilters.length > 0) {
    // Only status filters -> match any selected status
    filteredStories = stories.filter((story) => statusFilters.includes(story.status));
  } else {
    // Only content filters -> match any selected category
    filteredStories = stories.filter((story) => contentFilters.includes(story.category));
  }

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
      <div className="flex flex-wrap gap-3 mb-8" role="toolbar" aria-label="Filters">
        {/* Visa alla group */}
        <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Visa alla group">
          <Button
            variant="ghost"
            onClick={(e) => { setActiveFilters([]); (e.currentTarget as HTMLButtonElement).blur(); }}
            aria-pressed={activeFilters.length === 0}
            className={`${activeFilters.length === 0 ? 'ring-2 ring-offset-2 ring-primary/60 shadow-lg' : 'ring-0'} focus:ring-0 focus-visible:ring-0 focus:outline-none active:ring-0 rounded-md`}
          >
            Visa alla
          </Button>
        </div>

        {/* Student categories group */}
        <ButtonGroup>
          {status_categories.map((cat, idx) => {
            const active = activeFilters.includes(cat);
            const isFirst = idx === 0;
            const isLast = idx === status_categories.length - 1;
            return (
              <Button
                key={cat}
                variant="ghost"
                onClick={(e) => { toggleFilter(cat); (e.currentTarget as HTMLButtonElement).blur(); }}
                className={`capitalize transform transition-all ${active ? 'ring-2 ring-offset-2 ring-primary/60 shadow-lg' : 'ring-0'} focus:ring-0 focus-visible:ring-0 focus:outline-none active:ring-0 ${isFirst ? 'rounded-l-md' : ''} ${isLast ? 'rounded-r-md' : ''}`}
                aria-pressed={active}
                aria-label={`Filter ${cat}`}
              >
                {cat}
              </Button>
            )
          })}
        </ButtonGroup>

        {/* Content categories group */}
        <ButtonGroup>
          {content_categories.map((cat, idx) => {
            const active = activeFilters.includes(cat);
            const isFirst = idx === 0;
            const isLast = idx === content_categories.length - 1;
            return (
              <Button
                key={cat}
                variant="ghost"
                onClick={(e) => { toggleFilter(cat); (e.currentTarget as HTMLButtonElement).blur(); }}
                className={`capitalize transform transition-all ${active ? 'ring-2 ring-offset-2 ring-primary/60 shadow-lg' : 'ring-0'} focus:ring-0 focus-visible:ring-0 focus:outline-none active:ring-0 ${isFirst ? 'rounded-l-md' : ''} ${isLast ? 'rounded-r-md' : ''}`}
                aria-pressed={active}
                aria-label={`Filter ${cat}`}
              >
                {cat}
              </Button>
            )
          })}
        </ButtonGroup>
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
