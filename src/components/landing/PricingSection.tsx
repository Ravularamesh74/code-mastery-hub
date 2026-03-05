import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    features: [
      "5 Free Courses",
      "Community Forum",
      "Basic Code Editor",
      "Progress Tracking"
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    monthly: 19,
    yearly: 190,
    highlighted: true,
    features: [
      "All 50+ Courses",
      "AI Mentor",
      "500+ Projects",
      "Certificates",
      "Priority Support",
      "Job Board Access"
    ],
    cta: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    monthly: 49,
    yearly: 490,
    features: [
      "Everything in Pro",
      "Team Management",
      "Custom Learning Paths",
      "Analytics Dashboard",
      "Dedicated Support",
      "API Access"
    ],
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative z-10">

      <div className="section-padding max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your learning journey.
          </p>

          {/* billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">

            <span className={!yearly ? "text-primary font-medium" : "text-muted-foreground"}>
              Monthly
            </span>

            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-14 h-7 bg-white/10 rounded-full"
            >
              <motion.div
                animate={{ x: yearly ? 26 : 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-1 w-5 h-5 bg-primary rounded-full"
              />
            </button>

            <span className={yearly ? "text-primary font-medium" : "text-muted-foreground"}>
              Yearly
            </span>

            <span className="text-xs text-accent ml-2">
              Save 20%
            </span>

          </div>
        </div>

        {/* pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => {

            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-xl border ${
                  plan.highlighted
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-white/10"
                } bg-white/5 backdrop-blur-lg hover:border-primary/40 transition`}
              >

                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-4">
                  {plan.name}
                </h3>

                {/* price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${price}
                  </span>

                  <span className="text-muted-foreground text-sm">
                    {price !== 0 ? "/month" : " forever"}
                  </span>
                </div>

                {/* features */}
                <ul className="space-y-3 mb-8">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}

                </ul>

                {/* button */}
                <button
                  className={`w-full py-3 rounded-lg font-medium transition ${
                    plan.highlighted
                      ? "btn-primary-glow"
                      : "border border-white/10 hover:border-primary/40"
                  }`}
                >
                  {plan.cta}
                </button>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}