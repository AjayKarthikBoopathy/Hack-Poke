//Pokemon

var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
//to add multiple classes to the same element with DOM
row.classList.add("row","m-3");
container.append(row);

document.body.append(container);

var res1;
var i;

async function getdata(){
  var res=await fetch("https://pokeapi.co/api/v2/pokemon");
  res1= await res.json();
  //console.log(res1);
  //console.log(res1.results[0].name);
  for( i=0;i<res1.results.length;i++){
    // console.log(res1.results[i]);
      try {
          //console.log(res1.results[i].name);

          row.innerHTML+=
          `<div class="row col-lg-4 col-md-6 col-sm-12">
            <div class="card border-secondary mb-3" style="width: 20rem; height: 15rem; margin-top:20px; margin-left:45px">
              <h5 class="card card-header card-title" style="background-color: lightblue;">${res1.results[i].name}</h5>
                 
              <div class="card-body text-primary">
                

                
                <div class="characs">
                  ${data}
                </div>
              </div>
            </div>
          </div>`;
          
          gotoPage(1);

          getchar(res1.results[i].name);
          }       
      catch (error) {
      console.log(error);
      }
  }


  

          
  

}

getdata();


var data;
var divv;
var j;
//cross
async function output(values){
          
  for(var j=0;j<result2.weight.length;j++){
    
    // console.log(result2.weight[j]);
    try{
        var divv=document.getElementsByClassName("charac");
      
        divv.innerHTML=
        `<p class="card-text"> Weig: ${values}</p>`;
        data=divv;   
      
        }

    catch (err) {
    console.log(err);
    }
  }
}


var result1;
var result2;
var weight;
var we;

async function getchar(poke){
  try{
  var result=await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  result1= await result.json();
  //console.log(result1);

  result2=result1;


  // const maap=result2.types.map((item) => {console.log(item.types.weight);});

  for(var j=0;j<result2.moves[0].move.length;j++){   //not working
     var we=result2.moves[0].move[j];
     console.log(we);
  }
  
  
  weight=result2.weight;
  console.log(result2.abilities[0].ability.name);
  console.log(result2.moves[0].move.name);
  console.log(result2.weight);

  output(result2.weight);
  }
  catch(errr) {
    console.log(errr);
  }

  
}
// getchar();

//cross
// try{
//   var divv=document.getElementsByClassName("charac");

//   divv.innerHTML+=
//   `<p class="card-text"> Weig: ${values}</p>`;
//   data=divv;   //data=divv.HTML;

//   }

//Page number
var data;
var currentPage=1;
var countsPerPage=5;

function gotoPage(pageNumber){
    currentPage=pageNumber;
    let end=(currentPage*5);
    let start=end - 5;

    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}

function previous(){
    currentPage--;
    let end=(currentPage*5);
    let start=end - 5;

    let tabledata="";
    for(let i=start;i<end ;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
    }
    document.getElementById("table-body").innerHTML=tabledata;
}


function next(){
    currentPage++;
    let end=(currentPage*5);
    let start=end - 5;
    
    
    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}



function gotoPage(pageNumber){
    currentPage=pageNumber;
    let end=(currentPage*5);
    let start=end - 5;

    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}

document.querySelector("#prevButton").addEventListener("click", previous, false);
document.querySelector("#nextButton").addEventListener("click", next, false);

document.querySelector("#pg1").addEventListener("click", () => gotoPage(1), false);
document.querySelector("#pg2").addEventListener("click", () => gotoPage(2), false);
document.querySelector("#pg3").addEventListener("click", () => gotoPage(3), false);


//Characters

var main=document.getElementsByClassName("main");

var form=document.createElement("form");
form.setAttribute("id","myform");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","eg-bulbasaur");
input.setAttribute("id","endpoint"); //here
input.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("class","btn btn-info");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
main.append(form);

//code here create the div with id confirmed, recovered, deaths here
let nam=document.createElement("div");
nam.setAttribute("id","na");
main.append(nam); 

let abi=document.createElement("div");
abi.setAttribute("id","ab");
main.append(abi); 

let wei=document.createElement("div");
wei.setAttribute("id","we");
main.append(wei); 



//here

var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var endpoint=document.getElementById("endpoint").value; //(Type1:Extracting) taking (value) to variable and console
console.log(endpoint);
var url=`https://pokeapi.co/api/v2/pokemon/${endpoint}`;

pokemon(url);
});

async function pokemon(url){
let response=await fetch(url);
console.log(response);
let data=await response.json();
console.log(data);
console.log(data.name);
console.log(data.abilities[0].ability.name);
console.log(data.weight);

//for(var i=0;i<51;i++){
//   console.log(results[0].name);
//}



//here
let na=document.getElementById("na");
let ab=document.getElementById("ab");
let we=document.getElementById("we");


na.innerHTML=" ";  //for refreshing the values
na.append(`Name : ${data.name}`); //(Type2:Printing) giving result to variable and append

ab.innerHTML=" ";
ab.append(`Ability : ${data.abilities[0].ability.name}`);

we.innerHTML=" ";
we.append(`Weight : ${data.weight}`);
//

}