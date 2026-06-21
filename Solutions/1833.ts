function maxIceCream(costs: number[], coins: number): number {
  if (costs.length === 0) return 0;

  // Step 1: Find the maximum cost to determine the size of our frequency array
  let maxCost = costs[0];
  for (let i = 1; i < costs.length; i++) {
    if (costs[i] > maxCost) {
      maxCost = costs[i];
    }
  }

  // Step 2: Create a frequency array populated with zeros
  // index represents the cost, and value represents the count of bars at that cost
  const freq: number[] = new Array(maxCost + 1).fill(0);
  for (const cost of costs) {
    freq[cost]++;
  }

  let iceCreamCount = 0;

  // Step 3: Iterate through prices from cheapest ($1) to most expensive
  for (let cost = 1; cost <= maxCost; cost++) {
    if (freq[cost] === 0) continue;

    // If we can't afford even one ice cream bar at this price, stop early
    if (coins < cost) {
      break;
    }

    // Determine how many we want to buy vs how many we can actually afford
    const affordableAmount = Math.floor(coins / cost);
    const countToBuy = Math.min(freq[cost], affordableAmount);

    // Update total count and remaining coins
    iceCreamCount += countToBuy;
    coins -= countToBuy * cost;
  }

  return iceCreamCount;
}
