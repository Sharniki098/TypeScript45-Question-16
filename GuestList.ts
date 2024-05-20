

let Gust_List :string[] =["Muskan","Aria","Mel"];

//for(let i=0;  i<Gust_List.length; i++){
 //console.log("Dear Miss." +Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");   
//}

let absentGuest :string ="Muskan";

let newGuest : string= "Gurya";

Gust_List [0]=newGuest ;

for(let i=0;  i<Gust_List.length; i++){
    console.log("Dear Miss." +Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");   
   }
   
   console.log(`Miss. ${absentGuest} is not coming to the party. ` ) ;
   
   console.log("Good News! We find Big Table so we are inviting 3 more guests.");
   Gust_List.unshift("Eman Fatima");
   Gust_List.splice(2, 0, "Saima");
   Gust_List.push("Ramsha");
   
for(let i=0;  i<Gust_List.length; i++){

   console.log("Dear Miss." +Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!\n\n");   
  }
