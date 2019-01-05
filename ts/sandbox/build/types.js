var myBool = false;
myBool = true;
console.log('myBool: ', myBool);
var myTuple;
myTuple = ['a', 1];
console.log('myTuple: ', myTuple);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log('myColor: ', myColor);
var list = [1, true, "free"];
console.log('list: ', list);
