
import { useState, useCallback, useMemo } from "react";
import { Plus, Download, Eye, Palette, Type, Image, Star, Trash2, Copy, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const CarouselBuilder = () => {
  const [slides, setSlides] = useState([
    { 
      id: 1, 
      title: "Welcome to CarouselMagic", 
      content: "Create stunning social media carousels in minutes!", 
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      textColor: "text-white",
      fontSize: "text-2xl",
      fontWeight: "font-bold"
    },
    { 
      id: 2, 
      title: "Drag & Drop Builder", 
      content: "Easy-to-use interface with live preview", 
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-500",
      textColor: "text-white",
      fontSize: "text-2xl",
      fontWeight: "font-bold"
    },
    { 
      id: 3, 
      title: "Export Anywhere", 
      content: "PNG, PDF, ZIP formats available", 
      bgColor: "bg-gradient-to-br from-green-500 to-blue-500",
      textColor: "text-white",
      fontSize: "text-2xl",
      fontWeight: "font-bold"
    }
  ]);
  
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);
  const [isPremium, setIsPremium] = useState(false);
  const [isFullPreview, setIsFullPreview] = useState(false);

  const backgroundOptions = useMemo(() => [
    { name: "Purple Gradient", class: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "Blue Gradient", class: "bg-gradient-to-br from-blue-500 to-purple-500" },
    { name: "Green Gradient", class: "bg-gradient-to-br from-green-500 to-blue-500" },
    { name: "Orange Gradient", class: "bg-gradient-to-br from-orange-400 to-pink-500" },
    { name: "Dark Mode", class: "bg-gradient-to-br from-gray-800 to-gray-900" },
    { name: "Sunset", class: "bg-gradient-to-br from-yellow-400 to-red-500" },
    { name: "Ocean", class: "bg-gradient-to-br from-cyan-400 to-blue-600" },
    { name: "Forest", class: "bg-gradient-to-br from-green-400 to-green-700" }
  ], []);

  const fontSizes = useMemo(() => [
    { name: "Small", class: "text-lg" },
    { name: "Medium", class: "text-xl" },
    { name: "Large", class: "text-2xl" },
    { name: "Extra Large", class: "text-3xl" }
  ], []);

  const fontWeights = useMemo(() => [
    { name: "Normal", class: "font-normal" },
    { name: "Medium", class: "font-medium" },
    { name: "Semibold", class: "font-semibold" },
    { name: "Bold", class: "font-bold" }
  ], []);

  const textColors = useMemo(() => [
    { name: "White", class: "text-white" },
    { name: "Black", class: "text-black" },
    { name: "Gray", class: "text-gray-600" },
    { name: "Blue", class: "text-blue-600" },
    { name: "Purple", class: "text-purple-600" },
    { name: "Pink", class: "text-pink-600" }
  ], []);

  const updateSlide = useCallback((updates) => {
    const updatedSlide = { ...selectedSlide, ...updates };
    setSelectedSlide(updatedSlide);
    setSlides(prevSlides => prevSlides.map(s => s.id === selectedSlide.id ? updatedSlide : s));
  }, [selectedSlide]);

  const addSlide = useCallback(() => {
    const newSlide = {
      id: Date.now(),
      title: "New Slide",
      content: "Add your content here...",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      textColor: "text-white",
      fontSize: "text-2xl",
      fontWeight: "font-bold"
    };
    setSlides(prev => [...prev, newSlide]);
    setSelectedSlide(newSlide);
    toast({
      title: "Slide Added",
      description: "New slide created successfully!"
    });
  }, []);

  const duplicateSlide = useCallback(() => {
    const duplicatedSlide = {
      ...selectedSlide,
      id: Date.now(),
      title: `${selectedSlide.title} (Copy)`
    };
    setSlides(prev => [...prev, duplicatedSlide]);
    setSelectedSlide(duplicatedSlide);
    toast({
      title: "Slide Duplicated",
      description: "Slide copied successfully!"
    });
  }, [selectedSlide]);

  const deleteSlide = useCallback(() => {
    if (slides.length <= 1) {
      toast({
        title: "Cannot Delete",
        description: "You need at least one slide!",
        variant: "destructive"
      });
      return;
    }
    
    const remainingSlides = slides.filter(s => s.id !== selectedSlide.id);
    setSlides(remainingSlides);
    setSelectedSlide(remainingSlides[0]);
    toast({
      title: "Slide Deleted",
      description: "Slide removed successfully!"
    });
  }, [slides, selectedSlide]);

  const moveSlide = useCallback((direction) => {
    const currentIndex = slides.findIndex(s => s.id === selectedSlide.id);
    if (
      (direction === 'up' && currentIndex === 0) || 
      (direction === 'down' && currentIndex === slides.length - 1)
    ) return;

    const newSlides = [...slides];
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    [newSlides[currentIndex], newSlides[targetIndex]] = [newSlides[targetIndex], newSlides[currentIndex]];
    
    setSlides(newSlides);
    toast({
      title: "Slide Moved",
      description: `Slide moved ${direction}!`
    });
  }, [slides, selectedSlide]);

  const exportCarousel = useCallback(() => {
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
  }, [isPremium]);

  const watchAdToRemoveWatermark = useCallback(() => {
    toast({
      title: "Ad Unlocked Export",
      description: "Thanks for watching! Your next export will be watermark-free for 24 hours."
    });
    setIsPremium(true);
    setTimeout(() => setIsPremium(false), 86400000); // 24 hours
  }, []);

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
                <h3 className="text-lg font-semibold text-gray-900">Slides ({slides.length})</h3>
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
                      <div className={`${slide.bgColor} h-20 rounded-lg mb-2 flex items-center justify-center ${slide.textColor} text-sm font-medium relative overflow-hidden`}>
                        <div className="text-center">
                          <div className="font-bold">Slide {index + 1}</div>
                          <div className="text-xs opacity-75 truncate max-w-20">{slide.title}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate flex-1">{slide.title}</p>
                        <div className="flex space-x-1 ml-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSlide(slide);
                              moveSlide('up');
                            }}
                            disabled={index === 0}
                          >
                            <Move className="w-3 h-3 rotate-180" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSlide(slide);
                              moveSlide('down');
                            }}
                            disabled={index === slides.length - 1}
                          >
                            <Move className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={duplicateSlide}>
                    <Copy className="w-4 h-4 mr-1" />
                    Duplicate
                  </Button>
                  <Button variant="outline" size="sm" onClick={deleteSlide} className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>

              {/* Templates */}
              <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-900 mb-3">Background Styles</h4>
                <div className="grid grid-cols-2 gap-2">
                  {backgroundOptions.slice(0, 4).map((bg, index) => (
                    <div 
                      key={index}
                      className={`${bg.class} h-12 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center ${selectedSlide.bgColor === bg.class ? 'ring-2 ring-purple-600' : ''}`}
                      onClick={() => updateSlide({ bgColor: bg.class })}
                    >
                      <span className="text-white text-xs font-medium">{bg.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsFullPreview(!isFullPreview)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  {isFullPreview ? 'Normal' : 'Full'} Preview
                </Button>
              </div>
              
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className={`${selectedSlide.bgColor} ${isFullPreview ? 'aspect-[4/5]' : 'aspect-square'} rounded-t-lg p-8 flex flex-col justify-center items-center ${selectedSlide.textColor} text-center relative transition-all duration-300`}>
                    {!isPremium && (
                      <div className="absolute bottom-2 right-2 text-xs opacity-60 bg-black/20 px-2 py-1 rounded">
                        Made with CarouselMagic
                      </div>
                    )}
                    <h2 className={`${selectedSlide.fontSize} ${selectedSlide.fontWeight} mb-4 transition-all duration-200`}>
                      {selectedSlide.title}
                    </h2>
                    <p className="text-lg leading-relaxed transition-all duration-200">
                      {selectedSlide.content}
                    </p>
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
                    onChange={(e) => updateSlide({ title: e.target.value })}
                    className="mt-1"
                    placeholder="Enter slide title..."
                  />
                </div>
                
                <div>
                  <Label htmlFor="content" className="text-sm font-medium">Content</Label>
                  <textarea
                    id="content"
                    value={selectedSlide.content}
                    onChange={(e) => updateSlide({ content: e.target.value })}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md resize-none h-24 transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your content..."
                  />
                </div>

                {/* Styling Options */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Background</Label>
                    <Select 
                      value={selectedSlide.bgColor} 
                      onValueChange={(value) => updateSlide({ bgColor: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {backgroundOptions.map((bg, index) => (
                          <SelectItem key={index} value={bg.class}>
                            {bg.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Text Color</Label>
                    <Select 
                      value={selectedSlide.textColor} 
                      onValueChange={(value) => updateSlide({ textColor: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {textColors.map((color, index) => (
                          <SelectItem key={index} value={color.class}>
                            {color.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Font Size</Label>
                    <Select 
                      value={selectedSlide.fontSize} 
                      onValueChange={(value) => updateSlide({ fontSize: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fontSizes.map((size, index) => (
                          <SelectItem key={index} value={size.class}>
                            {size.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Font Weight</Label>
                    <Select 
                      value={selectedSlide.fontWeight} 
                      onValueChange={(value) => updateSlide({ fontWeight: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fontWeights.map((weight, index) => (
                          <SelectItem key={index} value={weight.class}>
                            {weight.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
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
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export as PNG ({slides.length} slides)
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled={!isPremium}
                      className={!isPremium ? "opacity-50" : "hover:bg-gray-50"}
                    >
                      Export PDF
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled={!isPremium}
                      className={!isPremium ? "opacity-50" : "hover:bg-gray-50"}
                    >
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
