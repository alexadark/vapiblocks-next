'use client';
import React, { useState, useEffect } from 'react';
import AbstractBall from '@/components/glob';
import useVapi from '@/hooks/use-vapi';
import { Button } from '@/components/ui/button';
import { MicIcon, PhoneOff } from 'lucide-react';

const ParentComponent: React.FC = () => {
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();
  const [config, setConfig] = useState({
    perlinTime: 50.0,
    perlinDNoise: 2.5,
    chromaRGBr: 7.5,
    chromaRGBg: 5,
    chromaRGBb: 7,
    chromaRGBn: 0,
    chromaRGBm: 1.0,
    sphereWireframe: false,
    spherePoints: false,
    spherePsize: 1.0,
    cameraSpeedY: 0.0,
    cameraSpeedX: 0.0,
    cameraZoom: 175,
    cameraGuide: false,
    perlinMorph: 5.5,
  });

  useEffect(() => {
    if (isSessionActive && volumeLevel > 0) {
      setConfig((prevConfig) => ({
        ...prevConfig,
        perlinTime: 100.0,
        perlinMorph: 25.0,
      }));
    } else {
      if (isSessionActive) {
        setConfig((prevConfig) => ({
          ...prevConfig,
          perlinTime: 25.0,
          perlinMorph: 10.0,
        }));
      } else {
        setConfig((prevConfig) => ({
          ...prevConfig,
          perlinTime: 5.0,
          perlinMorph: 0,
        }));
      }
    }
  }, [isSessionActive, volumeLevel]);

  return (
    <div className="relative w-full h-full">
      <AbstractBall {...config} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          onClick={toggleCall}
          size="lg"
          className="rounded-full p-6 bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300"
        >
          {isSessionActive ? (
            <PhoneOff className="w-6 h-6" />
          ) : (
            <MicIcon className="w-6 h-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ParentComponent;
