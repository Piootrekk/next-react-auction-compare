import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotAuth = async () => {
  return (
    <div className="flex justify-center items-center mt-20 text-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-3xl text-red-500">
            <div className="flex flex-row gap-2 flex-wrap">
              <AlertTriangle size={36} />
              401 - Unauthorized!
              <AlertTriangle size={36} />
            </div>
          </CardTitle>
          <CardDescription>
            The page you are looking for requires authentication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="ghost" className="w-full">
            <Link href="/">Go back to home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotAuth;
