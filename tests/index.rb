require 'net/http'

uri = URI('http://example.com/index.html?count=10')
Net::HTTP.get(uri) # => String
