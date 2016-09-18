Slider
======

Here we have code for a javascript slider:

    slider.js    the slider javascript code
    slider.css   CSS for the slider
    slider.html  test page for the slider

Example code is in:

* noUiSlider.8.5.1 (directory)
* slider_example.html

API
---

slider = Slider.create(divname, id, min_value, max_value, orient);

Create a slider object:

    divname    name of the enclosing <div> element
    id         an identifying string for the widget
    min_value  minimum value for slider (real value)
    max_value  maximum value for slider (real value)
    orient     orientation of slider ('horiz' or 'vert')
                   (only look at first character, lowercase)

----

slider.setValue(value);

----

value = slider.getValue();

----

slider.onChange(action);

When the value of a slider changes, call the action function:

    action(id, value);
