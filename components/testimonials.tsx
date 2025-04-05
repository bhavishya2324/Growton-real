import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Pranjal Kapoor',
        role: 'CTO at SuprWater',
        image: 'feedback02.jpeg',
        quote: 'Growton increased our app downloads by 218% in just 3 months while cutting acquisition costs by 41%. Their community strategy turned users into advocates. Best investment we made this year',
    },
    {
        name: 'Sudhir Kamra',
        role: 'Operations Director at Indiamart',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: 'Before Growton, we struggled to gain traction. Within six months of working with them, our sales tripled, and our brand became a market leader ',
    },
    {
        name: 'Mahesh Bansal',
        role: 'Cafe Owner',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'Working with Growton felt like adding a growth engine to our business. Their team understands the market like no one else :)',
    },
   
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Loved by the Clients</h2>
                       
                    </div>
                    <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3 *:border-none *:shadow-none">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
