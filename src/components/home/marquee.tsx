import Image from 'next/image';

const images = [
  "/vector.png",
  "/logo.png",
  "/hubspot.png",
  "/notion.png",
  "/netflix.png",
  "/zoom.png"
];

export default function ImageRow() {
  return (
    <div className="max-w-[1440px] w-full px-[100px] h-[48px] mx-auto flex justify-between items-center overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className="flex-1 mx-[5px]">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={150}
            height={150}
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
