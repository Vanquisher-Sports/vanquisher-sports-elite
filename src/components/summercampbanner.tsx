import { useEffect, useState } from "react";

export default function SummerCampBanner() {
  const [visible, setVisible] = useState(true);
  const [showOnScroll, setShowOnScroll] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const messages = [
    "Transform Your Game in 30 Days",
    "Limited Slots – Enroll Now",
    "Beginner to Advanced Coaching",
    "Train Like a Champion 🏸",
  ];

  const [currentMsg, setCurrentMsg] = useState(0);
  const [fade, setFade] = useState(true);
  const [pop, setPop] = useState(false);

  const targetDate = new Date("2026-04-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const closed = sessionStorage.getItem("bannerClosed");
    if (closed) setVisible(false);

    // 💥 Trigger pop animation on load
    setTimeout(() => setPop(true), 200);
  }, []);

  // 🔄 Rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentMsg((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ⏳ Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft("Starting Soon!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

      setTimeLeft(`${days}d ${hours}h left`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 📜 Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowOnScroll(false);
      } else {
        setShowOnScroll(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("bannerClosed", "true");
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-center px-4 transition-all duration-500 ${
        showOnScroll ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
      }`}
    >
      <div
        className={`w-full max-w-6xl mt-4 px-6 py-4 flex items-center justify-between 
        backdrop-blur-xl bg-white/10 border border-white/20 
        shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-2xl 
        transition-all duration-500
        ${pop ? "scale-100 translate-y-0" : "scale-75 -translate-y-10"}
        animate-pulse-slow`}
      >

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-bounce">🏸</span>

          <div className="flex flex-col">
            <p
              className={`text-sm md:text-base font-semibold text-white transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {messages[currentMsg]}
            </p>

            <span className="text-xs text-yellow-300 font-medium">
              ⏳ {timeLeft}
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917760581133?text=Hi%20I%20want%20to%20join%20summer%20camp"
            target="_blank"
            className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-5 py-2 rounded-xl text-sm font-bold 
            hover:scale-110 transition-all duration-300 shadow-lg
            before:absolute before:inset-0 before:rounded-xl before:animate-ping before:bg-yellow-400/40"
          >
            Join Now
          </a>

          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white text-lg px-2"
          >
            ✕
          </button>
        </div>
      </div>

      {/* 💡 Custom Animations */}
      <style>
        {`
          .animate-pulse-slow {
            animation: pulseSlow 3s infinite;
          }

          @keyframes pulseSlow {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}