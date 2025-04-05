
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className="py-42 mb-[-20px]">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Let’s get in touch
                </h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Contact us</h2>
                            <Link href="mailto:hello@tailus.io" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                bhavishyasharm4@gmail.com
                            </Link>
                            <p className="mt-3 text-sm">+91 9575203140</p>
                        </div>
                    </div>
                   
                </div>

            </div>
        </section>
    )
}
