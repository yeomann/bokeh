console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "b72c4c89-c4ed-40e5-a2e4-98d5504fda68", "dimension": 1}, "type": "LinearAxis", "id": "b72c4c89-c4ed-40e5-a2e4-98d5504fda68"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "5c11f4cb-68a3-4686-a8d1-d3f3e74a0c95"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "7a6c35a4-3518-4dc3-817b-d47987ab7de4"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "9a6ea9c9-486b-45be-9d14-9025c1da85d5"}, {"type": "LinearAxis", "id": "b72c4c89-c4ed-40e5-a2e4-98d5504fda68"}, {"type": "Grid", "id": "f842dab2-779e-45dd-b6bc-fd1abf43323b"}, {"type": "Grid", "id": "6a5ab012-fcf3-41e2-a623-37bd02c88d4c"}, {"type": "BoxSelectionOverlay", "id": "c4195827-67f5-4d45-822b-67fa1dda9331"}, {"type": "GlyphRenderer", "id": "7bbacecf-3267-4818-8278-ab537c25f9c6"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "e97a5c85-5d3e-4276-a726-dd534a048de5"}, {"type": "ZoomTool", "id": "a7d87ca9-d188-4c5a-94ad-b3a02f005e91"}, {"type": "PreviewSaveTool", "id": "798dcf69-3dfe-409f-b3d6-5f1b1dd6b0b4"}, {"type": "ResizeTool", "id": "467f1c47-668f-4f3c-89c4-ec2d066a5e7c"}, {"type": "SelectionTool", "id": "f28af6ec-f9dd-4d60-8b29-ec79128b9602"}, {"type": "PreviewSaveTool", "id": "bb4c2c4d-a7e8-4d6c-8570-1712206c54b4"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "798dcf69-3dfe-409f-b3d6-5f1b1dd6b0b4", "doc": null}, "type": "PreviewSaveTool", "id": "798dcf69-3dfe-409f-b3d6-5f1b1dd6b0b4"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "5c11f4cb-68a3-4686-a8d1-d3f3e74a0c95"}, {"type": "DataRange1d", "id": "7a6c35a4-3518-4dc3-817b-d47987ab7de4"}], "dimensions": ["width", "height"], "doc": null, "id": "e97a5c85-5d3e-4276-a726-dd534a048de5"}, "type": "PanTool", "id": "e97a5c85-5d3e-4276-a726-dd534a048de5"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "296686c1-4c88-4974-8668-45d5b4181cbf"}, "columns": ["x"]}], "id": "5c11f4cb-68a3-4686-a8d1-d3f3e74a0c95", "doc": null}, "type": "DataRange1d", "id": "5c11f4cb-68a3-4686-a8d1-d3f3e74a0c95"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "9a6ea9c9-486b-45be-9d14-9025c1da85d5", "dimension": 0}, "type": "LinearAxis", "id": "9a6ea9c9-486b-45be-9d14-9025c1da85d5"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "bb4c2c4d-a7e8-4d6c-8570-1712206c54b4", "doc": null}, "type": "PreviewSaveTool", "id": "bb4c2c4d-a7e8-4d6c-8570-1712206c54b4"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "7bbacecf-3267-4818-8278-ab537c25f9c6"}], "id": "f28af6ec-f9dd-4d60-8b29-ec79128b9602"}, "type": "SelectionTool", "id": "f28af6ec-f9dd-4d60-8b29-ec79128b9602"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "296686c1-4c88-4974-8668-45d5b4181cbf"}, "doc": null, "id": "7bbacecf-3267-4818-8278-ab537c25f9c6", "xdata_range": {"type": "DataRange1d", "id": "5c11f4cb-68a3-4686-a8d1-d3f3e74a0c95"}, "ydata_range": {"type": "DataRange1d", "id": "7a6c35a4-3518-4dc3-817b-d47987ab7de4"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "7bbacecf-3267-4818-8278-ab537c25f9c6"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "296686c1-4c88-4974-8668-45d5b4181cbf"}, "type": "ColumnDataSource", "id": "296686c1-4c88-4974-8668-45d5b4181cbf"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "f28af6ec-f9dd-4d60-8b29-ec79128b9602"}, "id": "c4195827-67f5-4d45-822b-67fa1dda9331"}, "type": "BoxSelectionOverlay", "id": "c4195827-67f5-4d45-822b-67fa1dda9331"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "f842dab2-779e-45dd-b6bc-fd1abf43323b"}, "type": "Grid", "id": "f842dab2-779e-45dd-b6bc-fd1abf43323b"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "6a5ab012-fcf3-41e2-a623-37bd02c88d4c"}, "type": "Grid", "id": "6a5ab012-fcf3-41e2-a623-37bd02c88d4c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "296686c1-4c88-4974-8668-45d5b4181cbf"}, "columns": ["y"]}], "id": "7a6c35a4-3518-4dc3-817b-d47987ab7de4", "doc": null}, "type": "DataRange1d", "id": "7a6c35a4-3518-4dc3-817b-d47987ab7de4"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "5c11f4cb-68a3-4686-a8d1-d3f3e74a0c95"}, {"type": "DataRange1d", "id": "7a6c35a4-3518-4dc3-817b-d47987ab7de4"}], "dimensions": ["width", "height"], "id": "a7d87ca9-d188-4c5a-94ad-b3a02f005e91"}, "type": "ZoomTool", "id": "a7d87ca9-d188-4c5a-94ad-b3a02f005e91"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "816c7a3a-88e6-456d-9e61-afb9ce014b2d"}, "type": "PlotContext", "id": "816c7a3a-88e6-456d-9e61-afb9ce014b2d"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "467f1c47-668f-4f3c-89c4-ec2d066a5e7c", "doc": null}, "type": "ResizeTool", "id": "467f1c47-668f-4f3c-89c4-ec2d066a5e7c"}];
    var modeltype = "PlotContext";
    var elementid = "0d331528-461e-4e06-ae22-9a49bf5ccf78";
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
