const down = [10,9,8,7,6,5,4,3,2,1];
function countDown(down) {
let countdown = 10;
while (countdown >= 0) {
console.log(countdown--);
}
return down;
}
countDown(down);
