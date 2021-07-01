// // search engine ||  created by me *-*)
// all leciense are reserved to my website beemo
// my hate for google custome search engine has been gone so far 
// starting from that u need to publish your website
// and waiting until google index it 
// and if its a big website and having a lot of files 
// then u will need to wait maybe a decate 
// or two -:)
// ending of that u need to importa it manually 
// wich is suks if u have a shop website and a lots of items
// and u should to import it by hand one by one
// wich what i will do if i was a damn nerd man 
// so iam from here 
// from this simple place 
// i say....
// fk google custom search engine 
// and as a problem solver i solved this major problem
// by creating really simple search engine 
// and iam looking to make this vs google
// insted of waiting a decate or maybe 100 yr 
// theres supposed to be diffrent there 
// but that doesnt matter 
// //// real programing lang 
// var timeWasted = new Time();
// timeWasted.hours = 10;
// timeWasted.mins = 00;
// ! he is lying he spend maybe a whole week trying to figure out how to make this 
// but he is trying to look like a pro dev





// we define the movies dataBase wich in our case its a json file and all those data are going to be assigned to this variable
var moviesData ;






// quick note : you will need to run this file with server
// u can use vscode live server if you have vscode
// or download any server like xammp
// or u can just delete the the next code from line (66) to line (76)
// and replace it with this code after taking out the comments triggers


/* moviesData = `{
    "ALAA ALDEEN" : ["https://picsum.photos/0", "Alaa Aldeen", ""],
    "DEADPOOL 2" : ["https://picsum.photos/1", "Deadpool 2", ""],
    "DETECTIVE CONAN 1" : ["https://picsum.photos/2", "Detective Conan 1", ""],
    "MASTER" : ["https://picsum.photos/3", "Master", ""],
    "MONSTER HUNTER" : ["https://picsum.photos/4", "Monster Hunter", ""],
    "MR ROBOT" : ["https://picsum.photos/5", "Mr Robot", ""],
    "OUTSIDE THE WIRE" : ["https://picsum.photos/6", "Outside the Wire", ""],
    "PAPER LIVES" : ["https://picsum.photos/7", "Paper Lives", ""],
    "RUN" : ["https://picsum.photos/9", "Run", ""],
    "THE MITCHELLS VS. THE MACHINES" : ["https://picsum.photos/10", "The Mitchells vs. the Machines", ""]
}`;
moviesData = JSON.parse(moviesData); */




// we get our movies data
// from a json file 
// and we assign it to the variable we have been created (moviesData)
fetch('./JS/moviesData.json').then(
    (res) => {
        return res.json();
    }
    ).then(
        (d) => {
            moviesData = d;
});
// data its like this
// its an objects  and every key is the movie name
// and the value is an array 
// the index 0 is is the movie img url
// the index 1 is is the movie name and yes we need that
// the index 2 it is the url of the search result 
// wich what we will use to open the result page or the movie page when click on the result





// we are going to define our input 
// the search input
const input = document.querySelector('.searchinput');

// and the div that we will print the reults in it
const div = document.querySelector(".printres");





// we will create a an event listeners and that will fire when the user inputs some thing in the input
// and it calls a function with the paramter we use it to import the input value
// or to get the import value 
// and the function is called search()
input.addEventListener("input", e => search(e.target.value));



