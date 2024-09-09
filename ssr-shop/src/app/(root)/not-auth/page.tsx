import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
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
          <Link href="/" className="w-fit">
            <Button variant="ghost" className="w-full">
              Go back to home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotAuth;
