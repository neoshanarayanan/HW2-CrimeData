var exercise = {};

exercise.countRecords = function(data){ // done

    numRecords = data.length;
    if (numRecords > 0){
        return(numRecords)
    }else{
        return('Error: countRecords did not work');
    }
};

exercise.countDistrictCrimes = function(data,district){ // done

    var numCrimes = 0; 

    for (var i = 0; i < data.length; i++){ // iterate through all entries in crimeData
        var districtNum = data[i][19]; // district number is the 20th element in each crime entry
        if (districtNum == district){ // if district matches query, add 1 crime to the number of crimes
            numCrimes += 1;
        }
    }

    return numCrimes; 
};

exercise.countPrimaryType = function(data,primaryType){ //done

    var numCrimes = 0;

    for (var i = 0; i < data.length; i++){
        var crimeType = data[i][13];
        if(crimeType == primaryType){
            numCrimes++;
        }
    }

    if (numCrimes == 0){ // only execute if you know that there is a nonzero amount of crimes for this type - otherwise could through error wrongfully
        return 'Error: countPrimaryType didnt work';
    }

    return numCrimes;
};

exercise.countLocation = function(data,location){

    var numCrimes = 0;
    
    for (var i = 0; i < data.length; i++){
        var loc = data[i][15];
        if(loc == location){
            numCrimes++;
        }
    }

    if (numCrimes == 0){
        return "Error: countLocation didn't function as expected";
    }
    
    return numCrimes;
};


exercise.buildLatLngPoint = function(crime){

    var point = {};

    var x = crime[26];
  
    var y = crime[28];


    point.latitude = x;
    point.longitude = y;

    return point; 
   
};




