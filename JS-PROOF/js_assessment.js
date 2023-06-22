/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let Wallet = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _avatar, _hairColour, _eyeColour) {
    const NFT = {
        "name": _name,
        "avatar": _avatar,
        "hairColour": _hairColour,
        "eyeColour": _eyeColour
    }
Wallet.push(NFT);
console.log("Minted:",_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for( i=0; i<Wallet.length;i++){
    
    console.log("\nNFT NO.: ",i+1);
    console.log("Name: \t\t\t"+ Wallet[i].name);
    console.log("Avatar: \t\t"+ Wallet[i].avatar);
    console.log("Hair Colour: \t"+ Wallet[i].hairColour);
    console.log("Eye Colour: \t"+ Wallet[i].eyeColour);
    
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nNo. of NFT's present in your wallet: ",Wallet.length);
}

// call your functions below this line
mintNFT("Gautam", "Astronaut","Black","Brown");
mintNFT("Sahim", "Monkey","Grey","Blue");
mintNFT("Lucy", "fairy","Purple","White");
//mintNFT("Dave", "Lion","Golden","Brown");
listNFTs();
getTotalSupply();
