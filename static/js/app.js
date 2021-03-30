// Use D3 to create an event handler
// d3.selectAll("body").on("change", updatePage);

//in javascript you can pass functions as a variable (see line 2: updatePage)


//this will display the id and the value of the drop down menu. 
function updatePage() {
  // Use d3 to select the dropdown menu
  var dropdownMenu = d3.selectAll("#selDataset");
  // Use d3 to read in samples.json
  d3.json('samples.json').then((samples)=> {
  	//use forEach grab the names key 
  	samples['names'].forEach((name)=> {
  		//append (the name text to value name in the dropdown menu)
  		dropdownMenu.append('option').text(name).property('value', name);	
  	});
  });

}
///Can't run forEach below:
// function updatePage() {
//   // Use d3 to select the dropdown menu
//   var dropdownMenu = d3.selectAll("#selDataset");
//   // Use d3 to read in samples.json
//   d3.json('samples.json').then((samples)=> {
//   	//use forEach grab the names key 
//   	samples['samples'][0]['id'].forEach((id)=> {
//   		//append (the name text to value name in the dropdown menu)
//   		dropdownMenu.append('option').text(id).property('value', id);	
//   	});
//   });

// }

updatePage();


// use d3 to read in samples.json
 d3.json("samples.json").then((samples)=> {
	console.log(samples)
});



function buildPlot(otu_id) {
 d3.json("samples.json").then((data)=> {
 	//Grab values from json object to build the plot



 	var samples =data['samples'].filter(object=>object.id)[0];
 	var otu_top_ten=(samples.otu_ids.slice(0,10)).reverse();

	console.log(samples);
	console.log(otu_top);

});

// var data = [trace1];
}

