import { HeroContent } from './hero/HeroContent.js';
import  VideoPreview  from './hero/VideoPreview.jsx';
import {Rocket} from 'lucide-react';
import { Button } from '../ui/Button.tsx';
export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 mt-[36px] overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#8200fb]/20" />
      <div className="container mx-auto px-4 relative z-10">
        <HeroContent />
        <div className='w-full max-w-[800px] mx-auto mt-2 mb-16'>
        <VideoPreview videoUrl="/demo.mov"/>
        </div>

        <div className="flex justify-center items-center mb-12">
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2QwpVYzxRiXYomSmksCUl8IPJz-63vIqm1r6Yvosi_kmZrASWz2VnVJpzQhNV7kZiFkx-pkKhZ">
        <Button 
          size="lg" 
          className="group hover:scale-105 transition-all duration-300"
        >
          <Rocket className="w-5 h-5 mr-2 " />
          Book Demo
        </Button>
        </a>
      </div>
      </div>
    </div>
  );
}