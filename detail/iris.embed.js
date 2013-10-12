console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "1ec502c6-cc6f-437d-a8fd-b52d4e7fa67b"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "ec632926-bed0-454f-b020-e8596940ff5a"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "2d2bff24-7d67-4395-ae40-991f0cb921fa"}, {"type": "LinearAxis", "id": "97e9dcad-4ddd-4eb4-959c-95a0ac2f96a1"}, {"type": "Grid", "id": "7d077a19-dee7-413c-8838-d32d8fefc0a3"}, {"type": "Grid", "id": "79536763-f62a-4ba0-b1ba-1406da9c3d49"}, {"type": "BoxSelectionOverlay", "id": "926c59b2-e9b6-4268-8bad-7ac29584105f"}, {"type": "GlyphRenderer", "id": "eac1d94c-a219-4898-810f-e15f208235f9"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "8705bf58-54a7-4ff2-bff8-ae45e00f073a"}, {"type": "ZoomTool", "id": "f0138064-9486-49a8-a0f3-748202d6b92e"}, {"type": "PreviewSaveTool", "id": "0a3178f4-2674-4558-a71b-a78769e0cb57"}, {"type": "ResizeTool", "id": "a0c252bb-1339-4665-b123-c909a161e9cf"}, {"type": "SelectionTool", "id": "65061523-06e0-4aed-8b27-0dbf31c61542"}, {"type": "PreviewSaveTool", "id": "b97f3ebd-cb78-426c-ad52-a0b15ee6ec26"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "d6d7a7de-a1ce-47f1-b354-7982aefa4ab3"}, "type": "ColumnDataSource", "id": "d6d7a7de-a1ce-47f1-b354-7982aefa4ab3"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "43d94863-cbb9-4a36-aad9-64ce63174a54"}, "type": "PlotContext", "id": "43d94863-cbb9-4a36-aad9-64ce63174a54"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "1ec502c6-cc6f-437d-a8fd-b52d4e7fa67b"}, {"type": "DataRange1d", "id": "ec632926-bed0-454f-b020-e8596940ff5a"}], "dimensions": ["width", "height"], "doc": null, "id": "8705bf58-54a7-4ff2-bff8-ae45e00f073a"}, "type": "PanTool", "id": "8705bf58-54a7-4ff2-bff8-ae45e00f073a"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d6d7a7de-a1ce-47f1-b354-7982aefa4ab3"}, "columns": ["y"]}], "id": "ec632926-bed0-454f-b020-e8596940ff5a", "doc": null}, "type": "DataRange1d", "id": "ec632926-bed0-454f-b020-e8596940ff5a"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "0a3178f4-2674-4558-a71b-a78769e0cb57", "doc": null}, "type": "PreviewSaveTool", "id": "0a3178f4-2674-4558-a71b-a78769e0cb57"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "2d2bff24-7d67-4395-ae40-991f0cb921fa", "dimension": 0}, "type": "LinearAxis", "id": "2d2bff24-7d67-4395-ae40-991f0cb921fa"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "97e9dcad-4ddd-4eb4-959c-95a0ac2f96a1", "dimension": 1}, "type": "LinearAxis", "id": "97e9dcad-4ddd-4eb4-959c-95a0ac2f96a1"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d6d7a7de-a1ce-47f1-b354-7982aefa4ab3"}, "doc": null, "id": "eac1d94c-a219-4898-810f-e15f208235f9", "xdata_range": {"type": "DataRange1d", "id": "1ec502c6-cc6f-437d-a8fd-b52d4e7fa67b"}, "ydata_range": {"type": "DataRange1d", "id": "ec632926-bed0-454f-b020-e8596940ff5a"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "eac1d94c-a219-4898-810f-e15f208235f9"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "7d077a19-dee7-413c-8838-d32d8fefc0a3"}, "type": "Grid", "id": "7d077a19-dee7-413c-8838-d32d8fefc0a3"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d6d7a7de-a1ce-47f1-b354-7982aefa4ab3"}, "columns": ["x"]}], "id": "1ec502c6-cc6f-437d-a8fd-b52d4e7fa67b", "doc": null}, "type": "DataRange1d", "id": "1ec502c6-cc6f-437d-a8fd-b52d4e7fa67b"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "b97f3ebd-cb78-426c-ad52-a0b15ee6ec26", "doc": null}, "type": "PreviewSaveTool", "id": "b97f3ebd-cb78-426c-ad52-a0b15ee6ec26"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "1ec502c6-cc6f-437d-a8fd-b52d4e7fa67b"}, {"type": "DataRange1d", "id": "ec632926-bed0-454f-b020-e8596940ff5a"}], "dimensions": ["width", "height"], "id": "f0138064-9486-49a8-a0f3-748202d6b92e"}, "type": "ZoomTool", "id": "f0138064-9486-49a8-a0f3-748202d6b92e"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "79536763-f62a-4ba0-b1ba-1406da9c3d49"}, "type": "Grid", "id": "79536763-f62a-4ba0-b1ba-1406da9c3d49"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "65061523-06e0-4aed-8b27-0dbf31c61542"}, "id": "926c59b2-e9b6-4268-8bad-7ac29584105f"}, "type": "BoxSelectionOverlay", "id": "926c59b2-e9b6-4268-8bad-7ac29584105f"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "eac1d94c-a219-4898-810f-e15f208235f9"}], "id": "65061523-06e0-4aed-8b27-0dbf31c61542"}, "type": "SelectionTool", "id": "65061523-06e0-4aed-8b27-0dbf31c61542"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "a0c252bb-1339-4665-b123-c909a161e9cf", "doc": null}, "type": "ResizeTool", "id": "a0c252bb-1339-4665-b123-c909a161e9cf"}];
    var modeltype = "PlotContext";
    var elementid = "99f3906a-80bb-4cee-a4f0-aeff74d66e18";
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
