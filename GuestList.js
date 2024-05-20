var Gust_List = ["Muskan", "Aria", "Mel"];
//for(let i=0;  i<Gust_List.length; i++){
//console.log("Dear Miss." +Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");   
//}
var absentGuest = "Muskan";
var newGuest = "Gurya";
Gust_List[0] = newGuest;
for (var i = 0; i < Gust_List.length; i++) {
    console.log("Dear Miss." + Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");
}
console.log("Miss. ".concat(absentGuest, " is not coming to the party. "));
console.log("Good News! We find Big Table so we are inviting 3 more guests.");
Gust_List.unshift("Eman Fatima");
Gust_List.splice(2, 0, "Saima");
Gust_List.push("Ramsha");
for (var i = 0; i < Gust_List.length; i++) {
    console.log("Dear Miss." + Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!\n\n");
}
