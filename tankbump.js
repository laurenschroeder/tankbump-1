///////VEHICLE SELECTION

  let vehWidth = 0;
  let vehHeight = 0;
  let vehWeight = 0;
  let vehSelected = 0; //hummer'; //type in vehicleObj id name to test
  let routeNav = true;
  let useThisRoute = false;
  let pdeRequestKeyword = "";
  let imgToDisplay = '';

var vehiclesObj = {
  type: [
    {
      id: "hummer",
      height: 12,
      width: 12,
      weight: 10000
    },
    {
      id: "tank",
      height: 100,
      width: 100,
      weight: 2000
    },

    {
    id: "atv",
    height: 5,
    width: 5,
    weight: 500
    },

    {
    id: "missile",
    height: 300,
    width: 300,
    weight: 20000
    }

    ]
};
function assignVehSelected() {
//variables initiated outside the function - see top of code
  //var vehSelected = 'missile';
  ///FIND CODE TO ASSIGN SELECTED PROCESS FORM AND ASSIGN VALUE SELECTED AS VEH TYPE
  ///vehSelected = getDocumentById() // reassign variable in function above from form submit
  if (vehSelected === "hummer") {
  vehWidth = vehiclesObj.type[0].width;
  vehHeight = vehiclesObj.type[0].height;
  vehWeight = vehiclesObj.type[0].weight;
  //pdeRequestKeyword = "";
  imgToDisplay = 'A.png';
  changeImage();
  }
   if (vehSelected === "tank") {
  vehWidth = vehiclesObj.type[1].width;
  vehHeight = vehiclesObj.type[1].height;
  vehWeight = vehiclesObj.type[1].weight;
  //pdeRequestKeyword = "";
  imgToDisplay = 'B.png';
  changeImage();
  }
   if (vehSelected === "atv") {
  vehWidth = vehiclesObj.type[2].width;
  vehHeight = vehiclesObj.type[2].height;
  vehWeight = vehiclesObj.type[2].weight;
  //pdeRequestKeyword = "";
  imgToDisplay = 'C.png';
  changeImage();
  }
   if (vehSelected === "missile") {
  vehWidth = vehiclesObj.type[3].width;
  vehHeight = vehiclesObj.type[3].height;
  vehWeight = vehiclesObj.type[3].weight;
  //pdeRequestKeyword = "";
  imgToDisplay = '';
  }
  //var orders = thisObject.orders.length;
  //for (var i = 0; i < thisObject.type.length; i++) {
  //total += thisObject.orders[i].amount;
//}
  //return `John bought ${orders} order(s) for ${total}`;
  console.log(vehWidth + " ' " + vehHeight + " ' " + vehWeight);

}

//assignVehSelected();

///// ATTENTION
/////  A. here assign corresponding HTTP request
////   B. or assign pic variables based on vehicle (hard coded)
////

////// ROUTE INFO

var routeObj = {
  type: [
    {
      id: "A",
      heightRest: 12,
      widthRest: 12,
      weightRest: 10000
    },
    {
      id: "B",
      heightRest: 100,
      widthRest: 100,
      weightRest: 2000
    },

    {
    id: "C",
    heightRest: 5,
    widthRest: 5,
    weightRest: 500
    }

    ]
};

//this function will loop thru routes to compare
function loopMaxMinRouteRestrict() {
  console.log(routeObj.type.length);
  for (var i = 0; i< routeObj.type.length; i++) {
    if (vehHeight > routeObj.type[i].heightRest) {
      routeNav = false;
    }
    if (vehWidth > routeObj.type[i].heightRest) {
      routeNav = false;
    }
    if (vehWeight > routeObj.type[i].heightRest) {
      routeNav = false;
    } else {
      routeNav = true;
      //DISPLAY IMAGE
      ///NEEDS ATTENTIION - more code to show just one image
      //display image of index[0] if true, else index[1], else index[2]
    }
  }
}

