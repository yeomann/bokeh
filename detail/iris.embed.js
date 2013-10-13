console.log("embed.js");

(function(global) {

    var host = "https://s3.amazonaws.com/bokeh_docs/0.2/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "c6807137-132f-4e2d-b5fe-517bdbdbad2f", "dimension": 1}, "type": "LinearAxis", "id": "c6807137-132f-4e2d-b5fe-517bdbdbad2f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "1eed6996-8c2a-4392-856c-5e57352c94dc"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "f8f0b2e6-997c-4f12-bf63-caa679bfb93d"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "4b7c1a14-2f0a-4a79-a321-b47bf7d0c00e"}, {"type": "LinearAxis", "id": "c6807137-132f-4e2d-b5fe-517bdbdbad2f"}, {"type": "Grid", "id": "5c67937c-a5b1-48f6-b0ee-e84298d0a160"}, {"type": "Grid", "id": "6a7b50cf-e44d-405b-8c23-67430f99887c"}, {"type": "BoxSelectionOverlay", "id": "c45b3e92-05f1-4b1d-8f9d-40d4e64e0843"}, {"type": "GlyphRenderer", "id": "63ab2ced-5a56-41bf-befb-58f7e4ff9755"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "95f026b6-5cfe-41a5-b7ba-1060ad2f332d"}, {"type": "ZoomTool", "id": "88542da6-7fc4-40a6-9b10-2445b805f0c7"}, {"type": "PreviewSaveTool", "id": "2fac760e-703a-4c3b-9c5e-42c8c6dcd4ab"}, {"type": "ResizeTool", "id": "74170e25-b08b-47cf-a0af-cf3a3529783f"}, {"type": "SelectionTool", "id": "52afd67e-bb07-4942-8e9d-11384b12a652"}, {"type": "PreviewSaveTool", "id": "6135802d-a428-4e76-9651-3b94d89b8e4b"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "1eed6996-8c2a-4392-856c-5e57352c94dc"}, {"type": "DataRange1d", "id": "f8f0b2e6-997c-4f12-bf63-caa679bfb93d"}], "dimensions": ["width", "height"], "doc": null, "id": "95f026b6-5cfe-41a5-b7ba-1060ad2f332d"}, "type": "PanTool", "id": "95f026b6-5cfe-41a5-b7ba-1060ad2f332d"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "52afd67e-bb07-4942-8e9d-11384b12a652"}, "id": "c45b3e92-05f1-4b1d-8f9d-40d4e64e0843"}, "type": "BoxSelectionOverlay", "id": "c45b3e92-05f1-4b1d-8f9d-40d4e64e0843"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "2fac760e-703a-4c3b-9c5e-42c8c6dcd4ab", "doc": null}, "type": "PreviewSaveTool", "id": "2fac760e-703a-4c3b-9c5e-42c8c6dcd4ab"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "4b7c1a14-2f0a-4a79-a321-b47bf7d0c00e", "dimension": 0}, "type": "LinearAxis", "id": "4b7c1a14-2f0a-4a79-a321-b47bf7d0c00e"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "6a7b50cf-e44d-405b-8c23-67430f99887c"}, "type": "Grid", "id": "6a7b50cf-e44d-405b-8c23-67430f99887c"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "5c67937c-a5b1-48f6-b0ee-e84298d0a160"}, "type": "Grid", "id": "5c67937c-a5b1-48f6-b0ee-e84298d0a160"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "63ab2ced-5a56-41bf-befb-58f7e4ff9755"}], "id": "52afd67e-bb07-4942-8e9d-11384b12a652"}, "type": "SelectionTool", "id": "52afd67e-bb07-4942-8e9d-11384b12a652"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "6135802d-a428-4e76-9651-3b94d89b8e4b", "doc": null}, "type": "PreviewSaveTool", "id": "6135802d-a428-4e76-9651-3b94d89b8e4b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "457c5f5c-42db-437d-bffb-9168fdd07b17"}, "columns": ["y"]}], "id": "f8f0b2e6-997c-4f12-bf63-caa679bfb93d", "doc": null}, "type": "DataRange1d", "id": "f8f0b2e6-997c-4f12-bf63-caa679bfb93d"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "1eed6996-8c2a-4392-856c-5e57352c94dc"}, {"type": "DataRange1d", "id": "f8f0b2e6-997c-4f12-bf63-caa679bfb93d"}], "dimensions": ["width", "height"], "id": "88542da6-7fc4-40a6-9b10-2445b805f0c7"}, "type": "ZoomTool", "id": "88542da6-7fc4-40a6-9b10-2445b805f0c7"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "457c5f5c-42db-437d-bffb-9168fdd07b17"}, "type": "ColumnDataSource", "id": "457c5f5c-42db-437d-bffb-9168fdd07b17"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "457c5f5c-42db-437d-bffb-9168fdd07b17"}, "columns": ["x"]}], "id": "1eed6996-8c2a-4392-856c-5e57352c94dc", "doc": null}, "type": "DataRange1d", "id": "1eed6996-8c2a-4392-856c-5e57352c94dc"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "6b49fd8d-6d20-47d6-8248-8e7a5ba3f73c"}, "type": "PlotContext", "id": "6b49fd8d-6d20-47d6-8248-8e7a5ba3f73c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "457c5f5c-42db-437d-bffb-9168fdd07b17"}, "doc": null, "id": "63ab2ced-5a56-41bf-befb-58f7e4ff9755", "xdata_range": {"type": "DataRange1d", "id": "1eed6996-8c2a-4392-856c-5e57352c94dc"}, "ydata_range": {"type": "DataRange1d", "id": "f8f0b2e6-997c-4f12-bf63-caa679bfb93d"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "63ab2ced-5a56-41bf-befb-58f7e4ff9755"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "74170e25-b08b-47cf-a0af-cf3a3529783f", "doc": null}, "type": "ResizeTool", "id": "74170e25-b08b-47cf-a0af-cf3a3529783f"}];
    var modeltype = "PlotContext";
    var elementid = "92d802cb-4a80-46cb-8290-78956fe9202d";
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
