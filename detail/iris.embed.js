console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "1ba827db-7d89-4bcf-b242-877c8502abe6"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "e1e5de2c-11d0-4b93-aa58-b741e7a3ef93"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "696816ae-c95d-469b-ad8c-316fe940d2e3"}, {"type": "LinearAxis", "id": "3bf7f976-fae8-4175-a182-8149fa60fbeb"}, {"type": "Grid", "id": "49185156-8932-411d-b4ee-881aa6462fcc"}, {"type": "Grid", "id": "8346adcf-4192-4bb0-a103-37a903785c4d"}, {"type": "BoxSelectionOverlay", "id": "e8d2db44-f705-4b66-ace1-bafcd0846dba"}, {"type": "GlyphRenderer", "id": "298e28e5-4e08-45a3-93d2-332069827ac5"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "ce4cc631-d79e-4bb8-b70b-88d2894ebd68"}, {"type": "ZoomTool", "id": "2c809e21-9cb9-43f9-8297-08b3f6f3ad78"}, {"type": "PreviewSaveTool", "id": "2f4c83bc-31b7-4b2c-925c-9cea1d36a33f"}, {"type": "ResizeTool", "id": "8cda16b0-9090-4605-9d36-0a8a1fa00b07"}, {"type": "SelectionTool", "id": "7c4842eb-1042-4695-b852-81e10b82cded"}, {"type": "PreviewSaveTool", "id": "df633bc1-66d6-4a95-bfc0-fd1c22be8d09"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "6d72ad2b-ff30-4fc9-bc0f-1dc1bfa4d310"}, "columns": ["y"]}], "id": "e1e5de2c-11d0-4b93-aa58-b741e7a3ef93", "doc": null}, "type": "DataRange1d", "id": "e1e5de2c-11d0-4b93-aa58-b741e7a3ef93"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "8cda16b0-9090-4605-9d36-0a8a1fa00b07", "doc": null}, "type": "ResizeTool", "id": "8cda16b0-9090-4605-9d36-0a8a1fa00b07"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "696816ae-c95d-469b-ad8c-316fe940d2e3", "dimension": 0}, "type": "LinearAxis", "id": "696816ae-c95d-469b-ad8c-316fe940d2e3"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "6d72ad2b-ff30-4fc9-bc0f-1dc1bfa4d310"}, "columns": ["x"]}], "id": "1ba827db-7d89-4bcf-b242-877c8502abe6", "doc": null}, "type": "DataRange1d", "id": "1ba827db-7d89-4bcf-b242-877c8502abe6"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "1ba827db-7d89-4bcf-b242-877c8502abe6"}, {"type": "DataRange1d", "id": "e1e5de2c-11d0-4b93-aa58-b741e7a3ef93"}], "dimensions": ["width", "height"], "id": "2c809e21-9cb9-43f9-8297-08b3f6f3ad78"}, "type": "ZoomTool", "id": "2c809e21-9cb9-43f9-8297-08b3f6f3ad78"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "3bf7f976-fae8-4175-a182-8149fa60fbeb", "dimension": 1}, "type": "LinearAxis", "id": "3bf7f976-fae8-4175-a182-8149fa60fbeb"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "1ba827db-7d89-4bcf-b242-877c8502abe6"}, {"type": "DataRange1d", "id": "e1e5de2c-11d0-4b93-aa58-b741e7a3ef93"}], "dimensions": ["width", "height"], "doc": null, "id": "ce4cc631-d79e-4bb8-b70b-88d2894ebd68"}, "type": "PanTool", "id": "ce4cc631-d79e-4bb8-b70b-88d2894ebd68"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "298e28e5-4e08-45a3-93d2-332069827ac5"}], "id": "7c4842eb-1042-4695-b852-81e10b82cded"}, "type": "SelectionTool", "id": "7c4842eb-1042-4695-b852-81e10b82cded"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "6d72ad2b-ff30-4fc9-bc0f-1dc1bfa4d310"}, "type": "ColumnDataSource", "id": "6d72ad2b-ff30-4fc9-bc0f-1dc1bfa4d310"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "6d72ad2b-ff30-4fc9-bc0f-1dc1bfa4d310"}, "doc": null, "id": "298e28e5-4e08-45a3-93d2-332069827ac5", "xdata_range": {"type": "DataRange1d", "id": "1ba827db-7d89-4bcf-b242-877c8502abe6"}, "ydata_range": {"type": "DataRange1d", "id": "e1e5de2c-11d0-4b93-aa58-b741e7a3ef93"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "298e28e5-4e08-45a3-93d2-332069827ac5"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "8346adcf-4192-4bb0-a103-37a903785c4d"}, "type": "Grid", "id": "8346adcf-4192-4bb0-a103-37a903785c4d"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "484a7fd4-1163-4e68-89a7-66222d59b912"}, "type": "PlotContext", "id": "484a7fd4-1163-4e68-89a7-66222d59b912"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "df633bc1-66d6-4a95-bfc0-fd1c22be8d09", "doc": null}, "type": "PreviewSaveTool", "id": "df633bc1-66d6-4a95-bfc0-fd1c22be8d09"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "7c4842eb-1042-4695-b852-81e10b82cded"}, "id": "e8d2db44-f705-4b66-ace1-bafcd0846dba"}, "type": "BoxSelectionOverlay", "id": "e8d2db44-f705-4b66-ace1-bafcd0846dba"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "49185156-8932-411d-b4ee-881aa6462fcc"}, "type": "Grid", "id": "49185156-8932-411d-b4ee-881aa6462fcc"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "2f4c83bc-31b7-4b2c-925c-9cea1d36a33f", "doc": null}, "type": "PreviewSaveTool", "id": "2f4c83bc-31b7-4b2c-925c-9cea1d36a33f"}];
    var modeltype = "PlotContext";
    var elementid = "0ae445ba-0e9d-472a-8c34-f0b3ed7a6727";
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
