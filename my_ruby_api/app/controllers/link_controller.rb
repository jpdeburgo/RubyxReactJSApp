class LinkController < ApplicationController
    def show
      puts params[:slug]
      @link = Link.find_by_short_url(params[:short_url]) 
      render 'layouts/error', status: 404 if @link.nil?
      @link.update_attribute(:clicked, @link.clicked + 1)
      redirect_to @link.url
    end

    def create_link
        url = params[:url]
        slug = params[:slug]
        Link.shorten(url, slug)
        render 'layouts/thanks'
    end
end