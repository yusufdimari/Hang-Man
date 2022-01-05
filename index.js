let names=['yusuf','muhammad', 'fatima', 'zainab' ]
const leng=names.length
let lives=5
let word=[]
let Word=[]
const session=()=>{
    Word =[]
    const q=prompt('enter a letter')
    for (let i=0; i<word.length; i++){
        if(word[i]==q){
            console.log(i)
             continue
        }else{
            Word.push(word[i])
        }
    }
    if(word.length==Word.length){
        lives-=1
    }
    else{
        word=Word
    }
    console.log(word, lives)
}
const load=()=>{

        const x=(Math.floor(Math.random()*leng))
        let temp=names[x]
        for (let i=0; i<temp.length; i++){
            word.push(temp[i])
        }
        console.log(word)
    }

    const handleClick=()=>{
        lives>0&&word.length>0?session():console.log('done')
    }

window.onload=load()