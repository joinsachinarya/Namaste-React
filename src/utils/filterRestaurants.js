export function filterRestaurants(text, restaurants) {
    const filteredRestaurants = restaurants.filter((item) => item?.info?.name?.toLowerCase().includes(text.toLowerCase()));
    return filteredRestaurants;
}