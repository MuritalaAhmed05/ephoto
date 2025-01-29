"use client";
import React, { useState, useEffect, ReactNode } from "react";
import {
  Menu,
  Loader2,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton"
const apis = [
  {
    name: "Shimmering Avatars",
    url: "https://api.nexoracle.com/ephoto360/shimmering-aov-avaters?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Avengers",
    url: "https://api.nexoracle.com/ephoto360/avengers?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "American Flag 3D",
    url: "https://api.nexoracle.com/ephoto360/american-flag-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Angel Wings",
    url: "https://api.nexoracle.com/ephoto360/angel-wings?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Angel Wings 2",
    url: "https://api.nexoracle.com/ephoto360/angel-wings2?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Anonymous Hacker",
    url: "https://api.nexoracle.com/ephoto360/annonymous-hacker?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Anniversary Cake",
    url: "https://api.nexoracle.com/ephoto360/anniversary-cake?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Blackpink",
    url: "https://api.nexoracle.com/ephoto360/blackpink?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Blackpink 2",
    url: "https://api.nexoracle.com/ephoto360/blackpink2?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Blackpink Neon",
    url: "https://api.nexoracle.com/ephoto360/blackpink-neon?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Birthday Cake",
    url: "https://api.nexoracle.com/ephoto360/birthday-cake?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Birthday Card",
    url: "https://api.nexoracle.com/ephoto360/birthday-card?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Born Pink",
    url: "https://api.nexoracle.com/ephoto360/born-pink?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Black Team",
    url: "https://api.nexoracle.com/ephoto360/black-team?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Bloody Text",
    url: "https://api.nexoracle.com/ephoto360/bloody-text1?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Colorful Neon Light",
    url: "https://api.nexoracle.com/ephoto360/colorful-neon-light?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Christmas Season",
    url: "https://api.nexoracle.com/ephoto360/christmas-season?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Christmas Glittering 3D",
    url: "https://api.nexoracle.com/ephoto360/christmas-glittering-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Captain America",
    url: "https://api.nexoracle.com/ephoto360/captain-america?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Cloud Effects",
    url: "https://api.nexoracle.com/ephoto360/cloud-effects?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Cartoon Style Graffiti",
    url: "https://api.nexoracle.com/ephoto360/cartoon-style-graffiti?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Bokeh Text",
    url: "https://api.nexoracle.com/ephoto360/bokeh-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Beach Text 3D",
    url: "https://api.nexoracle.com/ephoto360/beach-text-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Balloons Cards",
    url: "https://api.nexoracle.com/ephoto360/ballons-cards?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Bloody Text 2",
    url: "https://api.nexoracle.com/ephoto360/bloody-text2?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Free Fire Avatar",
    url: "https://api.nexoracle.com/ephoto360/free-fire-avater?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Flame Letters",
    url: "https://api.nexoracle.com/ephoto360/flame-letters?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Flowers Valentine",
    url: "https://api.nexoracle.com/ephoto360/flowers-valentine?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Foggy Glass",
    url: "https://api.nexoracle.com/ephoto360/foggy-glass?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Firework Text",
    url: "https://api.nexoracle.com/ephoto360/firework-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Dragon Ball Cover",
    url: "https://api.nexoracle.com/ephoto360/dragon-ball-cover?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Dragon Ball",
    url: "https://api.nexoracle.com/ephoto360/dragon-ball?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Digital Glitch",
    url: "https://api.nexoracle.com/ephoto360/digital-glitch?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Devil Wings",
    url: "https://api.nexoracle.com/ephoto360/devil-wings?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Deadpool",
    url: "https://api.nexoracle.com/ephoto360/deadpool?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Cyber Hunter",
    url: "https://api.nexoracle.com/ephoto360/cyber-hunter?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Cubic 3D",
    url: "https://api.nexoracle.com/ephoto360/cubic-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Colorful Paint 3D",
    url: "https://api.nexoracle.com/ephoto360/colorful-paint-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "COD Warzone",
    url: "https://api.nexoracle.com/ephoto360/cod-warzone?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "LOA Avatar",
    url: "https://api.nexoracle.com/ephoto360/loa-avater?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Joker Avatar",
    url: "https://api.nexoracle.com/ephoto360/joker-avater?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Heart Wings",
    url: "https://api.nexoracle.com/ephoto360/heart-wings?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Hologram 3D",
    url: "https://api.nexoracle.com/ephoto360/hologram-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Heart Flashlight",
    url: "https://api.nexoracle.com/ephoto360/heart-flashlight?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Halloween Fire",
    url: "https://api.nexoracle.com/ephoto360/halloween-fire?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Gold Text",
    url: "https://api.nexoracle.com/ephoto360/gold-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Glowing Text",
    url: "https://api.nexoracle.com/ephoto360/glowing-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Glitter Text",
    url: "https://api.nexoracle.com/ephoto360/glitter-text?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Gradient Logo 3D",
    url: "https://api.nexoracle.com/ephoto360/gredient-logo-3d?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Gradient 3D Text",
    url: "https://api.nexoracle.com/ephoto360/gradient-3d-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Graffiti Wall",
    url: "https://api.nexoracle.com/ephoto360/graffiti-wall?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Girl Painting Graffiti",
    url: "https://api.nexoracle.com/ephoto360/girl-painting-graffiti?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Glossy Silver 3D",
    url: "https://api.nexoracle.com/ephoto360/glossy-silver-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Cute Gamer Girl Mascot",
    url: "https://api.nexoracle.com/ephoto360/cute-gamer-girl-moscot?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Frozen Christmas",
    url: "https://api.nexoracle.com/ephoto360/frozen-christmas?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Football Team",
    url: "https://api.nexoracle.com/ephoto360/football-team?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Foil Balloon 3D",
    url: "https://api.nexoracle.com/ephoto360/foil-balloon-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Futuristic Technology Light",
    url: "https://api.nexoracle.com/ephoto360/futuristic-technology-light?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "PHub",
    url: "https://api.nexoracle.com/ephoto360/phub?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "One Piece",
    url: "https://api.nexoracle.com/ephoto360/one-piece?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Oops",
    url: "https://api.nexoracle.com/ephoto360/oops?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Neon Text",
    url: "https://api.nexoracle.com/ephoto360/neol-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Neon Glitch",
    url: "https://api.nexoracle.com/ephoto360/neon-glitch?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Naruto",
    url: "https://api.nexoracle.com/ephoto360/naruto?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Music Equalizer",
    url: "https://api.nexoracle.com/ephoto360/music-equalizer?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Multicolored Signature",
    url: "https://api.nexoracle.com/ephoto360/multicolored-signature?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Modern Gold 4",
    url: "https://api.nexoracle.com/ephoto360/modern-gold4?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Modern Gold 3",
    url: "https://api.nexoracle.com/ephoto360/modern-gold3?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Metal 3D",
    url: "https://api.nexoracle.com/ephoto360/metal-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Metallic Glass",
    url: "https://api.nexoracle.com/ephoto360/mettalic-glass?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Magic Text",
    url: "https://api.nexoracle.com/ephoto360/magic-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Matrix",
    url: "https://api.nexoracle.com/ephoto360/matrix?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Marvel",
    url: "https://api.nexoracle.com/ephoto360/marvel?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Multiple Typography",
    url: "https://api.nexoracle.com/ephoto360/multiple-typography?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "LOL Avatars",
    url: "https://api.nexoracle.com/ephoto360/lol-avaters?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Luxury Gold Text",
    url: "https://api.nexoracle.com/ephoto360/luxury-gold-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Light Bulb 3D",
    url: "https://api.nexoracle.com/ephoto360/light-bulb-3d?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "TikTok Effect",
    url: "https://api.nexoracle.com/ephoto360/tiktok-effect?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Thor",
    url: "https://api.nexoracle.com/ephoto360/thor?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "TFT Avatar",
    url: "https://api.nexoracle.com/ephoto360/tft-avater?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Stone 3D",
    url: "https://api.nexoracle.com/ephoto360/stone-3d?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Sunset Light",
    url: "https://api.nexoracle.com/ephoto360/sunset-light?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Star Wars Mascot",
    url: "https://api.nexoracle.com/ephoto360/star-wars-moscot?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Space 3D",
    url: "https://api.nexoracle.com/ephoto360/space-3d?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Sparkless Christmas 3D",
    url: "https://api.nexoracle.com/ephoto360/sparkless-christmas-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Snow 3D",
    url: "https://api.nexoracle.com/ephoto360/snow-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Sand Beach",
    url: "https://api.nexoracle.com/ephoto360/sand-beach?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Sci-Fi Logo",
    url: "https://api.nexoracle.com/ephoto360/sci-fi-logo?apikey=4aeb57e3ed0f238762&text1=&text2=&text3=",
    inputs: 3,
  },
  {
    name: "Realistic Embroidery",
    url: "https://api.nexoracle.com/ephoto360/realistic-embroidery?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Pixel Glitch",
    url: "https://api.nexoracle.com/ephoto360/pixel-glitch?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "PUBG Cover",
    url: "https://api.nexoracle.com/ephoto360/pubg-cover?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "PUBG Mascot 3",
    url: "https://api.nexoracle.com/ephoto360/pubg-moscot3?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "PUBG Mascot 2",
    url: "https://api.nexoracle.com/ephoto360/pubg-moscot2?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "PUBG Mascot",
    url: "https://api.nexoracle.com/ephoto360/pubg-moscot?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Paper Cut Art",
    url: "https://api.nexoracle.com/ephoto360/paper-cut-art?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Paint Splatter",
    url: "https://api.nexoracle.com/ephoto360/paint-splatter?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Paper Cut 3D",
    url: "https://api.nexoracle.com/ephoto360/paper-cut-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Valorant YouTube Banner",
    url: "https://api.nexoracle.com/ephoto360/valorant-youtube-banner?apikey=4aeb57e3ed0f238762&text1=&text2=&text3=",
    inputs: 3,
  },
  {
    name: "Write Galaxy",
    url: "https://api.nexoracle.com/ephoto360/write-galaxy?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Women's Day",
    url: "https://api.nexoracle.com/ephoto360/womens-day?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Wooden 3D",
    url: "https://api.nexoracle.com/ephoto360/wooden-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Wet Glass",
    url: "https://api.nexoracle.com/ephoto360/wet-glass?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Water Effect",
    url: "https://api.nexoracle.com/ephoto360/water-effect?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Watercolor Text",
    url: "https://api.nexoracle.com/ephoto360/watercolor-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Warning Sign",
    url: "https://api.nexoracle.com/ephoto360/warning-sign?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Vintage Television",
    url: "https://api.nexoracle.com/ephoto360/vintage-television?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Underwater Text",
    url: "https://api.nexoracle.com/ephoto360/underwater-text?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Typography",
    url: "https://api.nexoracle.com/ephoto360/typography?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
];
interface TooltipProps {
  children: ReactNode;
  text: string;
}
const Tooltip: React.FC<TooltipProps> = ({ children, text }) => (
  <div className="group relative">
    {children}
    <div
      className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded 
      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
      whitespace-nowrap z-50"
    >
      {text}
      <div
        className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent 
        border-r-gray-800"
      ></div>
    </div>
  </div>
);
const Dashboard = () => {
  const [selectedApi, setSelectedApi] = useState(apis[0]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const toggleNav = () => setIsNavOpen((prev) => !prev);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const fetchImage = async () => {
    setError(null);
    setLoading(true);
    setImageUrl(null);
    try {
      let url = selectedApi.url;
      if (selectedApi.inputs === 1) {
        url = `${url}${encodeURIComponent(input1)}`;
      } else if (selectedApi.inputs === 2) {
        url = `${url.split("&text1=")[0]}&text1=${encodeURIComponent(
          input1
        )}&text2=${encodeURIComponent(input2)}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch the image.");
      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      setImageUrl(imageObjectURL);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700">
    {!isNavOpen && (
      <button
        onClick={toggleNav}
        className="absolute top-4 right-4 md:hidden z-40 p-2 rounded-full bg-blue-400 text-white shadow-lg hover:bg-blue-500"
      >
        {isNavOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    )}
    
    {isNavOpen && (
      <div
        className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-20"
        onClick={() => setIsNavOpen(false)}
      />
    )}
    
    <motion.div
      initial={false}
      animate={{
        width: isNavOpen ? "16rem" : "5rem",
        x: isNavOpen ? 0 : window.innerWidth < 768 ? -80 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className={`fixed md:relative z-30 h-full bg-gradient-to-b from-blue-800 to-blue-900 shadow-xl transition-all duration-300 ease-in-out flex-shrink-0
  ${isNavOpen ? "translate-x-4" : "-translate-x-full md:translate-x-0"}`}
    >
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="absolute -right-3 top-4 bg-blue-700 text-white rounded-full p-1 shadow-md z-10 md:flex hidden hover:bg-blue-600"
      >
        {isNavOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
      
      <div className="p-4 border-b border-blue-700 flex items-center">
        <Menu className="mr-2 text-blue-200" size={20} />
        {isNavOpen && (
          <motion.h2
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
            className="text-xl font-bold text-white"
          >
            Image Generator
          </motion.h2>
        )}
      </div>
      
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <ul className="space-y-1 p-2">
          {apis.map((api) => (
            <motion.li
              key={api.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
              className={`rounded-lg cursor-pointer ${
                selectedApi.name === api.name
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-700 text-blue-200"
              }`}
            >
              <button
                onClick={() => {
                  setSelectedApi(api);
                  setImageUrl(null);
                  setInput1("");
                  setInput2("");
                  if (window.innerWidth < 768) {
                    setIsNavOpen(false);
                  }
                }}
                className="w-full p-3 flex items-center"
              >
                {!isNavOpen ? (
                  <Tooltip text={api.name}>
                    <ImageIcon
                      size={18}
                      className={selectedApi.name === api.name ? "text-white" : "text-blue-300"}
                    />
                  </Tooltip>
                ) : (
                  <>
                    <ImageIcon
                      size={18}
                      className={selectedApi.name === api.name ? "text-white" : "text-blue-300"}
                    />
                    <span className="ml-3 truncate">{api.name}</span>
                  </>
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>


    </motion.div>
    
    <div className="flex-1 p-8 md:ml-0 overflow-y-auto">
      <div className="max-w-4xl mx-auto mt-16 md:mt-0">
        <h1 className="text-2xl font-bold mb-6 flex items-center text-white">
          <ImageIcon size={24} className="mr-2 text-blue-300" />
          {selectedApi.name}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl shadow-xl p-6 border border-blue-700"
        >
          <div className="flex flex-col md:flex-row md:space-x-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchImage();
              }}
              className="space-y-4 md:w-1/2"
            >
              {selectedApi.inputs >= 1 && (
                <div>
                  <label
                    htmlFor="input1"
                    className="block text-sm font-medium text-blue-200"
                  >
                    Input 1
                  </label>
                  <input
                    type="text"
                    id="input1"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    className="mt-1 w-full bg-blue-950 border border-blue-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-400"
                    placeholder="Enter first input"
                    required
                  />
                </div>
              )}
              {selectedApi.inputs === 2 && (
                <div>
                  <label
                    htmlFor="input2"
                    className="block text-sm font-medium text-blue-200"
                  >
                    Input 2
                  </label>
                  <input
                    type="text"
                    id="input2"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    className="mt-1 w-full bg-blue-950 border border-blue-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-400"
                    placeholder="Enter second input"
                    required
                  />
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                ) : (
                  "Generate Image"
                )}
              </button>
            </form>
            
            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center items-center">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-red-900/50 text-red-200 rounded-lg flex items-center"
                  >
                    <AlertCircle className="mr-2" size={20} />
                    {error}
                  </motion.div>
                )}
              {loading ? (
  <Skeleton className="h-[400px] w-[300px] rounded-xl" />
) : imageUrl ? (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="rounded-lg shadow-xl flex justify-center items-center overflow-hidden"
  >
    <img src={imageUrl} alt={selectedApi.name} className="rounded-lg h-[400px] w-[300px]" />
  </motion.div>
) : null}

              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
};
export default Dashboard;
