import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-purple-500 to-cyan-400",
      glow: "bg-purple-500/10",
      delay: 0.2
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma"],
      color: "from-cyan-500 to-blue-400",
      glow: "bg-cyan-500/10",
      delay: 0.4
    },
    {
      title: "Networking & Tools",
      skills: ["MikroTik", "Cisco CCNA", "Linux Admin", "Docker"],
      color: "from-pink-500 to-purple-400",
      glow: "bg-pink-500/10",
      delay: 0.6
    }
  ];

  // Variasi untuk container grid agar muncul satu per satu
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring" }
    }
  };

  return (
    <section id="skills" className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">

      {/* Background Decor (Mirip Experience) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${cat.glow} rounded-full blur-3xl group-hover:scale-150 transition-all duration-700`}></div>

              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.title}
                </h3>

                <ul className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated Bottom Line (Sama seperti Experience) */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: cat.delay, duration: 1 }}
                className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${cat.color}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 2. Mini Marquee (Versi Halus dari Footer) */}
        <div className="mt-24 opacity-30">
          <motion.div
            animate={{ x: [0, -500] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap text-xl font-mono uppercase tracking-widest"
          >
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                Innovation • Scalability • Performance • Security • Reliability •
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;