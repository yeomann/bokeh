console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "ab665c53-d635-4ada-9f8a-cbb650bfee0d"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "7edf8c0f-f5fb-4dd1-8ce4-c0af44972fbd"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "8025a020-353b-49f9-9074-46e9486bef2f"}, {"type": "LinearAxis", "id": "34a7c063-840e-4257-bb3c-beff473c1676"}, {"type": "Grid", "id": "260882b8-f2b9-40be-8baf-01f6b790f7ab"}, {"type": "Grid", "id": "16170441-6d42-4232-afd2-763258eb0c1f"}, {"type": "BoxSelectionOverlay", "id": "eda87661-6d07-4dc5-b2b5-4bdb257ba42d"}, {"type": "GlyphRenderer", "id": "3819dfe2-47b5-41c8-a985-73192d58a615"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "d679442c-28dc-491d-a8c0-51f4292bd307"}, {"type": "ZoomTool", "id": "eb728ef1-3b47-430d-9512-536b016a4d76"}, {"type": "PreviewSaveTool", "id": "720dabab-6a36-493c-96ce-389dd5e7a12e"}, {"type": "ResizeTool", "id": "14b6e4c9-05e1-45b5-bcaa-d8987a133677"}, {"type": "SelectionTool", "id": "c4e3e49b-64ef-4465-a069-c3e87ce47ff0"}, {"type": "PreviewSaveTool", "id": "b1b3605c-21a4-4ff7-9625-9c2724f49373"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fe22ae0f-a6d3-4881-81ca-b7638aeac61f"}, "columns": ["x"]}], "id": "ab665c53-d635-4ada-9f8a-cbb650bfee0d", "doc": null}, "type": "DataRange1d", "id": "ab665c53-d635-4ada-9f8a-cbb650bfee0d"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ab665c53-d635-4ada-9f8a-cbb650bfee0d"}, {"type": "DataRange1d", "id": "7edf8c0f-f5fb-4dd1-8ce4-c0af44972fbd"}], "dimensions": ["width", "height"], "id": "eb728ef1-3b47-430d-9512-536b016a4d76"}, "type": "ZoomTool", "id": "eb728ef1-3b47-430d-9512-536b016a4d76"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ab665c53-d635-4ada-9f8a-cbb650bfee0d"}, {"type": "DataRange1d", "id": "7edf8c0f-f5fb-4dd1-8ce4-c0af44972fbd"}], "dimensions": ["width", "height"], "doc": null, "id": "d679442c-28dc-491d-a8c0-51f4292bd307"}, "type": "PanTool", "id": "d679442c-28dc-491d-a8c0-51f4292bd307"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "f9ff1076-2705-43a1-ada2-451adefd868b"}, "type": "PlotContext", "id": "f9ff1076-2705-43a1-ada2-451adefd868b"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "16170441-6d42-4232-afd2-763258eb0c1f"}, "type": "Grid", "id": "16170441-6d42-4232-afd2-763258eb0c1f"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "fe22ae0f-a6d3-4881-81ca-b7638aeac61f"}, "doc": null, "id": "3819dfe2-47b5-41c8-a985-73192d58a615", "xdata_range": {"type": "DataRange1d", "id": "ab665c53-d635-4ada-9f8a-cbb650bfee0d"}, "ydata_range": {"type": "DataRange1d", "id": "7edf8c0f-f5fb-4dd1-8ce4-c0af44972fbd"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "3819dfe2-47b5-41c8-a985-73192d58a615"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "14b6e4c9-05e1-45b5-bcaa-d8987a133677", "doc": null}, "type": "ResizeTool", "id": "14b6e4c9-05e1-45b5-bcaa-d8987a133677"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "720dabab-6a36-493c-96ce-389dd5e7a12e", "doc": null}, "type": "PreviewSaveTool", "id": "720dabab-6a36-493c-96ce-389dd5e7a12e"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "c4e3e49b-64ef-4465-a069-c3e87ce47ff0"}, "id": "eda87661-6d07-4dc5-b2b5-4bdb257ba42d"}, "type": "BoxSelectionOverlay", "id": "eda87661-6d07-4dc5-b2b5-4bdb257ba42d"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "34a7c063-840e-4257-bb3c-beff473c1676", "dimension": 1}, "type": "LinearAxis", "id": "34a7c063-840e-4257-bb3c-beff473c1676"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "fe22ae0f-a6d3-4881-81ca-b7638aeac61f"}, "type": "ColumnDataSource", "id": "fe22ae0f-a6d3-4881-81ca-b7638aeac61f"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "3819dfe2-47b5-41c8-a985-73192d58a615"}], "id": "c4e3e49b-64ef-4465-a069-c3e87ce47ff0"}, "type": "SelectionTool", "id": "c4e3e49b-64ef-4465-a069-c3e87ce47ff0"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "8025a020-353b-49f9-9074-46e9486bef2f", "dimension": 0}, "type": "LinearAxis", "id": "8025a020-353b-49f9-9074-46e9486bef2f"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "260882b8-f2b9-40be-8baf-01f6b790f7ab"}, "type": "Grid", "id": "260882b8-f2b9-40be-8baf-01f6b790f7ab"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fe22ae0f-a6d3-4881-81ca-b7638aeac61f"}, "columns": ["y"]}], "id": "7edf8c0f-f5fb-4dd1-8ce4-c0af44972fbd", "doc": null}, "type": "DataRange1d", "id": "7edf8c0f-f5fb-4dd1-8ce4-c0af44972fbd"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "b1b3605c-21a4-4ff7-9625-9c2724f49373", "doc": null}, "type": "PreviewSaveTool", "id": "b1b3605c-21a4-4ff7-9625-9c2724f49373"}];
    var modeltype = "PlotContext";
    var elementid = "aa3af81d-4224-4e9e-9891-d30e9d9ed4d8";
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
