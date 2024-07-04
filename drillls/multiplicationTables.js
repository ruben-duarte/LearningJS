// multiplication tables from 1 to 10

for ( let i = 1 ; i <= 10 ; i++ ) {
  for ( let j = 1 ; j <= 10 ; j++ ) {
    j = String(j).padStart(2,"0");
    console.log(`${i} x ${j} = ${ i * j }`);
    j = Number(j);
  }
  console.log( "================"  );
}