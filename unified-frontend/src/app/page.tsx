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

  const renderKitInterface = (kitId: string) => {
    const kit = starterKits.find(k => k.id === kitId);
    if (!kit) return null;

    return (
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mt-8">
        <CardHeader className="space-y-4">
          <CardTitle className="text-3xl text-gray-900 dark:text-gray-100">{kit.name}</CardTitle>
          <CardDescription className="text-xl text-gray-600 dark:text-gray-400">{kit.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <section>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Components</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-4">
              {kit.components.map((component, index) => (
                <li key={index} className="text-lg">{component}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Deployment Workflow</h4>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-4">
              {kit.workflowSteps.map((step, index) => (
                <li key={index} className="text-lg">{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Architecture Diagram</h4>
            <div className="relative h-96 w-full">
              <Image
                src={`/images/${kitId}-architecture.png`}
                alt={`${kit.name} Architecture Diagram`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              <Link href={`/docs/${kitId}-main-components.md`} className="text-blue-500 hover:underline">
                View full architecture details
              </Link>
            </p>
          </section>

          <section>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Value Proposition</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300">{kit.valueProposition}</p>
          </section>

          <section>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Code Snippet</h4>
            <SyntaxHighlighter 
              language={kit.keyCodeSnippet.language} 
              style={tomorrow}
              className="text-lg rounded-lg"
            >
              {kit.keyCodeSnippet.code}
            </SyntaxHighlighter>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{kit.keyCodeSnippet.explanation}</p>
          </section>

          <section>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Interactive Demo</h4>
            {kit.interactiveDemo}
          </section>
        </CardContent>
        <CardFooter className="space-x-4 mt-8">
          <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg">
            <Link href={kit.repo} target="_blank" rel="noopener noreferrer">
              Explore Kit
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg">
            <Link href={`/tutorials/${kitId}`}>
              Interactive Tutorial
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className={`container mx-auto px-4 py-8 min-h-screen flex flex-col ${state.isDarkMode ? 'dark' : ''}`}>
      <header className="mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image
              src="/Filecoin.png"
              alt="Filecoin Logo"
              width={60}
              height={60}
              className="mr-4"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">Filecoin Starter Kits</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button onClick={toggleTheme} size="lg" className="w-full sm:w-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {state.isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search kits..."
                value={state.searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 text-lg border rounded-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button size="lg" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white text-lg">
              Explore Filecoin Network
            </Button>
          </motion.div>
        </div>
      </header>

      <Tabs defaultValue="dashboard" className="flex-grow">
        <TabsList className="flex w-full mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
          {['dashboard', 'tools', 'learn'].map((tab, index) => (
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex-1"
            >
              <TabsTrigger
                value={tab}
                className="w-full py-4 text-lg text-gray-700 dark:text-gray-300 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg"
              >
                <span className="flex items-center justify-center">
                  {tab === 'dashboard' && <Home className="mr-2 h-5 w-5" />}
                  {tab === 'tools' && <Wrench className="mr-2 h-5 w-5" />}
                  {tab === 'learn' && <Book className="mr-2 h-5 w-5" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TabsContent value="dashboard">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100">Starter Kits Overview</CardTitle>
                <CardDescription className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Jumpstart your Filecoin journey with our comprehensive toolkits - choose your path and start building!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredKits.map((kit) => (
                    <Card key={kit.id} className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer" onClick={() => handleKitChange(kit.id)}>
                      <CardHeader>
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100 flex items-center justify-between">
                          {kit.name}
                          <Link href={kit.repo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Github className="h-6 w-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" />
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          {kit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            {renderKitInterface(state.activeKit)}
          </TabsContent>

          <TabsContent value="tools">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900 dark:text-gray-100">Developer Tools</CardTitle>
                <CardDescription className="text-xl text-gray-600 dark:text-gray-400">Access Filecoin development resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full text-lg">
                    <Link href="https://docs.filecoin.io/" target="_blank" rel="noopener noreferrer">
                      Filecoin Documentation
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full text-lg">
                    <Link href="https://github.com/filecoin-project" target="_blank" rel="noopener noreferrer">
                      Filecoin GitHub Repositories
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full text-lg">
                    <Link href="https://data.lighthouse.storage/" target="_blank" rel="noopener noreferrer">
                      FVM Data Depot
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full text-lg">
                    <Link href="https://faucet.calibnet.chainsafe-fil.io/" target="_blank" rel="noopener noreferrer">
                      Filecoin Faucet
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learn">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900 dark:text-gray-100">Learn Filecoin</CardTitle>
                <CardDescription className="text-xl text-gray-600 dark:text-gray-400">Educational resources and tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <Card className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Filecoin Basics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-700 dark:text-gray-300">Learn about Filecoin&apos;s decentralized storage network and its core concepts.</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg">
                        <Link href="https://docs.filecoin.io/basics/what-is-filecoin/" target="_blank" rel="noopener noreferrer">
                          Start Learning
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Smart Contract Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-700 dark:text-gray-300">Dive into developing smart contracts on the Filecoin Virtual Machine (FVM).</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg">
                        <Link href="https://docs.filecoin.io/smart-contracts/fundamentals/basics/" target="_blank" rel="noopener noreferrer">
                          Explore FVM
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}

export default FilecoinStarterKits;