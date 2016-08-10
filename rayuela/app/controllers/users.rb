get '/signup' do
  redirect to ('/')
end

post '/signup' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect to("/users/#{user.id}")
  end
end

get '/users/:id' do
  @user = User.find(params[:id])
  erb :profile
end



get '/login' do 
  erb :login

end

post '/login' do
  user = params[:user]
  p "*" * 50
  p params[:user]
  p user
  user = User.authenticate(user["name"], user["password"])
  if user != nil 
    session[:user_id] = user.id
    redirect to("/users/#{user.id}")
  end

end

get '/logout' do
  session.clear
  redirect to('/')
end