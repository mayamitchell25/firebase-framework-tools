import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const conversations = [
  {
    coPacker: "Global Canning Inc.",
    project: "Project Sunrise",
    status: "Replied",
    lastCorrespondence: "2 hours ago",
    statusColor: "text-accent-foreground",
  },
  {
    coPacker: "Innovate Bottling Co.",
    project: "Project Moonshot",
    status: "Awaiting Reply",
    lastCorrespondence: "1 day ago",
    statusColor: "text-yellow-500",
  },
  {
    coPacker: "Nature's Best Packing",
    project: "Project Comet",
    status: "Follow-up Needed",
    lastCorrespondence: "3 days ago",
    statusColor: "text-red-500",
  },
];

export function ConversationTracker() {
  return (
    <Card className="shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle>Conversation Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Co-Packer Name</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Correspondence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversations.map((convo, index) => (
              <Link href="/messaging" key={index} legacyBehavior>
                <TableRow className="hover:bg-gray-100 cursor-pointer">
                  <TableCell className="font-medium">{convo.coPacker}</TableCell>
                  <TableCell>{convo.project}</TableCell>
                  <TableCell>
                    <span className={convo.statusColor}>{convo.status}</span>
                  </TableCell>
                  <TableCell>{convo.lastCorrespondence}</TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
