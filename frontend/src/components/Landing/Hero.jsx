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
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 text-white">
        <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-28 pb-16 lg:pt-36 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 xl:gap-24 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 lg:px-5 lg:py-2.5 text-sm lg:text-base font-semibold text-emerald-100 mb-6">
                <Leaf className="w-4 h-4 lg:w-5 lg:h-5" />
                Sustainable Packaging for Modern Businesses
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6">
                One-Stop Sustainable
                <span className="block text-emerald-300">
                  Packaging Solutions
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-semibold text-emerald-100 mb-6 leading-snug">
                Jute, Compostable & Paper Packaging for India and Global Markets
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-9">
                GreenVora Exim helps businesses transition to sustainable
                packaging through high-quality jute, compostable and paper
                packaging solutions. From custom branding and printing to bulk
                supply and export support, we provide solutions tailored to
                your business requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 lg:px-9 lg:py-4 rounded-xl font-bold lg:text-lg shadow-lg transition"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center bg-white text-emerald-900 px-7 py-3.5 lg:px-9 lg:py-4 rounded-xl font-bold lg:text-lg shadow-lg hover:bg-emerald-50 transition"
                >
                  Send Your Requirement
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-[620px] xl:max-w-[680px] bg-white/10 border border-white/20 rounded-3xl p-4 lg:p-5 shadow-2xl">
                <img
                  src={heroImage}
                  alt="GreenVora Exim Sustainable Packaging"
                  className="w-full h-auto max-h-[580px] lg:max-h-[620px] object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative bg-white">
        <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-emerald-100 shadow-xl rounded-2xl overflow-hidden">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 lg:gap-4 px-4 lg:px-7 py-6 lg:py-8 border-b lg:border-b-0 border-r border-emerald-100 last:border-r-0"
                >
                  <div className="w-11 h-11 lg:w-14 lg:h-14 flex-shrink-0 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>

                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-emerald-900">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-emerald-600 font-semibold uppercase tracking-wide text-sm lg:text-base mb-3">
            Sustainable Solutions
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            What We Do
          </h2>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            We provide sustainable packaging solutions designed to help
            businesses reduce environmental impact while enhancing brand
            visibility. Whether you need jute bags, compostable bags or paper
            packaging, we support your requirements with customization,
            quality-focused supply and scalable solutions.
          </p>
        </div>
      </section>

      {/* KEY PRODUCTS */}
      <section className="py-20 lg:py-28 bg-emerald-50/60">
        <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center mb-12 lg:mb-16">
            <p className="text-emerald-600 font-semibold uppercase tracking-wide text-sm lg:text-base mb-3">
              Our Range
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
              Our Key Products
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-base lg:text-xl">
              Explore sustainable packaging options for retail, commercial,
              promotional and bulk business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group bg-white rounded-3xl border border-emerald-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative bg-emerald-50 p-3 lg:p-5 flex items-center justify-center min-h-[280px] lg:min-h-[380px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto max-h-[340px] lg:max-h-[430px] object-contain"
                      loading="lazy"
                    />

                    <div className="absolute bottom-5 left-5 w-12 h-12 lg:w-14 lg:h-14 bg-emerald-700 text-white rounded-xl shadow-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-emerald-900 mb-3">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 lg:text-lg leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <button
                      onClick={() => navigate("/products")}
                      className="inline-flex items-center gap-2 text-emerald-700 font-bold lg:text-lg hover:text-emerald-900 transition"
                    >
                      Explore Products
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 lg:mt-14">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3 lg:px-9 lg:py-4 lg:text-lg rounded-xl transition shadow-md"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-emerald-600 font-semibold uppercase tracking-wide text-sm lg:text-base mb-3">
                Why GreenVora Exim
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
                Packaging Solutions Built Around Your Business
              </h2>

              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                We work with businesses to provide sustainable packaging
                solutions based on their product, branding, quantity and supply
                requirements. Our focus is on practical customization,
                dependable supply and environmentally responsible packaging
                options.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 bg-emerald-50 rounded-2xl p-5 lg:p-6 border border-emerald-100"
                >
                  <CheckCircle2 className="w-6 h-6 lg:w-7 lg:h-7 text-emerald-600 flex-shrink-0 mt-0.5" />

                  <span className="font-semibold text-emerald-900 lg:text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-emerald-800 rounded-3xl px-6 sm:px-10 lg:px-16 py-12 lg:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Looking for Sustainable Packaging for Your Business?
            </h2>

            <p className="text-emerald-100 max-w-3xl mx-auto mb-7 text-base lg:text-xl leading-relaxed">
              Share your packaging requirements with us, including product,
              quantity, size and customization needs.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold px-7 py-3 lg:px-9 lg:py-4 lg:text-lg rounded-xl hover:bg-emerald-50 transition"
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
