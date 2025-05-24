
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Filter, Star, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Templates", count: 127 },
    { id: "quotes", name: "Quotes", count: 32 },
    { id: "tips", name: "Tips & Tutorials", count: 28 },
    { id: "promo", name: "Promotional", count: 24 },
    { id: "education", name: "Educational", count: 21 },
    { id: "business", name: "Business", count: 22 }
  ];

  const templates = [
    {
      id: 1,
      name: "Motivational Quote",
      category: "quotes",
      premium: false,
      downloads: 1250,
      rating: 4.8,
      preview: "bg-gradient-to-br from-purple-600 to-pink-500"
    },
    {
      id: 2,
      name: "Social Media Tips",
      category: "tips",
      premium: true,
      downloads: 890,
      rating: 4.9,
      preview: "bg-gradient-to-br from-blue-600 to-cyan-500"
    },
    {
      id: 3,
      name: "Product Launch",
      category: "promo",
      premium: true,
      downloads: 654,
      rating: 4.7,
      preview: "bg-gradient-to-br from-orange-600 to-red-500"
    },
    {
      id: 4,
      name: "Business Strategy",
      category: "business",
      premium: false,
      downloads: 2100,
      rating: 4.6,
      preview: "bg-gradient-to-br from-green-600 to-teal-500"
    },
    {
      id: 5,
      name: "Educational Content",
      category: "education",
      premium: true,
      downloads: 1450,
      rating: 4.8,
      preview: "bg-gradient-to-br from-indigo-600 to-purple-500"
    },
    {
      id: 6,
      name: "Inspirational Story",
      category: "quotes",
      premium: false,
      downloads: 980,
      rating: 4.5,
      preview: "bg-gradient-to-br from-pink-600 to-rose-500"
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Templates
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our curated collection of high-converting carousel templates
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      {/* Template Preview */}
                      <div className={`aspect-square ${template.preview} rounded-t-lg relative overflow-hidden`}>
                        {template.premium && (
                          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            PRO
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <Button size="sm" variant="secondary">
                              <Eye className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                            <Button size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Use
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Template Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{template.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{template.downloads}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Templates;
