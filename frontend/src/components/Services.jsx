import React from "react";
import {
  Leaf,
  Recycle,
  FileText,
  ShoppingBag,
  Globe2,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Custom Packaging Solutions",
    description:
      "Create packaging tailored to your brand identity and business requirements. From design to delivery, we help bring your packaging vision to life.",
    image: "/images/services/Custom.png",
    icon: Leaf,
    includes: [
      "Custom Sizes",
      "Logo Printing",
      "Brand Customization",
      "Multiple Material Options",
      "Bulk Order Support",
    ],
  },
  {
    title: "Compostable Packaging Solutions",
    description:
      "Sustainable alternatives to conventional plastic packaging designed to reduce environmental impact without compromising functionality.",
    image: "/images/services/compostable.png",
    icon: Recycle,
    includes: [
      "Compostable Carry Bags",
      "Garbage Bags",
      "Courier Bags",
      "Certified Eco-Friendly Materials",
      "Custom Printing Options",
    ],
  },
  {
    title: "Paper Packaging Solutions",
    description:
      "Durable and eco-friendly paper packaging for retail, food service, and commercial applications.",
    image: "/images/services/Paper.png",
    icon: FileText,
    includes: [
      "Paper Carry Bags",
      "Kraft Paper Bags",
      "Food Packaging Bags",
      "Printed Paper Bags",
      "Custom Sizes & Designs",
    ],
  },
  {
    title: "Jute Packaging Solutions",
    description:
      "Strong, reusable, and sustainable jute packaging solutions for businesses looking for premium eco-friendly alternatives.",
    image: "/images/services/Jute.png",
    icon: ShoppingBag,
    includes: [
      "Shopping Bags",
      "Promotional Bags",
      "Corporate Gift Bags",
      "Customized Branding",
      "Export-Quality Products",
    ],
  },
  {
    title: "Bulk Supply & Export Support",
    description:
      "Reliable supply management for businesses across India and international markets with a focus on quality and timely delivery.",
    image: "/images/services/Bulk supply.png",
    icon: Globe2,
    includes: [
      "Bulk Order Fulfillment",
      "Quality Assurance",
      "Supply Chain Coordination",
      "Export Documentation Support",
      "Global Delivery Assistance",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
            What We Offer
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-5">
            Our Services
          </h1>

          <p className="text-emerald-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            One-Stop Sustainable Packaging Solutions for businesses across
            India and global markets.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`group bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 ${
                  index === services.length - 1
                    ? "lg:col-span-2 lg:max-w-4xl lg:mx-auto lg:w-full"
                    : ""
                }`}
              >

                {/* FULL IMAGE - NO CROPPING */}
                <div className="relative w-full bg-emerald-50 flex items-center justify-center p-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto max-h-[430px] object-contain"
                  />

                  <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-emerald-800 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <h3 className="font-bold text-emerald-900 mb-4">
                    Includes:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-emerald-800"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-emerald-800 rounded-3xl px-6 py-10 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Looking for a Custom Packaging Solution?
          </h2>

          <p className="text-emerald-100 max-w-2xl mx-auto mb-7">
            Tell us your packaging requirements and our team will help you
            develop the right sustainable solution for your business.
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

export default Services;
