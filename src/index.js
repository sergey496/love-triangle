/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var count=0;
for (var i=1;i<preferences.length+1;i++){
	if(preferences[i-1]!=preferences[preferences[i-1]-1]){
		if (i==(preferences[preferences[preferences[i-1]-1]-1]))
		{
			count=count+1;
			preferences[i-1]="";
		}
	}	
}


return count;
};
