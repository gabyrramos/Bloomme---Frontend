interface PathCardProps {
  title: string;
  imageUrl: string;
}

function PathCard({ title, imageUrl }: PathCardProps) {
  return (
    <div className="grid grid-cols-12 bg-yellow-100 items-center p-4 rounded-2xl">
      <div className="col-span-7">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-52 object-contain"
        />
      </div>
      <div className="col-span-5">
        <h2 className="font-semibold text-gray-700 text-lg">{title}</h2>
      </div>
    </div>
  );
}

export default PathCard;
