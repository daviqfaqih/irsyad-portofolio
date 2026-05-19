import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0B1120] text-white py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-purple-600/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
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
              type: "spring",
            }}
            viewport={{ once: true }}
          >

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 uppercase tracking-[0.3em] mb-4"
            >
              CONTACT
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
              }}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Amazing
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              Have a project idea or want to collaborate?
              Feel free to contact me anytime.
            </motion.p>

            {/* Info */}
            <div className="space-y-8">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.5 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

                <div className="relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 mb-2">
                    Email
                  </h4>

                  <p className="text-xl">
                    hello@portfolio.dev
                  </p>
                </div>

              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.7 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>

                <div className="relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 mb-2">
                    Location
                  </h4>

                  <p className="text-xl">
                    Indonesia
                  </p>
                </div>

              </motion.div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
            }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

            {/* Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

            <form className="relative z-10 space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm uppercase text-gray-400 mb-3">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all duration-300 focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm uppercase text-gray-400 mb-3">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm uppercase text-gray-400 mb-3">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none resize-none transition-all duration-300 focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                ></textarea>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 py-4 font-semibold hover:opacity-90 transition-all duration-300"
              >
                Send Message
              </motion.button>

            </form>

            {/* Bottom Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;