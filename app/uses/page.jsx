import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Uses | Abdullah Saeed",
    description: "Software, hardware, and AI tools I use to build web applications.",
};

const Section = ({ title, items }) => (
    <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2">
            {title}
        </h3>
        <ul className="space-y-4">
            {items.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span className="font-semibold text-gray-900 dark:text-gray-200 min-w-[200px]">
                        {item.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

export default function UsesPage() {
    const hardware = [
        { name: "MacBook Pro M3 Max", description: "My daily driver for development and AI model training." },
        { name: "LG UltraFine 5K", description: "Crystal clear display for pixel-perfect UI design." },
        { name: "Keychron K2", description: "Mechanical keyboard (Brown switches) for typing comfort." },
        { name: "Logitech MX Master 3S", description: "The best productivity mouse, hands down." },
    ];

    const software = [
        { name: "VS Code", description: "With GitHub Copilot & Catppuccin theme." },
        { name: "Warp Terminal", description: "Rust-based terminal for speed and AI integration." },
        { name: "Figma", description: "For UI/UX design and prototyping." },
        { name: "Notion", description: "Project management and second brain." },
    ];

    const stack = [
        { name: "Next.js 15", description: "The React framework for production." },
        { name: "Tailwind CSS", description: "Rapid UI development and consistent design systems." },
        { name: "Supabase", description: "My go-to Backend-as-a-Service." },
        { name: "Vercel", description: "Zero-config deployment and edge network." },
    ];

    const aiTools = [
        { name: "Cursor", description: "AI-first code editor that speeds up development significantly." },
        { name: "ChatGPT (Plus)", description: "For brainstorming, rubber-ducking, and content generation." },
        { name: "Claude 3.5 Sonnet", description: "Excellent for complex coding tasks and reasoning." },
        { name: "Midjourney", description: "Generating assets and design inspiration." },
    ];

    return (
        <div className="w-full overflow-x-hidden min-h-screen flex flex-col">
            <Nav />
            <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-32">
                <div className="mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                        <span className="red_gradient dark:from-red-400 dark:to-red-600">Uses</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A curated list of the tech I use to build software, stay productive, and maintain my sanity.
                    </p>
                </div>

                <Section title="Hardware" items={hardware} />
                <Section title="Software & Apps" items={software} />
                <Section title="Development Stack" items={stack} />
                <Section title="AI Toolkit" items={aiTools} />

            </main>
            <Footer />
        </div>
    );
}
