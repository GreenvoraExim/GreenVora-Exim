// src/components/Landing/Hero.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Leaf,
  Palette,
  PackageCheck,
  Globe2,
  CheckCircle2,
  ShoppingBag,
  Recycle,
  FileText,
  ArrowRight,
} from "lucide-react";

import heroImage from "../../assets/heroimg.png";

const products = [
  {
    title: "Jute Packaging",
    description:
      "Strong, reusable and sustainable jute packaging for shopping, gifting, promotional and business requirements.",
    image: "/images/products/Shopping and Carry Bags.png",
    icon: ShoppingBag,
  },
  {
    title: "Compostable Packaging",
    description:
      "Eco-friendly alternatives to conventional plastic packaging for retail, commercial and everyday packaging needs.",
    image: "/images/products/Carry Bags.png",
    icon: Recycle,
  },
  {
    title: "Paper Packaging",
    description:
      "Sustainable paper and kraft packaging solutions suitable for retail, gifting, food service and customized branding.",
    image: "/images/products/Brown Kraft Carry Bags.png",
    icon: FileText,
  },
];

const features = [
  {
    title: "Sustainable Packaging",
    icon: Leaf,
  },
  {
    title: "Custom Branding & Printing",
    icon: Palette,
  },
  {
    title: "Bulk Supply Support",
    icon: PackageCheck,
  },
  {
    title: "India & Global Markets",
    icon: Globe2,
  },
];

const benefits = [
  "Multiple Sustainable Material Options",
  "Custom Sizes, Designs & Branding",
  "Bulk Order Fulfillment",
  "Quality-Focused Supply",
  "Export Support",
  "Solutions for India & Global Markets",
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-emerald-100 mb-6">
                <Leaf className="w-4 h-4" />
                Sustainable Packaging for Modern Businesses
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                One-Stop Sustainable
                <span className="block text-emerald-300">
                  Packaging Solutions
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100 mb-5">
                Jute, Compostable & Paper Packaging for India and Global Markets
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                GreenVora Exim helps businesses transition to sustainable
                packaging through high-quality jute, compostable and paper
                packaging solutions. From custom branding and printing to bulk
                supply and export support, we provide solutions tailored to
                your business requirements.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg transition"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center bg-white text-emerald-900 px-7 py-3.5 rounded-xl font-bold shadow-lg hover:bg-emerald-50 transition"
                >
                  Send Your Requirement
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg bg-white/10 border border-white/20 rounded-3xl p-4 shadow-2xl">
                <img
                  src={heroImage}
                  alt="GreenVora Exim Sustainable Packaging"
                  className="w-full h-auto max-h-[520px] object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative -mt-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-emerald-100 shadow-xl rounded-2xl overflow-hidden">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 px-4 py-6 border-b lg:border-b-0 border-r border-emerald-100 last:border-r-0"
                >
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-sm sm:text-base font-semibold text-emerald-900">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-emerald-600 font-semibold uppercase tracking-wide text-sm mb-3">
            Sustainable Solutions
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
            What We Do
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We provide sustainable packaging solutions designed to help
            businesses reduce environmental impact while enhancing brand
            visibility. Whether you need jute bags, compostable bags or paper
            packaging, we support your requirements with customization,
            quality-focused supply and scalable solutions.
          </p>
        </div>
      </section>

      {/* ================= KEY PRODUCTS ================= */}
      <section className="py-20 bg-emerald-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold uppercase tracking-wide text-sm mb-3">
              Our Range
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
              Our Key Products
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore sustainable packaging options for retail, commercial,
              promotional and bulk business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group bg-white rounded-3xl border border-emerald-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Image - Full Image Visible */}
                  <div className="relative bg-emerald-50 p-3 flex items-center justify-center min-h-[280px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto max-h-[340px] object-contain"
                      loading="lazy"
                    />

                    <div className="absolute bottom-5 left-5 w-12 h-12 bg-emerald-700 text-white rounded-xl shadow-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-emerald-900 mb-3">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <button
                      onClick={() => navigate("/products")}
                      className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-900 transition"
                    >
                      Explore Products
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3 rounded-xl transition shadow-md"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-emerald-600 font-semibold uppercase tracking-wide text-sm mb-3">
                Why GreenVora Exim
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                Packaging Solutions Built Around Your Business
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We work with businesses to provide sustainable packaging
                solutions based on their product, branding, quantity and supply
                requirements. Our focus is on practical customization,
                dependable supply and environmentally responsible packaging
                options.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 bg-emerald-50 rounded-2xl p-5 border border-emerald-100"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />

                  <span className="font-semibold text-emerald-900">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-800 rounded-3xl px-6 sm:px-10 py-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Looking for Sustainable Packaging for Your Business?
            </h2>

            <p className="text-emerald-100 max-w-2xl mx-auto mb-7 leading-relaxed">
              Share your packaging requirements with us, including product,
              quantity, size and customization needs.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold px-7 py-3 rounded-xl hover:bg-emerald-50 transition"
            >
              Send Your Requirement
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
