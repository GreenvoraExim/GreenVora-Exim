// src/components/Products.jsx
import React, { useState } from "react";
import {
  ShoppingBag,
  Leaf,
  Trash2,
  Package,
  Palette,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Brown Kraft Carry Bags",
    category: "Paper Packaging",
    image: "/images/products/Brown Kraft Carry Bags.png",
    description:
      "Eco-friendly kraft paper carry bags suitable for retail, shopping, gifting and customized brand packaging.",
    icon: Package,
  },
  {
    id: 2,
    name: "Compostable Carry Bags",
    category: "Compostable Packaging",
    image: "/images/products/Carry Bags.png",
    description:
      "Sustainable carry bags designed as an eco-friendly alternative to conventional plastic bags for retail and everyday packaging needs.",
    icon: Leaf,
  },
  {
    id: 3,
    name: "Compostable Garbage Bags",
    category: "Compostable Packaging",
    image: "/images/products/Garbage Bags.png",
    description:
      "Eco-conscious garbage bags suitable for responsible waste collection and everyday commercial or household use.",
    icon: Trash2,
  },
  {
    id: 4,
    name: "Hessian Bags",
    category: "Jute Packaging",
    image: "/images/products/Hessian Bags.png",
    description:
      "Durable and reusable hessian bags suitable for agricultural, industrial, storage and bulk packaging applications.",
    icon: ShoppingBag,
  },
  {
    id: 5,
    name: "Jute Paintings",
    category: "Others",
    image: "/images/products/Jute Paintings.png",
    description:
      "Decorative jute-based products combining natural materials with creative designs for gifting, décor and promotional applications.",
    icon: Palette,
  },
  {
    id: 6,
    name: "Jute Shopping & Carry Bags",
    category: "Jute Packaging",
    image: "/images/products/Shopping and Carry Bags.png",
    description:
      "Strong and reusable jute bags suitable for shopping, retail, promotional events, corporate gifting and customized branding.",
    icon: ShoppingBag,
  },
];

const categories = [
  "All",
  "Jute Packaging",
  "Compostable Packaging",
  "Paper Packaging",
  "Others",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Sustainable Packaging
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-5">
            Our Products
          </h1>

          <p className="text-emerald-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Explore our range of sustainable packaging products designed for
            retail, commercial, promotional and bulk requirements.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-emerald-700 text-white border-emerald-700 shadow-md"
                  : "bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative w-full bg-emerald-50 flex items-center justify-center p-3 min-h-[280px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-auto max-h-[360px] object-contain"
                  />

                  <div className="absolute bottom-5 left-5 w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-6">
                  <p className="text-emerald-600 text-sm font-semibold mb-2">
                    {product.category}
                  </p>

                  <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-3">
                    {product.name}
                  </h2>

                  <p className="text-emerald-700 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-emerald-100 flex items-center gap-2 text-emerald-700 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Bulk & Custom Orders Available
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-emerald-800 rounded-3xl px-6 py-10 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need Customized Packaging?
          </h2>

          <p className="text-emerald-100 max-w-2xl mx-auto mb-7">
            Share your product, quantity, size, printing and packaging
            requirements with us. We can help you find the right sustainable
            packaging solution for your business.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-emerald-800 font-bold px-7 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            Send Your Requirement
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
