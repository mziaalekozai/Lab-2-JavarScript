import {books} from "./books.js"

export function function1(){
    console.log(books.length)
}

export function function2(){
    for (let i = 0; i < books.length; i++){
        let titlelist = books[i].title
        console.log(titlelist)
    }
}

export function function3(){
    for (let i = 0; i < books.length; i++){
    if (books[i].genre === 'Fantasy'){
            console.log(books[i].title, books[i].price)
        }
    }
}

export function function4(){
    for (let i = 0; i < books.length; i++){
        if (books[i].genre === 'Classic' || books[i].genre === 'Dystopian' || books[i].genre === 'Mystery'){
                console.log(books[i].title, books[i].genre)
            }
        }
}

export function function5(){
    for (let i = 0; i < books.length; i++){
    if (books[i].price > 10){
            console.log(books[i].title, books[i].price)
        }
    }
}

export function function6(){
    let sum = 0

    books.forEach((book) => sum += book.price)
    let roundedsum = Math.round(sum)

    console.log('Totalt pris:', sum, '. Avrundat pris:', roundedsum, '.')
}

export function function7(){

    let dystopianvalue = 0
    let mysteryvalue = 0

    for (let i = 0; i < books.length; i++){
        if (books[i].genre === 'Dystopian'){
            dystopianvalue += books[i].price
        }
        else if (books[i].genre === 'Mystery'){
            mysteryvalue += books[i].price
        }
    }
    if (mysteryvalue > dystopianvalue){
        console.log('Mystery är värt mer.')
    }
    else if(mysteryvalue < dystopianvalue){
        console.log('Dystopian är värt mer.')
    }
    else{
        console.log('Båda är värda lika mycket.')
    }
}

export function function8(){

    let booktitles = []

    for (let i = 0; i < books.length; i++){
        booktitles[i] = books[i].title
    }

    booktitles.sort();

    for (let i = 0; i < booktitles.length; i++){
        console.log(booktitles[i])
    }
}

export function function9(){
    let duplicate = ''
    let titlelist = []

    for (let i = 0; i < books.length; i++){
        const title = books[i].title
        if (titlelist.includes(title)){
            duplicate = title
            break;
            }
            titlelist[i] = books[i].title
    }

    console.log("Vi har två av:", duplicate)
}

export function function10(){
    let a = 0
    let name = []
    let longname = []

    for (let i = 0; i < books.length; i++){
        name = books[i].author.split(' ')
        if (name.length > 2){
            if (name[0].includes('.') || name[1].includes('.') || name[2].includes('.')){
            }
            else {
                longname[a] = books[i].author
            a++
            }
        }
    }
    for (let i = 0; i < longname.length; i++){
        console.log(longname[i])
    }
}

export function function11(){
    let a = 0
    let namestosort = []
    let surnames = []
    let firstnames = []
    let fullnames = []

    for (let i = 0; i < books.length; i++){
        namestosort = books[i].author.split(' ')
        surnames[i] = namestosort[namestosort.length - 1]
        for (let a = 0; a < (namestosort.length - 1); a++){
            firstnames[i] = namestosort[a]
            if (namestosort.length > 2){
                firstnames[i] = namestosort[0]
                firstnames[i] += ' ' + namestosort[a]
            }
        }
        fullnames[i] = surnames[i] + ', ' + firstnames[i]
    }

    fullnames.sort()
    for (let i = 0; i < fullnames.length; i++){
        console.log(fullnames[i])
    }
}

export function function12(){
    let bookswithoutthe = []
    let a = 0

    for (let i = 0; i < books.length; i++){
        let name = books[i].title
        if (name.substring(0,3) !== 'The'){
            bookswithoutthe[a] = name
            a++
        }
    }
    for (let i = 0; i < bookswithoutthe.length; i++){
        console.log(bookswithoutthe[i])
    }
}

export function function13(){
    let titlelist = []

    for (let i = 0; i < books.length; i++){
        titlelist[i] = books[i].title
    }

    titlelist.sort((a, b) => a.length - b.length);

    for (let i = 0; i < books.length; i++) {
    console.log(titlelist[i]);
    }
}

export function function14(){
    function addBook(title, author, genre, price) {
        const newBook = {
            id: books.length + 2,
            title: title,
            author: author,
            genre: genre,
            price: price,
        }
        books.push(newBook)
        return books
    }
    
    addBook('A Long Way To A Small Angry Planet', 'Becky Chambers', 'Sci-Fi', 9.99)
    
    console.log(books)
}