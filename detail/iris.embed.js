console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "8f4d156f-0a27-47fe-9711-cd3e03e624ad"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "15df4d56-92ed-48ce-b7e0-cf8a31f71915"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "bf4d5663-c427-49ff-922b-c86e2fbe0888"}, {"type": "LinearAxis", "id": "9d620f9b-1096-4356-a5f7-61eb5b656ab9"}, {"type": "Grid", "id": "ab78f3db-1f5d-49d4-81a7-0579e3463887"}, {"type": "Grid", "id": "f41a1554-019c-4ab6-a2b3-3f8466d423a7"}, {"type": "BoxSelectionOverlay", "id": "03d5e9fd-a9b0-4714-ada6-286ec20fee70"}, {"type": "GlyphRenderer", "id": "c8ebccd8-3e5d-405a-9547-a5bb0ba76c92"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "5db82587-df9c-46ba-b83a-c576d2d060a6"}, {"type": "ZoomTool", "id": "6d46e223-343c-4434-97b7-78e448850833"}, {"type": "PreviewSaveTool", "id": "a39e31e1-7303-4c2f-8c3a-7ff459ab574d"}, {"type": "ResizeTool", "id": "4c5296c4-7263-4483-ba70-ab0140ce054c"}, {"type": "SelectionTool", "id": "d994dd6b-24c3-4860-a352-a5cb8d69f579"}, {"type": "PreviewSaveTool", "id": "b7e0eb37-1a9c-48f1-aa93-4b90b24b6929"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "52b83163-c75c-45a7-9426-cff3be302670"}, "doc": null, "id": "c8ebccd8-3e5d-405a-9547-a5bb0ba76c92", "xdata_range": {"type": "DataRange1d", "id": "8f4d156f-0a27-47fe-9711-cd3e03e624ad"}, "ydata_range": {"type": "DataRange1d", "id": "15df4d56-92ed-48ce-b7e0-cf8a31f71915"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "c8ebccd8-3e5d-405a-9547-a5bb0ba76c92"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "52b83163-c75c-45a7-9426-cff3be302670"}, "columns": ["x"]}], "id": "8f4d156f-0a27-47fe-9711-cd3e03e624ad", "doc": null}, "type": "DataRange1d", "id": "8f4d156f-0a27-47fe-9711-cd3e03e624ad"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "8f4d156f-0a27-47fe-9711-cd3e03e624ad"}, {"type": "DataRange1d", "id": "15df4d56-92ed-48ce-b7e0-cf8a31f71915"}], "dimensions": ["width", "height"], "doc": null, "id": "5db82587-df9c-46ba-b83a-c576d2d060a6"}, "type": "PanTool", "id": "5db82587-df9c-46ba-b83a-c576d2d060a6"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "b7e0eb37-1a9c-48f1-aa93-4b90b24b6929", "doc": null}, "type": "PreviewSaveTool", "id": "b7e0eb37-1a9c-48f1-aa93-4b90b24b6929"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "f41a1554-019c-4ab6-a2b3-3f8466d423a7"}, "type": "Grid", "id": "f41a1554-019c-4ab6-a2b3-3f8466d423a7"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "8f4d156f-0a27-47fe-9711-cd3e03e624ad"}, {"type": "DataRange1d", "id": "15df4d56-92ed-48ce-b7e0-cf8a31f71915"}], "dimensions": ["width", "height"], "id": "6d46e223-343c-4434-97b7-78e448850833"}, "type": "ZoomTool", "id": "6d46e223-343c-4434-97b7-78e448850833"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "bf4d5663-c427-49ff-922b-c86e2fbe0888", "dimension": 0}, "type": "LinearAxis", "id": "bf4d5663-c427-49ff-922b-c86e2fbe0888"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "52b83163-c75c-45a7-9426-cff3be302670"}, "type": "ColumnDataSource", "id": "52b83163-c75c-45a7-9426-cff3be302670"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "4c5296c4-7263-4483-ba70-ab0140ce054c", "doc": null}, "type": "ResizeTool", "id": "4c5296c4-7263-4483-ba70-ab0140ce054c"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "9d620f9b-1096-4356-a5f7-61eb5b656ab9", "dimension": 1}, "type": "LinearAxis", "id": "9d620f9b-1096-4356-a5f7-61eb5b656ab9"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "c8ebccd8-3e5d-405a-9547-a5bb0ba76c92"}], "id": "d994dd6b-24c3-4860-a352-a5cb8d69f579"}, "type": "SelectionTool", "id": "d994dd6b-24c3-4860-a352-a5cb8d69f579"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "8b505cf8-3c39-4fb3-988e-f03f9ff87aba"}, "type": "PlotContext", "id": "8b505cf8-3c39-4fb3-988e-f03f9ff87aba"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "ab78f3db-1f5d-49d4-81a7-0579e3463887"}, "type": "Grid", "id": "ab78f3db-1f5d-49d4-81a7-0579e3463887"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "d994dd6b-24c3-4860-a352-a5cb8d69f579"}, "id": "03d5e9fd-a9b0-4714-ada6-286ec20fee70"}, "type": "BoxSelectionOverlay", "id": "03d5e9fd-a9b0-4714-ada6-286ec20fee70"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "52b83163-c75c-45a7-9426-cff3be302670"}, "columns": ["y"]}], "id": "15df4d56-92ed-48ce-b7e0-cf8a31f71915", "doc": null}, "type": "DataRange1d", "id": "15df4d56-92ed-48ce-b7e0-cf8a31f71915"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "a39e31e1-7303-4c2f-8c3a-7ff459ab574d", "doc": null}, "type": "PreviewSaveTool", "id": "a39e31e1-7303-4c2f-8c3a-7ff459ab574d"}];
    var modeltype = "PlotContext";
    var elementid = "a1c4c0ce-bcdd-4499-8a89-6ea64b091b76";
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
