'use client'

import Image from 'next/image'

export default function ContentSection2() {
    return (
        <>
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-l text-3xl font-medium lg:text-5xl">The Radisson Hotel: Bookings Increased by 215% in Low Season.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/hotel1.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                        The luxury boutique hotel Radisson Hotel Gwalior faced a common hospitality challenge: significant booking fluctuations between peak and off-peak seasons. Our team developed a comprehensive strategy that combined dynamic pricing optimization, targeted social media campaigns, and a revamped loyalty program.  <span className="text-accent-foreground font-bold">The Radisson Hotel Gwalior saw a 215% increase in off-season bookings, a 37% improvement in average booking value, and a 64% increase in direct bookings that eliminated commission fees.</span> 
                        </p>
                       
                        <div className="pt-0">
                            <blockquote className="border-l-4 pl-4">
                               
                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">Radisson Hotel, Gwalior</cite>
                                    
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>


{/* /// section 2 */}


<section className="py-10 md:py-12">
<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
    <h2 className="relative z-10 max-w-l text-3xl font-medium lg:text-5xl">Basant Valley School : 147% Increase in Admission Inquiries
    </h2>
    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
        <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <Image src="school1.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
            </div>
        </div>

        <div className="relative space-y-4">
            <p className="text-muted-foreground">
            Basant Valley School approached us with a challenge: increasing quality admission inquiries while maintaining their premium positioning. We implemented a multi-channel strategy focused on targeting parents through precision demographic targeting and compelling content marketing. By creating virtual tour experiences, parent testimonial videos, and an optimized inquiry process.  <span className="text-accent-foreground font-bold">The results were remarkable: a 147% increase in qualified admission inquiries, 89% growth in website engagement, and a 42% reduction in cost-per-lead, with a higher conversion rate from inquiry to enrollment. </span> 
            </p>
           
            <div className="pt-0">
                <blockquote className="border-l-4 pl-4">
                   
                    <div className="mt-6 space-y-3">
                        <cite className="block font-medium">Basant Valley School, Delhi</cite>
                        
                    </div>
                </blockquote>
            </div>
        </div>
    </div>
</div>
</section>
</>
    )
}
