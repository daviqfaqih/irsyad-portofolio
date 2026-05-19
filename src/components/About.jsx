import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Class", value: "12" },
    { label: "Projects", value: "10+" },
    { label: "Experience", value: "2+" },
    { label: "Learning", value: "∞" },
  ];

  const philosophies = [
    "Passionate about automotive & technology",
    "Always learning new skills",
    "Discipline and hard working",
    "Creative & problem solving mindset",
  ];

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-[#050816]"
    >

      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="absolute inset-0 grid-bg opacity-10"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-32 right-20 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl"
      />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-cyan-400 text-sm mb-8"
            >
              About Me
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8"
            >
              Irsyad{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Arrafi
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
            >

              <p>
                Halo! Saya siswa TKJ kelas 12 yang memiliki minat
                di bidang otomotif, teknologi, dan pengembangan website.
                Saya suka belajar hal baru dan terus meningkatkan skill.
              </p>

              <p>
                Saat ini saya sedang belajar HTML, CSS, JavaScript,
                React, dan Tailwind CSS untuk membuat website modern,
                responsive, dan menarik.
              </p>

            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.7,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 2,
                  }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center group"
                >

                  {/* Glow Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative z-10">

                    <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </h3>

                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      {stat.label}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute -inset-10 bg-purple-500/20 blur-[100px] rounded-full"></div>

            {/* Main Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 overflow-hidden"
            >

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-[40px] border border-purple-500/20"></div>

              {/* Decorative Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-20 -right-20 w-60 h-60 border border-purple-500/20 rounded-full"
              />

              <h3 className="text-4xl font-bold text-white mb-10">
                My Philosophy
              </h3>

              <div className="space-y-6">

                {philosophies.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.2,
                    }}
                    whileHover={{
                      x: 10,
                    }}
                    className="flex items-center gap-4 group"
                  >

                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,1)] animate-pulse"></div>

                    <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                      {item}
                    </p>

                  </motion.div>
                ))}

              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 pt-8 border-t border-white/10"
              >

                <p className="italic text-xl text-gray-400 leading-relaxed">
                  "Keep learning, keep growing,
                  and never stop improving."
                </p>

              </motion.div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;