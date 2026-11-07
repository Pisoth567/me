"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { AnimatedShinyTextDemo } from "@/src/components/ui/animated-shiny-text-demo";
import { DiaTextRevealDemo3 } from "@/src/components/ui/dia-text-reveal-demo-3";
import { DockDemo } from "@/src/components/ui/dock-demo";
import TerminalDemo from "@/src/components/ui/terminal.demo";

export function HeroBlock() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center bg-background px-6 pt-20 pb-24"
    >
      {/* Animated background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 py-20 text-left lg:grid-cols-2">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <AnimatedShinyTextDemo />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
          >
            <DiaTextRevealDemo3 />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl">
            Crafting beautiful, performant web applications with modern
            technologies. Passionate about clean code and exceptional user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4">

            <DockDemo />
            
          </motion.div>
        </motion.div>
        <div className="min-w-0">
          <TerminalDemo />
        </div>
      </div>
    </section>
  );
}
