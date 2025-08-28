import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome, Admin!</CardTitle>
        <CardDescription>This is the admin panel for the SNBD Host Knowledgebase.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          From here, you would typically manage articles, categories, and view user feedback.
        </p>
        <p className="mb-6">
          This demo focuses on the public-facing knowledgebase. The backend and full admin functionality would be built out as per the project requirements (e.g., using Laravel or Node.js).
        </p>
        <Button asChild>
            <Link href="/">
                Go to Homepage
            </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
