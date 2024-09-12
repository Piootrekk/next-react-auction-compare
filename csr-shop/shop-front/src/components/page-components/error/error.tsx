import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ErrorProps = {
  message?: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center mt-20 text-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-3xl text-red-500">
            <div className="flex flex-row gap-2 flex-wrap">
              <AlertTriangle size={36} />
              Something went wrong!
              <AlertTriangle size={36} />
            </div>
          </CardTitle>
          <CardDescription>
            Fatal error occurred. Please try again later.
            {message ? message : "Unknown error"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="ghost" className="w-full">
            <Link to="/">Go back to home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Error;
