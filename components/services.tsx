"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Network,
  Handshake,
  DollarSign,
  Monitor,
  Instagram,
  Rocket,
} from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Transform Visitors into Valuable Customers
          </h2>
          <p className="mt-4">
            Our team crafts targeted strategies across search, social, and
            programmatic channels, optimizing for your specific customer
            acquisition costs and lifetime value metrics.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <DollarSign className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Paid Acquisition</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
               
                We transform your marketing budget into a reliable growth engine
                through data-driven paid acquisition campaigns.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Network className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Community Building</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
               
                We build thriving communities that turn your customers into
                passionate ambassadors for your brand. Through strategic
                engagement initiatives, exclusive content, and meaningful
                interaction opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Monitor className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Web Development</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                We design and build high-performance websites that turn visitors
                into customers. its a growth engine built to generate leads,
                sales, and brand credibility in an increasingly digital
                marketplace.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Instagram className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Influencer Marketing</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                We identify, vet, and collaborate with creators who
                authentically align with your brand values and target
                demographics.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Rocket className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Brand Building</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
               
                We transform businesses into memorable brands that capture
                attention and inspire loyalty. Our strategic approach combines
                market positioning, visual identity development, and consistent
                messaging across all touchpoints.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Handshake className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Retention Marketing</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Building Customer Relationships That Last. We help you maximize
                customer lifetime value through strategic retention marketing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
