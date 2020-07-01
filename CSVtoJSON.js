
const csvFilePath='\data.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const jsonData = jsonObj
    jsonData.forEach(element => console.log(element))
})

