import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stages = [
  "Ideation",
  "Feasibility",
  "Outreach",
  "Matching",
  "Negotiation",
  "Launch",
];

export function ProjectProgress() {
  const currentStageIndex = 3; // Example: Matching

  return (
    <Card className="shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            {stages.map((stage, index) => (
              <div key={stage} className="flex-1 text-center">
                <div
                  className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                    index < currentStageIndex
                      ? "text-emerald-600 bg-emerald-200"
                      : index === currentStageIndex
                      ? "text-accent-foreground bg-accent"
                      : "text-gray-500 bg-gray-200"
                  }`}
                >
                  {stage}
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            {stages.map((_, index) => (
              <div
                key={index}
                style={{ width: `${100 / stages.length}%` }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                  index < currentStageIndex
                    ? "bg-emerald-500"
                    : index === currentStageIndex
                    ? "bg-accent"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <div className="text-right text-sm text-muted-foreground">
            {`${Math.round(((currentStageIndex + 1) / stages.length) * 100)}% Complete`}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
