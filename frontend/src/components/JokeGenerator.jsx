import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Smile, Sparkles, Globe, RefreshCw, Heart, Star } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { getMockJoke } from '../utils/mockData';

const JokeGenerator = () => {
  const [currentJoke, setCurrentJoke] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isGenerating, setIsGenerating] = useState(false);
  const [jokeCategory, setJokeCategory] = useState('');
  const [jokeCount, setJokeCount] = useState(0);
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
      setJokeCount(prev => prev + 1);
      setIsGenerating(false);
      
      toast({
        title: "New Joke Generated!",
        description: `Here's a ${joke.category} joke in ${languages.find(l => l.code === selectedLanguage)?.name}`,
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/60 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-200/40 to-amber-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-rose-200/30 to-orange-200/30 rounded-full blur-lg animate-pulse delay-2000"></div>
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

          {/* Stats Bar */}
          {jokeCount > 0 && (
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-orange-100/80 to-amber-100/80 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 shadow-xl">
                <div className="flex items-center space-x-4 text-sm font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Jokes Generated: {jokeCount}</span>
                  </div>
                  <div className="w-1 h-4 bg-gray-300 rounded"></div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Smiles Created: {jokeCount * 3}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Language Selector */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-white/90 to-orange-50/60 backdrop-blur-lg border border-white/20 hover:shadow-3xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <span>Choose Your Language</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full h-14 text-xl border-2 border-gray-200/50 hover:border-orange-300 focus:border-orange-500 transition-all duration-200 bg-white/70 backdrop-blur-sm shadow-lg">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl">
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code} className="text-xl py-4 hover:bg-orange-50/70">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Joke Display */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/95 to-orange-50/40 backdrop-blur-lg border border-white/20 min-h-[280px] hover:shadow-3xl transition-all duration-300 group">
            <CardContent className="p-10">
              {currentJoke ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 text-lg font-semibold border border-orange-200/50 shadow-lg">
                      {jokeCategory}
                    </Badge>
                    <Badge variant="outline" className="border-amber-300 text-amber-700 px-4 py-2 text-lg font-semibold bg-amber-50/50 shadow-lg">
                      {languages.find(l => l.code === selectedLanguage)?.name}
                    </Badge>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"></div>
                    <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed pl-8 group-hover:text-gray-900 transition-colors duration-300">
                      <span className="italic">"{currentJoke}"</span>
                    </blockquote>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 space-y-6">
                  <div className="relative inline-block">
                    <Smile className="h-20 w-20 text-gray-300 mx-auto animate-pulse" />
                    <div className="absolute inset-0 bg-gray-200/30 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl text-gray-600 font-semibold">
                      Ready for a good laugh?
                    </p>
                    <p className="text-lg text-gray-500">
                      Click the magical button below and let the fun begin!
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Generate Button */}
          <div className="text-center space-y-4">
            <Button
              onClick={handleGenerateJoke}
              disabled={isGenerating}
              size="lg"
              className="h-18 px-16 text-xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 disabled:transform-none border-0 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isGenerating ? (
                <div className="flex items-center space-x-4 relative z-10">
                  <RefreshCw className="h-7 w-7 animate-spin" />
                  <span>Generating Magic...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-4 relative z-10">
                  <Sparkles className="h-7 w-7 group-hover:animate-pulse" />
                  <span>Generate Joke</span>
                  <Sparkles className="h-7 w-7 group-hover:animate-pulse" />
                </div>
              )}
            </Button>
            
            <p className="text-sm text-gray-500 font-medium">
              Powered by AI • Spreading joy since 2025
            </p>
          </div>

          {/* Footer */}
          <div className="text-center pt-8">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg">
              <p className="text-sm text-gray-600 font-medium">
                Bringing smiles to faces worldwide • JokeMaster 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeGenerator;