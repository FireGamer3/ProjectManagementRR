class ProjectsController < ApplicationController
  before_action :set_project, only: %i[ show update destroy ]

  # GET /projects
  def index
    @projects = Project.includes(:todo).all
    @projects_with_todos = @projects.map do |record|
      record.attributes.merge(
        'todos' => record.todo
      )
    end
    render json: @projects_with_todos
  end

  # GET /projects/1
  def show
    @project_with_todos = @project.attributes.merge(
        'todos' => @project.todo
      )
    render json: @project_with_todos
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.todo.destroy
    @project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.includes(:todo).find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:title, :completed)
    end
end
