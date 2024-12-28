import { TypewriterText } from './TypewriterText';

export function HeroContent() {
  return (
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <TypewriterText />
      <p className="text-3xl text-gray-300 mb-4 animate-fade-in">
      Close More Real Estate Deals with AI-Powered Follow-Up
      </p>
      <p className="text-xl text-gray-400 mb-11 animate-fade-in px-[100px]">
      Stop chasing leads. Start closing them. Let our AI-powered system turn visits into property sales—automatically.
      </p>
    </div>
  );
}