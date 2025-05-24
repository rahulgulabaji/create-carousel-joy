
import { useState } from "react";
import { Plus, Download, Eye, Palette, Type, Image, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const CarouselBuilder = () => {
  const [slides, setSlides] = useState([
    { id: 1, title: "Welcome to CarouselMagic", content: "Create stunning social media carousels in minutes!", bgColor: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { id: 2, title: "Drag & Drop Builder", content: "Easy-to-use interface with live preview", bgColor: "bg-gradient-to-br from-blue-500 to-purple-500" },
    { id: 3, title: "Export Anywhere", content: "PNG, PDF, ZIP formats available", bgColor: "bg-gradient-to-br from-green-500 to-blue-500" }
  ]);
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);
  const [isPremium, setIsPremium] = useState(false);

  const templates = [
    { name: "Minimal Quote", bgColor: "bg-gradient-to-br from-gray-800 to-gray-900" },
    { name: "Vibrant Tips", bgColor: "bg-gradient-to-br from-orange-400 to-pink-500" },
    { name: "Professional", bgColor: "bg-gradient-to-br from-blue-600 to-purple-600" },
    { name: "Nature Inspired", bgColor: "bg-gradient-to-br from-green-400 to-blue-500" }
  ];

  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      title: "New Slide",
      content: "Add your content here...",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500"
    };
    setSlides([...slides, newSlide]);
    setSelectedSlide(newSlide);
    toast({
      title: "Slide Added",
      description: "New slide created successfully!"
    });
  };

  const exportCarousel = () => {
    if (!isPremium) {
      toast({
        title: "Watermark Applied",
        description: "Free exports include 'Made with CarouselMagic' watermark. Upgrade to Premium or watch an ad to remove it!",
        variant: "default"
      });
    } else {
      toast({
        title: "Export Complete",
        description: "Your carousel has been exported without watermark!"
      });
    }
  };

  const watchAdToRemoveWatermark = () => {
    toast({
      title: "Ad Unlocked Export",
      description: "Thanks for watching! Your next export will be watermark-free for 24 hours."
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Try the Builder
            <span className="block text-purple-600">Right Now</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of our drag-and-drop carousel builder. 
            This is a live demo - try creating your first carousel!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Slides Panel */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Slides</h3>
                <Button onClick={addSlide} size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {slides.map((slide, index) => (
                  <Card 
                    key={slide.id} 
                    className={`cursor-pointer transition-all duration-200 ${selectedSlide.id === slide.id ? 'ring-2 ring-purple-500 shadow-lg' : 'hover:shadow-md'}`}
                    onClick={() => setSelectedSlide(slide)}
                  >
                    <CardContent className="p-4">
                      <div className={`${slide.bgColor} h-20 rounded-lg mb-2 flex items-center justify-center text-white text-sm font-medium`}>
                        Slide {index + 1}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{slide.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Templates */}
              <div className="pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Templates</h4>
                <div className="grid grid-cols-2 gap-2">
                  {templates.map((template, index) => (
                    <div 
                      key={index}
                      className={`${template.bgColor} h-12 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center`}
                      onClick={() => {
                        setSelectedSlide({...selectedSlide, bgColor: template.bgColor});
                        toast({
                          title: "Template Applied",
                          description: `${template.name} template applied to current slide!`
                        });
                      }}
                    >
                      <span className="text-white text-xs font-medium">{template.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-1" />
                  Full Preview
                </Button>
              </div>
              
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className={`${selectedSlide.bgColor} aspect-square rounded-t-lg p-8 flex flex-col justify-center items-center text-white text-center relative`}>
                    {!isPremium && (
                      <div className="absolute bottom-2 right-2 text-xs opacity-60 bg-black/20 px-2 py-1 rounded">
                        Made with CarouselMagic
                      </div>
                    )}
                    <h2 className="text-2xl font-bold mb-4">{selectedSlide.title}</h2>
                    <p className="text-lg leading-relaxed">{selectedSlide.content}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-b-lg">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Slide {slides.findIndex(s => s.id === selectedSlide.id) + 1} of {slides.length}</span>
                      <span>1080x1080px</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Editor Panel */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Edit Slide</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium">Title</Label>
                  <Input
                    id="title"
                    value={selectedSlide.title}
                    onChange={(e) => {
                      const updatedSlide = {...selectedSlide, title: e.target.value};
                      setSelectedSlide(updatedSlide);
                      setSlides(slides.map(s => s.id === selectedSlide.id ? updatedSlide : s));
                    }}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="content" className="text-sm font-medium">Content</Label>
                  <textarea
                    id="content"
                    value={selectedSlide.content}
                    onChange={(e) => {
                      const updatedSlide = {...selectedSlide, content: e.target.value};
                      setSelectedSlide(updatedSlide);
                      setSlides(slides.map(s => s.id === selectedSlide.id ? updatedSlide : s));
                    }}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                    placeholder="Enter your content..."
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm">
                    <Type className="w-4 h-4 mr-1" />
                    Font
                  </Button>
                  <Button variant="outline" size="sm">
                    <Palette className="w-4 h-4 mr-1" />
                    Color
                  </Button>
                  <Button variant="outline" size="sm">
                    <Image className="w-4 h-4 mr-1" />
                    Image
                  </Button>
                </div>
              </div>

              {/* Export Section */}
              <div className="border-t pt-6 space-y-4">
                <h4 className="font-semibold text-gray-900">Export Options</h4>
                
                {!isPremium && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-600 mr-2" />
                      <span className="text-sm font-medium text-yellow-800">Free Export</span>
                    </div>
                    <p className="text-xs text-yellow-700 mb-3">Includes watermark. Remove it by:</p>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-yellow-700 border-yellow-300 hover:bg-yellow-100"
                        onClick={watchAdToRemoveWatermark}
                      >
                        Watch 30s Ad (Free)
                      </Button>
                      <Button 
                        size="sm" 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => setIsPremium(true)}
                      >
                        Upgrade to Premium
                      </Button>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Button 
                    onClick={exportCarousel}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export as PNG
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" disabled={!isPremium}>
                      Export PDF
                    </Button>
                    <Button variant="outline" size="sm" disabled={!isPremium}>
                      Export ZIP
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselBuilder;
