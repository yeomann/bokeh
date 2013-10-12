console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "66d106dc-ae83-431a-8134-e2534b749688"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "08707b59-4d13-4797-b1fc-6cf089045b52"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "d5dd7658-f208-4956-918c-7918b1b6b9c0"}, {"type": "LinearAxis", "id": "30464270-d179-4199-b25f-e8572f8812a1"}, {"type": "Grid", "id": "b240b997-1c93-4f7f-a0ce-d3d2ec7858ea"}, {"type": "Grid", "id": "842f39e3-afe6-4e09-bb71-a88a62a6bc40"}, {"type": "BoxSelectionOverlay", "id": "d4bbd162-6704-474a-a170-07a0f6b1962b"}, {"type": "GlyphRenderer", "id": "5dd35ec2-da46-47f7-8a2c-7cd1e94737d2"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "18e22892-3cd5-405c-b5ae-5b275f707906"}, {"type": "ZoomTool", "id": "bc153932-3307-4285-ad68-7a276210366a"}, {"type": "PreviewSaveTool", "id": "e1824ef6-5ce7-4dcd-a3c8-07157c3cc969"}, {"type": "ResizeTool", "id": "706ae526-d46a-42c4-9a24-d01c028b8b83"}, {"type": "SelectionTool", "id": "567a64fd-cee5-438d-a3ec-8f2983af7705"}, {"type": "PreviewSaveTool", "id": "0d398096-0257-41c1-8bb6-716afda82bb9"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "706ae526-d46a-42c4-9a24-d01c028b8b83", "doc": null}, "type": "ResizeTool", "id": "706ae526-d46a-42c4-9a24-d01c028b8b83"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "66d106dc-ae83-431a-8134-e2534b749688"}, {"type": "DataRange1d", "id": "08707b59-4d13-4797-b1fc-6cf089045b52"}], "dimensions": ["width", "height"], "doc": null, "id": "18e22892-3cd5-405c-b5ae-5b275f707906"}, "type": "PanTool", "id": "18e22892-3cd5-405c-b5ae-5b275f707906"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "9e255c3e-7be6-4838-9502-afcd0083fd3c"}, "type": "PlotContext", "id": "9e255c3e-7be6-4838-9502-afcd0083fd3c"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "d5dd7658-f208-4956-918c-7918b1b6b9c0", "dimension": 0}, "type": "LinearAxis", "id": "d5dd7658-f208-4956-918c-7918b1b6b9c0"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "567a64fd-cee5-438d-a3ec-8f2983af7705"}, "id": "d4bbd162-6704-474a-a170-07a0f6b1962b"}, "type": "BoxSelectionOverlay", "id": "d4bbd162-6704-474a-a170-07a0f6b1962b"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "842f39e3-afe6-4e09-bb71-a88a62a6bc40"}, "type": "Grid", "id": "842f39e3-afe6-4e09-bb71-a88a62a6bc40"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d7628016-1853-4d44-b493-4ed55427f1a8"}, "columns": ["x"]}], "id": "66d106dc-ae83-431a-8134-e2534b749688", "doc": null}, "type": "DataRange1d", "id": "66d106dc-ae83-431a-8134-e2534b749688"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d7628016-1853-4d44-b493-4ed55427f1a8"}, "doc": null, "id": "5dd35ec2-da46-47f7-8a2c-7cd1e94737d2", "xdata_range": {"type": "DataRange1d", "id": "66d106dc-ae83-431a-8134-e2534b749688"}, "ydata_range": {"type": "DataRange1d", "id": "08707b59-4d13-4797-b1fc-6cf089045b52"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "5dd35ec2-da46-47f7-8a2c-7cd1e94737d2"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "b240b997-1c93-4f7f-a0ce-d3d2ec7858ea"}, "type": "Grid", "id": "b240b997-1c93-4f7f-a0ce-d3d2ec7858ea"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "30464270-d179-4199-b25f-e8572f8812a1", "dimension": 1}, "type": "LinearAxis", "id": "30464270-d179-4199-b25f-e8572f8812a1"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "5dd35ec2-da46-47f7-8a2c-7cd1e94737d2"}], "id": "567a64fd-cee5-438d-a3ec-8f2983af7705"}, "type": "SelectionTool", "id": "567a64fd-cee5-438d-a3ec-8f2983af7705"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "d7628016-1853-4d44-b493-4ed55427f1a8"}, "type": "ColumnDataSource", "id": "d7628016-1853-4d44-b493-4ed55427f1a8"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "e1824ef6-5ce7-4dcd-a3c8-07157c3cc969", "doc": null}, "type": "PreviewSaveTool", "id": "e1824ef6-5ce7-4dcd-a3c8-07157c3cc969"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d7628016-1853-4d44-b493-4ed55427f1a8"}, "columns": ["y"]}], "id": "08707b59-4d13-4797-b1fc-6cf089045b52", "doc": null}, "type": "DataRange1d", "id": "08707b59-4d13-4797-b1fc-6cf089045b52"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "66d106dc-ae83-431a-8134-e2534b749688"}, {"type": "DataRange1d", "id": "08707b59-4d13-4797-b1fc-6cf089045b52"}], "dimensions": ["width", "height"], "id": "bc153932-3307-4285-ad68-7a276210366a"}, "type": "ZoomTool", "id": "bc153932-3307-4285-ad68-7a276210366a"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "0d398096-0257-41c1-8bb6-716afda82bb9", "doc": null}, "type": "PreviewSaveTool", "id": "0d398096-0257-41c1-8bb6-716afda82bb9"}];
    var modeltype = "PlotContext";
    var elementid = "97aa9e2a-adc5-46c8-8c4b-f09ac12bbff0";
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
