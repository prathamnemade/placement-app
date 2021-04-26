To create a Dumb Component:
nx g lib <LIB_NAME> --directory=<NAME_OF_FOLDER>

To install story book inside the library
nx generate @nrwl/storybook:configuration --name=<NAME> --no-interactive

To run the storybook
nx run <PROJECT_NAME>>:storybook

The purpose of the storybook library under the shared folder is to execute all the libraries as a bundle and in a common UI one can view all the libs under one storybook.

How to deal with SCSS?
a. Add the common scss files under the styles library. "global.scss" is the goto file for all the modules/projects.

How to deal with Fonts?
a. To add new fonts, add the respective fonts folder under the fonts library.
b. Once the new fonts are added, do register the font under the styles library(\_fonts.scss)

To deal with the common COLOR/Theme, do add the colors or themes based configuration under the global.scss OR can create one file and import it under the global.scss

To make use of the common images,
a. Add the images under the assets library. The import or the usage wil be absolute path "/assets/<IMAGE_NAME>"

To add the common assets:
a. nx g @nrwl/workspace:lib assets --directory=shared -
This will crearte a common assets folder under the libs folder. libs>>shared>>assets

Note: Point a is one time process

b. import the assets into specific folder in workspace.json build under assets attribute.
As of now only "pngs" are allowed. If there are any other format do add it under the build section.

c. To integrate this shared assets with specifc folder, "implicitDependencies": ["shared-assets"] use this in nx.json

ALL THE CONFIGURATIONS NEEDS TO BE DONE UNDER THE <workspace.json> FILE !!
