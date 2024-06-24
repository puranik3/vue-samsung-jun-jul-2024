/** 
Create a movie object that represents details of your favorite movie.
Suggested information to have in the object
    - name
    - cast (an array of strings with cast member's names)
    - yearOfRelease
    - boxOfficeCollection
    
    - Don't try now - addToCast( newMember ) that accepts a new cast member's name and adds to the cast array,
    - Don't try now - addToCollection(amount) that accepts box office collections for a week and adds it to the current boxOfficeCollection.
*/
const sholay = {
    name: "Sholay",
    cast: [
        "Amitabh",
        "Dharmendra"
    ],
    yearOfRelease: 1975,
    boxOfficeCollection: {
        value: 20,
        units: "crore"
    },
    addToCast(newMember) {
        // push is an array method that adds the item to the end of the array
        this.cast.push(newMember);
    },
    addToCollection(amountInCrores) {
        this.boxOfficeCollection.value += amountInCrores;
    }
};

sholay.addToCast('Hema');
sholay.addToCast('Jaya');

sholay.addToCollection(15);

console.log(sholay);