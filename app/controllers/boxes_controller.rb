class BoxesController < ApplicationController

    def index
        render json: Box.all
    end

    def show
        render json: find_box
    end

    def create
        box = Box.create!(box_params)
    end

    def update
        box = find_box
        render json: Box.update!(box_params)
    end

    def destroy
        find_box.destroy
        head :no_content
    end

    def rooms
        render json: Box.pluck(:room).uniq
    end

    private

    def find_box
        Box.find_by(room: params[:room], number: params[:number])
    end

    def box_params
        params.permit(:room, :number, :contents)
    end

end
