
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TemplatePreview from "@/components/TemplatePreview";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { templates, categories, Template } from "@/data/templates";
import { useNavigate } from "react-router-dom";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUseTemplate = (template: Template) => {
    // Store the template in localStorage for the builder to pick up
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    // Navigate to the home page where the builder is
    navigate('/?template=true');
  };

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
              Choose from our curated collection of {templates.length} high-converting carousel templates
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search templates by name, description, or tags..."
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

                {/* Filter Info */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium text-gray-900 mb-2">Results</h4>
                  <p className="text-sm text-gray-600">
                    Showing {filteredTemplates.length} of {templates.length} templates
                  </p>
                  {searchTerm && (
                    <p className="text-xs text-gray-500 mt-1">
                      Searching for "{searchTerm}"
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="lg:col-span-3">
              {filteredTemplates.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTemplates.map((template) => (
                    <TemplatePreview 
                      key={template.id} 
                      template={template}
                      onUseTemplate={handleUseTemplate}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No templates found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or category filter
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Templates;
