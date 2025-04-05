export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">We are
                    Growing</h2>
                    <p>we already helped apps and businesses in reducing their acquisition costs, increase retention.</p>
                </div>

                <div className="grid gap-2 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">5+</div>
                        <p>Powered Apps</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">8+</div>
                        <p>Business & Brands Owners</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">13+</div>
                        <p>Clients Served</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
