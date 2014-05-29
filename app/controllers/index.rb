get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/login' do

  erb :login
end

get '/signup' do

  erb :signup
end

get '/logout' do
  session.clear
  redirect '/'
end
