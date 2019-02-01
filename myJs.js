function submit(){
	var requestUrl;
	var ip;
	var table;
	var method;
	if (document.getElementsByName("ip")[0].checked){
		ip = "http://10.0.0.50:8080/AddressBookREST/";
	}else if(document.getElementsByName("ip")[1].checked){
		ip = "http://www.jackstockley.ddns.net:8080/AddressBookREST/";
	}else{
		alert("Please select an IP!");
	}
	
	if(document.getElementsByName("table")[0].checked){
		table = "address/";
	}else if(document.getElementsByName("table")[1].checked){
		table = "person/";
	}else if(document.getElementsByName("table")[2].checked){
		table = "occupation/";
	}else{
		alert("Please select a table!");
	}
	//console.log(table);
	if(document.getElementsByName("method")[0].checked){
		method = "getAll";
	}else if(document.getElementsByName("method")[1].checked){
		method = "getId";
	}else if(document.getElementsByName("method")[2].checked){
		method = "put";
	}else if(document.getElementsByName("method")[3].checked){
		method = "delete";
	}else{
		alert("Please select a method!");
	}
	
	//console.log(method);
	requestUrl = ip + table;
	//console.log(requestUrl);
	if(method=="getAll"){
		//Add code for get request, insert and delete
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET",requestUrl,false);
		xmlHttp.send();
		var obj = JSON.parse(xmlHttp.responseText);
		alert(xmlHttp.responseText);
	}else if(method=="getId"){
		var getId = prompt("Please enter the ID for the requested data", 0);
		requestUrl += getId;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET",requestUrl,false);
		xmlHttp.send();
		var obj = JSON.parse(xmlHttp.responseText);
		alert(xmlHttp.responseText);
	}else if(method=="put"){
		alert("This feature isn't implemented yet! Sorry.");
	}else if(method=="delete"){
		alert("This feature isn`t implemented yet! Sorry.");
		/*(var deleteId = prompt("Please enter the ID for the data you want to delete", 0);
		requestUrl += deleteId;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("DELETE",requestUrl,true);
		xmlHttp.send();
		var obj = JSON.parse(xmlHttp.responseText);
		alert(xmlHttp.responseText);*/
	}else{
		console.log("error");
		console.log(method);
	}
	//console.log(id);
}


function createID(){
	try{
		removeAll();
	}catch (err){
		
	}finally{
		var idHeading = document.createElement("H1");
		var idText = document.createTextNode("Type ID");
		idHeading.setAttribute("id", "idHeading");
		idHeading.appendChild(idText);
		var input = document.createElement("INPUT");
		input.setAttribute("id", "inputText");
		document.getElementById("textFieldDiv").appendChild(idHeading);
		document.getElementById("textFieldDiv").appendChild(input);
	}
}

function removeID(){
	var idHeading = document.getElementById("idHeading");
	var idText = document.getElementById("inputText");
	document.body.removeChild(idHeading);
	document.body.removeChild(idText);
}

function createInsert(){
	try{
		removeAll();
	}catch (err){
		
	}finally{
		var insertHeading = document.createElement("H1");
		var insertText = document.createTextNode("Type the data in order (if no data leave blank)");
		insertHeading.setAttribute("id", "insertHeading");
		var first = document.createElement("INPUT");
		first.setAttribute("id", "first");
		var second = document.createElement("INPUT");
		second.setAttribute("id", "second");
		var third = document.createElement("INPUT");
		third.setAttribute("id", "third");
		var forth = document.createElement("INPUT");
		forth.setAttribute("id", "forth");
		var fifth = document.createElement("INPUT");
		fifth.setAttribute("id", "fifth");
		insertHeading.appendChild(insertText);
		document.body.appendChild(insertHeading);
		document.body.appendChild(first);
		document.body.appendChild(second);
		document.body.appendChild(third);
		document.body.appendChild(forth);
		document.body.appendChild(fifth);
	}
}

function removeInsert(){
	var insertHeading = document.getElementById("insertHeading");
	var first = document.getElementById("first");
	var second = document.getElementById("second");
	var third = document.getElementById("third");
	var forth = document.getElementById("forth");
	var fifth = document.getElementById("fifth");
	document.body.removeChild(insertHeading);
	document.body.removeChild(first);
	document.body.removeChild(second);
	document.body.removeChild(third);
	document.body.removeChild(forth);
	document.body.removeChild(fifth);
}

function removeAll(){
	try{
		removeID();
	}catch (err){
		
	}finally{
		try{
			removeInsert();
		}catch (err){
		}
	}
}
