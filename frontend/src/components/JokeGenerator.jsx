import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Smile, Sparkles, Globe, RefreshCw } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { getMockJoke } from '../utils/mockData';

const JokeGenerator = () => {
  const [currentJoke, setCurrentJoke] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isGenerating, setIsGenerating] = useState(false);
  const [jokeCategory, setJokeCategory] = useState('');
  const { toast } = useToast();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  const handleGenerateJoke = async () => {
    setIsGenerating(true);
    
    // Simulate API delay for better UX
    setTimeout(() => {
      const joke = getMockJoke(selectedLanguage);
      setCurrentJoke(joke.text);
      setJokeCategory(joke.category);
      setIsGenerating(false);
      
      toast({
        title: "New Joke Generated!",
        description: `Here's a ${joke.category} joke in ${languages.find(l => l.code === selectedLanguage)?.name}`,
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Smile className="h-12 w-12 text-orange-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              JokeMaster
            </h1>
            <Sparkles className="h-12 w-12 text-amber-500" />
          </div>
          <p className="text-xl text-gray-600 font-medium">
            Discover hilarious jokes in multiple languages
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Globe className="h-4 w-4" />
            <span>Supporting 5 languages worldwide</span>
          </div>
        </div>

        {/* Language Selector */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <span>Choose Your Language</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full h-12 text-lg border-2 border-gray-200 hover:border-orange-300 focus:border-orange-500 transition-all duration-200">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code} className="text-lg py-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Joke Display */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-white to-orange-50/50 backdrop-blur-sm min-h-[200px]">
          <CardContent className="p-8">
            {currentJoke ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-3 py-1">
                    {jokeCategory}
                  </Badge>
                  <Badge variant="outline" className="border-amber-300 text-amber-700">
                    {languages.find(l => l.code === selectedLanguage)?.name}
                  </Badge>
                </div>
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic border-l-4 border-orange-400 pl-6">
                  "{currentJoke}"
                </blockquote>
              </div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <Smile className="h-16 w-16 text-gray-300 mx-auto" />
                <p className="text-xl text-gray-500 font-medium">
                  Ready for a good laugh? Click the button below!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Generate Button */}
        <div className="text-center">
          <Button
            onClick={handleGenerateJoke}
            disabled={isGenerating}
            size="lg"
            className="h-16 px-12 text-lg font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none"
          >
            {isGenerating ? (
              <div className="flex items-center space-x-3">
                <RefreshCw className="h-6 w-6 animate-spin" />
                <span>Generating...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Sparkles className="h-6 w-6" />
                <span>Generate Joke</span>
                <Sparkles className="h-6 w-6" />
              </div>
            )}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-8">
          <p>Bringing smiles to faces worldwide • JokeMaster 2025</p>
        </div>
      </div>
    </div>
  );
};

export default JokeGenerator;