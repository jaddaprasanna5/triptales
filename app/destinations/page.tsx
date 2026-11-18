"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";
import {destinations} from "@/data/destination";

export default function DestinationsPage(){
        //Store the search text entered by the user
        const[searchText,setSearchText] = useState("");
        //store the selected category
        const [selectedCategory,setSelectedCategory] = useState("All");
        //categories available on our website
        const categories = [
            "All",
            "Beach",
            "Mountain",
            "City",
            "Cultural"
        ];
        //filter destinations based on search and category
        const filteredDestinations = destinations.filter((place) =>{
            const searchValue = searchText.toLowerCase().trim();
            const matchesSearch = place.name.toLowerCase().includes(searchValue) || place.country.toLowerCase().includes(searchValue);
            const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        return (
            <main className="min-h-scrren bg-[#faf9f6]">
                {/* Navbar */}
                <Navbar />
                {/* Page Heading */}
      <section className="bg-green-50 px-8 py-16 text-center">

        <p className="text-green-700 font-semibold mb-3">
          FIND YOUR NEXT ADVENTURE
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Explore Destinations
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover amazing places around the world.
          Find your favourite destination and start planning
          your next adventure.
        </p>

      </section>


      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-8 py-12">

        {/* Search Input */}
        <div className="max-w-2xl mx-auto">

          <label
            htmlFor="destination-search"
            className="block text-sm font-semibold text-gray-700 mb-2"
        >Search destinations</label>

          <div className="flex items-center border border-gray-300 bg-white rounded-xl px-4 py-3 shadow-sm">

            <span className="text-gray-400 mr-3">🔍</span>

            <input
              id="destination-search"
              type="text"
              placeholder="Search by destination or country..."
              value={searchText}
              onChange={(event) =>
                setSearchText(event.target.value)
              }
              className="w-full outline-none text-gray-800"/>

          </div>

        </div>


        {/* Category Filters */}
        <div className="mt-8">

          <h2 className="text-sm font-semibold text-gray-700 mb-4 text-center">Explore by Category</h2>

          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition ${
                  selectedCategory === category
                    ? "bg-green-800 text-white border-green-800"
                    : "bg-white text-gray-700 border-gray-300 hover:border-green-700"
                }`}
                aria-pressed={selectedCategory === category}
              >{category}</button>

            ))}

          </div>

        </div>


        {/* Results Information */}
        <div className="flex justify-between items-center mt-12 mb-6">

          <div>
            <h2 className="text-2xl font-bold text-gray-900"> Discover Places</h2>
            <p className="text-gray-500 text-sm mt-1">Showing {filteredDestinations.length} destinations</p>
          </div>

          <button
            onClick={() => {
              setSearchText("");
              setSelectedCategory("All");
            }}
            className="text-green-800 font-semibold text-sm hover:underline" > Clear Filters</button>

        </div>


        {/* Destination Cards */}
        {filteredDestinations.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredDestinations.map((place) => (

              <DestinationCard
                key={place.id}
                id={place.id}
                name={place.name}
                description={place.description}
                image={place.image}
                category={place.category}
                country={place.country}
              />

            ))}

          </div>

        ) : (

          // Empty State
          <div className="text-center py-20 bg-white rounded-xl">

            <h3 className="text-2xl font-bold text-gray-800">No destinations found</h3>

            <p className="text-gray-500 mt-3">Try searching with another destination or category.</p>

            <button
              onClick={() => {
                setSearchText("");
                setSelectedCategory("All");
              }}
              className="mt-6 bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900"
            >Reset Search</button>

          </div>

        )}

      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}

            