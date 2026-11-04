import { BudgetBreakdown, ItineraryDay, TravelPreferences } from '@/types';
import { findDestination } from '@/lib/data/destinations';

/**
 * Agent 4: Budget Agent
 * Categorizes and calculates transparent travel expenditures across Accommodation, Food,
 * Transportation, Activities, Shopping, and Contingency.
 * Incorporates origin-to-destination intercity transit calculations when starting location is provided.
 * Never silently falsifies numbers or shrinks estimates to pretend an inadequate budget fits.
 * Dynamically computes surplus or shortfall and generates actionable savings tips.
 */
export class BudgetAgent {
  public async execute(
    preferences: TravelPreferences,
    days: ItineraryDay[]
  ): Promise<BudgetBreakdown> {
    const { durationDays, travelersCount, budgetInr, destination, transportPreference, startingLocation, startingLocationRecord } = preferences;

    // 1. Calculate actual activity fees directly from itinerary items
    let totalActivitiesCost = 0;
    for (const day of days) {
      totalActivitiesCost += (
        (day.morning?.estimatedCostInr || 0) +
        (day.afternoon?.estimatedCostInr || 0) +
        (day.evening?.estimatedCostInr || 0)
      ) * travelersCount;
    }

    const targetBudget = budgetInr > 0 ? budgetInr : 15000;

    // 2. Realistic accommodation estimation (standard double rooms: 1 room per 2 travelers)
    const roomsCount = Math.max(1, Math.ceil(travelersCount / 2));
    // Base rate: ~₹1,800 per room/night for mid-tier tourist lodging in India
    const accommodation = roomsCount * durationDays * 1800;

    // 3. Realistic food cost estimation (~₹600 per person per day for 3 meals)
    const food = travelersCount * durationDays * 600;

    // 4. Transportation estimation based on transport mode, local itinerary transit km,
    // and verified intercity distance between starting location and destination
    const totalKm = days.reduce((acc, d) => acc + (d.travelDistanceKm || 15), 0);

    const startMeta = startingLocationRecord || (startingLocation && startingLocation.trim().length > 0
      ? findDestination(startingLocation.trim())
      : undefined);
    const destMeta = findDestination(destination);

    let intercityKm = 0;
    if (startMeta && startMeta.coordinates && destMeta && destMeta.coordinates) {
      const R = 6371;
      const dLat = (destMeta.coordinates.lat - startMeta.coordinates.lat) * (Math.PI / 180);
      const dLon = (destMeta.coordinates.lng - startMeta.coordinates.lng) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(startMeta.coordinates.lat * (Math.PI / 180)) *
          Math.cos(destMeta.coordinates.lat * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      intercityKm = Math.round(R * c);
    }

    const roundTripIntercityKm = intercityKm * 2;
    let transportation = 0;

    switch (transportPreference) {
      case 'Flight':
        transportation = (4500 * travelersCount) + Math.round(totalKm * 14); // Flights + local cabs
        break;
      case 'Train':
        if (roundTripIntercityKm > 0) {
          transportation = (Math.max(600, Math.round(roundTripIntercityKm * 1.2)) * travelersCount) + Math.round(totalKm * 10);
        } else {
          transportation = (800 * travelersCount) + Math.round(totalKm * 10);
        }
        break;
      case 'Public Bus / Transit':
        if (roundTripIntercityKm > 0) {
          transportation = (Math.max(350, Math.round(roundTripIntercityKm * 0.9)) * travelersCount) + Math.round(totalKm * 4);
        } else {
          transportation = (400 * travelersCount) + Math.round(totalKm * 4);
        }
        break;
      case 'Personal Car / Rental':
      default:
        if (roundTripIntercityKm > 0) {
          transportation = Math.round(roundTripIntercityKm * 8.5) + Math.round(totalKm * 14) + (durationDays * 400);
        } else {
          transportation = Math.round(totalKm * 14) + (durationDays * 500);
        }
        break;
    }

    // 5. Activities cost (sum of entry fees, minimum ₹200/person buffer)
    const activities = Math.max(totalActivitiesCost, travelersCount * 200);

    // 6. Shopping & Miscellaneous allowances
    const shopping = Math.round(Math.min(targetBudget * 0.06, travelersCount * 1200));
    const other = Math.round(Math.min(targetBudget * 0.04, travelersCount * 600));

    // 7. Total estimated cost
    const totalEstimated = accommodation + food + transportation + activities + shopping + other;
    const isWithinBudget = totalEstimated <= targetBudget;
    const remainingBudget = isWithinBudget ? targetBudget - totalEstimated : 0;
    const dailyAverage = Math.round(totalEstimated / (durationDays * travelersCount));

    // 8. Actionable destination-specific savings tips
    const destName = destination.trim();
    const savingsTips: string[] = [];

    if (startMeta && intercityKm > 0) {
      savingsTips.push(
        `Round-trip transit between ${startMeta.name} and ${destMeta.name} (~${roundTripIntercityKm} km total): Booking advance reservations via ${transportPreference} optimizes transportation expenses.`
      );
    }

    if (!isWithinBudget) {
      const shortfall = totalEstimated - targetBudget;
      savingsTips.push(
        `Estimated expenses exceed budget by ₹${shortfall.toLocaleString('en-IN')}. Consider switching from ${transportPreference} to Public Transit to save ~₹${Math.round(transportation * 0.4).toLocaleString('en-IN')}.`
      );
      savingsTips.push(
        `Opt for certified guesthouses or homestays in ${destName} to save up to 45% on accommodation.`
      );
    } else {
      savingsTips.push(
        `Your budget comfortably covers the estimated trip expenses with ₹${remainingBudget.toLocaleString('en-IN')} remaining for personal leisure.`
      );
    }

    savingsTips.push(
      `Sample regional street specialties at local bazaars in ${destName} rather than upscale hotel restaurants for authentic flavors and lower cost.`
    );
    savingsTips.push(
      `Book monument entry tickets online in advance to avoid on-spot queue surcharges in ${destName}.`
    );

    return {
      accommodationInr: accommodation,
      foodInr: food,
      transportationInr: transportation,
      activitiesInr: activities,
      shoppingInr: shopping,
      otherInr: other,
      totalEstimatedInr: totalEstimated,
      totalBudgetInr: targetBudget,
      remainingBudgetInr: remainingBudget,
      dailyAveragePerPersonInr: dailyAverage,
      isWithinBudget,
      savingsTips
    };
  }
}

export const budgetAgent = new BudgetAgent();
