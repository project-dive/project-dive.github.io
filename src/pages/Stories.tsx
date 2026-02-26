import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";

// 1. Data-struktur för studentberättelser
// 1. Definiera typerna
type Category = "nuvarande student" | "har tagit examen" | "studier" | "studentliv";

interface StudentStory {
  id: number;
  name: string;
  status: Extract<Category, "nuvarande student" | "har tagit examen">;
  category: Extract<Category, "studier" | "studentliv">;
  text: string;
}

const categories: Category[] = ["nuvarande student", "har tagit examen", "studier", "studentliv"];

const stories: StudentStory[] = [
  { id: 1, name: "Anna Andersson", status: "nuvarande student", category: "studier", text: "Att plugga datateknik är utmanande men otroligt givande!" },
  { id: 2, name: "Erik Eriksson", status: "har tagit examen", category: "studentliv", text: "Mina år i studentföreningen gav mig vänner för livet." },
  // Fler objekt här...
];

function Stories() {
    const navigate = useNavigate()

 // 2. Typa state som en array av strängar (kategorier)
  const [activeFilters, setActiveFilters] = useState<Category[]>([]);

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

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Studentberättelser</h1>

      {/* 2. Filter-sektion */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button 
          variant={activeFilters.length === 0 ? "default" : "outline"}
          onClick={() => setActiveFilters([])}
        >
          Visa alla
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeFilters.includes(cat) ? "default" : "outline"}
            onClick={() => toggleFilter(cat)}
            className="capitalize"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* 3. Grid med kort */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => (
          <Card key={story.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">{story.status}</Badge>
                <Badge variant="outline" className="text-xs">{story.category}</Badge>
              </div>
              <CardTitle>{story.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">"{story.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredStories.length === 0 && (
        <p className="text-center mt-10 text-gray-500">Inga berättelser matchar dina valda filter.</p>
      )}
    </div>
  );
}

export default Stories