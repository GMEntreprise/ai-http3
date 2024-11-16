import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Calculator,
  Ruler,
  DollarSign,
  Globe,
  Gamepad,
  Coins,
} from "lucide-react";

interface ExampleCardProps {
  icon: React.ReactNode;
  title: string;
  url: string;
  showDescription?: boolean;
  description?: string;
}

export function ExampleWebsites({
  showDescription = true,
}: {
  showDescription?: boolean;
}) {
  return (
    <div className="w-full max-w-6xl">
      <h2 className="text-2xl font-semibold text-white mb-8">
  Exemples de Sites Web
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ExampleCard
          icon={<Calculator className="w-6 h-6" />}
          title="Calculator"
          // description="A simple calculator built with HTML, CSS, and JavaScript."
          url="https://bafkreicxjg7dxqftonwmfvrokym6q5isbs2i35spht6hy2pt37jfuvp2v4.ipfs.dweb.link/"
          showDescription={showDescription}
        />
  
        
      </div>
    </div>
  );
}

function ExampleCard({
  icon,
  title,
  description,
  url,
  showDescription,
}: ExampleCardProps) {
  return (
    <Card className="bg-[#0a0a0a] border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="flex flex-col items-center space-y-4 mb-4">
          <div className="bg-black text-white border p-3 rounded-full">
            {icon}
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </div>
        {showDescription && description && (
          <p className="text-gray-400 mb-6 text-center text-sm">
            {description}
          </p>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <span className="bg-gray-700 text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-600 transition-colors duration-300">
             Voir le site web
          </span>
        </a>
      </CardContent>
    </Card>
  );
}
