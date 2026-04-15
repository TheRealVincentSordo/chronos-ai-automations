import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Workflow, Database, Layers, GitPullRequest, ShieldCheck, Search, Activity, ChevronRight, Zap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
      <div className="noise-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono font-bold text-xl tracking-tight flex items-center gap-2 group">
            <div className="w-6 h-6 bg-primary text-primary-foreground flex items-center justify-center rounded-sm">
              <Zap size={14} className="group-hover:scale-110 transition-transform" />
            </div>
            Chronos AI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <Button asChild variant="default" size="sm" className="hidden sm:flex rounded-none font-mono text-xs uppercase tracking-wider px-6">
            <a href="mailto:sales@chronosaiautomations.com">Book a Consultation</a>
          </Button>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-muted/30 text-xs font-mono mb-8 text-muted-foreground rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                SYSTEMS OPERATIONAL
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                AI systems for engineering teams that need to ship faster
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Chronos AI helps tech companies integrate AI into software delivery workflows — without compromising reliability, quality, or maintainability.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-none font-mono text-sm uppercase tracking-wider h-12 px-8">
                  <a href="mailto:sales@chronosaiautomations.com">Book a Consultation</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none font-mono text-sm uppercase tracking-wider h-12 px-8 border-border hover:bg-muted/50">
                  See Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Abstract Technical Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-[500px] border border-border/50 bg-muted/10 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path d="M50 250 C 150 250, 200 100, 300 100 C 400 100, 450 400, 550 400 C 650 400, 700 250, 800 250" fill="none" stroke="url(#lineGrad)" strokeWidth="2" className="animated-dash" />
                <path d="M50 350 C 200 350, 250 200, 400 200 C 500 200, 550 300, 650 300 C 750 300, 800 150, 900 150" fill="none" stroke="url(#lineGrad)" strokeWidth="1" className="animated-dash" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
                
                {/* Nodes */}
                <g transform="translate(300, 100)">
                  <circle r="6" fill="hsl(var(--primary))" />
                  <circle r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
                  <text x="15" y="4" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="Space Mono">LLM_GATEWAY</text>
                </g>
                <g transform="translate(550, 400)">
                  <circle r="6" fill="hsl(var(--primary))" />
                  <circle r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
                  <text x="15" y="4" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="Space Mono">VECTOR_STORE</text>
                </g>
                <g transform="translate(400, 200)">
                  <circle r="4" fill="hsl(var(--foreground))" opacity="0.8" />
                  <text x="10" y="3" fill="hsl(var(--muted-foreground))" fontSize="8" fontFamily="Space Mono">CI_CD_HOOK</text>
                </g>
                <g transform="translate(650, 300)">
                  <circle r="4" fill="hsl(var(--foreground))" opacity="0.8" />
                  <text x="10" y="3" fill="hsl(var(--muted-foreground))" fontSize="8" fontFamily="Space Mono">AUTH_PROXY</text>
                </g>
              </svg>
              
              {/* Overlay terminal window */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-background/90 backdrop-blur border border-border shadow-2xl rounded-md overflow-hidden">
                <div className="h-8 border-b border-border flex items-center px-3 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="ml-2 text-[10px] font-mono text-muted-foreground uppercase">chronos-deploy.sh</span>
                </div>
                <div className="p-4 font-mono text-xs text-muted-foreground space-y-2">
                  <p><span className="text-primary">❯</span> analyzing codebase...</p>
                  <p className="text-foreground">Found 4,203 files. Mapping dependencies.</p>
                  <p><span className="text-primary">❯</span> injecting PR review copilot</p>
                  <p className="text-foreground">Status: <span className="text-green-500">Active</span></p>
                  <p className="animate-pulse">_</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VALUE PROPOSITIONS */}
        <section className="py-24 border-y border-border/50 bg-muted/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            >
              {[
                { icon: Workflow, title: "Faster Software Delivery", desc: "Reduce time from idea to production-ready code." },
                { icon: Code2, title: "Reduced Bottlenecks", desc: "Eliminate repetitive work that slows down your best engineers." },
                { icon: ShieldCheck, title: "Production-First AI", desc: "Every system we build is designed to survive real-world environments." },
                { icon: Database, title: "Internal Knowledge", desc: "Extract leverage from your existing codebase, docs, and tooling." }
              ].map((prop, i) => (
                <motion.div key={i} variants={fadeIn} className="flex flex-col">
                  <div className="h-10 w-10 bg-primary/10 flex items-center justify-center border border-primary/20 mb-6 text-primary">
                    <prop.icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold mb-3">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prop.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 px-6 scroll-m-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Capabilities</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
                Infrastructure for the AI-assisted engineering team.
              </h3>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                { 
                  icon: GitPullRequest, 
                  title: "AI-Assisted Development Workflows", 
                  desc: "Integrate AI into code generation, PR review, and developer workflows to reduce cycle time and improve consistency.",
                  outcome: "Faster delivery cycles with less manual overhead."
                },
                { 
                  icon: Activity, 
                  title: "Test Automation & Reliability Systems", 
                  desc: "Use AI to improve test creation, QA support, and confidence in releases across complex codebases.",
                  outcome: "Higher release confidence, fewer regressions."
                },
                { 
                  icon: Search, 
                  title: "Internal Engineering Copilots", 
                  desc: "Build AI tools that help teams navigate codebases, internal docs, and institutional knowledge at scale.",
                  outcome: "Faster onboarding, better knowledge retention."
                },
                { 
                  icon: Layers, 
                  title: "Workflow & Tooling Automation", 
                  desc: "Automate repetitive engineering and operational tasks across the software lifecycle.",
                  outcome: "Reclaimed engineering hours on high-value work."
                }
              ].map((service, i) => (
                <motion.div key={i} variants={fadeIn} className="group relative p-8 border border-border bg-card hover:border-primary/50 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    <ArrowRight size={20} className="-rotate-45" />
                  </div>
                  <service.icon size={24} className="text-muted-foreground mb-8 group-hover:text-primary transition-colors" />
                  <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-md">
                    {service.desc}
                  </p>
                  <div className="pt-6 border-t border-border/50">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider block mb-2">Outcome</span>
                    <span className="text-sm font-medium">{service.outcome}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-32 px-6 bg-muted/5 border-y border-border/50 scroll-m-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Process</h2>
                <h3 className="text-3xl font-bold tracking-tight mb-6">How we operate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We approach AI implementation like any other complex systems engineering problem: with rigorous analysis, careful design, and a focus on measurable output.
                </p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {[
                    { step: "01", title: "Assess Bottlenecks", desc: "We analyze your current engineering workflows, tooling stack, and delivery pain points to identify where AI creates the most leverage." },
                    { step: "02", title: "Design & Implement", desc: "We design AI-powered systems tailored to your codebase, team structure, and delivery environment — then build and integrate them." },
                    { step: "03", title: "Measure & Optimize", desc: "We track delivery impact with clear metrics and iterate until the systems are working and the ROI is measurable." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className="relative flex items-start md:justify-between group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span className="text-xs font-mono text-primary">{item.step}</span>
                      </div>
                      <div className="ml-8 md:ml-0 md:w-[calc(50%-2rem)] md:group-odd:text-right">
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHRONOS AI & OUTCOMES */}
        <section id="why-us" className="py-32 px-6 scroll-m-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                  Built for real engineering teams, not AI demos.
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We don't sell AI transformation. We build AI systems that fit your actual codebase, team, and delivery environment. 
                  </p>
                  <p>
                    Our work is grounded in backend engineering depth, integration complexity, and production-first thinking. The output is always measurable: faster cycles, fewer bottlenecks, and teams that actually use the tools we build.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-px bg-border/50 border border-border/50">
                {[
                  { metric: "40%", label: "faster cycle times", sub: "Average improvement in time from PR open to production." },
                  { metric: "60%", label: "less repetitive engineering work", sub: "Time reclaimed through workflow and tooling automation." },
                  { metric: "3x", label: "release confidence", sub: "Teams report significantly higher confidence in releases." },
                  { metric: "2x", label: "leverage from existing tooling", sub: "Better extraction of value from your current stack." }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card p-8 flex flex-col justify-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 font-mono tracking-tighter">{stat.metric}</div>
                    <div className="text-sm font-semibold mb-3 text-primary">{stat.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 border-y border-border/50 bg-muted/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-2xl font-mono text-primary mb-8 uppercase tracking-widest">Deeply technical. Focused on delivery.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Chronos AI combines deep backend engineering experience with practical AI implementation. We focus on helping software teams apply AI in ways that are scalable, maintainable, and grounded in real delivery environments. We don't add complexity — we reduce it.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="py-32 px-6 scroll-m-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-border bg-card p-12 md:p-24 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Make AI useful inside your engineering organization
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Book a discovery call and find out where AI creates the most leverage in your current workflow.
              </p>
              <Button asChild size="lg" className="rounded-none font-mono text-sm uppercase tracking-wider h-14 px-10">
                <a href="mailto:sales@chronosaiautomations.com">Book a Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/50 bg-card/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-mono font-bold text-lg tracking-tight">
            <div className="w-5 h-5 bg-primary text-primary-foreground flex items-center justify-center rounded-sm">
              <Zap size={12} />
            </div>
            Chronos AI
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <span>© 2025 Chronos AI. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
