package
{
	import Box2D.Collision.Shapes.*;
	import Box2D.Common.Math.*;
	import Box2D.Dynamics.*;
	import flash.display.Sprite;
	import flash.events.Event;
	
	import Box2DSeparator.*;
	
	public class example extends Sprite
	{
		/*	
		*	
		*	This is a basic example for using my custom b2Separator() class.
		*	Basically, what it does is separate a non-convex shape into convex shapes, add those shapes to b2Fixture instances and 
		*	add those fixtures to a given b2Body instance. And it does all that by just giving it the non-convex shape's vertices!
		*
		*	For more information, refer to the documentation of the b2Separator.Separate() method.
		*
		*/		
		
		var world:b2World, bodyDef:b2BodyDef, body:b2Body, fixtureDef:b2FixtureDef, polyShape:b2PolygonShape, worldCont:Sprite = new Sprite();

		public function example()
		{
			// Setting up the Box2D world
			world = new b2World(new b2Vec2(0, 10), true);
			debug_draw();
			addChild(worldCont);

			// Creating a static b2Body so that we have a ground
			bodyDef = new b2BodyDef();
			bodyDef.type = b2Body.b2_staticBody;
			body = world.CreateBody(bodyDef);
			
			fixtureDef = new b2FixtureDef();
			polyShape = new b2PolygonShape();
			polyShape.SetAsOrientedBox(0.5*stage.stageWidth/30, 10/30, new b2Vec2(0.5*stage.stageWidth/30, stage.stageHeight/30));
			fixtureDef.shape = polyShape;
			body.CreateFixture(fixtureDef);

			// Here we create the non-convex polygon! We do it in 5 steps.
			
			// 1) We create a b2Separator instance.
			var sep:b2Separator = new b2Separator();

			// 2) Then we create a b2Body instance. This is where the fixtures of the non-polygon shape will be stored.
			bodyDef = new b2BodyDef();
			bodyDef.type = b2Body.b2_dynamicBody;
			bodyDef.position.Set(0.5*stage.stageWidth/30, 0.5*stage.stageHeight/30);
			body = world.CreateBody(bodyDef);
			
			// 3) We also need a b2FixtureDef instance, so that the new fixtures can inherit its properties.
			fixtureDef = new b2FixtureDef();
			fixtureDef.restitution = 0.4;
			fixtureDef.friction = 0.2;
			fixtureDef.density = 4;
			
			// 4) And what is of most importance - we need a Vector of b2Vec2 instances so that we can pass the vertices! 
			// Remember, we need the vertices in clockwise order! For more information, read the documentation for the b2Separator.Separate() method.
			var vec:Vector.<b2Vec2> = new Vector.<b2Vec2>();
			vec.push(new b2Vec2(-100/30, -100/30), new b2Vec2(100/30, -100/30), new b2Vec2(100/30, 0), new b2Vec2(0, 0), new b2Vec2(-100/30, 100/30));
			
			// If you want to be sure that the vertices are entered correctly, use the b2Separator.Validate() method!
			// Refer to the documentation of b2Separate.Validate() to see what it does and the values it returns.
			if(sep.Validate(vec)==0)
			{
				trace("Yey! Those vertices are good to go!");
			}
			else
			{
				trace("Oh, I guess you messed something up :(");
			}
			
			// 5) And finally, we pass the b2Body, b2FixtureDef and Vector.<b2Vec2> instances as parameters to the Separate() method!
			// It separates the non-convex shape into convex shapes, creates the fixtures and adds them to the body for us! Sweet, eh?
			sep.Separate(body, fixtureDef, vec);
			
			// Assigning an event listener, which allows us to call update() every frame.
			stage.addEventListener(Event.ENTER_FRAME, update);
		}
		
		public function debug_draw():void 
		{
			// Setting up the b2DebugDraw
			var debugDraw:b2DebugDraw = new b2DebugDraw();
			debugDraw.SetSprite(worldCont);
			debugDraw.SetDrawScale(30);
			debugDraw.SetFillAlpha(0.5);
			debugDraw.SetLineThickness(1); 
			debugDraw.SetFlags(b2DebugDraw.e_shapeBit|b2DebugDraw.e_centerOfMassBit);
			world.SetDebugDraw(debugDraw);
		}
		
		private function update(e:Event):void
		{
			// Here we "play" the next frame in the Box2D world, clear all the forces and draw the debug data. Kind of obvious maybe?
			world.Step(1/24, 10, 10);
			world.ClearForces();
			world.DrawDebugData();
		}
	}
}