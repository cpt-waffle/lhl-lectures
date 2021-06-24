## Rails - Namespaces and Nesting Resources


### Nested Resources

In any project, its common to have to have entities that are children of other entities.

for example

```
Owners have many cats
Cat has a single owner


GET /cats (see all cats)
/owner/:owner_id/cats (see cats that belong to that specific owner)
```

So we maybe start thinking... Do we need ANOTHER controller to handle this?
something like Owner_cats_controller? or maybe Cats_owners_controller? 

the answer is no. Rails helps us reuse some of our old controllers by tweaking the logic with
something called `nested resources`

by going into our `config/routes.rb` file and changing up:

```ruby
  resources :cats, only: [:index, :show]
  resources :owners, only: [:show] do
    resources :cats, only: [:show]
  end 
end

```

We now have the following routes:

```
GET    /cats(.:format)          				        cats#index
GET    /cats/:id(.:format)      				        cats#show
GET    /owners/:owner_id/cats/:id     					cats#show
```

The nested route is `/owners/:owner_id/cats/:id(.:format)` Which is still used by the `cats#show`.
(Cats being the controller and action being show)

### Namespace

Just like `nested routing` its common to seperate `controllers` under a specific namespace.
For example, you want to have a namespace `Admin` where owners are logged in and can have extra
views, methods, and/or functionality ( like deleting or making new cats)

To add this:

```ruby
  namespace :admin do
    resources :cats
  end
```

We add this piece of code which creates us the following routes:

```
GET    /admin/cats                  admin/cats#index
POST   /admin/cats                  admin/cats#create
GET    /admin/cats/new              admin/cats#new
GET    /admin/cats/:id/edit         admin/cats#edit
GET    /admin/cats/:id              admin/cats#show
PATCH  /admin/cats/:id              admin/cats#update
PUT    /admin/cats/:id              admin/cats#update
DELETE /admin/cats/:id              admin/cats#destroy
```

We can generate the namespace controller with:

`rails g controller NAMESPACE_NAME/CONTROLLER_NAME`

which will be:

`rails g controller admin/cats`

Will create you a folder with `admin` with `cats` controller.



### Bonus -- Eager Loading


Take the example where we need to print out the cats Owner Name for every cat.

You might do a solution that looks like this.

```ruby
@cats = Cat.all
```

```erb
<% @cats.each do |cat|
  <%= cat.owner.name %> 
<% end %>
```

Which will work but it will not perform well.

The problem that `Cat.all` is a query
and every `cat.owner` is a query as well.

So how many cats you have in that array, will be the exact number of queries you will call upon.

(the N + 1 Query problem!)

Luckly Rails has a fix for this called `Eager Loading`

Simply use:

```ruby
Cat.includes(:owner).all
```

Which will load the cats WITH the users. This will not cause extra query calls because this is a join
with all the data of cats and users.

Active Record lets you eager load any number of associations with a single `Model.find` call by using an array, hash, or a nested hash of array/hash with the includes method. 
