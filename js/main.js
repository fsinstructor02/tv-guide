/*Js Jq functions etc*/
jQuery(function(){ // JQuery function call to run code

var objData = [{
    "title": "Walking Dead",
    "rating": "3",
    "description": "bah bah bah bah",
    "rated": "R",
    "channel": "AMC",
    "showtime": "10pm",
    "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "Walking Dead",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
}
]

var showData;

for (showData = 0; showData < objData.length; showData++) {
  var allData = objData[showData];

  var title = objData[showData]['title'];
  var rating = objData[showData]['rating'];
  var description = objData[showData]['description'];
  var rated = objData[showData]['rated'];
  var channel = objData[showData]['channel'];
  var showtime = objData[showData]['showtime'];
  var image = objData[showData]['image'];


  console.log(title);
  console.log(rating);
  console.log(description);
  console.log(rated);
  console.log(channel);
  console.log(showtime);
  console.log(image);

  	
$( "body" ).append( "<div class='channelBlock'><div class='title'>"+ title +"</div><div class='rating'>" + rating +"</div><div class='description'>" + description +"</div><div class='channel'>" + channel +"</div><div class='rated'>" + rated +"</div></div>" );

  
}






});(jQuery); 


