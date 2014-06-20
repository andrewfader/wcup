WebsocketRails::EventMap.describe do
  namespace :games do
    subscribe :create, 'games#create'
    subscribe :update, 'games#update'
  end
end
