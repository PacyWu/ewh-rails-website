module ApplicationHelper
	def page_title
		title = '世界衛生工程'
		title = "#{@title} | " + title if @title
		title
	end
	def nav_li text, url
		active = nil
		active = :active if request.path == url
		content_tag :li, class: "nav-item #{active}" do
			link_to text, url
		end
	end
end
