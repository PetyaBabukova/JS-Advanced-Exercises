// function solve() {
//     function fighter(name){
//         return {
//             name,
//             stamina: 100,
//             health: 100,
//             fight: function(){
//                 this.stamina --;
//                 console.log(`${this.name} slashes at the foe!`);
//             }
//         };
//     };

//     function mage(name){
//         return {
//             name,
//             health: 100,
//             mana: 100,
//             cast: function (spell){
//                 this.mana --
//                 console.log(`${this.name} cast ${spell}`);
//             }
//         };
//     };

//     return {
//         fighter,
//         mage
//     }
// };


function solve() {
    let fighter = (name)=>{
        return {
            name,
            stamina: 100,
            health: 100,
            fight: function(){
                this.stamina --;
                console.log(`${name} slashes at the foe!`);
            }
        };
    };

    let mage= (name)=>{
        return {
            name,
            health: 100,
            mana: 100,
            cast: function (spell){
                this.mana --
                console.log(`${name} cast ${spell}`);
            }
        };
    };

    return {
        fighter,
        mage
    }
};

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
