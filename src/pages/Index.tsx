
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/ui/stats-card.jsx";
import { FeatureCard } from "@/components/ui/feature-card.jsx";
import {
  Brain,
  Bot,
  Wrench,
  MessageSquare,
  Users,
  Code,
  Sparkles,
  Zap,
  Bolt,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Build AI Agents with{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  No Code
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Create, deploy, and manage intelligent AI agents for your business needs. No coding required.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="public/lovable-uploads/995dad10-59a1-4829-88e0-0534b210d77b.png"
                  alt="AI Agent Platform Interface"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="AI Agents Created"
            value="1000+"
            icon={<Bot className="h-6 w-6" />}
          />
          <StatsCard
            title="Active Users"
            value="5000+"
            icon={<Users className="h-6 w-6" />}
          />
          <StatsCard
            title="Available Tools"
            value="50+"
            icon={<Wrench className="h-6 w-6" />}
          />
          <StatsCard
            title="Messages Handled"
            value="1M+"
            icon={<MessageSquare className="h-6 w-6" />}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Build AI Agents
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Powerful tools and features to create sophisticated AI agents without writing code.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Knowledge Base"
              description="Train your AI agents with custom knowledge bases and documentation."
              icon={<Brain className="h-6 w-6" />}
            />
            <FeatureCard
              title="Visual Builder"
              description="Drag and drop interface to design your agent's conversation flow."
              icon={<Sparkles className="h-6 w-6" />}
            />
            <FeatureCard
              title="Tool Integration"
              description="Connect your agents to external tools and services seamlessly."
              icon={<Bolt className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-900 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Your AI Agent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100">
            Get started for free and join thousands of businesses using our platform.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              View Demo
            </Button>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Building
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
