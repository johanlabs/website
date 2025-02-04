import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = 'javascript' }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <pre className="bg-gray-900 rounded-lg overflow-x-auto">
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
}