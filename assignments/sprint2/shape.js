var pattern = {
    select:function (level , shape) {
        if(shape == "pyramid"){
            return this.pyramid(level);
        }
        else if(shape == "inverse_pyramid"){
            return this.inverse_pyramid(level);
        }
        else if(shape == "rhombus"){
            return this.rhombus(level);
        }
    },
    pyramid:function (level) {
       
        for(var i=0;i<level;i++){
            var pat = "";
            for(var j=i+1;j<=level;j++){
                pat = pat + "."
            } for(var k=0;k<=i;k++){
                if(k == 0){    
                pat = pat + "o";
                }
                else{
                    pat = pat + "."+ "o" ;
                }
            } 
            for(var j=i+1;j<=level;j++){
                pat = pat + "."
            } 
            console.log(pat);
        }
        
    }, inverse_pyramid:function(level) {
        for(var i=level;i>0;i--){
            var pat = "";
            for(var j=0;j<=level-i;j++){
                pat = pat + "."
            } for(var k=i;k>=1;k--){
                if(k == i){    
                pat = pat + "o";
                }
                else{
                    pat = pat + "." + "o"  ;
                }
            } 
            for(var j=0;j<=level-i;j++){
                pat = pat + "."
            } 
            console.log(pat);
        }
        
    },rhombus: function(level){
        for(var i=0;i<level;i++){
        var pat = "";
        for(var j=i+1;j<=level;j++){
            pat = pat + "."
        } for(var k=0;k<=i;k++){
            if(k == 0){    
            pat = pat + "o";
            }
            else{
                pat = pat + "."+ "o" ;
            }
        } 
        for(var j=i+1;j<=level;j++){
            pat = pat + "."
        } 
        console.log(pat);
    }
    for(var i=level-1;i>0;i--){
        var pat = "";
        for(var j=0;j<=level-i;j++){
            pat = pat + "."
        } for(var k=i;k>=1;k--){
            if(k == i){    
            pat = pat + "o";
            }
            else{
                pat = pat + "." + "o"  ;
            }
        } 
        for(var j=0;j<=level-i;j++){
            pat = pat + "."
        } 
        console.log(pat);
    }

    }

}

pattern.select(4,"pyramid");
console.log(" ");
pattern.select(4,"inverse_pyramid");
console.log(" ");
pattern.select(4,"rhombus")

