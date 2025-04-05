import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'


export default function ContentSection() {
    return (
        <section className="py-26 md:py-42">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <img className="rounded-(--radius) " src="about-growton.jpg" alt="team image" height="" width="" loading="lazy" />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Turning Digital Ambitions into Measurable Growth</h2>
                    <div className="space-y-6">
                        <p> Growton was founded on a simple yet powerful belief: exceptional growth comes from the perfect blend of creativity, strategy, and data. Established in 2024 by Bhavishya Sharma, our agency has quickly risen to become a trusted growth partner for ambitious brands across India, the UK, and the USA. Bhavishya built Growton after recognizing that most agencies were focused on vanity metrics rather than genuine business impact. With his background in performance marketing and community building, he assembled a team of specialists unified by a relentless focus on measurable results. Today, we pride ourselves on transparency, innovation, and our unique ability to build thriving communities around the brands we serve. Our success is measured solely by the growth we generate for our clients—because when you grow, we grow too.</p>

                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
