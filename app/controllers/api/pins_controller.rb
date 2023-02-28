class Api::PinsController < ApplicationController

  def show
        @pin = Pin.find(params[:id])
        render :show
    end

    def create
        @pin = Pin.new(pin_params)

        if @pin.save


            render :show
        else
            render json: ["somethings wrong"]
        end

    end

    def update
        @pin = Pin.find(params[:id])
        
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages
        end
    end

    def destroy
        @pin = pin.find(params[:id])
        if @pin && @pin.destroy
            render json: ["Delete success"]
        else
            render json: ["somethings wrong"]
        end
    end


    private
    def pin_params
        params.require(:pin).permit(:image_id, :board_id, )
    end
end
