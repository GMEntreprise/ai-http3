"use client";
import React from "react";
import { ExampleWebsites } from "./ExampleWebsites";
import { SearchEngineSP } from "./SearchEngineSP";

export function SearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-start pt-10 px-4">
      <div className="mb-8 flex flex-row items-center">
        <p className="text-3xl font-bold">HTTP3HOST Recherche</p>
      </div>
      <SearchEngineSP />
      <div className="mt-16 w-full max-w-4xl">
        <ExampleWebsites showDescription={false} />
      </div>
    </div>
  );
}
