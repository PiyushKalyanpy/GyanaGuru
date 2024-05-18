import { UploadIcon } from "lucide-react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";

const AddVideos = () => {
  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>Video Content</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 gap-2">
              <input type="file" className="" placeholder="logo" />
              <input type="file" placeholder="thumbnail" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddVideos;
