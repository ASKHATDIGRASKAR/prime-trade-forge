import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Database, Zap, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Scalable Web App
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                with Authentication
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A modern, secure, and scalable web application demonstrating professional frontend development with complete backend integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="text-lg h-14 px-8">
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8">
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-primary" />}
              title="JWT Authentication"
              description="Secure user authentication with password hashing and token-based sessions."
            />
            <FeatureCard
              icon={<Database className="w-12 h-12 text-primary" />}
              title="Database Integration"
              description="PostgreSQL database with proper indexing and relationship management."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-primary" />}
              title="RESTful APIs"
              description="Complete CRUD operations with proper error handling and validation."
            />
            <FeatureCard
              icon={<CheckCircle className="w-12 h-12 text-primary" />}
              title="Protected Routes"
              description="Route-level authentication guards for secure dashboard access."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Frontend</h3>
              <ul className="space-y-3">
                <TechItem text="React 18 with TypeScript" />
                <TechItem text="TailwindCSS for styling" />
                <TechItem text="React Router for navigation" />
                <TechItem text="Form validation with Zod" />
                <TechItem text="Responsive design" />
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent">Backend</h3>
              <ul className="space-y-3">
                <TechItem text="PostgreSQL database" />
                <TechItem text="JWT authentication" />
                <TechItem text="Row Level Security (RLS)" />
                <TechItem text="RESTful API design" />
                <TechItem text="Password hashing" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create your account and explore the full-featured dashboard with task management capabilities.
          </p>
          <Button asChild size="lg" className="text-lg h-14 px-8">
            <Link to="/auth">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const TechItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
    <span className="text-foreground">{text}</span>
  </li>
);

export default Index;