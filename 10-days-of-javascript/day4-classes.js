/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon{
    constructor(sideLengths){
        this.sides = sideLengths;
    }
    
    perimeter(){
        var per = 0;
        this.sides.map((side)=>{
            per += side;
        })
        return per;
    }
}