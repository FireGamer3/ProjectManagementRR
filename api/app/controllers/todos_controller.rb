class TodosController < ApplicationController
    before_action :set_todo, only: [:show, :update, :destroy]

    def index
        @todos = Todo.includes(:project).all
        @todos_with_project = @todos.map do |record|
            record.attributes.merge(
                'project' => record.project
            )
        end
        render json: @todos_with_project
    end

    def show
        @todo_with_project = @todo.attributes.merge(
        'project' => @todo.project
      )
        render json: @todo_with_project
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
            render json: @todo.errors, status: :unproccessable_entity
        end
    end

    private
        def set_todo
            @todo = Todo.includes(:project).find(params[:id])
        end

        def todo_params
            params.require(:todo).permit(:title, :project_id, :completed)
        end
end
