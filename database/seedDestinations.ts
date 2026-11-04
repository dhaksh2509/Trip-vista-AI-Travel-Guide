import { PrismaClient } from '@prisma/client';
import { ALL_INDIA_DESTINATIONS } from '../backend/src/data/allIndiaCatalogue';

const prisma = new PrismaClient();

/**
 * Repeatable, idempotent seeding script for the complete All-India Destination Catalogue.
 * Uses Prisma upsert on unique destination name so running multiple times will never duplicate records.
 */
async function main() {
  console.log(`Starting idempotent seed of ${ALL_INDIA_DESTINATIONS.length} All-India destinations...`);

  let addedCount = 0;
  let updatedCount = 0;

  for (const dest of ALL_INDIA_DESTINATIONS) {
    const existing = await prisma.destination.findUnique({
      where: { name: dest.name }
    });

    await prisma.destination.upsert({
      where: { name: dest.name },
      update: {
        state: dest.state,
        country: 'India',
        description: dest.description,
        latitude: dest.coordinates.lat,
        longitude: dest.coordinates.lng,
        bestTimeToVisit: dest.bestMonths,
        tags: [
          dest.category,
          dest.state,
          ...(dest.popularInterests || []),
          ...(dest.aliases || [])
        ]
      },
      create: {
        name: dest.name,
        state: dest.state,
        country: 'India',
        description: dest.description,
        latitude: dest.coordinates.lat,
        longitude: dest.coordinates.lng,
        bestTimeToVisit: dest.bestMonths,
        tags: [
          dest.category,
          dest.state,
          ...(dest.popularInterests || []),
          ...(dest.aliases || [])
        ]
      }
    });

    if (existing) {
      updatedCount++;
    } else {
      addedCount++;
    }
  }

  console.log(`Idempotent seeding completed! Added: ${addedCount}, Updated: ${updatedCount}, Total: ${ALL_INDIA_DESTINATIONS.length}`);
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

