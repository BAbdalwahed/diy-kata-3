const reachDestination = (distance, speed) => {
    const time = distance/speed;
   const arrival = Math.round(time*2)/2;
   return `I should be there in ${arrival} hours.`;
};
    module.exports = reachDestination;