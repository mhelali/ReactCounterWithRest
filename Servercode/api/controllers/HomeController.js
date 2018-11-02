var currentCount = 0;
exports.getCurrentCount = function(req, res) {       
    return res.status(200).json({data: { currentCount : currentCount } ,message:"GET: current count returned successfully"});
}

exports.getNextCount = function(req, res) {    
    let nextCnt = nextCountFormula();    
    return res.status(200).json({data: {nextCount: nextCnt } ,message:"GET: next count returned successfully"});
}

exports.updateToNextCount = function(req, res){
    let nextCnt = nextCountFormula();
    currentCount = nextCnt;
    return res.status(200).json({data: {currentCount: currentCount} ,message:"PUT: update to current count successfully"});
}

var nextCountFormula = function(){
    let nextCnt = currentCount;
    if(currentCount == 0){
        nextCnt =  1;
    }else{
        nextCnt =  currentCount * 2;
    }
    return nextCnt;
}

