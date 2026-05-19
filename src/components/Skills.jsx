import { motion } from "framer-motion";
import {
  Monitor,
  Wifi,
  Code2,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Monitor,
      title: "Computer Assembly",
      desc: "Memahami dasar perakitan komputer, instalasi sistem operasi, dan troubleshooting hardware.",
      color: "purple",
    },
    {
      icon: Wifi,
      title: "Networking Basic",
      desc: "Mempelajari dasar jaringan seperti konfigurasi LAN, kabel jaringan, dan setting router.",
      color: "cyan",
    },
    {
      icon: Code2,
      title: "Web Development",
      desc: "Belajar membuat website sederhana menggunakan HTML, CSS, JavaScript, dan React.",
      color: "pink",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-purple-600/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 uppercase tracking-[0.3em] mb-4"
          >
            MY SKILLS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Kemampuan yang saya pelajari sebagai
            siswa TKJ kelas 11 di bidang komputer,
            jaringan, dan web development.
          </motion.p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateX: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden transition-all duration-500"
              >

                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

                {/* Floating Blur */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className={`
                    relative z-10
                    w-16 h-16 rounded-2xl
                    flex items-center justify-center
                    mb-6
                    ${skill.color === "purple"
                      ? "bg-purple-500/10"
                      : skill.color === "cyan"
                        ? "bg-cyan-500/10"
                        : "bg-pink-500/10"
                    }
                  `}
                >
                  <Icon
                    className={`
                      w-8 h-8
                      ${skill.color === "purple"
                        ? "text-purple-400"
                        : skill.color === "cyan"
                          ? "text-cyan-400"
                          : "text-pink-400"
                      }
                    `}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>

                </div>

                {/* Bottom Line Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    delay: i * 0.2 + 0.5,
                    duration: 0.8,
                  }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"
                />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;