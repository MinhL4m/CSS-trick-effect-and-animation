URL: https://www.youtube.com/watch?v=UhvVsc2sM4s

- use rem for everything
- use linear-gradient for background
- use :focus
- use ::before (for background and effect)
	- For background, use ::before to create the background. In ::before (background), position: absolute. In normal div which has ::before, use relative.
	- For focus effect, create a ::before but without height. Use ".input-group input:focus	+.bar::before" to add width
 
- good animation

- use + for css: 
	/* the + sign mean: when the input is focus, I want my bar to extend 100% */
	.input-group input:focus + .bar::before{
   	 	width:100%;
	}