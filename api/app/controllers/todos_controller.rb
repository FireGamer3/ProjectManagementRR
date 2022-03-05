class TodosController < ApplicationController
    before_action :set_todo only: [:show, :update, :destroy]

    def index
        @todos = Todo.all
        render json: @todos
    end

    def show
        render json @todo
    end
    
    def update
        if @todo.update(todo_params)
            render json: @todo
        else
            render json @todo.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        @todo.destroy
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            reder json: @todo.errors, status: :unproccessable_entity
    end

    private
        def set_todo
            @todo = Todo.find(params[:id])
        end

        def todo_params
            params.require(:todo).permit(:id, :title, :completed)
        end
end