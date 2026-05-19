import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0B1120] text-white py-24 overflow-hidden"
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
            MY PROJECTS
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
            Network &{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Technical Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Beberapa project dan pengalaman yang berkaitan
            dengan jaringan komputer dan dunia teknik.
          </motion.p>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
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
              delay: 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500"
          >

            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

            {/* Floating Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

            {/* Image */}
            <div className="relative z-10 h-56 bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">
                Mikrotik Setup
              </h3>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">

              <p className="text-gray-400 mb-6">
                Konfigurasi jaringan menggunakan Mikrotik
                untuk manajemen bandwidth dan hotspot sekolah.
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mb-6">

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  Mikrotik
                </span>

                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                  Networking
                </span>

              </div>

              <button className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all">
                View Project
              </button>

            </div>

            {/* Bottom Line Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"
            />

          </motion.div>

          {/* Card 2 */}
          <motion.div
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
              delay: 0.4,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500"
          >

            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>

            {/* Floating Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

            {/* Image */}
            <div className="relative z-10 h-56 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">
                LAN Installation
              </h3>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">

              <p className="text-gray-400 mb-6">
                Instalasi kabel LAN dan konfigurasi jaringan
                komputer pada laboratorium sekolah.
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mb-6">

                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                  LAN
                </span>

                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                  RJ45
                </span>

              </div>

              <button className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition-all">
                View Project
              </button>

            </div>

            {/* Bottom Line Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-400"
            />

          </motion.div>

          {/* Card 3 */}
          <motion.div
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
              delay: 0.6,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500"
          >

            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>

            {/* Floating Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

            {/* Image */}
            <div className="relative z-10 h-56 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">
                CCTV Monitoring
              </h3>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">

              <p className="text-gray-400 mb-6">
                Pemasangan dan konfigurasi CCTV untuk
                monitoring keamanan area sekolah.
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mb-6">

                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm">
                  CCTV
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  Security
                </span>

              </div>

              <button className="px-5 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 transition-all">
                View Project
              </button>

            </div>

            {/* Bottom Line Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-400"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;