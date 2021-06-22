/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    
    // create an array
    let output = [];
    
    // Sort words to descending length
    words.sort((a, b) => a.length - b.length)
    
     // loop through words
    for (let i = 0; i < words.length; i++) {
        
         // Nested loop through words
        for (let j = i + 1; j < words.length; j++) {
            
             // Create condition if the current word is in the nested word
            if (words[j].includes(words[i])) {
                
                // Push current word to output
                output.push(words[i]);
                
                // Break not to repeat
                break;
            }
        }
    }
    // Return output
    return output;
};

/*
Time complexity: O(n^2).
Space complexity: O(n).
*/