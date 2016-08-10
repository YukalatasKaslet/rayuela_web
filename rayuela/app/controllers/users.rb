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