
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix===undefined || matrix.length===0  )
  {
    return []
  }
 let newArray=matrix.map( (x,i) => i%2===0 ? (x.sort((a,b)=>a-b)).join(" ") : x.sort((a,b)=>b-a).join(" ")).join(" ").split(" ").map( x => +x)
  return (newArray)
}
