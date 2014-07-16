class GamesController < WebsocketRails::BaseController
  def create
    binding.pry
    # broadcast_message '
  end
  def update
    broadcast_message 'games.update', message
  end
end
