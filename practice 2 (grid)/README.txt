URL: https://www.youtube.com/watch?v=M3qBpPw77qo
use grid to make responsive web UI. use mobile first method

- use flex box when needed only
- Since mobile first , we build stack first before we touch grid. Grid only use for media query for only screen size > 700.

This layout divided into Section. 
	- Use id for section. id="section-a"
	- each section gonna be one grid. use class grid (one column when we display in desktop)

Make background with dark opacity in showcase

even class has same name, we can target each one individually by using parent id/class and child's class to target the child

adjust css begin with parent down child

make a background for body then each section has their own background

Use :first-child when just want to set something simple for first child

padding for each section usually equal

Grid:
	- grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
	
