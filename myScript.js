
var myArray=["Food","About","Contacts"];
// document.getElementById("menu").innerHTML =myArray;
// displayList = document.getElementById("menu"); // the unordered list
//     for (var i = 0; i < myArray.length; i++ ) {
//         var newLI = document.createElement("li");          
//         newContent = document.createTextNode(myArray[i]); 
//         newLI.appendChild(newContent);
//         displayList.appendChild(newLI);
//     }
var imgArray=["img/sandwich.jpg","img/steak (1).jpg","img/cherries.jpg","img/wine.jpg","img/popsicle.jpg","img/salmon.jpg","img/sandwich.jpg","img/croissant.jpg"];
var headArray=["The Perfect Sandwich, A Real NYC Classic","Let Me Tell You About This Steak","Cherries, interrupted","Once Again, Robust Wine and Vegetable Pasta","All I Need Is a Popsicle","Salmon For Your Skin","The Perfect Sandwich, A Real Classic","Le French"];
var descrip=["THis is the best sandwich you would ever eat in you life.Just try and get mesmerized.","THis is the best sandwich you would ever eat in you life.Just try and get mesmerized.","Lorem ipsum text praesent tincidunt ipsum lipsum.","Lorem ipsum text praesent tincidunt ipsum lipsum.","Lorem ipsum text praesent tincidunt ipsum lipsum.","Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.","Lorem ipsum text praesent tincidunt ipsum lipsum.","Lorem ipsum text praesent tincidunt ipsum lipsum."];
displayFlexy = document.getElementById("row1");
 for(var j=0; j<imgArray.length;j++){
   var div= document.createElement('div');
   div.className="it";
   var newImag=new Image();
   newImag.className="food-img";
   newImag.src=imgArray[j];
   var x = document.createElement("H3");
   newHeading=document.createTextNode(headArray[j]);
   newDesc=document.createTextNode(descrip[j]);
   newHeading.className="h3";
   div.appendChild(newImag);
   x.appendChild(newHeading);
   div.appendChild(x);
   div.appendChild(newDesc);
   displayFlexy.appendChild(div);
 }

displayFootTags = document.getElementById("row2");
var tags=["Travel","New York","Dinner","Salmon","France","Drinks","Ideas","Flavor","Chicken","Dressing","Fish"];
   for(var k=0; k<tags.length; k++){
    var newTag=document.createElement("P");
    newTag.className="item";
    newText=document.createTextNode(tags[k]);
    newTag.appendChild(newText);
    displayFootTags.appendChild(newTag);
   }


   window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const closeMenuBtn = document.querySelector('.close-menu');
  
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  
    closeMenuBtn.addEventListener('click', () => {
      menu.classList.remove('active');
      document.getElementById('toggle').checked = false;
    });
  });
  