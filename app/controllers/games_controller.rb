class GamesController < WebsocketRails::BaseController
  def create
  end
  def update
    broadcast_message 'games.update', message
  end
end
