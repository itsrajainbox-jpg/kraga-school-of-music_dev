"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Region = {
  name: string;
  students: string;
  countries: string[];
};

const regions: Region[] = [
  {
    name: "North America",
    students: "200+",
    countries: ["United States of America", "Canada", "Mexico"],
  },
  {
    name: "Europe",
    students: "150+",
    countries: ["Germany", "France", "Spain", "United Kingdom"],
  },
  {
    name: "Asia",
    students: "100+",
    countries: ["India", "China", "Japan", "Singapore"],
  },
  {
    name: "Oceania",
    students: "50+",
    countries: ["Australia", "New Zealand"],
  },
  {
    name: "Middle East",
    students: "40+",
    countries: ["Saudi Arabia", "Israel", "United Arab Emirates"],
  },
  {
    name: "South America",
    students: "30+",
    countries: ["Brazil", "Argentina", "Chile"],
  },
];

export default function WorldMap() {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);

  const getRegion = (countryName: string) => {
    return regions.find((region) => region.countries.includes(countryName));
  };

  return (
    <section className="relative w-full">
      <div className="relative max-w-7xl mx-auto flex justify-center">
        {/* Floating Tooltip */}
        <AnimatePresence>
          {hoveredRegion && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="
                absolute
                top-4
                left-1/2
                -translate-x-1/2
                z-20
                px-6
                py-4
                rounded-2xl
                border
                border-[#D4AF37]/30
                bg-white/80
                dark:bg-black/60
                backdrop-blur-xl
                shadow-2xl
              ">
              <h3
                className="
                  text-xl
                  font-bold
                  bg-linear-to-r
                  from-gold-dark
                  via-gold
                  to-gold-dark
                  bg-clip-text
                  text-transparent
                ">
                {hoveredRegion.name}
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                {hoveredRegion.students} Students
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Map */}
        <div
          className="
    w-full
    rounded-3xl
    overflow-hidden
    border
    border-border/50
    bg-white
    dark:bg-[#0f0f0f]
    shadow-xl
  ">
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{
              scale: 200,
            }}
            className="w-full h-162.5">
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => {
                  const countryName = geo.properties.name || "";

                  const region = getRegion(countryName);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        if (region) {
                          setHoveredRegion(region);
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredRegion(null);
                      }}
                      style={{
                        default: {
                          fill: region ? "#D4AF37" : "#E5E7EB",
                          stroke: "#FFFFFF",
                          strokeWidth: 0.6,
                          outline: "none",
                        },
                        hover: {
                          fill: "#FFD700",
                          stroke: "#FFFFFF",
                          strokeWidth: 1.2,
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          fill: "#B8860B",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
