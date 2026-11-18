import Link from 'next/link';
type DestinationCardProps = {
    id:number;
    name:string;
    description:string;
    image:string;
    category:string;
    country:string;
};

export default function DestinationCard({
 id,
 name,
 description,
 image,
 category,
 country,
}:DestinationCardProps){
    return(
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            {/* Destination page */}
            <img src={image} alt = {name} className="w-full h-64 object-cover"/>
            {/* Destination Information */}
            <div className="p-5">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
                {/* Destination Details Link */}
                <Link href={`/destinations/${id}`} className="inline-block mt-4 text-green-800 font-semibold hover:underline">Explore More →</Link>
            </div>
        </div>
    )
}