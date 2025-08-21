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
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/60 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-200/40 to-amber-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <div className="w-full max-w-4xl space-y-10">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-6 group">
              <div className="relative">
                <Smile className="h-16 w-16 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
              <h1 className="text-7xl font-black bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent tracking-tight">
                JokeMaster
              </h1>
              <div className="relative">
                <Sparkles className="h-16 w-16 text-amber-500 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-2xl text-gray-700 font-semibold tracking-wide">
                Discover hilarious jokes in multiple languages
              </p>
              <div className="flex items-center justify-center space-x-2 text-lg text-gray-600 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 shadow-lg">
                <Globe className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Supporting 6 languages worldwide</span>
              </div>
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