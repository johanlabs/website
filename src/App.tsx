import React from 'react';
import { Shield, Code2, Server, Utensils as Extension, GitFork, Brain, Lock, Settings, Layers, ChevronRight, Github, Terminal, Package, MessageSquare, ShieldPlus } from 'lucide-react';
import { CodeBlock } from './components/CodeBlock';
import { Chat } from './components/Chat';
import NameSwitcher from './components/Text';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-8 h-8 text-purple-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-purple-900 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShieldPlus className="w-6 h-6" />
            <span className="text-1xl font-bold">Maltese</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/johanlabs/maltese" className="flex items-center space-x-2 hover:text-purple-200 transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="#installation" className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors">
              Get Started
            </a>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">Protect Your {<NameSwitcher />}</h1>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Maltese is an innovative tool designed to protect personal and sensitive information
            from AI model inference, ensuring privacy in the age of artificial intelligence.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#installation" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors inline-flex items-center">
              Install Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a href="https://github.com/johanlabs/maltese" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
              View on GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Installation Section */}
      <section id="installation" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Package className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold">Quick Installation</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">Install Maltese globally using npm:</p>
              <CodeBlock language="bash">npm install -g maltese</CodeBlock>
              {/* 
                <p className="text-gray-600 mt-4 mb-2">Verify installation:</p>
                <CodeBlock language="bash">maltese --version</CodeBlock>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Lock}
              title="Data Protection"
              description="Advanced obfuscation techniques to replace sensitive information with false patterns."
            />
            <FeatureCard
              icon={Server}
              title="Ollama Compatible"
              description="Seamlessly integrates with Ollama on port 11435, providing a privacy layer for your projects."
            />
            <FeatureCard
              icon={Code2}
              title="Easy Implementation"
              description="Multiple integration options via API, CLI, or direct code implementation in JavaScript."
            />
            {/*
            <FeatureCard 
              icon={Settings}
              title="Configurable"
              description="Flexible configuration options for different levels of data obfuscation."
            />
            <FeatureCard 
              icon={Extension}
              title="Browser Extension"
              description="Real-time interception and modification of sensitive data in AI interactions (Coming Soon)."
            />
            <FeatureCard 
              icon={Brain}
              title="Smart Classification"
              description="Intelligent identification and classification of sensitive personal data patterns (Coming Soon)."
            />
            */}
          </div>
        </div>
      </section>

      {/* Usage Examples Section */}
      <section className="py-20  bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Usage Examples</h2>

          {/* CLI Usage */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <Terminal className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-semibold">CLI Usage</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-2">Basic obfuscation:</p>
                <CodeBlock language="bash">maltese obfuscate "Olá, meu nome é Lucas"</CodeBlock>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Using with <b>Ollama</b>:</p>
                <CodeBlock language="bash">maltese run smollm2:360 "Olá, meu nome é Lucas"</CodeBlock>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Start local server (Available on <b>http://localhost:11435</b>):</p>
                <CodeBlock language="bash">maltese server</CodeBlock>
              </div>
            </div>
          </div>

          {/* JavaScript Integration */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Code2 className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-semibold">JavaScript Integration</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-2">Install the package:</p>
                <CodeBlock language="bash">npm install malte</CodeBlock>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Basic usage:</p>
                <CodeBlock>{`const { obfuscate } = require('malte');

// Simple obfuscation
const result = obfuscate("Ontem eu fui para Los Angeles");
console.log(result); // "Ontem eu fui para Bagdá"

// With ignored data
const preserved = obfuscate("Olá, meu nome é {{Lucas Santana}}.");
console.log(preserved); // "Olá, meu nome é Lucas Santana."`}</CodeBlock>
              </div>
              <div>
                <p className="text-gray-600 mb-2">API usage example:</p>
                <CodeBlock>{`fetch('http://localhost:11435/api/maltese-obfuscate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: 'your text with sensitive personal data here'
  })
}).then(response => response.json())`}</CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <MessageSquare className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold">Try It Out</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Chat />
          </div>
        </div>
      </section>
      */}

      {/* Architecture Section
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Simple Architecture</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex-1 max-w-md">
              <Layers className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center mb-4">Three-Component System</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">SPD Classification</h4>
                    <p className="text-gray-600">Identifies sensitive patterns in texts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">SPD Generator</h4>
                    <p className="text-gray-600">Creates false patterns to replace sensitive information</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Obfuscation Engine</h4>
                    <p className="text-gray-600">Replaces original tokens with false data</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ShieldPlus className="w-6 h-6" />
              <span className="text-1xl font-bold">Maltese</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/johanlabs/maltese" className="hover:text-purple-200 transition-colors flex items-center space-x-2">
                <GitFork className="w-5 h-5" />
                <span>Fork on GitHub</span>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-purple-200">
            <p>A Johan Labs Initiative | Open Source Privacy Protection</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;