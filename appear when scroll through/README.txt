---this project need to use jquery and waypoint plugin---


==WAYPOINT Plugin==

http://imakewebthings.com/waypoints/guides/getting-started/

======CODE=======

- object get to active waypoint should be a big div
    --> The top screen need to touch the begin of the div for the waypoint to run

Syntax:
    $().waypoint(function(direction){},{offset:'<number>'});

        - offset:'<number>':
            + offset là khoảng cách trước khi chạm vào element.
            + number có thể là % px rem
            + nếu offset là 50% thì trước khi chạm vào element một khoảng 50%, event sẽ trigger

        - direction:
            + this call back function accept 1 argument which is direction
            + 2 value, 'down', 'up' 
            + Used this in third div.

