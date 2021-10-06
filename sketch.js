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



//   Create first container 



// Create second container



//   Create third container



// add bodies to world
Composite.add(world,[]);

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
