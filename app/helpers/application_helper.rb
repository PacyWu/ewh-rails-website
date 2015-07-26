module ApplicationHelper
	def page_title
		title = '世界衛生工程'
		title = "#{@title} | " + title if @title
		title
	end
end
