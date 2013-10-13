#!/bin/bash

cd ../Bokeh/sphinx
make html
cp -r _build/html/* ../../gh-pages-Bokeh/sphinx