// the function has one paramter wich is the value of the input we had selected before with variable input
function search(value){



    // first we will define a varibale to get the result in this variable
    var toPrint = "";



    // and the sortResults is an array and we will use it to sort the results debends on the nearest matches to the result
    // let me explain it
    // the user typed "Harr"
    // and lets imagine that there is a two movies
    // Harry poter
    // and 
    // Run Harry
    // he suppose to show the first one cause its the nearest
    // but he will not going to do that 
    // cause he will sort the results depends on alphabetical sort
    // and using this array will 
    var sortResults = [];


    // we get the value and make it or converting it to string
    // just in case
    value = value.toString();


    // we make if statement to check if the value the user Entered is not nothing
    // bcz we dont want to keep the results the same
    // when its nothing ""
    // so i created a function that will just clear the div you selected
    // it called clearResz shortcut for clear results place
    // and of its nothing we will call thats function 
    if( value === "" || value === " "){
        // the first paramter is the div that we want to clear 
        clearResz(div);
    }

    // in another case wich it means if the user entered a name or some thing
    else{

        // he is going to make a loop in the movies data do u remeber him
        // the object variable we used and we gived him the movies data and every key is the name of the movie with capital letters
        for(let i in moviesData){

            // we are going to make a variable have a regular expression
            // this well allowed us to search without any care of case sensetive
            // and he will search globaly no whole word reqierd
            var valueRegexp = new RegExp(value, "gi");


            // and in here we have var called res 
            // is about forevery key found he will search in this key wich it is the name of the movie  
            // and if he found something matches between the user entered value and the key 
            // then he will give us the index of the name
            // or the matches word between them
            // and -1 means no found
            var res = i.search(valueRegexp);

            // and here if the he got a result and its bigger than or equal to 0(zero)
            // then he is going to push an array to sortResults variable 
            // well the index 0 has the number of the index if he found match using the variable res
            // and the index 1 has an object one key called name
            // this will help us when we sort the results debends on the on the nearest one to 0(zero)
            if(res >= 0){
                sortResults.push([res, {"name" : i}]);
            }
        }


        // here we will going to sort the array
        // and assigned it to sortResults var
        // if u asking why the index 1 has an object and this object has a key called name and the value is the name of the movie
        // while u can make the index 1 is the name of the movie
        // well that well effects a lot when we sort
        // bcz if the user wrote "de"
        // he is going to show him on ex 
        // Deadpool 2
        // Detective conana
        // the res var will be 0 for both of them 
        // or the index 0
        // we want him to sort them debends on the index only
        // bcz if the index is the same then he is goin to sort them debeds on the alphabetical 
        // well hey we dont do that in here
        sortResults = sortResults.sort();



        // and here goes the action
        // first we add an html element has an class to style it 
        // ul element uses for lists and so i 
        // we open the tag without close him bcz we still have our results
        toPrint += `<ul class="searchresz" style="">`;


        // and here is easy
        // a loop to get all the arrays elements
        for(let l in sortResults){

            // here is the best part
            // let me explain 
            // while our ul el(-shortcut-for-element-) 
            // is opened then we need to give him some others el-s
            // well first of all its a <a> tag this tag well get the attribute href = is equal to (wait a min)
            // we well get our array that we sorted it
            // and we will get the index 1 wich it is the name othe movie
            // so we will say sortResults[1]['name']
            // then we will need to get the moviesData[ sortResults[1]['name']] 
            // and last but not least
            // the index of the movie data cuz we have the url of the img 
            // and the name
            // as i explained above
            // take a look on the code
            // you will say at the p tag the name is inserted in a function paramter and the other paramter is the user value 
            // dont mind about that at the i will explain it at line (249)
            toPrint += `<a href="${moviesData[sortResults[l][1]['name']][2]}"><img src="${moviesData[sortResults[l][1]['name']][0]}" alt=""><p>${getSelectedWord(moviesData[sortResults[l][1]['name']][1], value)}</p></a>`;            
        }

        // then we close the ul tag we opened
        toPrint +=`</ul>`;

        // and also i made a function that gets the results and print them to the div
        printResaults(toPrint);
    }
}


// this is the function we used to clear the resz
// its simple no explains needed
function clearResz(div){
    div.innerHTML = "";
};

// this function get the results and print them to the div var using inner html
function printResaults(resaults){
    div.innerHTML = "";
    div.innerHTML = resaults;
}

// this function is goin to get tha name of the movie and the value that the user entered let just call it user value
function getSelectedWord(movieName, userSearch) {

    // we make a regular expression to make him find it WO case Sensetive
    var userSearchRegExp = new RegExp(userSearch, "i");

    // and here he is going to get the movie name and that the user value
    // and searching for the user value in the movie name 
    // and replace them with or actually he will put them inside a strong tag and 
    // strong tag makes a faocus on the word this will help us like saying why this result came up
    // because of the highlighted  words or strong tags
    var result = movieName.replace(userSearchRegExp, `<strong>${userSearch}</strong>`);

    // and  just return the result
    return result;

}




// thanks god i finished it iam really happy
// good night ...........