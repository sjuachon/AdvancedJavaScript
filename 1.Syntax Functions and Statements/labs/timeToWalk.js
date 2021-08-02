function main(steps, meters, speed) {
    let totalStepsToUniv = steps * meters; // total steps in meters to school
    let speedMetersSec = speed / 3.6; // total speed has to be in metersPerSec 
    let restTime = Math.round((totalStepsToUniv - 500) / 60); // 1 minute or 60 second can be added as it goes on    
    let time = Math.round((totalStepsToUniv / speedMetersSec) % 60); // Total Travel time is in seconds    
    console.log(`${0}0:${restTime}:${time}`);
}
main(4000,.60,5);