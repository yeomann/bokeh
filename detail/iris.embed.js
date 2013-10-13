console.log("embed.js");

(function(global) {

    var host = "/Bokeh/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "87819196-c1d5-4c52-beec-a172d39d29b1"}, "type": "ColumnDataSource", "id": "87819196-c1d5-4c52-beec-a172d39d29b1"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "7ca7db59-a9cc-42a4-af97-43e0863e4a17"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "e939893a-3ad8-4e12-9f15-e20f8aaef850"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "f57ee494-5e2a-41e6-b4ec-db3536c97e64"}, {"type": "LinearAxis", "id": "b1e64eb6-1b2e-43d5-869f-d4eaf41d0ef5"}, {"type": "Grid", "id": "261f851b-d5e1-4380-a42e-19abf5eb2089"}, {"type": "Grid", "id": "20f398f5-bdf6-41e2-8478-e60c64dce092"}, {"type": "BoxSelectionOverlay", "id": "c1cb6d64-d891-4b82-a2eb-ecc94660520b"}, {"type": "GlyphRenderer", "id": "a10334e5-7336-4455-9503-faec928e27af"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "acf536a0-1c82-4f25-b866-4766677c2b57"}, {"type": "ZoomTool", "id": "6713fc63-f408-4a8d-a643-13887baa80aa"}, {"type": "PreviewSaveTool", "id": "ce8c9a14-99ee-4e2a-867d-80714e99b8b7"}, {"type": "ResizeTool", "id": "00f53efc-764d-4b9b-9d44-2e3d920fc075"}, {"type": "SelectionTool", "id": "c1af0243-c416-47f1-9bc7-4de59c6c80a4"}, {"type": "PreviewSaveTool", "id": "e20f7d0e-6ab9-4f44-8069-ca9a4f4b8176"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "20f398f5-bdf6-41e2-8478-e60c64dce092"}, "type": "Grid", "id": "20f398f5-bdf6-41e2-8478-e60c64dce092"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "87819196-c1d5-4c52-beec-a172d39d29b1"}, "columns": ["x"]}], "id": "7ca7db59-a9cc-42a4-af97-43e0863e4a17", "doc": null}, "type": "DataRange1d", "id": "7ca7db59-a9cc-42a4-af97-43e0863e4a17"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "261f851b-d5e1-4380-a42e-19abf5eb2089"}, "type": "Grid", "id": "261f851b-d5e1-4380-a42e-19abf5eb2089"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "ce8c9a14-99ee-4e2a-867d-80714e99b8b7", "doc": null}, "type": "PreviewSaveTool", "id": "ce8c9a14-99ee-4e2a-867d-80714e99b8b7"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "99de07dd-b414-4336-b14a-b4f2ae2a2608"}, "type": "PlotContext", "id": "99de07dd-b414-4336-b14a-b4f2ae2a2608"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "7ca7db59-a9cc-42a4-af97-43e0863e4a17"}, {"type": "DataRange1d", "id": "e939893a-3ad8-4e12-9f15-e20f8aaef850"}], "dimensions": ["width", "height"], "id": "6713fc63-f408-4a8d-a643-13887baa80aa"}, "type": "ZoomTool", "id": "6713fc63-f408-4a8d-a643-13887baa80aa"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "a10334e5-7336-4455-9503-faec928e27af"}], "id": "c1af0243-c416-47f1-9bc7-4de59c6c80a4"}, "type": "SelectionTool", "id": "c1af0243-c416-47f1-9bc7-4de59c6c80a4"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "f57ee494-5e2a-41e6-b4ec-db3536c97e64", "dimension": 0}, "type": "LinearAxis", "id": "f57ee494-5e2a-41e6-b4ec-db3536c97e64"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "00f53efc-764d-4b9b-9d44-2e3d920fc075", "doc": null}, "type": "ResizeTool", "id": "00f53efc-764d-4b9b-9d44-2e3d920fc075"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "b1e64eb6-1b2e-43d5-869f-d4eaf41d0ef5", "dimension": 1}, "type": "LinearAxis", "id": "b1e64eb6-1b2e-43d5-869f-d4eaf41d0ef5"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "87819196-c1d5-4c52-beec-a172d39d29b1"}, "columns": ["y"]}], "id": "e939893a-3ad8-4e12-9f15-e20f8aaef850", "doc": null}, "type": "DataRange1d", "id": "e939893a-3ad8-4e12-9f15-e20f8aaef850"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "7ca7db59-a9cc-42a4-af97-43e0863e4a17"}, {"type": "DataRange1d", "id": "e939893a-3ad8-4e12-9f15-e20f8aaef850"}], "dimensions": ["width", "height"], "doc": null, "id": "acf536a0-1c82-4f25-b866-4766677c2b57"}, "type": "PanTool", "id": "acf536a0-1c82-4f25-b866-4766677c2b57"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "87819196-c1d5-4c52-beec-a172d39d29b1"}, "doc": null, "id": "a10334e5-7336-4455-9503-faec928e27af", "xdata_range": {"type": "DataRange1d", "id": "7ca7db59-a9cc-42a4-af97-43e0863e4a17"}, "ydata_range": {"type": "DataRange1d", "id": "e939893a-3ad8-4e12-9f15-e20f8aaef850"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "a10334e5-7336-4455-9503-faec928e27af"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "e20f7d0e-6ab9-4f44-8069-ca9a4f4b8176", "doc": null}, "type": "PreviewSaveTool", "id": "e20f7d0e-6ab9-4f44-8069-ca9a4f4b8176"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "c1af0243-c416-47f1-9bc7-4de59c6c80a4"}, "id": "c1cb6d64-d891-4b82-a2eb-ecc94660520b"}, "type": "BoxSelectionOverlay", "id": "c1cb6d64-d891-4b82-a2eb-ecc94660520b"}];
    var modeltype = "PlotContext";
    var elementid = "6b1e8dcd-6b29-48e5-b8bf-a35fd535f83e";
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
