import image100 from "@/images/100x.jpg";
import image500 from "@/images/500x.jpg";
import image1000 from "@/images/1000x.jpg";
import image3000 from "@/images/3000x.jpg";
import image6000 from "@/images/6000x.jpg";
import image10000 from "@/images/10000x.jpg";
import Image from "next/image";

type ImageTestProps = {
  params: {
    id: string;
  };
};

const ImageTest: React.FC<ImageTestProps> = ({ params: { id } }) => {
  const images = {
    100: image100,
    500: image500,
    1000: image1000,
    3000: image3000,
    6000: image6000,
    10000: image10000,
  };
  if (id === undefined) {
    return <h1>Invalid image id</h1>;
  }
  if (
    id !== "100" &&
    id !== "500" &&
    id !== "1000" &&
    id !== "3000" &&
    id !== "6000" &&
    id !== "10000"
  ) {
    return <h1>Image not found</h1>;
  }

  return (
    <div className="container flex justify-center flex-col items-center my-12 gap-y-8">
      <h1 className="text-3xl font-bold pb-8">Image Test: {id}</h1>
      <div className="flex gap-x-4">
        <Image
          src={images[id]}
          alt="Image"
          width={400}
          height={400}
          priority={true}
        />
      </div>
    </div>
  );
};

export default ImageTest;
