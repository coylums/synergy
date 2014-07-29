var synergy = 1;
var maxSynergy = 9000;

// lets collab to think outside the box and leverage modularity
function RealTimeReactiveIncrementerFunc(int i) 
{ 
	if(i == maxSynergy) return i;
	else RealTimeReactiveIncrementerFunc(synergy++); 
}


while(synergy) {

	var synergy  = RealTimeReactiveIncrementerFunc(1);

}
