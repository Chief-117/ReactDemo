const add = (a,b) => {
    // console.log(arguments)
    return a + b ;
}
console.log(add(5,1))


//this keyword no longer  bound
const user = {
    name:'noah',
    countries:['TW','USA'],
    printCountryLived(){
        // console.log(this.name)
        // console.log(this.countries)
        
        // const that = this;

        return this.countries.map((countries)=>{
            return this.name+' has lived in '+ countries + '!'; //可以重組陣列數值
        })

        this.countries.forEach((city)=>{
            console.log(this.name + '住在' + city)
        })
    }
}
console.log(user.printCountryLived());

//主要講解直接函式的注意事項 如有使用 => 的狀況下則可以直接讀取this 
//而沒有的話則需要透過 const that = this 則可以將此數值改為function(xxx)的方式傳入

//練習創建區域 練習使用map 重組

const multiplier = {
    //number - array of numbers 數字為1 , 6 變成 2 與12
    numbers : [2,6],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((number)=>
            number*this.multiplyBy
        )
    }
    //multiplyBy - single number 數字為2
    //multiply - return a new array 為上述兩者數字相乘 意即[1*2,6*2]
}
console.log(multiplier.multiply())