/// 3 functions to check each route
function checkRouteA() {
  console.log(routeObj.type.length);
    if (vehHeight > routeObj.type[0].heightRest) {
      routeNav = false;
      checkRouteB();
    }
    if (vehWidth > routeObj.type[0].heightRest) {
      routeNav = false;
      checkRouteB();
    }
    if (vehWeight > routeObj.type[0].heightRest) {
      routeNav = false;
      checkRouteB();
    } else {
      routeNav = true;
      useThisRoute = true; //use this route = image displayed
      //A - i.e. Insert HTTP REQUEST - HUMMER 'truck' or 'public trans'
      //B - document.getDocumentById('MAP PIC TBD') = "route A map"; hard code image on file
      console.log('Route A wins');
    }
  }

function checkRouteB() {
        if (vehHeight > routeObj.type[1].heightRest) {
        routeNav = false;
        checkRouteC();
        }
        if (vehWidth > routeObj.type[1].heightRest) {
        routeNav = false;
        checkRouteC();
         }
        if (vehWeight > routeObj.type[1].heightRest) {
        routeNav = false;
        checkRouteC();
        } else {
        routeNav = true;
        useThisRoute = true; //use this route = image displayed
        //A - Insert HTTP REQUEST - TANK' or 'width' or 'I-35'
        //B - document.getDocumentById('MAP PIC TBD') = "route B map"; hard code image on file
        console.log('Route B wins');
        }
      }

function checkRouteC(){
        if (vehHeight > routeObj.type[2].heightRest) {
        routeNav = false;
        console.log("no route available");
          }
        if (vehWidth > routeObj.type[2].heightRest) {
        routeNav = false;
        console.log("no route available");
           }
        if (vehWeight > routeObj.type[2].heightRest) {
          routeNav = false;
          console.log("no route available");
        } else {
          routeNav = true;
          useThisRoute = true; //use this route = image displayed
          //A - Insert HTTP REQUEST - ATV 'bike' or 'car'
           //B - document.getDocumentById('MAP PIC TBD') = "route B map"; hard code image on file
           console.log('Route C wins');
    }
  }

  //checkRouteA();


///compares route restrictions verse vehicle hard coded
/*
function compareEachMaxMinRouteRestrict() {
  console.log(routeObj.type.length);
    if (vehHeight > routeObj.type[0].heightRest) {
      routeNav = false;
    }
    if (vehWidth > routeObj.type[0].heightRest) {
      routeNav = false;
    }
    if (vehWeight > routeObj.type[0].heightRest) {
      routeNav = false;
    } else {
      routeNav = true;
      useThisRoute = true; //use this route = image displayed
      //A - i.e. Insert HTTP REQUEST - HUMMER 'truck' or 'public trans'
      //B - document.getDocumentById('MAP PIC TBD') = "route A map"; hard code image on file
      console.log('Route A wins');}
        if (!useThisRoute === true) {
        if (vehHeight > routeObj.type[1].heightRest) {
        routeNav = false;
        }
        if (vehWidth > routeObj.type[1].heightRest) {
        routeNav = false;
         }
        if (vehWeight > routeObj.type[1].heightRest) {
        routeNav = false;
        } else {
        routeNav = true;
        useThisRoute = true; //use this route = image displayed
        //A - Insert HTTP REQUEST - TANK 'WIDE LOAD' or 'wide lanes' or 'I-35'
        //B - document.getDocumentById('MAP PIC TBD') = "route B map"; hard code image on file
        console.log('Route B wins');}
          if (!useThisRoute === true) {
          if (vehHeight > routeObj.type[2].heightRest) {
          routeNav = false;
          }
          if (vehWidth > routeObj.type[2].heightRest) {
          routeNav = false;
           }
          if (vehWeight > routeObj.type[2].heightRest) {
          routeNav = false;
          } else {
          routeNav = true;
          useThisRoute = true; //use this route = image displayed
          //A - Insert HTTP REQUEST - TANK 'WIDE LOAD' or 'wide lanes' or 'I-35'
           //B - document.getDocumentById('MAP PIC TBD') = "route B map"; hard code image on file
           console.log('Route C wins');
    }
  }
    }
  }

compareEachMaxMinRouteRestrict();

///compares route restrictions using PDE VALUES!!! */