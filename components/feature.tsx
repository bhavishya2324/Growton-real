'use client'

import { Activity } from 'lucide-react'

import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export default function FeaturesSection() {
    return (
        <section className="px-4 py-16 md:py-32">
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div>
                  
                </div>
                
                <div className="col-span-full border-y p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl">80.65% Leads Converted</p>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            Activity feed
                        </span>

                        <p className="my-8 text-2xl font-semibold">
                        Elevating businesses to new heights<span className="text-muted-foreground"> Accelerating business transformation</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}






const chartConfig = {
    leads: {
        label: 'Leads',
        color: '#2563eb',
    },
    downloads: {
        label: 'Downloads',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', leads: 56, downloads: 224 },
    { month: 'June', leads: 56, downloads: 224 },
    { month: 'January', leads: 126, downloads: 252 },
    { month: 'February', leads: 205, downloads: 410 },
    { month: 'March', leads: 200, downloads: 126 },
    { month: 'April', leads: 400, downloads: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient id="fillleads" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-leads)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-leads)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="filldownloads" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-downloads)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-downloads)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area strokeWidth={2} dataKey="downloads" type="stepBefore" fill="url(#filldownloads)" fillOpacity={0.1} stroke="var(--color-downloads)" stackId="a" />
                <Area strokeWidth={2} dataKey="leads" type="stepBefore" fill="url(#fillleads)" fillOpacity={0.1} stroke="var(--color-leads)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}
