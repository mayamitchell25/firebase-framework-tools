import Link from "next/link";
import { Home, Lightbulb, Factory, FolderKanban, BarChart4 } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Co-Packer Copilot</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/" className="flex items-center p-2 rounded hover:bg-gray-700">
              <Home className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/ideation" className="flex items-center p-2 rounded hover:bg-gray-700">
              <Lightbulb className="mr-3" />
              Product Ideation
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/co-packer-connect" className="flex items-center p-2 rounded hover:bg-gray-700">
              <Factory className="mr-3" />
              Co-Packer Connect
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/project-management" className="flex items-center p-2 rounded hover:bg-gray-700">
              <FolderKanban className="mr-3" />
              Project Management
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/post-launch-analysis" className="flex items-center p-2 rounded hover:bg-gray-700">
              <BarChart4 className="mr-3" />
              Post-launch Analysis
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
