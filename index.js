class Formatter {
  static capitalize(string) {
    let firstLetter = string.charAt(0)
    let capitol = firstLetter.toUpperCase()
    return string.replace(firstLetter, capitol)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'" "]+/g, "")
  }

  static titleize(string) {
    let split = string.split(' ')

    let newArr = split.map(word => {
      if(word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from'){
        let firstLetter = word.charAt(0)
        let capitol = firstLetter.toUpperCase()
        return word.replace(firstLetter, capitol)
      }else{
        return word
      }
    })
    let phrase = newArr.join(' ')
    let fLetter = phrase.charAt(0)
    let capitol = fLetter.toUpperCase()
    return phrase.replace(fLetter, capitol)
  }
}