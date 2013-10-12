console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "b5f4235a-967d-4f3a-af93-3d750f0b9359"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "89eb47e6-6b3f-401d-a043-18274625fcd5"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "52c538e0-c758-42fd-8a7d-d38aee8d9c79"}, {"type": "LinearAxis", "id": "0db8ddf8-fb03-419b-99e3-c93a05296f40"}, {"type": "Grid", "id": "130521b9-0f5b-4485-9376-9ad4866712c9"}, {"type": "Grid", "id": "2e034291-7556-4284-80d9-f97dcd5844e5"}, {"type": "BoxSelectionOverlay", "id": "e9039641-dbc0-42e0-898b-352a0ae6f82b"}, {"type": "GlyphRenderer", "id": "ba9a650c-757b-4159-aa2c-e73176d8061e"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "96919507-22bf-4165-a87e-eb4875e452bc"}, {"type": "ZoomTool", "id": "06ea5ea4-5e5d-435b-a792-2f6d3fabfd69"}, {"type": "PreviewSaveTool", "id": "d256fda4-3a31-4395-951d-e3e030138c41"}, {"type": "ResizeTool", "id": "892d6be3-9155-42a7-adaa-65315189cbc2"}, {"type": "SelectionTool", "id": "0b222b58-3aa5-457b-8162-5ad24fec2458"}, {"type": "PreviewSaveTool", "id": "99cda1ff-e230-411a-a6f9-bd0651a82f8e"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "b5f4235a-967d-4f3a-af93-3d750f0b9359"}, {"type": "DataRange1d", "id": "89eb47e6-6b3f-401d-a043-18274625fcd5"}], "dimensions": ["width", "height"], "id": "06ea5ea4-5e5d-435b-a792-2f6d3fabfd69"}, "type": "ZoomTool", "id": "06ea5ea4-5e5d-435b-a792-2f6d3fabfd69"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "b5f4235a-967d-4f3a-af93-3d750f0b9359"}, {"type": "DataRange1d", "id": "89eb47e6-6b3f-401d-a043-18274625fcd5"}], "dimensions": ["width", "height"], "doc": null, "id": "96919507-22bf-4165-a87e-eb4875e452bc"}, "type": "PanTool", "id": "96919507-22bf-4165-a87e-eb4875e452bc"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "0b222b58-3aa5-457b-8162-5ad24fec2458"}, "id": "e9039641-dbc0-42e0-898b-352a0ae6f82b"}, "type": "BoxSelectionOverlay", "id": "e9039641-dbc0-42e0-898b-352a0ae6f82b"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "99cda1ff-e230-411a-a6f9-bd0651a82f8e", "doc": null}, "type": "PreviewSaveTool", "id": "99cda1ff-e230-411a-a6f9-bd0651a82f8e"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "2e034291-7556-4284-80d9-f97dcd5844e5"}, "type": "Grid", "id": "2e034291-7556-4284-80d9-f97dcd5844e5"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "845a181b-8b6c-4892-9674-92ef959ea365"}, "type": "ColumnDataSource", "id": "845a181b-8b6c-4892-9674-92ef959ea365"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "130521b9-0f5b-4485-9376-9ad4866712c9"}, "type": "Grid", "id": "130521b9-0f5b-4485-9376-9ad4866712c9"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "845a181b-8b6c-4892-9674-92ef959ea365"}, "columns": ["x"]}], "id": "b5f4235a-967d-4f3a-af93-3d750f0b9359", "doc": null}, "type": "DataRange1d", "id": "b5f4235a-967d-4f3a-af93-3d750f0b9359"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "d256fda4-3a31-4395-951d-e3e030138c41", "doc": null}, "type": "PreviewSaveTool", "id": "d256fda4-3a31-4395-951d-e3e030138c41"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "ba9a650c-757b-4159-aa2c-e73176d8061e"}], "id": "0b222b58-3aa5-457b-8162-5ad24fec2458"}, "type": "SelectionTool", "id": "0b222b58-3aa5-457b-8162-5ad24fec2458"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "892d6be3-9155-42a7-adaa-65315189cbc2", "doc": null}, "type": "ResizeTool", "id": "892d6be3-9155-42a7-adaa-65315189cbc2"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "0db8ddf8-fb03-419b-99e3-c93a05296f40", "dimension": 1}, "type": "LinearAxis", "id": "0db8ddf8-fb03-419b-99e3-c93a05296f40"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "8367b704-8f3e-4d41-a4f6-f54b7d6fb930"}, "type": "PlotContext", "id": "8367b704-8f3e-4d41-a4f6-f54b7d6fb930"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "845a181b-8b6c-4892-9674-92ef959ea365"}, "columns": ["y"]}], "id": "89eb47e6-6b3f-401d-a043-18274625fcd5", "doc": null}, "type": "DataRange1d", "id": "89eb47e6-6b3f-401d-a043-18274625fcd5"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "52c538e0-c758-42fd-8a7d-d38aee8d9c79", "dimension": 0}, "type": "LinearAxis", "id": "52c538e0-c758-42fd-8a7d-d38aee8d9c79"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "845a181b-8b6c-4892-9674-92ef959ea365"}, "doc": null, "id": "ba9a650c-757b-4159-aa2c-e73176d8061e", "xdata_range": {"type": "DataRange1d", "id": "b5f4235a-967d-4f3a-af93-3d750f0b9359"}, "ydata_range": {"type": "DataRange1d", "id": "89eb47e6-6b3f-401d-a043-18274625fcd5"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "ba9a650c-757b-4159-aa2c-e73176d8061e"}];
    var modeltype = "PlotContext";
    var elementid = "1be823e8-c28e-4077-bdfc-2354d82b512d";
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
