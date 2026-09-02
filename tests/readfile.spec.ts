import{test,expect} from '@playwright/test'
import fs from 'fs'
import path from 'path'

test ('print the data', async({page})=>{

  const filePath = path.resolve(__dirname, 'myfile.csv');
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  .split(',').map(item => item.trim());
  console.log('--- Raw File Content ---');
  console.log(rawContent);
const numword=rawContent.length

for(let raw of rawContent){
console.log(raw)

  }
console.log(numword)

const record:Record<string,number>={}

for(let raeword of rawContent){

if (record[raeword]){
        record[raeword]++
}
    else {
    record[raeword]=1
}
}

console.log(record)
console.log(`number of Yes is`,  record['yes'])

for (const key in record){

console.log(`${key}:`, record[key] )

}


})