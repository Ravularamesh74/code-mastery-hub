import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['5 Free Courses', 'Community Forum Access', 'Basic Code Editor', 'Progress Tracking'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    features: ['All 50+ Courses', 'AI Mentor Access', '500+ Projects', 'Certificates', 'Priority Support', 'Job Board Access'],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$49',
    period: '/month',
    features: ['Everything in Pro', 'Team Management', 'Custom Learning Paths', 'Analytics Dashboard', 'Dedicated Support', 'API Access'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative z-10">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-xl ${
                plan.highlighted
                  ? 'gradient-border'
                  : 'glass-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'btn-primary-glow'
                    : 'btn-outline-glow'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
