Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :show] do
      collection do
        get "/exists" => "users#exists" 
      end
    end
    resources :questions, only: [:index, :create, :update, :show, :destroy]
    resources :text_responses, only: [:create, :update, :show, :destroy]
    resources :mult_responses, only: [:create, :update, :show, :destroy]
    resource :session, only: [:create, :new, :destroy]
  end
end
 