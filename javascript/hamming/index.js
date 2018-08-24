// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.


module.exports = Hamming;

function Hamming()
{
}

Hamming.prototype.compute=function(A, B){
	var dif=0;
	if(A.length != B.length)
	{
		throw 'DNA strands must be of equal length.';
	}
	else
	{
		
		for(var i=0;i<A.length;i++)
		{
			if(A[i]!=B[i]){
				dif++;
			}
		}
		
	}
	return dif;
};

