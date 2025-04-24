# Oakland Data Explorer

A Next.js application for exploring Oakland's environmental data through interactive maps, charts, and visualizations.

## Project Structure

This project is organized into three microservices:

1. **frontend-service**: UI components and client-side logic
2. **visualization-service**: Charts, maps, and data visualizations
3. **data-service**: Data processing, fetching, and management

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/oakland-data-explorer.git
   cd oakland-data-explorer
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- Interactive satellite imagery of Oakland areas
- Year-by-year comparison of environmental changes
- Green density analysis
- Data visualization through charts and maps

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- shadcn/ui components

## Project Structure

\`\`\`
├── app/                      # Next.js App Router
├── components/               # Shared UI components
├── frontend-service/         # UI and client-side logic
├── visualization-service/    # Charts and maps
├── data-service/             # Data management
├── public/                   # Static assets
├── styles/                   # Global styles
└── lib/                      # Utility functions
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
