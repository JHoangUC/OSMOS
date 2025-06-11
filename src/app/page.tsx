"use client";

import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
};

const fadeSlide = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
};

const fadeUpStagger = {
  hidden: { opacity: 0, y: 80 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const pulseBackground = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.2, 0.35, 0.2],
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
  },
};

const SparkleOverlay = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => {
      const size = Math.random() * 10 + 10;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = Math.random() * 4;
      const duration = 4 + Math.random() * 4;
      const color = ["#FFFFFF", "#F40076", "#EBA6A9", "#FFC6AC", "#C4A29E"][Math.floor(Math.random() * 5)];
      return { size, left, top, delay, duration, color };
    });
    setSparkles(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            scale: [0.8, 1.4, 0.8],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: s.left,
            top: s.top,
            backgroundColor: s.color,
            filter: "blur(1px) drop-shadow(0 0 6px rgba(255,255,255,0.6))",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [state, handleSubmit] = useForm("xdkzazbz");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[#002A32] text-white font-sans overflow-hidden">
      <Head>
        <title>OSMOS | Pregame Hydration</title>
        <meta name="description" content="Electrolytes + Adaptogens for Feel-Good Focus" />
      </Head>

      <motion.div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#F40076] blur-3xl opacity-30 z-0" {...pulseBackground} />
      <motion.div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FFC6AC] blur-2xl opacity-20 z-0" {...pulseBackground} />
      <motion.div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#C4A29E] blur-2xl opacity-20 z-0" {...pulseBackground} />
      <SparkleOverlay />





      {/* HERO SECTION */}
      <motion.section {...fadeUp} className="w-full max-w-4xl text-center mb-20">
        <motion.h1
          whileHover={{ scale: 1.02 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4"
        >
          Your system deserves better than sugar water.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg text-gray-300 mb-6"
        >
          Party-safe hydration, adaptogens, and clarity — no sugar, no crash.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#waitlist"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg"
        >
          Join the Waitlist
        </motion.a>
      </motion.section>

      {/* COMPARISON CARDS */}
      <motion.section {...fadeSlide} className="max-w-5xl w-full mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-gray-800/60 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">What’s in it</h3>
          <ul className="space-y-3 text-base text-gray-200">
            <li>⚡ <strong>B-Vitamins</strong>: Smooth energy, zero crash</li>
            <li>🌿 <strong>L-Theanine + Rhodiola</strong>: Promotes mental clarity</li>
            <li>🤢 <strong>Ginger Root</strong>: Soothes digestion and nausea</li>
            <li>🍬 <strong>Monk Fruit</strong>: Sweet without sugar, stevia, or sugar alcohols</li>
            <li>💧 <strong>Magnesium + Potassium</strong>: Core electrolytes to keep you going</li>
          </ul>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-gray-800/60 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">Why We’re Different</h3>
          <p className="text-base text-gray-300 mb-3">
            Liquid I.V. is built for post-workout recovery. OSMOS is built for the pregame. For calm focus, hydration, and energy that doesn’t crash.
          </p>
          <p className="text-base text-gray-300 mb-3">
            We skip added sugars, caffeine, and gut-disrupting sweeteners — and focus on clarity, chill, and digestion.
          </p>
          <p className="text-base text-gray-300">
            No stevia, no sugar alcohols, no crash. Just real ingredients made for the rave, not the treadmill.
          </p>
        </motion.div>
      </motion.section>
      {/* MISSION SECTION */}
      <motion.section {...fadeUp} className="max-w-3xl w-full text-center mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#F40076]">Why We Made OSMOS</h2>
        <p className="text-base text-[#C4A29E]">
          Every hydration brand screams gym bro. OSMOS was built for the pregame — to support clarity, chill, and connection.
          We wanted something that <em>feels</em> as good as it works — no sugar, no crash, no treadmill vibes.
        </p>
      </motion.section>
      {/* COMPARISON TABLE */}
      <motion.section {...fadeUp} className="w-full max-w-5xl mb-20">
        <motion.div className="overflow-hidden rounded-2xl border border-gray-700 shadow-xl">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4 text-left">OSMOS</th>
                <th className="py-3 px-4 text-left">Liquid I.V.</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 text-white">
              <tr className="border-t border-gray-700">
                <td className="py-2 px-4">Sugar</td>
                <td className="py-2 px-4">❌ 0g added sugar</td>
                <td className="py-2 px-4">✅ 11g per serving</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-2 px-4">Sweetener Type</td>
                <td className="py-2 px-4">✅ Monk Fruit — gentle on digestion</td>
                <td className="py-2 px-4">⚠️ Stevia & Dextrose — may cause bloating</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-2 px-4">Caffeine</td>
                <td className="py-2 px-4">❌ None — calm clarity only</td>
                <td className="py-2 px-4">⚠️ Some versions contain caffeine</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-2 px-4">Calm Focus</td>
                <td className="py-2 px-4">✅ L-Theanine + Rhodiola</td>
                <td className="py-2 px-4">❌ None</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-2 px-4">Electrolytes + Adaptogens</td>
                <td className="py-2 px-4">✅ Magnesium, Potassium, Ginger, Theanine</td>
                <td className="py-2 px-4">⚠️ Electrolytes only</td>
              </tr>
              <tr className="border-t border-b border-gray-700">
                <td className="py-2 px-4">Designed For</td>
                <td className="py-2 px-4">🎉 Pregame, nightlife, social flow</td>
                <td className="py-2 px-4">🏃‍♂️ Post-workout, general hydration</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </motion.section>

      {/* URGENCY SECTION */}
      <motion.section {...fadeUp} className="max-w-xl w-full text-center mb-12">
        <div className="inline-block bg-[#F40076] text-white text-sm px-4 py-2 rounded-full mb-3 shadow-md">
          🚨 Limited Early Access
        </div>
        <p className="text-base text-[#FFC6AC]">
          We’re opening just <strong>250 early access spots</strong> before launch. Be first in line for free drops, exclusive flavors, and product testing.
        </p>
      </motion.section>

      {/* WAITLIST FORM */}
      <motion.section {...fadeUp} id="waitlist" className="w-full max-w-xl mb-24">
        {!state.succeeded ? (
        <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-2xl shadow-2xl w-full max-w-xl mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Our Waitlist</h2>

          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-md border border-gray-300 mb-3"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Toggleable Survey Section */}
          <details className="mb-6">
            <summary className="text-xl font-semibold mb-4 cursor-pointer">🔎 Quick Survey (Optional)</summary>

            <label className="block mb-1 font-medium mt-4">How do you currently stay hydrated before/during an event?</label>
            <select name="current_solution" className="w-full p-3 rounded-md border border-gray-300 mb-4">
              <option value="">Select an option</option>
              <option value="Liquid IV or similar">Liquid IV or similar</option>
              <option value="Energy drinks">Energy drinks</option>
              <option value="Coffee or tea">Coffee or tea</option>
              <option value="Supplements or pills">Supplements or pills</option>
              <option value="I don’t have a go-to">Just water</option>
            </select>

            <label className="block mb-1 font-medium">Where do you usually shop for supplements or hydration products?</label>
            <input
              type="text"
              name="shopping_location"
              placeholder="e.g. Amazon, Walmart, Target, etc."
              className="w-full p-3 rounded-md border border-gray-300 mb-4"
            />

            <label className="block mb-1 font-medium">What’s most important to you in a hydration product?</label>
            <div className="flex flex-col gap-2 mb-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="priority" value="Taste" /> Taste
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="priority" value="Function/Effectiveness" /> Function / Effectiveness
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="priority" value="Price" /> Price
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="priority" value="Clean ingredients" /> Clean ingredients
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="priority" value="Branding/design" /> Branding / Design
              </label>
            </div>

            <label className="block mb-1 font-medium">
              Want early access or to test OSMOS? Drop your Instagram or TikTok handle (optional)
            </label>
            <input
              type="text"
              name="socials"
              placeholder="Instagram: @osmos"
              className="w-full p-3 rounded-md border border-gray-300 mb-4"
            />

            <label className="block mb-1 font-medium">How likely are you to try OSMOS based on what you've seen?</label>
            <div className="flex flex-col gap-1 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="likelihood" value="1" /> 1 – Not likely
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="likelihood" value="2" /> 2
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="likelihood" value="3" /> 3 – Neutral
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="likelihood" value="4" /> 4
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="likelihood" value="5" /> 5 – Very likely
              </label>
            </div>
          </details>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            {state.submitting ? "Submitting..." : "Join the Waitlist"}
          </button>
        </form>
        ) : (
          <p className="text-lg text-green-400 mt-6 text-center">
            Thanks! You’re on the list.
          </p>
        )}
      </motion.section>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} OSMOS. All rights reserved.
      </footer>
    </main>
  );
}
