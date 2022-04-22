const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, ret)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = ret
    readFile('./content/test.txt', 'utf8', (err, ret)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = ret
        writeFile('/content/result-sync.txt',
            `Here is the result : ${first}, ${second}`,
            (err, ret)=>{
                if(err) {
                    return;
                }
                console.log(ret)
            }
        )
    })
})