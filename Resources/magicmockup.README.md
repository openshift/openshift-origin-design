Magic Mockup
============

(Magic Mockup)[https://github.com/garrett/magicmockup] is a javascript utility that allows you to make simple interactive mockups in (Inkscape)[http://inkscape.org] without having to do any coding.

Inkscape
--------

Magic Mockup is designed to be used with Inkscape, a free and open source vector illustration program. Inkscape is cross-platform and works on Windows, Mac, and Linux. Further instructions in this README will assume you have Inkscape installed. See the installation options on the (Inkscape downloads page)[http://inkscape.org/download/?lang=en].

Basic usage
-----------

To create a new interactive mockup:

1. Add magicmockup.js to an Inkscape document
	1. Create a new document in Inkscape
	2. Go to File > Document Properties (`Shift+Ctl+D`)
	3. Open the Scripting tab
	4. In the text input enter the path to magicmockup.js (e.g. `../Resources/magicmockup.js`) and click the `+` button to add the script.
2. Create a new layer to show when an element is clicked
	1. Open the layer palette (`Shift+Ctl+L`)
	2. Create a new layer (`+`)
	3. Name the layer something (e.g. `Dialog`)
3. Create an interactive element to trigger the layer
	1. Draw an object
	2. Open the object dialog (`Shift+Ctl+O`)
	3. Add one or more directives to the description field

Directives
----------

Supported directives include:
<dl>
<dt>
Show
</dt>
<dd>
Show the listed layers.

Usage: `show=LayerName(, LayerName2, ...)`
</dd>
<dt>
Hide
</dt>
<dd>
Hide the listed layers.

Usage: `hide=LayerName(, LayerName2, ...)`
</dd>
<dt>
Toggle
</dt>
<dd>
Toggle the visibility of the listed layers.

Usage: `toggle=LayerName(, LayerName2, ...)`
</dd>
</dl>

More information
----------------
See the (Magic Mockup repository)[https://github.com/garrett/magicmockup] on GitHub for more information.
