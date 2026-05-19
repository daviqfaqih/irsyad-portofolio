import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import fotoProfil from "../assets/img/profil1.jpeg";


// ─── Inline SVG Icons (no lucide dependency) ─────────────────────────────────
const IconGithub = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const IconLinkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconMail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const IconArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

// ─── Particles ───────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 30;
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 15,
  drift: (Math.random() - 0.5) * 100,
  color: ["rgba(124,58,237,", "rgba(34,211,238,", "rgba(167,139,250,"][
    Math.floor(Math.random() * 3)
  ],
  opacity: Math.random() * 0.6 + 0.2,
}));

// ─── Floating Badge ───────────────────────────────────────────────────────────
const FloatBadge = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm whitespace-nowrap ${className}`}
  >
    {children}
  </motion.div>
);

// ─── Social Icon ──────────────────────────────────────────────────────────────
const SocialIcon = ({ icon: Icon, href = "#", label }) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/15 transition-colors duration-300 cursor-pointer backdrop-blur-sm"
    style={{ boxShadow: "none" }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow = "0 10px 25px rgba(124,58,237,0.25)")
    }
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

// ─── Card Tilt ────────────────────────────────────────────────────────────────
const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 600 }}
    >
      {children}
    </motion.div>
  );
};

// ─── Main Hero ────────────────────────────────────────────────────────────────
const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const stagger = (i) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] } });

  return (
    <section
      className="relative min-h-screen bg-[#050816] overflow-hidden flex items-center"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* ── Mouse glow ── */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full z-[1]"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          transition: "left 0.15s ease, top 0.15s ease",
        }}
      />

      {/* ── Blob glows ── */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full blur-[80px] bg-purple-700/25 animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full blur-[80px] bg-cyan-400/20 animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] bg-purple-600/12 animate-pulse [animation-delay:4s]" />

      {/* ── Moving grid ── */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* ── Particles ── */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: 0,
            background: `${p.color}${p.opacity})`,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}0.8)`,
            animation: `particleFloat ${p.duration}s linear -${p.delay}s infinite`,
            ["--drift"]: `${p.drift}px`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>



            {/* Heading */}
            <motion.h1
              {...stagger(2)}
              className="relative text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              {/* Glow Blur Background */}
              <div
                className="absolute -inset-6 blur-3xl opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(34,211,238,0.15) 40%, transparent 75%)",
                }}
              />

              {/* Floating tiny particles */}
              <span className="absolute -top-5 left-10 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-70" />
              <span className="absolute top-8 right-10 w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-white/70 animate-bounce" />

              {/* Animated Text */}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.5,
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #d1d5db 50%, #ffffff 100%)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradientFlow 10s ease infinite",
                  filter: "drop-shadow(0 0 18px rgba(255,255,255,0.15))",
                }}
              >
                {/* Shine */}
                <span
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.9) 50%, transparent 80%)",
                    backgroundSize: "250% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "textShine 6s linear infinite",
                  }}
                >
                  Hi, I'm
                </span>

                <span className="relative z-10">Hi, I'm</span>
              </motion.span>

              <br />

              {/* Name */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative inline-block mt-2"
                style={{
                  background:
                    "linear-gradient(270deg, #7C3AED, #22D3EE, #A78BFA, #22D3EE, #7C3AED)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradientFlow 10s ease infinite",
                  filter: "drop-shadow(0 0 30px rgba(124,58,237,0.45))",
                }}
              >
                {/* Shine */}
                <span
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.85) 50%, transparent 80%)",
                    backgroundSize: "250% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "textShine 6s linear infinite",
                  }}
                >
                  Irsyad Araffi
                </span>

                {/* Main */}
                <span className="relative z-10">
                  Irsyad Arrafi
                </span>
              </motion.span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...stagger(3)} className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              Anak TKJ kelas 11 yang suka dunia teknologi, jaringan, dan desain web.
              Senang mencoba hal baru serta membuat website modern dengan tampilan
              yang futuristik dan elegan.
            </motion.p>

            {/* Buttons */}
            <motion.div {...stagger(4)} className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-4 rounded-full font-semibold text-white flex items-center gap-2 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
                  boxShadow: "0 0 0 rgba(124,58,237,0)",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(124,58,237,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 rgba(124,58,237,0)")}
              >
                {/* Shine sweep */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{ animation: "shineSweep 3s ease-in-out infinite" }}
                />
                View Projects
                <IconArrowRight className="w-5 h-5 relative z-10" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full border border-white/15 bg-white/[0.05] text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] hover:border-cyan-400/40"
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div {...stagger(5)} className="flex gap-3">
              <SocialIcon icon={IconGithub} label="GitHub" />
              <SocialIcon icon={IconLinkedin} label="LinkedIn" />
              <SocialIcon icon={IconMail} label="Email" />
              <SocialIcon icon={IconInstagram} label="Instagram" />
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <TiltCard>
                <motion.div
                  animate={{ y: [0, -16, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]"
                >
                  {/* Glow behind */}
                  <motion.div
                    animate={{ opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-5 rounded-[50px] blur-[30px] z-[-1]"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(34,211,238,0.3))" }}
                  />

                  {/* Rotating conic border */}
                  <div
                    className="absolute -inset-1 rounded-[44px] opacity-80"
                    style={{
                      background: "conic-gradient(from 0deg, #7C3AED, #22D3EE, #7C3AED, #22D3EE, #7C3AED)",
                      animation: "rotateBorder 4s linear infinite",
                    }}
                  />
                  {/* Mask */}
                  <div className="absolute inset-[3px] rounded-[42px] bg-[#050816]" />

                  {/* Glass card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute inset-1 rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
                  >
                    {/* Inner shimmer */}
                    <div
                      className="absolute -inset-full w-[200%] h-[200%] pointer-events-none"
                      style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, rgba(124,58,237,0.06) 60deg, transparent 120deg)",
                        animation: "shimmer 8s linear infinite",
                      }}
                    />

                    {/* Avatar */}
                    {/* Avatar */}
                    <div
                      className="w-40 h-40 rounded-full mb-5 relative z-10 overflow-hidden"
                      style={{
                        boxShadow: "0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(34,211,238,0.2)",
                        border: "3px solid rgba(124,58,237,0.5)",
                      }}
                    >
                      <img
                        src="/src/assets/img/profil2.jpeg"
                        alt="Irsyad Arrafi"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-white font-semibold text-lg relative z-10">Irsyad Arrafi</p>
                    <p className="text-cyan-400 text-sm relative z-10">TKJ Student & Web Designer</p>
                  </motion.div>
                </motion.div>
              </TiltCard>

              {/* Floating skill badges */}
              <FloatBadge
                delay={0.8}
                className="top-6 -left-5 bg-purple-500/20 border-purple-500/40 text-purple-300"
              >
                ⚙️ Automotive
              </FloatBadge>
              <FloatBadge
                delay={1}
                className="top-16 -right-3 bg-purple-500/15 border-purple-500/30 text-purple-200"
              >
                💻 Web Dev
              </FloatBadge>
              <FloatBadge
                delay={1.2}
                className="bottom-10 -right-5 bg-cyan-400/15 border-cyan-400/35 text-cyan-300"
              >
                🎨 UI/UX
              </FloatBadge>

              {/* Stats pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2 whitespace-nowrap"
              >
                {[["12+", "Projects"], ["3+", "Yrs Coding"], ["100%", "Passion"]].map(([num, lbl]) => (
                  <div
                    key={lbl}
                    className="px-4 py-2 rounded-xl border border-white/10 text-center backdrop-blur-lg"
                    style={{ background: "rgba(5,8,22,0.9)" }}
                  >
                    <span className="block text-white font-bold text-sm">{num}</span>
                    <span className="text-gray-500 text-[10px]">{lbl}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs"
      >
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, rgba(124,58,237,0.6), transparent)",
            animation: "scrollDrop 2s ease-in-out infinite",
          }}
        />
        scroll
      </motion.div>

      {/* ── Global keyframes (inject once) ── */}
      <style>{`
        @keyframes gridMove {
          0%   { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(34,211,238,0); }
        }
        @keyframes particleFloat {
          0%   { transform: translateY(100vh) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-10vh) translateX(var(--drift)); opacity: 0; }
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes shineSweep {
          0%   { background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0) 50%, transparent 60%); background-position: -200%; }
          50%  { background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%); background-position: 200%; }
          100% { background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0) 50%, transparent 60%); }
        }
          @keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes textShine {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
      `}</style>
    </section>
  );
};

export default Hero;