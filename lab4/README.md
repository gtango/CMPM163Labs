-------
Creator: Gavril Tango
Created: April 2020
Description: Holds the answers to part 2, question 24 of lab 4. It also holds link to
my video.
-------

Answers to Question 24:

	Context - My understanding of the question is I need to give a formula to map
		a given uv coordinate to a coordinate in the texture.

	a) floor [ (u * 8) - 1 ]
	b) floor [ (1 - u) * 7 ]
	c) (2,5) = gray color

Cube Video Link:

   https://drive.google.com/file/d/1Uj53wlJIs6kRR1kVFMtwGxZ7qbk-bcNv/view?usp=sharing

How Each Cube Was Made (Left to Right then Top To Bottom):

	Most Left Cube:
	
		This cube was made from a simple texture without a normal map. This uses the
		built-in js mesh phong texture functions to apply the textures.
		
	Middle Cube:
			
		This cube was made from the same texture from the cube to its left, but with
		its corresponding normal map to add depth to the cube. This cube also uses the
		built-in js texture functions for both the texture and its normal map.
		
	Right Cube:
	
		This cube is similar to the last two I described in the sense that it also uses
		the built-in texture functions, but this cube uses a wooden-looking texture and
		its corresponding normal map.
		
	Middle Top Cube:
		
		This was the first cube I made using our own shaders. We used the same loader
		from the last lab, but this time our shader files were modified to use vec2 to
		instead use UV coordinates. With the uv coordinates we were able to tell where
		to specifically sample from the texture. I imported another texture for this cube,
		different from ones i've used. There is no map being applied.
		
	Middle Bottom Cube:
	
		This cube was challenging, mostly because I had no idea what I was doing for a
		good while. To be honest, its still a bit confusing. This cube was made from the
		same shader files and loader as the last cube, but with minor changes to the 
		shader files variables. The first thing I had to do to add tiles to the cube was to
		scale the space so that we could fit more tiles in. This was done by multiplying the 
		uv coordinates in the vertex shader that are passed into the fragment shader by 3.0.
		Then, in the fragment shader I used the fract() function in the texture2D() function,
		so that the tile textures wrap around the cube. I used a brickwall texture for this
		cube, without a map.
		
Note: I used "The Book of Shaders" to help solve the last cube. I also used this on the last lab, although it was not
      as helpful. 
