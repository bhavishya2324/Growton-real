'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Let’s Build Something Amazing Together</h2>
                    <p className="mt-4">Your next big breakthrough starts here. Whether you’re looking to boost downloads, increase sales, or expand your brand’s reach, Growton has the expertise to make it happen ⚡📈</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact">
                                <span>Contact us</span>
                            </Link>
                        </Button>

                      
                    </div>
                </div>
            </div>
        </section>
    )
}
