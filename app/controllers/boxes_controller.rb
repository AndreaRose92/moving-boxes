class BoxesController < ApplicationController

    def index
        render json: current_boxes
    end

    def show
        render json: find_box
    end

    def create
        box = Box.create!(box_params)
        box.update(number: Box.where(user_id: box.user_id, room: box.room).size)
        render json: box, status: :created
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
        render json: Box.where(user_id: current_user.id).pluck(:room).uniq
    end

    private

    def find_box
        Box.find(params[:id])
    end

    def current_boxes
        Box.where(user_id: current_user.id)
    end

    def box_params
        params.permit(:room, :contents, :user_id)
    end

end
