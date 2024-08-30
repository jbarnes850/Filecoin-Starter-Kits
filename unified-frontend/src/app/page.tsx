'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useToast } from "../../components/ui/toast";
import { Home, Wrench, Book, Github, Sun, Moon, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import QuickStart from 'src/app/components/QuickStart';

interface StarterKit {
  id: string;
  name: string;
  repo: string;
  description: string;
  components: string[];
  workflowSteps: string[];
  valueProposition: string;
  keyCodeSnippet: {
    code: string;
    language: string;
    explanation: string;
  };
  interactiveDemo: React.ReactNode;
}

interface FilecoinStarterKitsProps {}

interface FilecoinStarterKitsState {
  activeKit: string;
  isDarkMode: boolean;
  searchQuery: string;
}

const FilecoinStarterKits: React.FC<FilecoinStarterKitsProps> = () => {
  const [state, setState] = useState<FilecoinStarterKitsState>({
    activeKit: 'fevm-hardhat',
    isDarkMode: true,
    searchQuery: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    // Apply the initial theme
    document.documentElement.classList.toggle('dark', state.isDarkMode);
  }, [state.isDarkMode]);

  const starterKits: StarterKit[] = [
    {
      id: 'fevm-hardhat',
      name: 'FEVM Hardhat Kit',
      repo: 'https://github.com/filecoin-project/fevm-hardhat-kit',
      description: "Comprehensive toolkit for FVM smart contract development using Hardhat",
      components: [
        "Hardhat development environment with FVM configuration",
        "Solidity examples: basic contracts and Filecoin API usage",
        "Deal Client for on-chain storage management",
        "Automated testing and deployment scripts",
        "Frontend React application for contract interaction"
      ],
      workflowSteps: [
        "Set up the Hardhat environment",
        "Write and compile Solidity smart contracts",
        "Deploy contracts to the Filecoin network",
        "Interact with contracts using the frontend application",
        "Manage storage deals on-chain"
      ],
      valueProposition: "The FEVM Hardhat Kit is ideal for developers who are familiar with Ethereum development and want to leverage their existing knowledge to build on Filecoin. It provides a smooth transition for Ethereum developers and offers robust tools for testing and deployment.",
      keyCodeSnippet: {
        code: `
// Example of a simple storage contract
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 private value;

    // Store a new value
    function store(uint256 newValue) public {
        value = newValue;
    }

    // Retrieve the stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
        `,
        language: 'solidity',
        explanation: "This simple storage contract demonstrates basic Solidity syntax and Filecoin compatibility. It allows storing and retrieving a single uint256 value, showcasing state management on the Filecoin network."
      },
      interactiveDemo: (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Interactive Demo: Simple Storage</h3>
          <input
            type="number"
            placeholder="Enter a value to store"
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Store Value</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Retrieve Value</button>
          </div>
          <p className="mt-2">Stored Value: <span className="font-bold">0</span></p>
        </div>
      )
    },
    {
      id: 'fevm-foundry',
      name: 'FEVM Foundry Kit',
      repo: 'https://github.com/filecoin-project/fevm-foundry-kit',
      description: "Rapidly develop and deploy Solidity smart contracts on Filecoin using Foundry",
      components: [
        "Foundry-based development environment",
        "Efficient contract compilation and testing suite",
        "Comprehensive Solidity contract examples",
        "Integration with Filecoin.sol APIs",
        "Deal Client for on-chain storage management"
      ],
      workflowSteps: [
        "Set up the Foundry environment",
        "Write and compile Solidity smart contracts",
        "Run tests using Foundry's testing framework",
        "Deploy contracts to the Filecoin network",
        "Interact with Filecoin.sol APIs"
      ],
      valueProposition: "The FEVM Foundry Kit is a fast and efficient toolkit for Solidity developers who want to build on Filecoin. It offers a streamlined development environment and a comprehensive testing suite, making it easy to deploy and interact with smart contracts on the Filecoin network.",
      keyCodeSnippet: {
        code: `
// Example of a simple storage contract
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 private value;

    // Store a new value
    function store(uint256 newValue) public {
        value = newValue;
    }

    // Retrieve the stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
        `,
        language: 'solidity',
        explanation: "This simple storage contract demonstrates basic Solidity syntax and Filecoin compatibility. It allows storing and retrieving a single uint256 value, showcasing state management on the Filecoin network."
      },
      interactiveDemo: (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Interactive Demo: Simple Storage</h3>
          <input
            type="number"
            placeholder="Enter a value to store"
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Store Value</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Retrieve Value</button>
          </div>
          <p className="mt-2">Stored Value: <span className="font-bold">0</span></p>
        </div>
      )
    },
    {
      id: 'fvm-deal-making',
      name: 'FVM Deal Making Kit',
      repo: 'https://github.com/filecoin-project/fvm-starter-kit-deal-making',
      description: "Orchestrate on-chain storage deals via Solidity smart contracts",
      components: [
        "DealClient.sol for deal proposal creation",
        "Data preparation tools (FVM Data Depot, generate-car)",
        "React frontend for deal submission",
        "Hardhat tasks for contract interaction",
        "Integration with Boost storage providers"
      ],
      workflowSteps: [
        "Prepare data for storage using FVM Data Depot",
        "Create and deploy the DealClient smart contract",
        "Submit storage deals through the React frontend",
        "Monitor deal status using Hardhat tasks",
        "Retrieve stored data from Filecoin network"
      ],
      valueProposition: "The FVM Deal Making Kit is a comprehensive toolkit for developers who want to build on-chain storage deals using Solidity smart contracts. It offers a range of tools and integrations, making it easy to prepare data, create deals, and monitor their status on the Filecoin network.",
      keyCodeSnippet: {
        code: `
// Example of a simple storage contract
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 private value;

    // Store a new value
    function store(uint256 newValue) public {
        value = newValue;
    }

    // Retrieve the stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
        `,
        language: 'solidity',
        explanation: "This simple storage contract demonstrates basic Solidity syntax and Filecoin compatibility. It allows storing and retrieving a single uint256 value, showcasing state management on the Filecoin network."
      },
      interactiveDemo: (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Interactive Demo: Simple Storage</h3>
          <input
            type="number"
            placeholder="Enter a value to store"
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Store Value</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Retrieve Value</button>
          </div>
          <p className="mt-2">Stored Value: <span className="font-bold">0</span></p>
        </div>
      )
    },
    {
      id: 'raas',
      name: 'RaaS Starter Kit',
      repo: 'https://github.com/filecoin-project/raas-starter-kit',
      description: "Build tools for renewing and replicating storage deals on Filecoin",
      components: [
        "DealStatus smart contract",
        "Event listener for deal management",
        "API for job registration (renew, replicate, repair)",
        "Integration with aggregator services (e.g., Lighthouse)"
      ],
      workflowSteps: [
        "Deploy the DealStatus smart contract",
        "Set up the event listener for deal management",
        "Implement the API for job registration",
        "Integrate with Lighthouse or other aggregator services",
        "Monitor and manage storage deal renewals and replications"
      ],
      valueProposition: "The RaaS Starter Kit is a powerful toolkit for developers who want to build tools for renewing and replicating storage deals on Filecoin. It offers a range of components and integrations, making it easy to deploy and manage storage deals on the Filecoin network.",
      keyCodeSnippet: {
        code: `
// Example of a simple storage contract
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 private value;

    // Store a new value
    function store(uint256 newValue) public {
        value = newValue;
    }

    // Retrieve the stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
        `,
        language: 'solidity',
        explanation: "This simple storage contract demonstrates basic Solidity syntax and Filecoin compatibility. It allows storing and retrieving a single uint256 value, showcasing state management on the Filecoin network."
      },
      interactiveDemo: (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Interactive Demo: Simple Storage</h3>
          <input
            type="number"
            placeholder="Enter a value to store"
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Store Value</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Retrieve Value</button>
          </div>
          <p className="mt-2">Stored Value: <span className="font-bold">0</span></p>
        </div>
      )
    },
    {
      id: 'state-storage',
      name: 'State/Storage Integration PoC',
      repo: 'https://github.com/filecoin-project/state-storage-starter-kit',
      description: "Demonstrate integration of state management with IPFS storage using FVM",
      components: [
        "Data Management Contract (DMC)",
        "Client application simulation",
        "Relayer for IPFS content retrieval",
        "End-to-end workflow demonstration"
      ],
      workflowSteps: [
        "Deploy the Data Management Contract",
        "Set up the client application simulation",
        "Implement the relayer for IPFS content retrieval",
        "Store data on IPFS and manage state on FVM",
        "Retrieve and validate data through the end-to-end workflow"
      ],
      valueProposition: "The State/Storage Integration PoC is a demonstration of how to integrate state management with IPFS storage using FVM. It showcases the end-to-end workflow of storing and retrieving data, highlighting the benefits of using Filecoin for state management and IPFS for storage.",
      keyCodeSnippet: {
        code: `
// Example of a simple storage contract
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 private value;

    // Store a new value
    function store(uint256 newValue) public {
        value = newValue;
    }

    // Retrieve the stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
        `,
        language: 'solidity',
        explanation: "This simple storage contract demonstrates basic Solidity syntax and Filecoin compatibility. It allows storing and retrieving a single uint256 value, showcasing state management on the Filecoin network."
      },
      interactiveDemo: (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Interactive Demo: Simple Storage</h3>
          <input
            type="number"
            placeholder="Enter a value to store"
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Store Value</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Retrieve Value</button>
          </div>
          <p className="mt-2">Stored Value: <span className="font-bold">0</span></p>
        </div>
      )
    }
  ];

  const handleKitChange = (kitId: string) => {
    setState(prevState => ({ ...prevState, activeKit: kitId }));
    const selectedKit = starterKits.find(kit => kit.id === kitId);
    if (selectedKit) {
      toast({
        title: "Starter Kit Selected",
        description: `You've selected the ${selectedKit.name}.`,
      });
    }
  };

  const toggleTheme = () => {
    setState(prevState => ({ ...prevState, isDarkMode: !prevState.isDarkMode }));
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({ ...prevState, searchQuery: event.target.value }));
  };

  const filteredKits = starterKits.filter(kit =>
    kit.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
    kit.description.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  const renderStarterKits = () => {
    return filteredKits.map((kit) => (
      <motion.div
        key={kit.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden"
          onClick={() => handleKitChange(kit.id)}
        >
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardTitle className="text-xl flex items-center justify-between">
              {kit.name}
              <Link href={kit.repo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <Github className="h-5 w-5 text-gray-200 hover:text-white transition-colors" />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {kit.description}
            </p>
          </CardContent>
          <CardFooter className="bg-gray-100 dark:bg-gray-600 p-2 text-xs text-gray-500 dark:text-gray-400">
            Click to view details
          </CardFooter>
        </Card>
      </motion.div>
    ));
  };

  const renderActiveKitDetails = () => {
    const kit = starterKits.find(k => k.id === state.activeKit);
    if (!kit) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white dark:bg-gray-800 mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">{kit.name}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">{kit.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Components</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {kit.components.map((component, index) => (
                  <li key={index}>{component}</li>
                ))}
              </ul>
            </section>
            <section>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Workflow Steps</h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {kit.workflowSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>
            <section>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Code Snippet</h4>
              <SyntaxHighlighter 
                language={kit.keyCodeSnippet.language} 
                style={tomorrow}
                className="text-sm rounded-lg"
              >
                {kit.keyCodeSnippet.code}
              </SyntaxHighlighter>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{kit.keyCodeSnippet.explanation}</p>
            </section>
            <section>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Interactive Demo</h4>
              {kit.interactiveDemo}
            </section>
          </CardContent>
          <CardFooter className="space-x-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href={kit.repo} target="_blank" rel="noopener noreferrer">
                Explore Kit
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <Link href={`/tutorials/${kit.id}`}>
                Interactive Tutorial
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  };

  const renderToolsContent = () => {
    return (
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Developer Tools</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">Access Filecoin development resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Filecoin Documentation", url: "https://docs.filecoin.io/" },
              { name: "Filecoin GitHub Repositories", url: "https://github.com/filecoin-project" },
              { name: "FVM Data Depot", url: "https://data.lighthouse.storage/" },
              { name: "Filecoin Faucet", url: "https://faucet.calibnet.chainsafe-fil.io/" },
            ].map((tool) => (
              <Button key={tool.name} asChild size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                  {tool.name}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderLearnContent = () => {
    return (
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Learn Filecoin</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">Educational resources and tutorials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                title: "Filecoin Basics",
                description: "Learn about Filecoin's decentralized storage network and its core concepts.",
                link: "https://docs.filecoin.io/basics/what-is-filecoin/",
              },
              {
                title: "Smart Contract Development",
                description: "Dive into developing smart contracts on the Filecoin Virtual Machine (FVM).",
                link: "https://docs.filecoin.io/smart-contracts/fundamentals/basics/",
              },
            ].map((resource) => (
              <Card key={resource.title} className="bg-gray-50 dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                      Start Learning
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderDashboardContent = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuickStart />
          {renderStarterKits()}
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${state.isDarkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image
              src="/Filecoin.png"
              alt="Filecoin Logo"
              width={40}
              height={40}
              className="mr-4"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Filecoin Starter Kits</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Button onClick={toggleTheme} size="sm" variant="outline" className="bg-transparent">
              {state.isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search kits..."
                value={state.searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white transition-colors">
              Explore Network
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="flex space-x-2 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md sticky top-16 z-10">
            {['dashboard', 'tools', 'learn'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="flex items-center justify-center">
                  {tab === 'dashboard' && <Home className="mr-2 h-4 w-4" />}
                  {tab === 'tools' && <Wrench className="mr-2 h-4 w-4" />}
                  {tab === 'learn' && <Book className="mr-2 h-4 w-4" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="dashboard">
            {renderDashboardContent()}
          </TabsContent>

          <TabsContent value="tools">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderToolsContent()}
            </motion.div>
          </TabsContent>

          <TabsContent value="learn">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderLearnContent()}
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default FilecoinStarterKits;