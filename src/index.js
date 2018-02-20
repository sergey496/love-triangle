/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var val=0;
for (var i=0;i<preferences.length;i++){

var d=+parseInt(preferences[preferences[preferences[i]-1]-1])-1;
        if (i==(d))
{
        val=val+1;

        preferences[i]="";
}	

}
return val;
};
