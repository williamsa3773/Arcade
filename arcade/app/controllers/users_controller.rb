class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :set_user, only: [:show, :update, :destory]

  #GET
  def index
    users = User.all
    render json: users
  end
  
  #POST
  def create
    @user = User.create(user_params)
    if @user.valid?
      payload = { user_id: @user.id }
      token = encode(payload)
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :not_acceptable
    end
  end

  private
  def set_user
    @user = User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
