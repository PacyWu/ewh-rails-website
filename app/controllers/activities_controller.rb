class ActivitiesController < ApplicationController
    def index
    end

    def show
      render template: "activities/#{params[:page]}"
    end
end
