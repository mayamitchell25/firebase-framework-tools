
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AiCopilotSummary() {
  return (
    <Card className="shadow-sm rounded-xl sticky top-6">
      <CardHeader>
        <CardTitle>AI Copilot Summary</CardTitle>
        <CardDescription>Last updated 5 minutes ago</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Overview</h4>
            <p className="text-sm text-muted-foreground">
              You have contacted 5 co-packers. Current response patterns show a
              higher interest from local manufacturers. Strongest feasibility
              alignment is with Global Canning Inc.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Recommendations</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Follow up with 3 co-packers who haven't responded.</li>
              <li>Re-run feasibility scoring for the new ingredient profile.</li>
              <li>Prioritize negotiations with high-alignment manufacturers.</li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <Button size="sm">Yes - Approve</Button>
            <Button size="sm" variant="outline">
              No - Suggest Alternative
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <Input placeholder="Ask a question..." />
        </div>
      </CardFooter>
    </Card>
  );
}
