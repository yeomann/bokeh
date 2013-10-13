#!/bin/bash


s3cmd put  --recursive -P sphinx/ s3://bokeh_docs/0.2/sphinx/
s3cmd put  --recursive -P js/ s3://bokeh_docs/0.2/js/
s3cmd put  --recursive -P vendor/ s3://bokeh_docs/0.2/vendor/
s3cmd put  --recursive -P img/ s3://bokeh_docs/0.2/img/


