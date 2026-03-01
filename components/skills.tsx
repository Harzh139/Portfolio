const skillCategories = [
    {
        category: "Languages & Databases",
        skills: ["Python", "SQL"],
    },
    {
        category: "AI / ML Frameworks",
        skills: ["XGBoost", "T5", "LLaMA", "RAG", "LangChain", "PyTorch"],
    },
    {
        category: "Tools & Platforms",
        skills: ["Docker", "GitHub", "Power BI"],
    },
    {
        category: "Product",
        skills: ["Product Metrics", "Requirements Gathering", "User Flows", "Stakeholder Management", "Data-Driven Decisions"],
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-sm font-mono text-accent tracking-wider uppercase">
                        Technical Skills
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.category}
                            className="flex flex-col gap-4 p-6 border border-border bg-card/50 hover:bg-card glow-hover relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                            <h3 className="text-xs font-black font-mono text-accent tracking-widest uppercase mb-2">
                                {cat.category}
                            </h3>
                            <div className="flex flex-col gap-3">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-foreground font-medium flex items-center gap-3"
                                    >
                                        <span className="w-1.5 h-1.5 bg-accent/30 group-hover:bg-accent transition-colors shadow-[0_0_5px_var(--color-accent)]"></span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
