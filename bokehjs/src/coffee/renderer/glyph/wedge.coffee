
define [
  "underscore",
  "renderer/properties",
  "./glyph",
], (_, Properties, Glyph) ->

  class WedgeView extends Glyph.View

    _fields: ['x', 'y', 'radius', 'start_angle', 'end_angle', 'direction:string']
    _properties: ['line', 'fill']

    _map_data: () ->
      [@sx, @sy] = @plot_view.map_to_screen(@x, @glyph_props.x.units, @y, @glyph_props.y.units)
      @radius = @distance_vector('x', 'radius', 'edge')

    _render: (ctx, glyph_props, use_selection) ->
      for i in [0..@sx.length-1]

        if isNaN(@sx[i] + @sy[i] + @radius[i] + @start_angle[i] + @end_angle[i] + @direction[i])
          continue

        ctx.beginPath()
        ctx.arc(@sx[i], @sy[i], @radius[i], @start_angle[i], @end_angle[i], @direction[i])
        ctx.lineTo(@sx[i], @sy[i])
        ctx.closePath()

        if glyph_props.fill_properties.do_fill
          glyph_props.fill_properties.set_vectorize(ctx, i)
          ctx.fill()

        if glyph_props.line_properties.do_stroke
          glyph_props.line_properties.set_vectorize(ctx, i)
          ctx.stroke()

    draw_legend: (ctx, x1, x2, y1, y2) ->
      glyph_props = @glyph_props
      line_props = glyph_props.line_properties
      fill_props = glyph_props.fill_properties
      ctx.save()
      reference_point = @get_reference_point()
      if reference_point?
        glyph_settings = reference_point
        data_r = @distance([reference_point], 'x', 'radius', 'edge')[0]
        start_angle = -@glyph_props.select('start_angle', reference_point)
        end_angle = -@glyph_props.select('end_angle', reference_point)
      else
        glyph_settings = glyph_props
        start_angle = -0.1
        end_angle = -3.9

      angle = end_angle - start_angle
      direction = @glyph_props.select('direction', glyph_settings)
      direction = if direction == "clock" then false else true
      border = line_props.select(line_props.line_width_name, glyph_settings)
      d = _.min([Math.abs(x2-x1), Math.abs(y2-y1)])
      d = d - 2 * border
      r = d / 2
      if data_r?
        r = if data_r > r then r else data_r
      ctx.beginPath()
      sx = (x1 + x2) / 2.0
      sy = (y1 + y2) / 2.0
      ctx.arc(sx, sy, r, start_angle, end_angle, direction)
      ctx.lineTo(sx, sy)
      ctx.closePath()
      if fill_props.do_fill
        fill_props.set(ctx, glyph_settings)
        ctx.fill()
      if line_props.do_stroke
        line_props.set(ctx, glyph_settings)
        ctx.stroke()

      ctx.restore()

  class Wedge extends Glyph.Model
    default_view: WedgeView
    type: 'Glyph'

    display_defaults: () ->
      return _.extend(super(), {
        direction: 'anticlock'
        fill_color: 'gray'
        fill_alpha: 1.0
        line_color: 'red'
        line_width: 1
        line_alpha: 1.0
        line_join: 'miter'
        line_cap: 'butt'
        line_dash: []
        line_dash_offset: 0
      })

  return {
    "Model": Wedge,
    "View": WedgeView,
  }

