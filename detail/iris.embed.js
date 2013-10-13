console.log("embed.js");

(function(global) {

    var host = "/Bokeh/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "f9d8c970-8560-40fb-a352-a38a77086dcb"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "f8872d91-5371-44d8-bb4e-5707e8b2dd1d"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "dcf1551f-347d-496f-8d8e-dd41eddab91e"}, {"type": "LinearAxis", "id": "125a46a4-ca21-4451-8c94-fd63d5128872"}, {"type": "Grid", "id": "5ed3be40-fcb7-4e48-a7ae-3561d4674121"}, {"type": "Grid", "id": "7715fcbb-37af-41d4-be0b-36ec885eee92"}, {"type": "BoxSelectionOverlay", "id": "dc8aff70-b7bc-4f5f-9454-4208b783fe90"}, {"type": "GlyphRenderer", "id": "b252ff17-baea-406e-9183-4986ce96139d"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "46c78029-cb90-44da-ab08-311026521f39"}, {"type": "ZoomTool", "id": "81366f8c-c5f0-46c7-9658-a43e3ff93635"}, {"type": "PreviewSaveTool", "id": "a12a99d4-2e36-43a3-8413-dfecc2204599"}, {"type": "ResizeTool", "id": "6b8a383d-0edc-4aa0-bbdd-ac2999e3fd72"}, {"type": "SelectionTool", "id": "7034fe91-9b15-439e-82f1-5d4a7800a314"}, {"type": "PreviewSaveTool", "id": "7fc0abae-b0f5-4918-81dc-b846d082dd04"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "b252ff17-baea-406e-9183-4986ce96139d"}], "id": "7034fe91-9b15-439e-82f1-5d4a7800a314"}, "type": "SelectionTool", "id": "7034fe91-9b15-439e-82f1-5d4a7800a314"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "6b8a383d-0edc-4aa0-bbdd-ac2999e3fd72", "doc": null}, "type": "ResizeTool", "id": "6b8a383d-0edc-4aa0-bbdd-ac2999e3fd72"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "ce535779-5da2-4ec7-919b-c3c8a1893a55"}, "doc": null, "id": "b252ff17-baea-406e-9183-4986ce96139d", "xdata_range": {"type": "DataRange1d", "id": "f9d8c970-8560-40fb-a352-a38a77086dcb"}, "ydata_range": {"type": "DataRange1d", "id": "f8872d91-5371-44d8-bb4e-5707e8b2dd1d"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "b252ff17-baea-406e-9183-4986ce96139d"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "5ed3be40-fcb7-4e48-a7ae-3561d4674121"}, "type": "Grid", "id": "5ed3be40-fcb7-4e48-a7ae-3561d4674121"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "125a46a4-ca21-4451-8c94-fd63d5128872", "dimension": 1}, "type": "LinearAxis", "id": "125a46a4-ca21-4451-8c94-fd63d5128872"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "7715fcbb-37af-41d4-be0b-36ec885eee92"}, "type": "Grid", "id": "7715fcbb-37af-41d4-be0b-36ec885eee92"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "ac91fc23-f6ef-40a1-b16b-bdfb1f1478ff"}, "type": "PlotContext", "id": "ac91fc23-f6ef-40a1-b16b-bdfb1f1478ff"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "7fc0abae-b0f5-4918-81dc-b846d082dd04", "doc": null}, "type": "PreviewSaveTool", "id": "7fc0abae-b0f5-4918-81dc-b846d082dd04"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "7034fe91-9b15-439e-82f1-5d4a7800a314"}, "id": "dc8aff70-b7bc-4f5f-9454-4208b783fe90"}, "type": "BoxSelectionOverlay", "id": "dc8aff70-b7bc-4f5f-9454-4208b783fe90"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "f9d8c970-8560-40fb-a352-a38a77086dcb"}, {"type": "DataRange1d", "id": "f8872d91-5371-44d8-bb4e-5707e8b2dd1d"}], "dimensions": ["width", "height"], "doc": null, "id": "46c78029-cb90-44da-ab08-311026521f39"}, "type": "PanTool", "id": "46c78029-cb90-44da-ab08-311026521f39"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "dcf1551f-347d-496f-8d8e-dd41eddab91e", "dimension": 0}, "type": "LinearAxis", "id": "dcf1551f-347d-496f-8d8e-dd41eddab91e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "f9d8c970-8560-40fb-a352-a38a77086dcb"}, {"type": "DataRange1d", "id": "f8872d91-5371-44d8-bb4e-5707e8b2dd1d"}], "dimensions": ["width", "height"], "id": "81366f8c-c5f0-46c7-9658-a43e3ff93635"}, "type": "ZoomTool", "id": "81366f8c-c5f0-46c7-9658-a43e3ff93635"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ce535779-5da2-4ec7-919b-c3c8a1893a55"}, "columns": ["x"]}], "id": "f9d8c970-8560-40fb-a352-a38a77086dcb", "doc": null}, "type": "DataRange1d", "id": "f9d8c970-8560-40fb-a352-a38a77086dcb"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "a12a99d4-2e36-43a3-8413-dfecc2204599", "doc": null}, "type": "PreviewSaveTool", "id": "a12a99d4-2e36-43a3-8413-dfecc2204599"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ce535779-5da2-4ec7-919b-c3c8a1893a55"}, "columns": ["y"]}], "id": "f8872d91-5371-44d8-bb4e-5707e8b2dd1d", "doc": null}, "type": "DataRange1d", "id": "f8872d91-5371-44d8-bb4e-5707e8b2dd1d"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "ce535779-5da2-4ec7-919b-c3c8a1893a55"}, "type": "ColumnDataSource", "id": "ce535779-5da2-4ec7-919b-c3c8a1893a55"}];
    var modeltype = "PlotContext";
    var elementid = "6bfd18bb-e81e-414f-be76-e2a0b4b2ebf5";
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
