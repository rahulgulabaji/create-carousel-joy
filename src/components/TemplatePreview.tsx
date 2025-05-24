
import { useState } from "react";
import { Template } from "@/data/templates";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Download, Eye } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface TemplatePreviewProps {
  template: Template;
  onUseTemplate: (template: Template) => void;
}

const TemplatePreview = ({ template, onUseTemplate }: TemplatePreviewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % template.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + template.slides.length) % template.slides.length);
  };

  const handleUseTemplate = () => {
    if (template.premium) {
      toast({
        title: "Premium Template",
        description: "This template requires a premium subscription to use.",
        variant: "destructive"
      });
      return;
    }
    
    onUseTemplate(template);
    setIsOpen(false);
    toast({
      title: "Template Applied",
      description: `"${template.name}" template has been loaded into the builder!`
    });
  };

  const slide = template.slides[currentSlide];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
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
                </div>
              </div>
            </div>
            
            {/* Template Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{template.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{template.slides.length} slides</span>
                <span>{template.downloads} downloads</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{template.name}</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={template.slides.length <= 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={template.slides.length <= 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Preview */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className={`${slide.bgColor} aspect-square rounded-t-lg p-8 flex flex-col justify-center items-center ${slide.textColor} text-center transition-all duration-300`}>
                  <h2 className={`${slide.fontSize} ${slide.fontWeight} mb-4`}>
                    {slide.title}
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {slide.content}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Slide {currentSlide + 1} of {template.slides.length}</span>
                    <span>1080x1080px</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Template Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Template Details</h3>
              <p className="text-gray-600">{template.description}</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">What's Included</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• {template.slides.length} professionally designed slides</li>
                <li>• Customizable text and colors</li>
                <li>• High-quality export (1080x1080px)</li>
                <li>• Ready-to-post format</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button 
                onClick={handleUseTemplate}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Use This Template
              </Button>
              {template.premium && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Premium templates require a subscription
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplatePreview;
