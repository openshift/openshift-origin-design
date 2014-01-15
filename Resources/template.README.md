Wireframe template
==================

The wireframe template makes it easy to create consistent annotated design documents in Inkscape.

Install the template
--------------------

Simply copy the template file into the Inkscape template folder and restart Inkscape.

On linux, the Inkscape template file is `~/.config/inkscape/templates`

Use the template
----------------

Open Inkscape and select File > New > 'Wireframe template'. Fill in the appropriate information and create as many pages as needed.

Compile the template
--------------------

Inkscape doesn't natively support multi-page documents, so in order to create a multi-page PDF from the template, you need a little outside help.

### Install InkscapeSlide

(Inscapeslide)[https://github.com/mknaust/inkscapeslide] is a small python script that creates a multi-page PDF from a layered Inkscape document

Installation is done from the command-line:
	$ git clone https://github.com/mknaust/inkscapeslide.git
	$ cd inkscapeslide
	$ ./setup.py build
	$ sudo ./setup.py install

### Content layer

InkscapeSlide uses a special layer in an Inkscape document to determine which layers to use to create a page in the PDF document.

1. Create a new layer in Inkscape called `content`.
2. Create an unwrapped text element in the layer
3. Each line in the text element defines a page in the resulting PDF document
4. You can include multiple Inkscape layers in a single page by listing them on a single line separated by comments.

Example content element:
	CoverPage
	PageBG, Page1
	PageBG, Page2
	PageBG, Page3
	EndPage

The wireframe template includes a content layer to help you get started.

### Create PDF

Call `inkscapeslide` from the command-line and pass in the path to the SVG document you want to convert.

Example:
`inkscapeslide src/example\ document.svg`

InkscapeSlide will create a PDF document of the same name in the current folder.

