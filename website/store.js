var items=[];
var colors=[];
var materials=[];
var sizes=[];
var prices=[];
let i;
if(localStorage.getItem("lastindex") != null){
  i = localStorage.getItem("lastindex");
}
else
  i=0;

function updateProduct() {
    // Get selected options
    var color = document.getElementById("ring-color").value;
    var material = document.getElementById("ring-material").value;
    var size = document.getElementById("ring-size").value;
  
    // Update image and price based on selected options
    let image = "White-Resin.PNG";
    let price = "$20";

    if (color === "Light") {
      image = "White-Resin.PNG";
      price = "$20";
    } if (color === "Dark" && material != "Titanium") {
      image = "Black-Resin.PNG";
      price = "$25";
    } if (color === "Light" && material === "Titanium") {
      image = "White-Metal.PNG";
      price = "$70";
    }
    if (color === "Dark" && material === "Titanium") {
      image = "Black-Metal.PNG";
      price = "$75";
    }
    document.getElementById("ring-image").src = image;
    document.getElementById("ring-price").innerHTML = price;
  }

  function storeProduct(color, material, size, price){
    if(localStorage.getItem("lastindex") != null){
      i = localStorage.getItem("lastindex");
    }
    else
      i=0;

    console.log("i:" + i);
    console.log("lastindex:" + localStorage.getItem("lastindex"));
    items[i] = i;
    colors[i] = color;
    materials[i] = material;
    sizes[i] = size;
    prices[i] = price;
    console.log(items[i]);
    console.log(colors[i]);
    console.log(sizes[i]);

    localStorage.setItem("items[" + i + "]", items[i]);
    localStorage.setItem("colors[" + i + "]", colors[i]);
    localStorage.setItem("materials[" + i + "]", materials[i]);
    localStorage.setItem("sizes[" + i + "]", sizes[i]);
    localStorage.setItem("prices[" + i + "]", prices[i]);
    localStorage.setItem("lastindex", parseFloat(i) + 1);

    alert("Your item has been sccessfully added to your cart!");
    
  }
  


  