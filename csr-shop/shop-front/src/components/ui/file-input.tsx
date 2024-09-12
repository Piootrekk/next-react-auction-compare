import { useRef, useState } from "react";
import { Button } from "./button";
import { UploadIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { InputProps } from "./input";
type FileInputProps = {
  className?: string;
} & InputProps;

const FileInput: React.FC<FileInputProps> = ({ className, ...rest }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleFile = (file: File) => {
    if (file) {
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <>
      <Button
        variant="outline"
        onClick={handleClick}
        type="button"
        className={cn("transition-colors", className)}
      >
        <div
          className={`flex flex-row ${!fileName && "text-muted-foreground"}`}
        >
          <UploadIcon className="mr-1 h-5 w-5 self-center" />
          {fileName ? fileName : "Upload image"}
        </div>
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        className="hidden"
        {...rest}
      />
    </>
  );
};

export default FileInput;
