#!/bin/bash
cd ../Bokeh/
#python exportjs.py
cd examples 
python build_gallery.py  
cd ../../gh-pages-Bokeh 
cp -r  ../Bokeh/bokeh/server/static/ ./
