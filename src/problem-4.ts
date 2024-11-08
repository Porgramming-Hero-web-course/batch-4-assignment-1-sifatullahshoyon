{
  //////////////////////////////// Start////////////////////////////////

  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  // Type alias
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  // Union type
  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      const circleShape = Math.PI * shape.radius * shape.radius;
      return parseFloat(circleShape.toFixed(2));
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    return 0;
  }

  //  Input 1
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  //   console.log(circleArea);

  //  Input 2
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  //   console.log(rectangleArea);

  //////////////////////////////// End////////////////////////////////
}
