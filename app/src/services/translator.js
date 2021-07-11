const dictionary = require('../../resources/dictionary.json')

class Translator {
    
    static translateToSolReSol(word) {
        for (var key in dictionary) {
            if (dictionary[key].includes(word)) {
                return key
            }
        }
        return 'not found'
    }

    static translateToEnglish(word) {
        if (dictionary.hasOwnProperty(word.toUpperCase())) {
            return dictionary[word]
        } else {
            return 'not found'
        }
    }
}

module.exports = Translator
