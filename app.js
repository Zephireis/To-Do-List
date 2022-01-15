

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js") //getting a function in a seperate file so you can use it in the main file (app.js)
// console.log(date());
const app = express();

const items = []; //everytime we get a post request it will append to this arrary with .push method
const workItems = [];

// stadnard javasscript methods like .getday
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //serving static files in the public folder

app.set("view engine", "ejs"); // to use ejs you have to create a views folder


app.get("/", function(req, res){
  const day = date.getDate(); //day is now = to the return of the function getDate in the date.js file.
  console.log(day)
  res.render("list", {listTitle: day, newListItems: items});
});



app.post("/", function(req, res){ //scope
  const item = req.body.newItem;
  console.log(req.body)
  if (req.body.list === "Work") {
    workItems.push(item)
  } else
  items.push(item); //item is being pushing into items array
  res.redirect("/");
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req, res){
  console.log(body)
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/")
})

app.get("/about", function(req, res){
  res.render("about");
});


app.listen(3000, function(){
  console.log("server started on port 3000");
});

// switch (currentDay) { // if more than 5 if else statments use switch, less than 5 use if and else.
//   case 0://snday
//     day = "Sunday"
//     break;
//   case 1://mday
//     day = "Monday"
//     break;
//   case 2://tday
//     day = "Tuesday"
//     break;
//   case 3://wday
//     day = "Wednesday"
//     break;
//   case 4://tday
//     day = "Thursday"
//     break;
//   case 5://fday
//     day = "Friday"
//     break;
//   case 8://sday
//     day = "Saturday"
//     break;
//   default:
//   console.log("Error: current day is equal to : " + currentDay);
// }
// console.log(day)
