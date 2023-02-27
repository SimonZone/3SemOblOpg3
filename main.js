const app = Vue.createApp({
  data() {
    return {
      word: "Word",
      manipulatedStrings: [],
    };
  },
  methods: {
    manipulateString() {
      this.manipulatedStrings = []
      //Ordet som indtastet
      this.manipulatedStrings.push(this.word)
      //ordet i lower case
      const wordLowerCase = this.word.toLowerCase()
      this.manipulatedStrings.push(wordLowerCase)
      //ordet i upper case
      const wordUpperCase = this.word.toUpperCase()
      this.manipulatedStrings.push(wordUpperCase)
      //capitalized (første bogstav stort)
      const wordCapitalized = this.word[0].toUpperCase() + this.word.slice(1)
      this.manipulatedStrings.push(wordCapitalized)
      //end-capitalized (sidste bogstav stort)
      const wordEndCapitalized = this.word.slice(0, this.word.length - 1) + this.word[this.word.length - 1].toUpperCase()
      this.manipulatedStrings.push(wordEndCapitalized)
      //Bag fra
      const wordReversed = this.word.split("").reverse().join("")
      this.manipulatedStrings.push(wordReversed)


    }
  },
});
