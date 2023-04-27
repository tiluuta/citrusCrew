$(document).ready(function() { //why wont this work!!!!!!!??????????
    $("#addtocart").on("click", function(){
        alert("this works")
        var sizeselect = $("#ring-size").val();
        if ( sizeselect == "default-size" ){
            alert("Please select a size.");
        }
        else {
            alert("Your item has been sccessfully added to your cart!");
        }
    });
  });



function updateProduct() {
    // Get selected options
    var color = document.getElementById("ring-color").value;
    var material = document.getElementById("ring-material").value;
    var size = document.getElementById("ring-size").value;
  
    // Update image and price based on selected options
    var image = "White-Resin.PNG";
    var price = "$20";
    if (color === "Light" && material === "Resin") {
      image = "White-Resin.PNG";
      price = "$20";
    } else if (color === "Dark" && material === "Resin") {
      image = "Black-Resin.PNG";
      price = "$25";
    } else if (color === "Light" && material === "Titanium") {
      image = "White-Metal.PNG";
      price = "$70";
    }
 else if (color === "Dark" && material === "Titanium") {
    image = "Black-Metal.PNG";
    price = "$75";
  }
    document.getElementById("ring-image").src = image;
    document.getElementById("ring-price").innerHTML = price;
  }



  