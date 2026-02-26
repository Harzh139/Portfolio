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
                            className="flex flex-col gap-4 p-6 rounded-lg border border-border hover:border-accent/40 transition-colors"
                        >
                            <h3 className="text-sm font-mono text-accent tracking-wide">{cat.category}</h3>
                            <div className="flex flex-col gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-muted-foreground"
                                    >
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
