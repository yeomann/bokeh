console.log("embed.js");

(function(global) {

    var host = "https://s3.amazonaws.com/bokeh_docs/0.2/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "18835071-2764-4215-810f-65f332b2928c"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "9211bad8-0e16-4bdc-b833-075b02eb80b3"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "4e7fe2b0-4636-4eed-bf96-e08c9b6563cb"}, {"type": "LinearAxis", "id": "51af2f82-025d-4f4e-a81c-49f5afa492ba"}, {"type": "Grid", "id": "4695d06e-8da2-48e7-89f0-2e4f2524cdcc"}, {"type": "Grid", "id": "7aa7c47c-21d5-42d2-88eb-1e89a95232c1"}, {"type": "BoxSelectionOverlay", "id": "e56bfe1c-2e26-49d7-aa47-30432e2438ab"}, {"type": "GlyphRenderer", "id": "9e94354d-eaaf-41bb-ba39-091eb0a550f8"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "iris", "tools": [{"type": "PanTool", "id": "522d7c7a-316e-4709-b57e-a7431fc809ec"}, {"type": "ZoomTool", "id": "c2e6d974-cdd0-4869-ba16-b2ae7724b602"}, {"type": "PreviewSaveTool", "id": "a6feb489-6216-4d4f-8c29-d82d5cdaab92"}, {"type": "ResizeTool", "id": "cf961759-a58d-4e3c-bc64-5bdab7f7091a"}, {"type": "SelectionTool", "id": "9d880f1f-a349-424d-96ec-f9c9f8afc512"}, {"type": "PreviewSaveTool", "id": "4a62358b-161c-4297-b370-86aac547134e"}], "canvas_width": 600}, "type": "Plot", "id": "iris"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "id": "f2f25acd-2fa9-4467-944f-14aee7f4f606"}, "type": "ColumnDataSource", "id": "f2f25acd-2fa9-4467-944f-14aee7f4f606"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "id": "cf961759-a58d-4e3c-bc64-5bdab7f7091a", "doc": null}, "type": "ResizeTool", "id": "cf961759-a58d-4e3c-bc64-5bdab7f7091a"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "4a62358b-161c-4297-b370-86aac547134e", "doc": null}, "type": "PreviewSaveTool", "id": "4a62358b-161c-4297-b370-86aac547134e"}, {"attributes": {"doc": null, "tool": {"type": "SelectionTool", "id": "9d880f1f-a349-424d-96ec-f9c9f8afc512"}, "id": "e56bfe1c-2e26-49d7-aa47-30432e2438ab"}, "type": "BoxSelectionOverlay", "id": "e56bfe1c-2e26-49d7-aa47-30432e2438ab"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "iris"}], "id": "0ac3fc06-8aac-47e8-a9db-9c6d8ad16cab"}, "type": "PlotContext", "id": "0ac3fc06-8aac-47e8-a9db-9c6d8ad16cab"}, {"attributes": {"doc": null, "renderers": [{"type": "GlyphRenderer", "id": "9e94354d-eaaf-41bb-ba39-091eb0a550f8"}], "id": "9d880f1f-a349-424d-96ec-f9c9f8afc512"}, "type": "SelectionTool", "id": "9d880f1f-a349-424d-96ec-f9c9f8afc512"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "f2f25acd-2fa9-4467-944f-14aee7f4f606"}, "columns": ["x"]}], "id": "18835071-2764-4215-810f-65f332b2928c", "doc": null}, "type": "DataRange1d", "id": "18835071-2764-4215-810f-65f332b2928c"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 1, "id": "7aa7c47c-21d5-42d2-88eb-1e89a95232c1"}, "type": "Grid", "id": "7aa7c47c-21d5-42d2-88eb-1e89a95232c1"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "18835071-2764-4215-810f-65f332b2928c"}, {"type": "DataRange1d", "id": "9211bad8-0e16-4bdc-b833-075b02eb80b3"}], "dimensions": ["width", "height"], "doc": null, "id": "522d7c7a-316e-4709-b57e-a7431fc809ec"}, "type": "PanTool", "id": "522d7c7a-316e-4709-b57e-a7431fc809ec"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "f2f25acd-2fa9-4467-944f-14aee7f4f606"}, "doc": null, "id": "9e94354d-eaaf-41bb-ba39-091eb0a550f8", "xdata_range": {"type": "DataRange1d", "id": "18835071-2764-4215-810f-65f332b2928c"}, "ydata_range": {"type": "DataRange1d", "id": "9211bad8-0e16-4bdc-b833-075b02eb80b3"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 0.2, "radius": {"units": "screen", "value": 5}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "circle", "name": "iris"}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 5}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "9e94354d-eaaf-41bb-ba39-091eb0a550f8"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "f2f25acd-2fa9-4467-944f-14aee7f4f606"}, "columns": ["y"]}], "id": "9211bad8-0e16-4bdc-b833-075b02eb80b3", "doc": null}, "type": "DataRange1d", "id": "9211bad8-0e16-4bdc-b833-075b02eb80b3"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "dataranges": [], "id": "a6feb489-6216-4d4f-8c29-d82d5cdaab92", "doc": null}, "type": "PreviewSaveTool", "id": "a6feb489-6216-4d4f-8c29-d82d5cdaab92"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "doc": null, "dimension": 0, "id": "4695d06e-8da2-48e7-89f0-2e4f2524cdcc"}, "type": "Grid", "id": "4695d06e-8da2-48e7-89f0-2e4f2524cdcc"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "4e7fe2b0-4636-4eed-bf96-e08c9b6563cb", "dimension": 0}, "type": "LinearAxis", "id": "4e7fe2b0-4636-4eed-bf96-e08c9b6563cb"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "18835071-2764-4215-810f-65f332b2928c"}, {"type": "DataRange1d", "id": "9211bad8-0e16-4bdc-b833-075b02eb80b3"}], "dimensions": ["width", "height"], "id": "c2e6d974-cdd0-4869-ba16-b2ae7724b602"}, "type": "ZoomTool", "id": "c2e6d974-cdd0-4869-ba16-b2ae7724b602"}, {"attributes": {"plot": {"type": "Plot", "id": "iris"}, "location": "min", "bounds": "auto", "doc": null, "id": "51af2f82-025d-4f4e-a81c-49f5afa492ba", "dimension": 1}, "type": "LinearAxis", "id": "51af2f82-025d-4f4e-a81c-49f5afa492ba"}];
    var modeltype = "PlotContext";
    var elementid = "e24ea1ae-3f5c-4471-ba40-8601746dfe32";
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
