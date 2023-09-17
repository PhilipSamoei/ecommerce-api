class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items, status: :ok
    end
    def show
        item = find_item
        render json: item, status: :ok
    end
    def create
        item  = Item.create!(item_params)
        render json: item, status: :created

    end
    def update
        item = Item.find(params[:id])
        item.update(item_params)
            render json: item, status: :ok
    end

    def destroy
        item = Item.find
        item.destroy
        head :no_content
    end
    private
    def find_item
        Item.find(params[:id])
    end
    def item_params
        params.permit(:name, :description, :price, :url, :saler)
    end
end
