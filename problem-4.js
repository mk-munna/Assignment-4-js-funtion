// ---------------------Make A Great Password------------------------
// Password-Structure : Website Name # Username @ birthyear


// function will take an object of 3 property
function password(obj) {
    // if name or birthyear or sitename property is unavailabe or birthYear is not 4character it will show error message
    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4 ) {
        return 'invalid'
    }
    // make first word uppercase
    const gensiteName1stlatter = obj.siteName[0].toUpperCase();
    // collecting remains latter
    let genRemainsWord = ''
    for (let i = 1; i < obj.siteName.length; i++) {
        genRemainsWord += obj.siteName[i];
    }
    // Remains letter lowercase
    genRemainsWord = genRemainsWord.toLocaleLowerCase();
    // joined as first letter uppercase and the rest are lowercase
    const fullSiteName = gensiteName1stlatter + genRemainsWord;
    // return the password
    return `${fullSiteName}#${obj.name}@${obj.birthYear}`

} 
// done

console.log(password({ name: 'rahat' , birthYear: 2002, siteName: 'FacebOok' }))