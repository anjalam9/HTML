let pst=new Date()

let mst=new Date()
mst.setHours(mst.getHours()+1)

let cst=new Date()
cst.setHours(cst.getHours()+2)

let est=new Date()
est.setHours(est.getHours()+3)

var result=`Current Time Zone : PST - ${pst.toLocaleString()}

MST - ${mst.toLocaleString()}

CST - ${cst.toLocaleString()}

EST - ${est.toLocaleString()}`

document.getElementById("time").innerText=result;