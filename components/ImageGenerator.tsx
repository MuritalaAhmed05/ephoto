"use client"
import React, { useState } from 'react';
import { ApiEndpoint } from '@/app/types';

interface ImageGeneratorProps {
  api: ApiEndpoint;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ api }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    const baseUrl = api.endpoint;
    const apiKey = '4aeb57e3ed0f238762';
  
    let url = `${baseUrl}?apikey=${apiKey}`;
  
    if (api.hasTwoInputs) {
      url += `&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
    } else {
      url += `&text=${encodeURIComponent(text1)}`;
    }
  
    // Assign the URL directly without further modification
    setGeneratedImage(decodeURIComponent(url));
    console.log(generatedImage);

  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">{api.name}</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {api.hasTwoInputs ? 'First Text' : 'Text'}
            </label>
            <input
              type="text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter text..."
            />
          </div>

          {api.hasTwoInputs && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Second Text
              </label>
              <input
                type="text"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter second text..."
              />
            </div>
          )}

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Generate Image
          </button>
          <img
  src="https://api.nexoracle.com/ephoto360/shimmering-aov-avaters?apikey=4aeb57e3ed0f238762&text=Asin"
  alt="Generated"
/>

        </div>

        {generatedImage && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Generated Image</h3>
            <div className="border rounded-lg p-2">
              {/* Use dangerouslySetInnerHTML to prevent JSX encoding */}
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
