"use client"

import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";
import { dark } from "@clerk/themes";
import { useCurrentTheme } from "@/hooks/use-current-theme";


const Page = () => {
    const currentTheme = useCurrentTheme();
    return (
        <div className="flex flex-col max-w-3xl mx-auto w-full">
            <section className="space-y-6 pt-[16vh] 2xl:pt-48">
                <div className="flex flex-col items-center">
                    <Image
                        src="/logo.svg"
                        alt="Codexa"
                        width={80}
                        height={80}
                        className="hidden md:block"
                    />
                </div>
                <h1 className="text-xl md:text-3xl font-bold text-center">Pricing</h1>
                <p className="text-muted-foreground text-center text-sm md:text-base">
                    Choose a plan that fits you needs!
                </p>
                <PricingTable
                    appearance={{
                        baseTheme: currentTheme === "dark" ? dark : undefined,
                        elements: {
                            pricingTable: "shadow-none! rounded-lg!"
                        }
                    }}
                />
            </section>

        </div>
    )
}

export default Page