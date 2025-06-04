import React from 'react';
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Code } from 'lucide-react';

export const ComponentsSection = () => {
  return (
    <section id="components" className="py-20">
      <h2 className="text-4xl font-mono font-bold mb-8">Components</h2>
      
      {/* Card Component */}
      <div className="mb-16">
        <h3 className="text-2xl font-mono font-bold mb-6">Card Component</h3>
        
        {/* Example Usage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>A comprehensive look at the project structure and features</CardDescription>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Modern React with TypeScript</li>
                <li>Tailwind CSS for styling</li>
                <li>Framer Motion animations</li>
              </ul>
            </CardContent>
            <CardFooter>
              <button className="text-light-blue hover:underline">Learn more →</button>
            </CardFooter>
          </Card>

          <Card className="p-6">
            <CardTitle>Technical Stack</CardTitle>
            <CardDescription>Technologies used in this portfolio</CardDescription>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="bg-navy px-3 py-1 rounded-full text-sm text-light-blue">React</span>
                <span className="bg-navy px-3 py-1 rounded-full text-sm text-light-blue">TypeScript</span>
                <span className="bg-navy px-3 py-1 rounded-full text-sm text-light-blue">Tailwind</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-gray-400">
                <Code className="w-4 h-4 mr-2" />
                <span>View documentation</span>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Code Example */}
        <div className="bg-[#1a1b2e] p-6 rounded-lg">
          <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
            <code>{`// Example usage
<Card className="p-6">
  <CardTitle>Project Overview</CardTitle>
  <CardDescription>A comprehensive look at the project</CardDescription>
  <CardContent>
    <ul className="list-disc list-inside">
      <li>Modern React with TypeScript</li>
      <li>Tailwind CSS for styling</li>
      <li>Framer Motion animations</li>
    </ul>
  </CardContent>
  <CardFooter>
    <button className="text-light-blue hover:underline">
      Learn more →
    </button>
  </CardFooter>
</Card>`}</code>
          </pre>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 className="text-2xl font-mono font-bold mb-6">API Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-6">Component</th>
                <th className="text-left py-4 px-6">Props</th>
                <th className="text-left py-4 px-6">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Card</td>
                <td className="py-4 px-6 text-light-blue">className?: string</td>
                <td className="py-4 px-6">Container component with hover animation</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">CardTitle</td>
                <td className="py-4 px-6 text-light-blue">children: ReactNode</td>
                <td className="py-4 px-6">Large heading for the card</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">CardDescription</td>
                <td className="py-4 px-6 text-light-blue">children: ReactNode</td>
                <td className="py-4 px-6">Secondary text below the title</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">CardContent</td>
                <td className="py-4 px-6 text-light-blue">children: ReactNode</td>
                <td className="py-4 px-6">Main content area</td>
              </tr>
              <tr>
                <td className="py-4 px-6">CardFooter</td>
                <td className="py-4 px-6 text-light-blue">children: ReactNode</td>
                <td className="py-4 px-6">Bottom section with border separator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};