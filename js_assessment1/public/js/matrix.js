function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...
  let matrix=5;

  for(let i=0;i<matrix;i++){
    for(let j=0;j<matrix;j++){
      nodes.push({"data": { "id": `N${i}-${j}`} } );

  }
  }
  for(let i=0;i<matrix;i++){
    for(let j=0;j<matrix;j++){
      if(i+1<matrix){
      edges.push({ "data": { "id": `${i}-${j}S`, "source": `N${i}-${j}`, "target": `N${i+1}-${j}` } } );
      }
      if(j+1<matrix){
        edges.push({ "data": { "id": `${i}-${j}E`, "source": `N${i}-${j}`, "target": `N${i}-${j+1}` } } );
        } 
      if(i-1>=0){
          edges.push({ "data": { "id": `${i}-${j}N`, "source": `N${i}-${j}`, "target": `N${i-1}-${j}` } } );
          }
      if(j-1>=0){
            edges.push({ "data": { "id": `${i}-${j}W`, "source": `N${i}-${j}`, "target": `N${i}-${j-1}` } } );
            }
      if(i+1<matrix && j-1>=0){
        edges.push({ "data": { "id": `${i}-${j}SW`, "source": `N${i}-${j}`, "target": `N${i+1}-${j-1}` } } );


      }
      if(i-1>=0 && j-1>=0){
        edges.push({ "data": { "id": `${i}-${j}NE`, "source": `N${i}-${j}`, "target": `N${i-1}-${j-1}` } } );


      }

  }
  }
  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


