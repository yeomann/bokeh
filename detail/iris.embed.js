console.log("embed.js");

(function(global) {

    var host = "/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "8f81edb9-672e-4e73-ba83-b025a68551e5"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "3cd89cbc-fef1-4d19-8854-0ccede4b4241"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "73ac1905-7511-40eb-bfb0-62fb8708db33"}, {"type": "LinearAxis", "id": "d07590e8-4a65-449e-b4eb-840a50f16957"}, {"type": "Grid", "id": "2a07a36f-03c5-4050-9d29-7ad3e82927f3"}, {"type": "Grid", "id": "5655ab0a-9270-4758-ab33-8752d4b027e2"}, {"type": "BoxSelectionOverlay", "id": "06984534-6ad6-461e-8bf8-8d8fcff0517b"}, {"type": "GlyphRenderer", "id": "4f77600a-03c5-4a3f-a351-2e18c681fc71"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "d490ebbb-587d-43fd-a147-121dca13eed3"}, {"type": "ZoomTool", "id": "f28ba1b6-855d-4672-93dd-27228e644640"}, {"type": "PreviewSaveTool", "id": "77072510-664d-4ef2-9863-b787280c9d6c"}, {"type": "ResizeTool", "id": "11f8c0ba-7017-4f6b-a90f-8c9b1343ff86"}, {"type": "SelectionTool", "id": "02b6a281-32e8-4dd5-ab3b-92aefd64850c"}, {"type": "PreviewSaveTool", "id": "521fbf52-37f8-4fd9-bac8-024c8839f24f"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "ff29fd33-4fb3-47e4-a96f-02df8e543012"}, "type": "PlotContext", "id": "ff29fd33-4fb3-47e4-a96f-02df8e543012"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "5655ab0a-9270-4758-ab33-8752d4b027e2"}, "type": "Grid", "id": "5655ab0a-9270-4758-ab33-8752d4b027e2"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d961ed1b-41b4-4d55-9f96-c031098f4599"}, "doc": null, "id": "4f77600a-03c5-4a3f-a351-2e18c681fc71", "xdata_range": {"type": "DataRange1d", "id": "8f81edb9-672e-4e73-ba83-b025a68551e5"}, "ydata_range": {"type": "DataRange1d", "id": "3cd89cbc-fef1-4d19-8854-0ccede4b4241"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "4f77600a-03c5-4a3f-a351-2e18c681fc71"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "d961ed1b-41b4-4d55-9f96-c031098f4599"}, "type": "ColumnDataSource", "id": "d961ed1b-41b4-4d55-9f96-c031098f4599"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "2a07a36f-03c5-4050-9d29-7ad3e82927f3"}, "type": "Grid", "id": "2a07a36f-03c5-4050-9d29-7ad3e82927f3"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "8f81edb9-672e-4e73-ba83-b025a68551e5"}, {"type": "DataRange1d", "id": "3cd89cbc-fef1-4d19-8854-0ccede4b4241"}], "dimensions": ["width", "height"], "id": "f28ba1b6-855d-4672-93dd-27228e644640"}, "type": "ZoomTool", "id": "f28ba1b6-855d-4672-93dd-27228e644640"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "4f77600a-03c5-4a3f-a351-2e18c681fc71"}], "id": "02b6a281-32e8-4dd5-ab3b-92aefd64850c"}, "type": "SelectionTool", "id": "02b6a281-32e8-4dd5-ab3b-92aefd64850c"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "521fbf52-37f8-4fd9-bac8-024c8839f24f", "doc": null}, "type": "PreviewSaveTool", "id": "521fbf52-37f8-4fd9-bac8-024c8839f24f"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "11f8c0ba-7017-4f6b-a90f-8c9b1343ff86", "doc": null}, "type": "ResizeTool", "id": "11f8c0ba-7017-4f6b-a90f-8c9b1343ff86"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d961ed1b-41b4-4d55-9f96-c031098f4599"}, "columns": ["x"]}], "id": "8f81edb9-672e-4e73-ba83-b025a68551e5", "doc": null}, "type": "DataRange1d", "id": "8f81edb9-672e-4e73-ba83-b025a68551e5"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d961ed1b-41b4-4d55-9f96-c031098f4599"}, "columns": ["y"]}], "id": "3cd89cbc-fef1-4d19-8854-0ccede4b4241", "doc": null}, "type": "DataRange1d", "id": "3cd89cbc-fef1-4d19-8854-0ccede4b4241"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "d07590e8-4a65-449e-b4eb-840a50f16957", "dimension": 1}, "type": "LinearAxis", "id": "d07590e8-4a65-449e-b4eb-840a50f16957"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "73ac1905-7511-40eb-bfb0-62fb8708db33", "dimension": 0}, "type": "LinearAxis", "id": "73ac1905-7511-40eb-bfb0-62fb8708db33"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "02b6a281-32e8-4dd5-ab3b-92aefd64850c"}, "id": "06984534-6ad6-461e-8bf8-8d8fcff0517b"}, "type": "BoxSelectionOverlay", "id": "06984534-6ad6-461e-8bf8-8d8fcff0517b"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "8f81edb9-672e-4e73-ba83-b025a68551e5"}, {"type": "DataRange1d", "id": "3cd89cbc-fef1-4d19-8854-0ccede4b4241"}], "dimensions": ["width", "height"], "doc": null, "id": "d490ebbb-587d-43fd-a147-121dca13eed3"}, "type": "PanTool", "id": "d490ebbb-587d-43fd-a147-121dca13eed3"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "77072510-664d-4ef2-9863-b787280c9d6c", "doc": null}, "type": "PreviewSaveTool", "id": "77072510-664d-4ef2-9863-b787280c9d6c"}];
    var modeltype = "PlotContext";
    var elementid = "dd31ac9e-0928-49a3-ac11-efb3bbe844ec";
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
