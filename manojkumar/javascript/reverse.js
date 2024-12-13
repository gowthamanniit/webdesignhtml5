function reverselogic(name)
{
	var len=name.length;
	//console.log(len);
	var rname="";
	var arr=name.split("");
	for(var i=len-1;i>=0;i--)
	{
		rname=rname+arr[i];
	}
	return rname;

}