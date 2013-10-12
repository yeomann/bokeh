console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "a292aa27-5b25-4e35-bd8e-3b8ca54e5863"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "35175e56-badf-4865-ad8c-409d2108fa39"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "3a0f175e-7368-4be9-8f5c-732ecf138b03"}, {"type": "LinearAxis", "id": "456a8f81-ff96-47df-bcbc-6eb97370527e"}, {"type": "Grid", "id": "d90e692d-a426-4954-b8ca-f18ee3973d1c"}, {"type": "Grid", "id": "40f83597-f9f5-438d-ad61-f6567ea4b212"}, {"type": "BoxSelectionOverlay", "id": "5ce18a65-ffde-4925-add3-dbe8983ee161"}, {"type": "GlyphRenderer", "id": "9c4751e4-db0d-41fa-842b-4cf843b4cea2"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "7af5b1fc-3838-4f39-89b1-a0f977ac470e"}, {"type": "ZoomTool", "id": "a3d53381-1f60-489f-934f-5345278f581f"}, {"type": "PreviewSaveTool", "id": "06c32504-8b01-4e23-a816-6e9ff9ae1f18"}, {"type": "ResizeTool", "id": "31a46602-709d-46a3-a615-ed033fc78e33"}, {"type": "SelectionTool", "id": "f94b23e4-d87f-4535-abe8-88814a9cd7ae"}, {"type": "PreviewSaveTool", "id": "f3df773c-270e-41d8-b5fd-730d8de94b4b"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "f3df773c-270e-41d8-b5fd-730d8de94b4b", "doc": null}, "type": "PreviewSaveTool", "id": "f3df773c-270e-41d8-b5fd-730d8de94b4b"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "3a0f175e-7368-4be9-8f5c-732ecf138b03", "dimension": 0}, "type": "LinearAxis", "id": "3a0f175e-7368-4be9-8f5c-732ecf138b03"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "9c4751e4-db0d-41fa-842b-4cf843b4cea2"}], "id": "f94b23e4-d87f-4535-abe8-88814a9cd7ae"}, "type": "SelectionTool", "id": "f94b23e4-d87f-4535-abe8-88814a9cd7ae"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "d90e692d-a426-4954-b8ca-f18ee3973d1c"}, "type": "Grid", "id": "d90e692d-a426-4954-b8ca-f18ee3973d1c"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "ebe439b4-d6e3-4f69-8a74-326ef67076ee"}, "type": "ColumnDataSource", "id": "ebe439b4-d6e3-4f69-8a74-326ef67076ee"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "a292aa27-5b25-4e35-bd8e-3b8ca54e5863"}, {"type": "DataRange1d", "id": "35175e56-badf-4865-ad8c-409d2108fa39"}], "dimensions": ["width", "height"], "id": "a3d53381-1f60-489f-934f-5345278f581f"}, "type": "ZoomTool", "id": "a3d53381-1f60-489f-934f-5345278f581f"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "a292aa27-5b25-4e35-bd8e-3b8ca54e5863"}, {"type": "DataRange1d", "id": "35175e56-badf-4865-ad8c-409d2108fa39"}], "dimensions": ["width", "height"], "doc": null, "id": "7af5b1fc-3838-4f39-89b1-a0f977ac470e"}, "type": "PanTool", "id": "7af5b1fc-3838-4f39-89b1-a0f977ac470e"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "f94b23e4-d87f-4535-abe8-88814a9cd7ae"}, "id": "5ce18a65-ffde-4925-add3-dbe8983ee161"}, "type": "BoxSelectionOverlay", "id": "5ce18a65-ffde-4925-add3-dbe8983ee161"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ebe439b4-d6e3-4f69-8a74-326ef67076ee"}, "columns": ["y"]}], "id": "35175e56-badf-4865-ad8c-409d2108fa39", "doc": null}, "type": "DataRange1d", "id": "35175e56-badf-4865-ad8c-409d2108fa39"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "40f83597-f9f5-438d-ad61-f6567ea4b212"}, "type": "Grid", "id": "40f83597-f9f5-438d-ad61-f6567ea4b212"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "be513051-804a-4d66-bf4e-6e857f86e3c2"}, "type": "PlotContext", "id": "be513051-804a-4d66-bf4e-6e857f86e3c2"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "31a46602-709d-46a3-a615-ed033fc78e33", "doc": null}, "type": "ResizeTool", "id": "31a46602-709d-46a3-a615-ed033fc78e33"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ebe439b4-d6e3-4f69-8a74-326ef67076ee"}, "columns": ["x"]}], "id": "a292aa27-5b25-4e35-bd8e-3b8ca54e5863", "doc": null}, "type": "DataRange1d", "id": "a292aa27-5b25-4e35-bd8e-3b8ca54e5863"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "06c32504-8b01-4e23-a816-6e9ff9ae1f18", "doc": null}, "type": "PreviewSaveTool", "id": "06c32504-8b01-4e23-a816-6e9ff9ae1f18"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "456a8f81-ff96-47df-bcbc-6eb97370527e", "dimension": 1}, "type": "LinearAxis", "id": "456a8f81-ff96-47df-bcbc-6eb97370527e"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "ebe439b4-d6e3-4f69-8a74-326ef67076ee"}, "doc": null, "id": "9c4751e4-db0d-41fa-842b-4cf843b4cea2", "xdata_range": {"type": "DataRange1d", "id": "a292aa27-5b25-4e35-bd8e-3b8ca54e5863"}, "ydata_range": {"type": "DataRange1d", "id": "35175e56-badf-4865-ad8c-409d2108fa39"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "9c4751e4-db0d-41fa-842b-4cf843b4cea2"}];
    var modeltype = "PlotContext";
    var elementid = "f851488e-1fac-424f-b3e6-00d4f0cdfd2b";
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
