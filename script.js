let foodData = null;
let i;
let dropDown = document.getElementById('menu');
let option;


$(document).ready(function() {
	alert('Wait for next alert ...Plzz DO NOT SELECT DROP-DOWN ITEM UNTIL NEXT ALERT');
   $.getJSON('https://davids-restaurant.herokuapp.com/menu_items.json', function(jd,success) {
      foodData = jd.menu_items;
      createList();
	  alert('NOW U CAN CHOOSE DROP-DOWN ITEM');
   });
});

function createList(e){
   for(i=0; i<foodData.length; i++){
            option = document.createElement('option');
            option.text = foodData[i].name;
            option.value = i;
            dropDown.appendChild(potion);
         }
}


$('#menu').change(function(e){

   var selected = $(this).children("option:selected").val();
   console.log(selected);
   
   
   
   document.querySelector(".output").innerHTML=`<div class="panel panel-default" 
												style="font-family:Times New Roman;
												font-size:20px;
												color:white;
												width:500px;
												text-align:left;
												background-color:black;
												display:block;
												margin-top:40px;
												border:5px solid pink;
												box-shadow: 
												0 0 0 10px hsl(0, 0%, 50%),
												0 0 0 15px hsl(0, 0%, 60%),
												0 0 0 20px hsl(0, 0%, 70%),
												0 0 0 25px hsl(0, 0%, 80%),
												0 0 0 30px hsl(0, 0%, 90%);">
      <div class="panel-heading">
         <h3 class="panel-title">Selected Food:</h3>
      </div>
      <div class="panel-body">
         <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col-md-8">
               <ul class="list-group" style="list-style-type:none;color:wheat;">
                  <li><b>Id</b>: `+"  "+foodData[selected].id+`</li><br>
                  <li><b>Short name</b>: `+"  "+foodData[selected].short_name+`</li><br>
                  <li><b>Name</b>: `+"  "+foodData[selected].name+`</li><br>
                  <li><b>Description</b>: `+"  "+foodData[selected].description+`</li><br>
                  <li><b>Price small</b>: `+"  "+foodData[selected].price_small+`</li><br>
                  <li><b>Price large</b>: `+"  "+foodData[selected].price_large+`</li><br>
                  <li><b>Small Portion Name</b>: `+"  "+foodData[selected].small_portion_name+`</li><br>
                  <li><b>Large Portion Name</b>:`+"  "+foodData[selected].large_portion_name+` </li><br>
               </ul>
               
            </div>
            <div class="col-md-2">
            </div>
            </div>
            </div>
      </div>`;
         //console.log(foodData[selected].name);
         //console.log(selected);
      });
   
