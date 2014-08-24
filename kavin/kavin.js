var sys = require('sys');
var exec = require('child_process').exec;
var res=30;
function wait_T(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}
for(var i=1;i<=10;i++)
{
var d = new Date();
var h= d.getHours();
var m= d.getMinutes();
var s = d.getSeconds();
function puts(error, stdout, stderr) { sys.puts(stdout); }
exec("mkdir "+h+":"+m+":"+s+"",puts);
if(i==1)
{
exec("cd "+h+":"+m+":"+s+" && wget http://www.dice.com/job/results/", puts);
wait_T(1000);
}
else
{
exec("cd "+h+":"+m+":"+s+" && wget http://www.dice.com/job/results?o="+res+"&x=all&p=", puts);
res+=30;
wait_T(1000);
}
console.log("success");
}

