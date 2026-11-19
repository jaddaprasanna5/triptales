import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.booking.deleteMany();
  await prisma.destination.deleteMany();

  await prisma.destination.createMany({
    data: [
      { id: 1, title: "Bali", location: "Indonesia", description: "Tropical beaches, temples and peaceful surroundings.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800", price: 999 },
      { id: 2, title: "Swiss Alps", location: "Switzerland", description: "Snow mountains, lakes and scenic trains.", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", price: 1299 },
      { id: 3, title: "Kyoto", location: "Japan", description: "Temples, cherry blossoms and old streets.", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800", price: 1199 },
      { id: 4, title: "Maldives", location: "Maldives", description: "Overwater villas and turquoise water.", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800", price: 1499 },
      { id: 5, title: "Manali", location: "India", description: "Himalayan valleys, snow and adventure.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", price: 499 },
      { id: 6, title: "Paris", location: "France", description: "Eiffel Tower, art, food and romance.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", price: 1399 },
      { id: 7, title: "Goa", location: "India", description: "Beaches, nightlife and Portuguese heritage.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", price: 399 },
      { id: 8, title: "New York", location: "USA", description: "Times Square, Central Park and skyscrapers.", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800", price: 1599 },
      { id: 9, title: "Varanasi", location: "India", description: "Ghats, Ganga aarti and spiritual old city.", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800", price: 299 },
    ],
  });
  console.log("Seeded 9 destinations");
}

main().finally(() => prisma.$disconnect());