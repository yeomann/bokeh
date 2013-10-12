console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "221d2387-8743-493e-b92d-ffb33acf46c9"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "869b88b9-b6f8-4021-a26f-829e02a2b1da"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "454977cf-bad5-4cd8-9f2c-71224d49707a"}, {"type": "LinearAxis", "id": "2af71cc1-8b7a-4a70-aeff-3c3149f825e3"}, {"type": "Grid", "id": "31871c30-9040-4fcc-a1df-a3e2a1beac04"}, {"type": "Grid", "id": "7cf64b20-7b75-4c8f-bb1d-e8af6d1fd793"}, {"type": "BoxSelectionOverlay", "id": "5fd9499d-8d4d-4ef7-93d6-70993b3f2d11"}, {"type": "GlyphRenderer", "id": "53f604fe-82b0-4476-8063-5f21aa8109ed"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "77f38773-b9a2-484a-b371-adf43c2cafaa"}, {"type": "ZoomTool", "id": "3d1c1524-7edd-42cf-a0d2-2b522236fc2b"}, {"type": "PreviewSaveTool", "id": "7cd4ce8f-178b-4594-ab7b-973f196d36e7"}, {"type": "ResizeTool", "id": "63406b19-2f22-4ccd-8797-337dcaa91182"}, {"type": "SelectionTool", "id": "2a27eea6-7153-41fc-aa6e-a05ec431a851"}, {"type": "PreviewSaveTool", "id": "7224d762-d931-4692-af76-677a0e4125b0"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8218bb63-2ed6-4d6d-98a9-06b5c7c38e2f"}, "columns": ["x"]}], "id": "221d2387-8743-493e-b92d-ffb33acf46c9", "doc": null}, "type": "DataRange1d", "id": "221d2387-8743-493e-b92d-ffb33acf46c9"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "221d2387-8743-493e-b92d-ffb33acf46c9"}, {"type": "DataRange1d", "id": "869b88b9-b6f8-4021-a26f-829e02a2b1da"}], "dimensions": ["width", "height"], "id": "3d1c1524-7edd-42cf-a0d2-2b522236fc2b"}, "type": "ZoomTool", "id": "3d1c1524-7edd-42cf-a0d2-2b522236fc2b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8218bb63-2ed6-4d6d-98a9-06b5c7c38e2f"}, "columns": ["y"]}], "id": "869b88b9-b6f8-4021-a26f-829e02a2b1da", "doc": null}, "type": "DataRange1d", "id": "869b88b9-b6f8-4021-a26f-829e02a2b1da"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "221d2387-8743-493e-b92d-ffb33acf46c9"}, {"type": "DataRange1d", "id": "869b88b9-b6f8-4021-a26f-829e02a2b1da"}], "dimensions": ["width", "height"], "doc": null, "id": "77f38773-b9a2-484a-b371-adf43c2cafaa"}, "type": "PanTool", "id": "77f38773-b9a2-484a-b371-adf43c2cafaa"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "2af71cc1-8b7a-4a70-aeff-3c3149f825e3", "dimension": 1}, "type": "LinearAxis", "id": "2af71cc1-8b7a-4a70-aeff-3c3149f825e3"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "2a27eea6-7153-41fc-aa6e-a05ec431a851"}, "id": "5fd9499d-8d4d-4ef7-93d6-70993b3f2d11"}, "type": "BoxSelectionOverlay", "id": "5fd9499d-8d4d-4ef7-93d6-70993b3f2d11"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "63406b19-2f22-4ccd-8797-337dcaa91182", "doc": null}, "type": "ResizeTool", "id": "63406b19-2f22-4ccd-8797-337dcaa91182"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "ed57ec54-c8b3-43dc-9e73-9bc6de6afa83"}, "type": "PlotContext", "id": "ed57ec54-c8b3-43dc-9e73-9bc6de6afa83"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8218bb63-2ed6-4d6d-98a9-06b5c7c38e2f"}, "doc": null, "id": "53f604fe-82b0-4476-8063-5f21aa8109ed", "xdata_range": {"type": "DataRange1d", "id": "221d2387-8743-493e-b92d-ffb33acf46c9"}, "ydata_range": {"type": "DataRange1d", "id": "869b88b9-b6f8-4021-a26f-829e02a2b1da"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "53f604fe-82b0-4476-8063-5f21aa8109ed"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "7cf64b20-7b75-4c8f-bb1d-e8af6d1fd793"}, "type": "Grid", "id": "7cf64b20-7b75-4c8f-bb1d-e8af6d1fd793"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "7cd4ce8f-178b-4594-ab7b-973f196d36e7", "doc": null}, "type": "PreviewSaveTool", "id": "7cd4ce8f-178b-4594-ab7b-973f196d36e7"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "31871c30-9040-4fcc-a1df-a3e2a1beac04"}, "type": "Grid", "id": "31871c30-9040-4fcc-a1df-a3e2a1beac04"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "7224d762-d931-4692-af76-677a0e4125b0", "doc": null}, "type": "PreviewSaveTool", "id": "7224d762-d931-4692-af76-677a0e4125b0"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "8218bb63-2ed6-4d6d-98a9-06b5c7c38e2f"}, "type": "ColumnDataSource", "id": "8218bb63-2ed6-4d6d-98a9-06b5c7c38e2f"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "53f604fe-82b0-4476-8063-5f21aa8109ed"}], "id": "2a27eea6-7153-41fc-aa6e-a05ec431a851"}, "type": "SelectionTool", "id": "2a27eea6-7153-41fc-aa6e-a05ec431a851"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "454977cf-bad5-4cd8-9f2c-71224d49707a", "dimension": 0}, "type": "LinearAxis", "id": "454977cf-bad5-4cd8-9f2c-71224d49707a"}];
    var modeltype = "PlotContext";
    var elementid = "49b602c8-af80-443b-a8ef-bbee49c9b0c8";
    var plotID = "iris";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));
