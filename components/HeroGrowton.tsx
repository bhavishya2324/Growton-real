import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero9-header";

import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                  Transforming Vision into Measurable Growth
                </h1>
                <p className="mt-6 max-w-l text-balance md:text-lg text-sm">
                  We blend data with creativity to drive predictable,
                  sustainable growth. Every partnership starts by identifying
                  your unique metrics that truly matter.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="https://calendly.com/bhavishyasharm4">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">Book an Appointment</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video
                autoPlay
                loop
                className="size-full -scale-x-100 object-cover opacity-100 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                src="https://cdn.pixabay.com/video/2023/10/02/183279-870457579_large.mp4"
              ></video>
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
