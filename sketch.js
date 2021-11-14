const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

var engine = Engine.create(),
  world = engine.world;


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1550,
    height: 800,
    wireframes: false,
    background: "#B5EAEA",
  },
});

Render.run(render);


var runner = Runner.create();
Runner.run(runner, engine);

// create stacks
var orangeStack = Composites.stack(650,50,5,6,5,5,(x,y)=>{
  return Bodies.rectangle(x,y,10,20,{
    friction : 0.00001,
    restitution : 0.5,
    density : 0.001,
    render:{
      sprite:{
        texture:"images/orange.png",
        xScale : 0.1,
        yScale : 0.1
      }
    }
  })
})
var pineappleStack = Composites.stack(800,50,5,6,5,5,(x,y)=>{
  return Bodies.rectangle(x,y,10,20,{
    render:{
      sprite:{
        texture:"images/pineapple.png",
        xScale : 0.1,
        yScale : 0.1
      }
    }
  })
})
var strawberryStack = Composites.stack(1080,50,5,6,5,5,(x,y)=>{
  return Bodies.rectangle(x,y,10,20,{
    render:{
      sprite:{
        texture:"images/strawberry.png",
        xScale : 0.1,
        yScale : 0.1
      }
    }
  })
})

//   Create first container 
var firstBase = Bodies.rectangle(250,700,300,20,{
  isStatic:true,
  render:{fillStyle:'#141e2e'}
}),
firstLeft = Bodies.rectangle(90,560,300,20,{
  isStatic:true,
  angle : Math.PI/2,
  render:{fillStyle:'#141e2e'}
}),
firstRight = Bodies.rectangle(390,560,300,20,{
  isStatic:true,
  angle : Math.PI/2,
  render:{fillStyle:'#141e2e'}
});


//Create second container
var secondBase = Bodies.rectangle(800,700,300,20,{
  isStatic:true,
  render:{fillStyle:'#141e2e'}
}),
secondLeft = Bodies.rectangle(640,560,300,20,{
  isStatic:true,
  angle : Math.PI/2,
  render:{fillStyle:'#141e2e'}
}),
secondRight = Bodies.rectangle(960,560,300,20,{
  isStatic:true,
  angle : Math.PI/2,
  render:{fillStyle:'#141e2e'}
});


// //   Create third container
var thirdBase = Bodies.rectangle(1300,700,300,20,{
  isStatic:true,
  render:{fillStyle:'#141e2e'}
}),
thirdLeft = Bodies.rectangle(1140,560,300,20,{
  isStatic:true,
  angle : Math.PI/2,
  render:{fillStyle:'#141e2e'}
}),
thirdRight = Bodies.rectangle(1460,560,300,20,{
  isStatic:true,
  angle : Math.PI/2,
  render:{fillStyle:'#141e2e'}
});


// add bodies to world
Composite.add(world,[firstBase,firstLeft,firstRight,
                    secondBase,secondLeft,secondRight,
                    thirdBase,thirdLeft,thirdRight,
                    orangeStack,pineappleStack,strawberryStack]);


// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;
