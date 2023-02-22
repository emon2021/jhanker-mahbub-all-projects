//feetToMile
function feetToMile(feet) {
    const ft = feet * 1.893939e-4;
    let mile = Math.round(ft) + " Miles (Approx)";
    return mile;
}
let x = feetToMile(50000);
console.log(x);

//woodCalculator
function woodCalculator(x=0,y=0,z=0) {
    let chair,table,khat;
    chair = 1 ;
    table = 3 ;
    khat = 5 ;
    let forTable = table*y;
    let forChair = chair * x;
    let forKhat = khat * z;
    let totalWood = forTable + forChair + forKhat;
    return totalWood + ' Cubic Foot(Approx)';
}
console.log(woodCalculator(3,3));


//brickCalculator
function brickCalculator(building,feet=0) {
    let FloorCount = building; // how many floor in this building.
    let floor_1 = 15; // 1 to 9 floor = 15 feet
    let floor_2 = 12; // 10 to 19 floor  = 12 feet;
    let floor_3 = 10; // 20 floor or more = 10 feet;
    if(feet == 0){
        if (FloorCount >= 1 && FloorCount <= 9) {
          var build = FloorCount * floor_1; // koto feet building
          var bricks = build * 1000; // bricks counting
          return bricks + " Bricks";
        } else if (FloorCount >= 10 && FloorCount <= 19) {
          var build = FloorCount * floor_2; // koto feet building
          var bricks = build * 1000; // bricks counting
          return bricks + " Bricks";
        } else if (FloorCount >= 20) {
          var build = FloorCount * floor_3; // koto feet building
          var bricks = build * 1000; // bricks counting
          return bricks + " Bricks";
        }
    }else{
        let customFeet = feet;
        var build = FloorCount * customFeet; // koto feet building
        var bricks = build * 1000; // bricks counting
        return bricks + " Bricks";
    }
}
let building = brickCalculator(6);
console.log(building);

