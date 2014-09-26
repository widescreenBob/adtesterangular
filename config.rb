##
## This file is only needed for Compass/Sass integration. If you are not using
## Compass, you may safely ignore or delete this file.
##
## If you'd like to learn more about Sass and Compass, see the sass/README.txt
## file for more information.
##

# Default to development if environment is not set.
saved = environment
if (environment.nil?)
  environment = :production
else
  environment = saved
end

# Location of the theme's resources.
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
generated_images_dir = images_dir + "/generated"
# Require any additional compass plugins installed on your system.
require 'compass'
require 'compass-normalize'
# require 'rgbapng'
require 'toolkit'
require 'singularitygs'
require 'singularity-extras'
require 'sass-globbing'
require 'sassy-buttons'

##
## You probably don't need to edit anything below this.
##

# You can select your preferred output style here (:expanded, :nested, :compact
# or :compressed).
output_style = (environment == :production) ? :expanded : :nested

# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server omega.
relative_assets = true

# Conditionally enable line comments when in development mode.
# line_comments = true

# Turn on Sourcemaps in dev
#sourcemap = (environment == :production) ? false : true
sourcemap = true

# Output debugging info in development mode.

