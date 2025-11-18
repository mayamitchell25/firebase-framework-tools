import Card from "@/components/Card";
import { ArrowRight, MessageSquare, Briefcase, CheckCircle, Users } from 'lucide-react';

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <h2 className="text-xl font-semibold mb-2">At a Glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Active Projects" value="12" icon={<Briefcase />} />
        <Card title="Co-Packer Responses" value="8" icon={<MessageSquare />} />
        <Card title="New Matches" value="5" icon={<Users />} />
        <Card title="Launch Success Rate" value="92%" icon={<CheckCircle />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">New co-packer match for Project Sunrise</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <ArrowRight />
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">Proposal received from Gourmet Foods Inc.</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
              <ArrowRight />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Conversation Tracker</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Flavor-Fiesta</p>
                <p className="text-sm text-gray-600">Project Sunset</p>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Replied</span>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Taste-Trek</p>
                <p className="text-sm text-gray-600">Project Moonrise</p>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Awaiting Reply</span>
                <p className="text-sm text-gray-500">2 weeks ago</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Nature-Nosh</p>
                <p className="text-sm text-gray-600">Project Daybreak</p>
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Follow-up Needed</span>
                <p className="text-sm text-gray-500">1 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
