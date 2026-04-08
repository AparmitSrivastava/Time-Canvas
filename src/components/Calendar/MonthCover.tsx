import React, { useEffect, useState } from 'react';

export const monthContent = [
  { month: "January", image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop", tagline: "the month of new beginnings", quote: "Every quiet start holds the courage to become something extraordinary." },
  { month: "February", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop", tagline: "the month of connection", quote: "What we nurture in others softly grows within ourselves." },
  { month: "March", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop", tagline: "the month of awakening", quote: "The smallest spark of intention can awaken an entire season of change." },
  { month: "April", image: "https://images.unsplash.com/photo-1518384401463-d3876163c195?q=80&w=1000&auto=format&fit=crop", tagline: "the month of growth", quote: "Progress often begins invisibly, long before it becomes visible." },
  { month: "May", image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop", tagline: "the month of stillness", quote: "Time is a landscape that we curate one breath at a time." },
  { month: "June", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000&auto=format&fit=crop", tagline: "the month of light", quote: "Clarity arrives quietly, illuminating paths we could not see before." },
  { month: "July", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop", tagline: "the month of freedom", quote: "Freedom lives where courage meets curiosity." },
  { month: "August", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1000&auto=format&fit=crop", tagline: "the month of strength", quote: "True strength often grows in moments no one else can see." },
  { month: "September", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop", tagline: "the month of focus", quote: "Where attention flows, possibility follows." },
  { month: "October", image: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1000&auto=format&fit=crop", tagline: "the month of transformation", quote: "Letting go is not an ending, but an opening." },
  { month: "November", image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000&auto=format&fit=crop", tagline: "the month of gratitude", quote: "Gratitude turns what we have into enough." },
  { month: "December", image: "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tagline: "the month of reflection", quote: "Reflection gives meaning to the journey behind us." }
];

interface MonthCoverProps {
  monthName: string;
}

export const MonthCover: React.FC<MonthCoverProps> = ({ monthName }) => {
  const [loadedImage, setLoadedImage] = useState("");

  const currentMonthData = monthContent.find(t => t.month.toLowerCase() === monthName.toLowerCase());
  const currentTagline = currentMonthData?.tagline || "the month of stillness";
  const currentQuote = currentMonthData?.quote || "Time is a landscape that we curate one breath at a time.";
  const fallbackImage = monthContent[4].image; // May's original image
  const targetImage = currentMonthData?.image || fallbackImage;

  // Global Image Preloader pipeline ensuring navigation eliminates structural flicker
  useEffect(() => {
    monthContent.forEach((data) => {
      const img = new Image();
      img.src = data.image;
    });
  }, []);

  // Smooth cinematic crossfade transition mapping logic 
  useEffect(() => {
    const img = new Image();
    img.src = targetImage;
    img.onload = () => setLoadedImage(targetImage);
  }, [targetImage]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#eec89e] rounded-md shadow-inner transition-colors duration-1000 ease-in-out">
      {/* Background Cover Image Handler */}
      <img 
        key={loadedImage}
        src={loadedImage || targetImage} 
        alt="Monthly Curated Theme Snapshot" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 animate-in fade-in duration-700 ease-out"
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E5C88]/90 via-[#1E5C88]/30 to-transparent h-[50%] mix-blend-multiply opacity-90 transition-opacity duration-1000" />
      
      {/* Dynamic Title block */}
      <div className="absolute top-16 left-0 right-0 text-center text-white z-10">
        <h2 className="text-[52px] font-serif tracking-tight mb-2 leading-none">{monthName}</h2>
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/90">{currentTagline}</p>
      </div>

      {/* Bottom Quote Box */}
      <div className="absolute bottom-8 left-6 right-6">
        <div className="bg-[#4E6139]/80 backdrop-blur-md p-6 shadow-lg border-l-2 border-[#A8BC8D]">
          <p className="text-[13px] font-serif italic mb-3 leading-relaxed text-white/95">
            "{currentQuote}"
          </p>
          <p className="text-[8px] font-bold text-white/60 uppercase tracking-widest">- Editorial Curators</p>
        </div>
      </div>
    </div>
  );
};
