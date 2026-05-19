import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
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
            className="text-cyan-400 uppercase tracking-[0.3em] mb-4"
          >
            JOURNEY
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
            Work{" "}
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
            Pengalaman dan perjalanan kerja di bidang
            jaringan komputer dan teknologi informasi.
          </motion.p>

        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-purple-500/30 max-w-3xl mx-auto">

          {/* Item 1 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              x: 10,
              scale: 1.02,
            }}
            className="group relative mb-16 ml-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

            {/* Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

            {/* Dot */}
            <div className="absolute -left-[49px] top-10 w-5 h-5 rounded-full bg-purple-500"></div>

            <div className="relative z-10">

              <span className="text-purple-400 text-sm">
                2024 - Present
              </span>

              <h3 className="text-2xl font-bold mt-2 mb-2">
                Network Administrator
              </h3>

              <h4 className="text-cyan-400 mb-4">
                PT Digital Network Indonesia
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Bertanggung jawab mengelola jaringan kantor,
                maintenance server, konfigurasi router, dan
                memastikan koneksi internet tetap stabil.
              </p>

            </div>

            {/* Bottom Line */}
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

          {/* Item 2 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              x: 10,
              scale: 1.02,
            }}
            className="group relative mb-16 ml-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>

            {/* Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

            {/* Dot */}
            <div className="absolute -left-[49px] top-10 w-5 h-5 rounded-full bg-cyan-500"></div>

            <div className="relative z-10">

              <span className="text-cyan-400 text-sm">
                2023 - 2024
              </span>

              <h3 className="text-2xl font-bold mt-2 mb-2">
                IT Support Staff
              </h3>

              <h4 className="text-purple-400 mb-4">
                Future Office Solutions
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Membantu troubleshooting komputer kantor,
                instalasi perangkat jaringan, serta memberikan
                dukungan teknis kepada karyawan.
              </p>

            </div>

            {/* Bottom Line */}
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

          {/* Item 3 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              x: 10,
              scale: 1.02,
            }}
            className="group relative ml-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>

            {/* Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

            {/* Dot */}
            <div className="absolute -left-[49px] top-10 w-5 h-5 rounded-full bg-pink-500"></div>

            <div className="relative z-10">

              <span className="text-pink-400 text-sm">
                2022 - 2023
              </span>

              <h3 className="text-2xl font-bold mt-2 mb-2">
                Junior Network Technician
              </h3>

              <h4 className="text-cyan-400 mb-4">
                Cyber Net Technology
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Mempelajari konfigurasi jaringan dasar,
                pemasangan kabel LAN, setting access point,
                dan monitoring perangkat jaringan.
              </p>

            </div>

            {/* Bottom Line */}
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

export default Experience;