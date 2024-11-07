{
    //////////////////////////////// Start////////////////////////////////

    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Tshape = {
        shape : string;
        width: number;
        height: number;
    };

    type TshapeProperty = keyof Tshape;

    // const calculateShapeArea = (shape : 'Circle' | 'Rectangle' , width : number , height : number) : number => {};
    const calculateShapeArea = (shape : 'Circle' | 'Rectangle' , width : number , height : number) : number => {};

   
    

    //////////////////////////////// End////////////////////////////////
}