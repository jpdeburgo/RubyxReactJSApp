# app/models/link.rb
require 'active_record'

class Link < ActiveRecord::Base  
  
    validates_presence_of :url  
    validates :url, format: URI::regexp(%w[http https])  
    validates_uniqueness_of :slug  
    validates_length_of :url, within: 3..255, on: :create, message: "too long"  
    validates_length_of :slug, within: 3..255, on: :create, message: "too long"
    
    # auto slug generation
    before_validation :generate_slug
    after_initialize :set_short_url
    
    def generate_slug
      self.slug = SecureRandom.uuid[0..5] if self.slug.nil? || self.slug.empty?
      true
    end

    def set_short_url
        map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        temp_id = self.id
        new_url = ''
        while temp_id > 0
            new_url += map[temp_id % 62]
            temp_id = temp_id / 62
        end
        self.short_url = new_url
        return true
    end
    
    # the API
    def self.shorten(url, slug = '')
      link = Link.where(url: url, slug: slug).first
      return link.short_url if link  

      id = Link.all.length + 1
      link = Link.new(id: id, url: url, slug: slug)
      return link.short_url if link.save
      
      Link.shorten(url, slug + SecureRandom.uuid[0..2])
    end
end