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

	synergy++;
	print "how is bmw?"
	print "It's going really well, I like it here a lot."
	print "Working on some cool projects, collabing"
	print "What up playa?"
}
