
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, Volume2, Settings } from 'lucide-react';

const MyThriVoice = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  // Load API key from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('elevenlabs_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      setShowSettings(true);
    }
  }, []);

  // Save API key to localStorage
  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('elevenlabs_api_key', apiKey.trim());
      setShowSettings(false);
    }
  };

  // MyThri's introduction message
  const introMessage = "Hello, I'm MyThri—your wise companion through the Innerverse I'll guide you gently through quests, reflections, and tiny wins Ready to begin?";

  // Generate speech using ElevenLabs API
  const generateSpeech = async (text: string) => {
    if (!apiKey) {
      setShowSettings(true);
      return;
    }

    setIsPlaying(true);

    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/Aria', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
            style: 0.3,
            use_speaker_boost: true
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate speech: ${response.statusText}`);
      }

      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

      // Play the audio
      const audio = new Audio(url);
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(url);
        setAudioUrl(null);
      };
      audio.onerror = () => {
        setIsPlaying(false);
        console.error('Error playing audio');
      };

      await audio.play();

    } catch (error) {
      console.error('Error generating speech:', error);
      setIsPlaying(false);
    }
  };

  const handleIntroduction = () => {
    generateSpeech(introMessage);
  };

  if (showSettings) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            MyThri Voice Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">ElevenLabs API Key</Label>
            <Input
              id="api-key"
              type="password"
              placeholder="Enter your ElevenLabs API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Get your API key from{' '}
              <a
                href="https://elevenlabs.io/app/settings/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ElevenLabs Dashboard
              </a>
            </p>
          </div>
          <Button onClick={handleSaveApiKey} className="w-full">
            Save & Continue
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto gaming-widget">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/uploads/140f2ece-216c-4596-a10c-7560e01b6c3e.png"
            alt="MyThri"
            className="w-16 h-16 object-contain animate-sparkle"
          />
        </div>
        <CardTitle className="font-perfect-dark text-primary">
          MyThri Voice
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-4">
          <p className="text-sm font-pixel-purl text-muted-foreground">
            Let MyThri introduce herself with her warm, guiding voice
          </p>

          <Button
            onClick={handleIntroduction}
            disabled={isPlaying}
            className="magical-btn w-full"
            size="lg"
          >
            {isPlaying ? (
              <>
                <MicOff className="w-4 h-4 mr-2 animate-pulse" />
                MyThri is speaking...
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 mr-2" />
                Meet MyThri
              </>
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSettings(true)}
            className="w-full"
          >
            <Settings className="w-4 h-4 mr-2" />
            Voice Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyThriVoice;
