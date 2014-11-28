module ApplicationHelper


def svg_png_embed(filename)
    content_tag(:object, :data => asset_path("#{filename}.svg"), :type => "image/svg+xml", :id => "#{filename}") do
      image_tag "#{filename}.png"
    end
 end

end
