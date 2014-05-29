get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/login' do

  erb :login
end

post '/login' do
  p params
  @user = User.find_by_username(params[:login][:username])
  if @user.password_hash == params[:login][:password_hash]
    session[:user_id] = @user.id
  else
    session[:message] = "Login failed"
  end
  redirect '/'
end

get '/signup' do
  erb :signup
end

post '/signup' do
  @user = User.create(params[:signup])
  session[:user_id] = @user.id
  redirect '/'
end

get '/logout' do
  session.clear
  redirect '/'
end
