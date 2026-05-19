import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CEO at NovaStream",
      content: "The attention to detail and futuristic vision brought to our project was exceptional. Highly recommend for any cutting-edge development.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Product Manager at CloudNet",
      content: "Professional, efficient, and truly innovative. The final result exceeded our expectations in both design and performance.",
      rating: 5,
    },
    {
      name: "Marcus Thorne",
      role: "Founder of CyberGate",
      content: "A master of both UI and architecture. Our platform's engagement increased by 40% after the redesign. Truly impressive work.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold font-space text-white mb-4"
          >
            Client <span className="text-[#06B6D4]">Voices</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my partners and clients 
            have to say about our collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass p-10 rounded-3xl border-white/5 relative group hover:border-[#7C3AED]/20 transition-all"
            >
              <Quote className="absolute top-6 right-6 text-[#7C3AED] opacity-20 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#7C3AED] text-[#7C3AED]" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white font-bold font-space">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
